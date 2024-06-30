---
layout: "../layouts/Layout.astro"
title: "Rehype Pretty Codeのサンプル"
---

```xml showLineNumbers /feGaussianBlur/ /feMergeNode/1 /SourceGraphic/
<svg width="250" height="250" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="box-shadow">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <rect fill="#D2E0FB" filter="url(#box-shadow)" x="25" y="25" width="200" height="200" />
</svg>
```

1. `feGaussianBlur{:.entity.name.tag}`で、ぼかしを作成します。
2. `feMergeNode{:.entity.name.tag}`の`in{:.entity.other.attribute-name}`属性は、省略すると直前のフィルタの出力（ここでは、`feGaussianBlur{:.entity.name.tag}`の結果）になります。
3. `SourceGraphic{:.string}` は、フィルタ適用前の元の画像（ここでは、`rect{:.entity.name.tag}`要素の描画結果）を表します。
