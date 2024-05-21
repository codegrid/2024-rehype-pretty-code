---
layout: "../layouts/Layout.astro"
title: "Rehype Pretty Codeのサンプル"
---

`Hello World!`という文字列を、`console.log(){:js}`で表示してみましょう。

```js
console.log("Hello World!")
```

```css
.shadow {
  /* offset-x | offset-y | blur-radius | color */
  box-shadow: 4px 6px 8px black;

  width: 200px;
  height: 200px;
  background-color: #d2e0fb;
}
```

```html showLineNumbers
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

```html showLineNumbers{3}
<filter id="box-shadow">
  <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
  <feMerge>
    <feMergeNode />
    <feMergeNode in="SourceGraphic" />
  </feMerge>
</filter>
```