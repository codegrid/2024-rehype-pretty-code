# 2024-rehype-pretty-code

[Rehype Pretty Code](https://github.com/rehype-pretty/rehype-pretty-code)に関するCodeGrid連載のデモコードです。

Rehype Pretty Codeを実際にAstroプロジェクトに導入し、Markdownページでのコードの表示をカスタマイズする例を示しています。

## 各ブランチについて

作業段階ごとにブランチを分けて掲載しています。

### main

Rehype Pretty Codeはまだ導入していない状態のサンプルAstroプロジェクトです。

- [ブランチへのリンク](https://github.com/codegrid/2024-rehype-pretty-code)

### demo-1-default-view

Rehype Pretty Codeを導入し、オプション指定やスタイル追加などのカスタマイズを行う前の状態です。

- [ブランチへのリンク](https://github.com/codegrid/2024-rehype-pretty-code/tree/demo-1-default-view)
- [前段階からの差分](https://github.com/codegrid/2024-rehype-pretty-code/compare/main...demo-1-default-view)

### demo-2-styling

コードブロックに基本的なスタイルを当てた状態です。

- [ブランチへのリンク](https://github.com/codegrid/2024-rehype-pretty-code/tree/demo-2-styling)
- [前段階からの差分](https://github.com/codegrid/2024-rehype-pretty-code/compare/demo-1-default-view...demo-2-styling)

## 動作確認方法

### 基本的なコマンド

- 初めて実行する際は、`npm i`で依存ライブラリをインストール
- 表示確認をする際は、`npm run dev`で開発サーバーを起動

### ページをカスタマイズしたい場合

`src/pages`配下にある`.md`ファイルを編集してください。

### スタイルをカスタマイズしたい場合

`src/styles`配下にある`.css`ファイルを編集してください。

新規CSSファイルを追加する場合は、

1. `src/styles`配下に設置
2. `src/layouts/Layout.astro`に`import`文を追加

## 備考：Astroについて

このAstroプロジェクトは、次のコマンドによって作成されました。

```sh
npm create astro@latest -- --template minimal
```

Astroについての詳細は、次のリンクを参考にしてください。

- [公式ドキュメント：Astro Docs](https://docs.astro.build/ja/getting-started/)
- [CodeGrid連載：今すぐ始めるAstro入門](https://www.codegrid.net/series/2022-astro/)
