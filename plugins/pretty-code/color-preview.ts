import type { LineElement } from 'rehype-pretty-code'
import type { Element } from 'hast'

const createColorPreviewElement = (color: string): Element => ({
  type: 'element',
  tagName: 'span',
  properties: {
    'data-color-preview': color,
    style: `--preview-color: ${color};`,
  },
  children: [{ type: 'text', value: '' }], // hastのElement型にはchildrenが必須
})

export const addColorPreview = (lineElement: LineElement) => {
  // WIP：これから実装する
}
