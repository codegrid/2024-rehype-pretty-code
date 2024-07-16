import type { LineElement } from 'rehype-pretty-code'
import type { Element, Text } from 'hast'
import { toString } from 'hast-util-to-string'
import { getHtmlColors } from './colors-regex'

interface TextWithRange {
  text: string // テキスト
  start: number // テキストの開始位置
  end: number // テキストの終了位置
}

const createColorPreviewElement = (color: string): Element => ({
  type: 'element',
  tagName: 'span',
  properties: {
    'data-color-preview': color,
    style: `--preview-color: ${color};`,
  },
  children: [{ type: 'text', value: '' }], // hastのElement型にはchildrenが必須
})

const createText = (text: string): Text => ({
  type: 'text',
  value: text,
})

export const addColorPreview = (lineElement: LineElement) => {
  // 行を描画する要素の子要素は、各トークンを描画する要素
  const tokenElements = lineElement.children

  // 各トークンの文字列と、その文字列が行全体のどこからどこまでの範囲にあるかを集計
  const tokens = tokenElements.reduce<TextWithRange[]>(
    (prevAll, tokenElement) => {
      // hast要素からテキストを取得
      const text = toString(tokenElement)
      // ここまで集計したトークンのうち、最後のトークンを取得
      const prev = prevAll[prevAll.length - 1]
      // まだ集計したトークンがない場合は0から開始
      // そうでない場合は、前のトークンのendから1文字読み進める
      const start = prev ? prev.end + 1 : 0
      // startからtextの文字数分読み進めたものがend
      const end = start + text.length - 1
      // 集計済みトークンに追加
      return [...prevAll, { text, start, end }]
    },
    []
  )

  // 各トークンの文字列を連結して、行全体の文字列を取得
  const lineText = tokens.map(({ text }) => text).join('')

  // 行全体の文字列から色コードを抽出
  const colors = getHtmlColors(lineText)

  // 色コードが見つからなかった場合は何もしない
  if (colors.length === 0) return

  for (const color of colors) {
    // tokenが色コードcolor.textを構成する最初のトークンかどうかを判定する関数
    const isColorStartToken = (token: TextWithRange, color: TextWithRange) => {
      return color.start >= token.start && color.start <= token.end
    }

    // 色コードcolor.textを構成する最初のトークンのインデックス
    const colorStartTokenIndex = tokens.findIndex((token) =>
      isColorStartToken(token, color)
    )
    if (colorStartTokenIndex === -1) continue

    // 色コードcolor.textを構成する最初のトークン
    const colorStartToken = tokens[colorStartTokenIndex]
    // そのトークンを描画する要素に対応するhastオブジェクト
    const colorStartElement = tokenElements[colorStartTokenIndex]

    // 最初のトークン内に色コード全体が含まれているかどうか
    const isContained = color.end <= colorStartToken.end

    if (isContained) {
      // --- 色コードの全体が1つのトークン内にある場合
      // 色コードを構成する最初の要素を、次の複数の要素に置換する

      const beforeText = colorStartToken.text.slice(
        0,
        color.start - colorStartToken.start
      )
      const afterText = colorStartToken.text.slice(
        color.end + 1 - colorStartToken.start
      )

      const newElements = [
        // 色コードの前のテキストを描画する要素
        {
          ...colorStartElement, // すでに指定されているstyle属性などをコピー
          children: [createText(beforeText)],
        },
        // 色プレビューと色コードを描画する要素
        {
          ...colorStartElement,
          children: [
            createColorPreviewElement(color.text), // 色プレビュー
            createText(color.text), // 色コード
          ],
        },
        // 色コードの後のテキストを描画する要素
        {
          ...colorStartElement,
          children: [createText(afterText)],
        },
      ]

      // colorStartElementを削除し、その位置にnewElementsを追加する
      tokenElements.splice(colorStartTokenIndex, 1, ...newElements)
    } else {
      // --- 色コードが複数トークンで構成されている場合
      // 色コードを構成する最初の要素を、次の複数の要素に置換する

      const newElements = [
        // 色コードの前に空白があれば、それを保持するための要素
        {
          ...colorStartElement,
          children: [
            createText(colorStartToken.text.startsWith(' ') ? ' ' : ''),
          ],
        },
        // 色プレビューを描画する要素
        {
          ...colorStartElement,
          children: [createColorPreviewElement(color.text)],
        },
        // 色コードを構成する最初の要素
        {
          ...colorStartElement,
          children: [createText(colorStartToken.text.trim())], // すでに空白は描画しているのでtrim
        },
      ]

      // colorStartElementを削除し、その位置にnewElementsを追加する
      tokenElements.splice(colorStartTokenIndex, 1, ...newElements)
    }
  }
}
