// 各正規表現は、以下のGistを参考にしている：
// - https://gist.github.com/olmokramer/82ccce673f86db7cda5e?permalink_comment_id=2802722
//
// VS CodeのComment tagged templates拡張機能を使うと、/* regexp */つきのテンプレートリテラルが正規表現としてシンタックスハイライトされる
// - https://marketplace.visualstudio.com/items?itemName=bierner.comment-tagged-templates
//
// 有効な正規表現を作成するためには、\bや\sなどのエスケープ文字をここで処理せずそのままRegExpコンストラクタに渡す必要がある
// そのためには\bを\\bとエスケープすればよいが、String.rawを使うことで同様の効果を得られる
// - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Template_literals
//
const PATTERN_HEX = String.raw/* regexp */ `#([a-f0-9]{6}|[a-f0-9]{3})\b`
const PATTERN_HEXA = String.raw/* regexp */ `#([a-f0-9]{8}|[a-f0-9]{4})\b`
const PATTERN_RGB = String.raw/* regexp */ `rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)`
const PATTERN_RGBA = String.raw/* regexp */ `rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d*(?:\.\d+)?)\)`
const PATTERN_HSL = String.raw/* regexp */ `hsl\(\s*(\d+)\s*,\s*(\d*(?:\.\d+)?%)\s*,\s*(\d*(?:\.\d+)?%)\)`
const PATTERN_HSLA = String.raw/* regexp */ `hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*(\d*(?:\.\d+)?)\)`
const PATTERN_COLOR_NAME = String.raw/* regexp */ `black|silver|gray|whitesmoke|maroon|red|purple|fuchsia|green|lime|olivedrab|yellow|navy|blue|teal|aquamarine|orange|aliceblue|antiquewhite|aqua|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|goldenrod|gold|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavenderblush|lavender|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olive|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato|turquoise|violet|wheat|white|yellowgreen|rebeccapurple`

// 上で定義したPATTERN_*をまとめて1つの正規表現にする
const REGEX_COLOR = new RegExp(
  `${[
    PATTERN_HEX,
    PATTERN_HEXA,
    PATTERN_RGB,
    PATTERN_RGBA,
    PATTERN_HSL,
    PATTERN_HSLA,
    PATTERN_COLOR_NAME,
  ]
    .map((s) => `(${s})`)
    .join('|')}`,
  'gi'
)

interface TextWithRange {
  text: string
  start: number
  end: number
}
export const getHtmlColors = (str: string): TextWithRange[] => {
  return [...str.matchAll(REGEX_COLOR)].map((result) => ({
    text: result[0],
    start: result.index,
    end: result.index + result[0].length - 1,
  }))
}
