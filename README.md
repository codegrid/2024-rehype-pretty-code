# 2024-rehype-pretty-code

CodeGrid連載[Rehype Pretty Codeを使いこなす](https://www.codegrid.net/series/2024-rehype-pretty-code/)のデモコードです。

[Rehype Pretty Code](https://github.com/rehype-pretty/rehype-pretty-code)を実際にAstroプロジェクトに導入し、Markdownページでのコードの表示をカスタマイズする例を示しています。

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

### demo-3-inline-code

インラインコード表示に必要なスタイルやオプションを指定した状態です。

- [ブランチへのリンク](https://github.com/codegrid/2024-rehype-pretty-code/tree/demo-3-inline-code)
- [前段階からの差分](https://github.com/codegrid/2024-rehype-pretty-code/compare/demo-2-styling...demo-3-inline-code)

### demo-4-theme-light-and-dark

配色テーマをオプションで指定し、ライトモードとダークモードに応じた表示を実現した状態です。

- [ブランチへのリンク](https://github.com/codegrid/2024-rehype-pretty-code/tree/demo-4-theme-light-and-dark)
- [前段階からの差分](https://github.com/codegrid/2024-rehype-pretty-code/compare/demo-3-inline-code...demo-4-theme-light-and-dark)

### demo-5-line-number

行番号の表示を実現するサンプルです。

- [ブランチへのリンク](https://github.com/codegrid/2024-rehype-pretty-code/tree/demo-5-line-number)
- [前段階からの差分](https://github.com/codegrid/2024-rehype-pretty-code/compare/demo-4-theme-light-and-dark...demo-5-line-number)

### demo-6-line-highlight

特定の行のハイライト表示を実現するサンプルです。

- [ブランチへのリンク](https://github.com/codegrid/2024-rehype-pretty-code/tree/demo-6-line-highlight)
- [前段階からの差分](https://github.com/codegrid/2024-rehype-pretty-code/compare/demo-5-line-number...demo-6-line-highlight)

### demo-7-keyword-highlight

特定の変数が使われている箇所をハイライト表示するサンプルです。

- [ブランチへのリンク](https://github.com/codegrid/2024-rehype-pretty-code/tree/demo-7-keyword-highlight)
- [前段階からの差分](https://github.com/codegrid/2024-rehype-pretty-code/compare/demo-6-line-highlight...demo-7-keyword-highlight)

### demo-8-keyword-description

ハイライト箇所に番号を表示し、コードブロックの下に各番号に対応する解説を添えたコンテンツを実現するサンプルです。

- [ブランチへのリンク](https://github.com/codegrid/2024-rehype-pretty-code/tree/demo-8-keyword-description)
- [前段階からの差分](https://github.com/codegrid/2024-rehype-pretty-code/compare/demo-7-keyword-highlight...demo-8-keyword-description)

### demo-9-inline-token

単一のトークンを表示するインラインコードにトークンIDを指定することで、正確なシンタックスハイライトを適用したサンプルです。

- [ブランチへのリンク](https://github.com/codegrid/2024-rehype-pretty-code/tree/demo-9-inline-token)
- [前段階からの差分](https://github.com/codegrid/2024-rehype-pretty-code/compare/demo-8-keyword-description...demo-9-inline-token)

### demo-10-show-language

コードブロックに言語名を表示したサンプルです。

- [ブランチへのリンク](https://github.com/codegrid/2024-rehype-pretty-code/tree/demo-10-show-language)
- [前段階からの差分](https://github.com/codegrid/2024-rehype-pretty-code/compare/demo-9-inline-token...demo-10-show-language)

### demo-11-with-title

タイトル付きのコードブロックを実現するサンプルです。

- [ブランチへのリンク](https://github.com/codegrid/2024-rehype-pretty-code/tree/demo-11-with-title)
- [前段階からの差分](https://github.com/codegrid/2024-rehype-pretty-code/compare/demo-10-show-language...demo-11-with-title)

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
