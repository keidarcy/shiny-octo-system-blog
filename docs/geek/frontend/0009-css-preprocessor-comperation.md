---
title: 主流のCSSプリプロセッサ→Sass, Less, Stylusの比較
date: 2019-12-15
sidebar: 'auto'
categories:
  - technology
  - frontend
tags:
  - css
  - Japanese
publish: true
prev: 0009-css-preprocessor-comperation
next: false
---

## CSS プリプロセッサーとは

独自の言語(変量・ネストなど利用できる言語)で書かれたスタイル構文を CSS 構文へと変換してくれるツール。
例：[Sass](https://sass-lang.com/)、[Less](http://lesscss.org/)、[Stylus](stylus-lang.com)

##主な記法 Basic

|        | Sass        | Less  | Stylus        |
| ------ | ----------- | ----- | ------------- |
| 拡張子 | .sass/.scss | .less | .styl/.stylus |

- Sass は拡張子は.sass と.scss があって、主な記法も分かれている。
- .scss と.less は標準 CSS の記法でも構わない。

```scss
/* style.scss or style.less */
h1 {
  color: #0982c1;
}
```

Sass は波括弧{}や行末セミコロン;を省略しないといけない。

```sass
/* style.sass */
h1
  color: #0982c1
```

Stylus の文法は多様で、波括弧{}や行末セミコロン;やコロン:全部省略することもできて、何も省略しないこともできる

```sass
/* style.styl */
h1 {
  color: #0982C1;
}

/* omit brackets */
h1
  color: #0982C1;

/* omit colons and semi-colons */
h1
  color #0982C1
```

同じ.styl の中、違う記法でもエラーではない

```scss
h1 {
  color #0982c1
}
h2
  font-size: 1.2em
```

##変数　 Variables
Sass の変数は必ず\$(PHP と同じ)
以下は特に強調しなければ Sass は.scss の記法にする 👻

```scss
$mainColor: #0982c1;
$siteWidth: 1024px;
$borderStyle: dotted;

body {
  color: $mainColor;
  border: 1px $borderStyle $mainColor;
  max-width: $siteWidth;
}
```

Less の変数は@から始まる

```scss
@mainColor: #0982c1;
@siteWidth: 1024px;
@borderStyle: dotted;

body {
  color: @mainColor;
  border: 1px @borderStyle @mainColor;
  max-width: @siteWidth;
}
```

Stylus の変数は符号なし(Python と同じ)

```scss
mainColor = #0982c1
siteWidth = 1024px
$borderStyle = dotted

body
  color mainColor
  border 1px $borderStyle mainColor
  max-width siteWidth
```

以上の三つの書き方は、同じ CSS へコンパイル！

```scss
body {
  color: #0982c1;
  border: 1px dotted #0982c1;
  max-width: 1024px;
}
```

他のプログランミング言語のように、変数を利用できるのは CSS プリプロセッサーの一位の便利性だと思う。
色など多用する値であれば便利！

##ネスト Nesting

```scss
section {
  margin: 10px;
}
section nav {
  height: 25px;
}
section nav a {
  color: #0982c1;
}
section nav a:hover {
  text-decoration: underline;
}
```

何回もコピペ(T . T)
CSS プリプロセッサ使えば

```scss

section {
  margin: 10px;

  nav {
    height: 25px;

    a {
      color: #0982C1;

      &amp;:hover {
        text-decoration: underline;
      }
    }
  }
}
```

ネストの関係が一目瞭然 😼

## mixin

Mixin に詳しくない方は、関数と理解すれば、わかりやすいと思う！
Sass の例

```scss
/* Sass mixin error with (optional) argument $borderWidth which defaults to 2px if not specified */
@mixin error($borderWidth: 2px) {
  border: $borderWidth solid #F00;
  color: #F00;
}

.generic-error {
  padding: 20px;
  margin: 4px;
  @ include error(); /* Applies styles from mixin error */
}
.login-error {
  left: 12px;
  position: absolute;
  top: 20px;
  @ include error(5px); /* Applies styles from mixin error with argument $borderWidth equal to 5px*/
}
```

Less の例

```scss
/* LESS mixin error with (optional) argument @borderWidth which defaults to 2px if not specified */
.error(@borderWidth: 2px) {
  border: @borderWidth solid #F00;
  color: #F00;
}

.generic-error {
  padding: 20px;
  margin: 4px;
  .error(); /* Applies styles from mixin error */
}
.login-error {
  left: 12px;
  position: absolute;
  top: 20px;
  .error(5px); /* Applies styles from mixin error with argument @borderWidth equal to 5px */
}
```

Stylus の例

```scss
/* Stylus mixin error with (optional) argument borderWidth which defaults to 2px if not specified */
error(borderWidth= 2px) {
  border: borderWidth solid #F00;
  color: #F00;
}

.generic-error {
  padding: 20px;
  margin: 4px;
  error(); /* Applies styles from mixin error */
}
.login-error {
  left: 12px;
  position: absolute;
  top: 20px;
  error(5px); /* Applies styles from mixin error with argument borderWidth equal to 5px */
}
```

以上の三つの Mixin の例は以下の CSS へコンパイル

```scss
.generic-error {
  padding: 20px;
  margin: 4px;
  border: 2px solid #f00;
  color: #f00;
}
.login-error {
  left: 12px;
  position: absolute;
  top: 20px;
  border: 5px solid #f00;
  color: #f00;
}
```

## 継承　 Extend/Inheritance

多数の element は同じ style を適用する際、よくこうする

```scss
p,
ul,
ol {
  /* styles here */
}
```

Sass と Stylus は

```scss
.block {
  margin: 10px 5px;
  padding: 2px;
}

p {
  @extend .block; /* Inherit styles from '.block' */
  border: 1px solid #eee;
}
ul,
ol {
  @extend .block; /* Inherit styles from '.block' */
  color: #333;
  text-transform: uppercase;
}
```

Less は

```scss
.block {
  margin: 10px 5px;
  padding: 2px;
}

p {
  .block; /* Inherit styles from '.block' */
  border: 1px solid #EEE;
}
ul, ol {
  .block; /* Inherit styles from '.block' */
  color: #333;
  text-transform: uppercase;
}
```

どちらも以下の CSS へコンパイル

```scss
.block {
  margin: 10px 5px;
  padding: 2px;
}
p {
  margin: 10px 5px;
  padding: 2px;
  border: 1px solid #eee;
}
ul,
ol {
  margin: 10px 5px;
  padding: 2px;
  color: #333;
  text-transform: uppercase;
}
```

##オペレーター　 Operators
Sass の例

```scss
.container {
  width: 100%;
}

article[role='main'] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role='complementary'] {
  float: right;
  width: 300px / 960px * 100%;
}
```

他も同じで、単純にオペレーターが使える
コンパイル後は:

```scss
.container {
  width: 100%;
}

article[role='main'] {
  float: left;
  width: 62.5%;
}

aside[role='complementary'] {
  float: right;
  width: 31.25%;
}
```

##ブラウザの違いに関する

Sass

```scss
@mixin border-radius($values) {
  -webkit-border-radius: $values;
     -moz-border-radius: $values;
          border-radius: $values;
}

div {
  @ include border-radius(10px);
}
```

Less

```scss
.border-radius(@values) {
  -webkit-border-radius: @values;
     -moz-border-radius: @values;
          border-radius: @values;
}

div {
  .border-radius(10px);
}
```

Stylus

```scss
border-radius(values) {
  -webkit-border-radius: values;
     -moz-border-radius: values;
          border-radius: values;
}

div {
  border-radius(10px);
}

```

コンパイル後

```scss
div {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
}
```

##色の処理に関する関数　 color functions

Sass:

```scss
lighten($color, 10%); /* returns a color 10% lighter than $color */
darken($color, 10%);  /* returns a color 10% darker than $color */

saturate($color, 10%);   /* returns a color 10% more saturated than $color */
desaturate($color, 10%); /* returns a color 10% less saturated than $color */

grayscale($color);  /* returns grayscale of $color */
complement($color); /* returns complement color of $color */
invert($color);     /* returns inverted color of $color */

mix($color1, $color2, 50%); /* mix $color1 with $color2 with a weight of 50% */
```

以上は簡単な例として、取り上げたが、詳細は[Sass Documentation](https://sass-lang.com/guide#example-6-scss).

次は Sass の実例

```scss
$color: #0982c1;

h1 {
  background: $color;
  border: 3px solid darken($color, 50%);
}
```

Less:

```scss
lighten(@color, 10%); /* returns a color 10% lighter than @color */
darken(@color, 10%);  /* returns a color 10% darker than @color */

saturate(@color, 10%);   /* returns a color 10% more saturated than @color */
desaturate(@color, 10%); /* returns a color 10% less saturated than @color */

spin(@color, 10);  /* returns a color with a 10 degree larger in hue than @color */
spin(@color, -10); /* returns a color with a 10 degree smaller hue than @color */

mix(@color1, @color2); /* return a mix of @color1 and @color2 */
```

詳しくは[LESS Documentation](http://lesscss.org/#-color-functions).

実例

```scss
@color: #0982C1;

h1 {
  background: @color;
  border: 3px solid darken(@color, 50%);
}
```

Stylus:

```scss
lighten(color, 10%); /* returns a color 10% lighter than 'color' */
darken(color, 10%);  /* returns a color 10% darker than 'color' */

saturate(color, 10%);   /* returns a color 10% more saturated than 'color' */
desaturate(color, 10%); /* returns a color 10% less saturated than 'color' */
```

詳しくは[Stylus Documentation](http://stylus-lang.com/docs/bifs.html).

実例

```scss
color = #0982C1

h1
  background color
  border 3px solid darken(color, 50%)
```

##運用の例ー>3D テキスト　 3D Text

Sass:

```scss
@mixin text3d($color) {
  color: $color;
  text-shadow: 1px 1px 0px darken($color, 5%),
               2px 2px 0px darken($color, 10%),
               3px 3px 0px darken($color, 15%),
               4px 4px 0px darken($color, 20%),
               4px 4px 2px #000;
}

h1 {
  font-size: 32pt;
  @ include text3d(#0982c1);
}
```

Less:

```scss
.text3d(@color) {
  color: @color;
  text-shadow: 1px 1px 0px darken(@color, 5%),
               2px 2px 0px darken(@color, 10%),
               3px 3px 0px darken(@color, 15%),
               4px 4px 0px darken(@color, 20%),
               4px 4px 2px #000;
}

span {
  font-size: 32pt;
  .text3d(#0982c1);
}
```

Stylus:

```scss
text3d(color)
  color: color
  text-shadow: 1px 1px 0px darken(color, 5%), 2px 2px 0px darken(color, 10%), 3px 3px 0px darken(color, 15%), 4px 4px 0px darken(color, 20%), 4px 4px 2px #000
span
  font-size: 32pt
  text3d(#0982c1)
```

Css:

```scss
span {
  font-size: 32pt;
  color: #0982c1;
  text-shadow: 1px 1px 0px #097bb7, 2px 2px 0px #0875ae, 3px 3px 0px #086fa4, 4px
      4px 0px #07689a, 4px 4px 2px #000;
}
```

##コメントアウト comments
三つの CSS プリプロセッサーも CSS と同様で

- 一行(e.g. //comment)
- 複数行(e.g. /_ comment _/)
  対応している。

##まとめ
以上の三つの CSS プリプロセッサー(Sass, LESS, Stylus)どちらも独自の記法で同じことを記述。

もし日常にプリプロセッサーを使わずに CSS を書いていたら、任意にピックアップして使ってみることがお勧めです。

[英語の原文](https://code.tutsplus.com/tutorials/sass-vs-less-vs-stylus-preprocessor-shootout--net-24320)

##最後に
CSS プリプロセッサー使用歴がなければ、最初は Scss が CSS と全く同じく書けるので、入門に使ってみてもいいかもしれない。だんだん慣れた後、Sass か Stylus に移行もありでしょう。

最近 Vue.js の.vue ファイルに Css 書いてるので、どちらも非常に便利！

```vuejs

<style lang="scss" scoped>
/* example */
</style>
```

```vuejs
<style lang="sass" scoped>
/* example */
</style>
```

```vuejs
<style lang="less" scoped>
/* example */
</style>
```

```vuejs
<style lang="stylus" scoped>
/* example */
</style>
```

本文はあくまでも何年前の英文の翻訳なので、記述が間違ったとか、日本語がおかしいとか、指摘していただくと幸い。
