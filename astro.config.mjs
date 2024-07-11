import { defineConfig } from 'astro/config'
// rehype-pretty-codeからrehypeプラグインをimport
import rehypePrettyCode from 'rehype-pretty-code'
import { toString } from 'hast-util-to-string'

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  defaultLang: 'text',
  theme: {
    dark: 'slack-dark',
    light: 'slack-ochin',
  },
  onVisitLine(lineElement) {
    // 各トークンを描画する要素の配列
    const tokenElements = lineElement.children
    // 各要素のテキストを取得
    const tokenStrings = tokenElements.map((el) => toString(el))
    // ターミナルに表示
    console.log(tokenStrings)
  },
}

export default defineConfig(
  /** @type {import('astro').AstroUserConfig} */ {
    markdown: {
      // Astroビルドインのシンタックスハイライト機能を無効化
      syntaxHighlight: false,
      // 代わりにRehype Pretty Codeを使う
      rehypePlugins: [
        // [plugin, option] という書式
        [rehypePrettyCode, prettyCodeOptions],
      ],
    },
  }
)
