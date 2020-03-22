---
title: import Vue from 'vue'の意味を研究して、分かってきたもの
date: 2020-01-12
sidebar: 'auto'
categories:
  - technology
  - frontend
sticky: 1
tags:
  - Vue.jsg
  - Node.js
  - Japanese
publish: true
prev: false
next: 0010-import-vue-from-vue
---

## import Vue from 'vue'はなぜ使えるか？

Vuejs の開発の際、よく最初に出てくるこれ

```js{1}
import Vue from 'vue';
```

下のような相対パスなどはまだわかりやすいけど、

```js
import Example from './Example.vue';
```

`vue`はなず`import`できるのか、みんな様こんな疑問はないのか。
もしかして俺一人の疑問かも 😣

少し研究してきたことをまとめてみた。

## import とは

Javascript のモジュールシステムです。他のファイルを使いたい時、`require` function で他のファイルの内容を引用する。
`es6`を使っている時、`import`を`require`にコンパイルする。
だから、実際に実行するコードは以下。

```js
import Vue from 'vue';
⬇️
const Vue = require('vue')
```

## nodejs 引用ルール

実は、nodejs の中に、`require`を使う時に、`require.reslove` function を使ってファイルのパスを探している。この function は優先順位は以下になる。
`require(X) from module at path Y` 1.もし`X`はコアのパッケージかどうか、普段の`path`などみたいは直接引用される。ではなければ、次へ。 2.もし`X`は`/`から始めれば、`Y`のパスは OS の`root`と設定。ではなければ、次へ。 3.もし`X`は`./`,`/`,`../`から始めれば、`(Y + X)`ファイルかディレクトリ引用。ではなければ、次へ。 4.`node_modules`フォルダの中に、見つかる！

## node_modules にある vue

`node_modules`に確かに`vue`というフォルダは存在しているが、`new Vue()`などの操作の時は、Js の Object として使っている。では、なぜか！
真の犯人まではもう少し 🎭❗️
`npm`のパッケージとして、内部の出力はまたルールがある！
まずは、`node_modules/vue`のディレクトリツリーを見てみる。

```
├── LICENSE
├── README.md
├── dist
├── package.json
├── src
└── types
```

ルールは以下になる。 1.`package.json`に`main`が定義されたら、`main`に入り口を探す。 2.`package.json`がなければ、`index.js`か`index.node`を読む。 3.どちらもなければ、`Error: Cannot find module 'some-library'`を投げる。

では、`node_modules/vue/packeage.json`こう書いてある ❗️

```js
  ...
  "main": "dist/vue.runtime.common.js",
  ...
```

ではでは、だんだん明らかになってきた ❗️

## 本当にいつも`import`したものは...

```js
import vue from 'vue';
// 実は、これに変換する
const vue = require('./node_modules/vue/dist/vue.runtime.common.js');
```

その内容は

```js
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./vue.runtime.common.prod.js');
} else {
  module.exports = require('./vue.runtime.common.dev.js');
}
```

これは普段`npm`のスクリプトにある`NODE_ENV=development`を読んで、実行環境に応じて違う`vue`インスタンスの`export`ができるようになった 💥

今回の`import`ルールや他にも今回出てなかったルールの詳細は[nodejs](https://nodejs.org/api/modules.html#modules_all_together)のドキュメントに 🤓
