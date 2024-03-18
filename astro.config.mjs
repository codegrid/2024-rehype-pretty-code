import { defineConfig } from 'astro/config'
// rehype-pretty-codeからrehypeプラグインをimport
import rehypePrettyCode from 'rehype-pretty-code'

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  /** これから追加していく */
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
