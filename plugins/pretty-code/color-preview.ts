import type { LineElement } from 'rehype-pretty-code'
import type { Element, Text } from 'hast'
import { toString } from 'hast-util-to-string'

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
      // hAST要素からテキストを取得
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

  // WIP: 続く…
}
