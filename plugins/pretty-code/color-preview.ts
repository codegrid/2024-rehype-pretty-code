import type { LineElement } from 'rehype-pretty-code'
import type { Element, Text } from 'hast'

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
  // WIP：これから実装する
}
