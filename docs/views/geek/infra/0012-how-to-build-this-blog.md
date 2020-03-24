---
title: yarn deployだけで更新できるブログを構築した！
date: 2020-03-23
sidebar: 'auto'
categories:
  - geek
  - infra
tags:
  - Vuepress
  - Github
  - Japanese
publish: true
prev: 0011-storing-using-secrets-github-action
# next: ../frontend/0009-css-preprocessor-comperation
---

## はじめに

Vuepress, Google Domain, Github Pages, Github Actionsを使ってる、ブログ！

全くvuepressとgithub pages無知機の状態で、ここまでできたのは10時間ぐらい、しかもその中6割りはthemeに対するカスタマイズ。元々の状態でもよろしければ、更に早くデプロイできそうだ。

まずは、[成果物](https://blog.xyyolab.com)💥
![Screenshot 2020-03-23 14.52.46.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/470919/ce2736e5-9fbc-fc85-4a4b-820346a24484.png)

![Screenshot 2020-03-23 14.51.30.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/470919/6b7ad773-f43c-e6ae-1613-f54b8a5027c5.png)

まとめると
 - Vuepressとthemeをダウンロード
 - themeのカスタマイズ
 - 以前書いたものの移行
 - github pages設定、domain設定
 - github actions設定
 - `package.json` script 追加

## Vuepress

元々LaravelとVueで書かれたブログは肥大化すぎで、色々調べて、たどり付いたのはVuepress！

Vuepressの特徴

 - Vueで動く静的ページジェネレーター
 - markdownで書かれたファイルをhtmlに変換

VuejsのEcosystemの一環として、今Vuejsに関するドキュメントは全部Vuepressで作られてるみたい。
[awesome-vuepress](https://github.com/vuepressjs/awesome-vuepress)はたくさんの`plugin`や`theme`載せている。
その中に、気にいったのは、人気一位の[vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/en/)。

## Google DomainとGithub Pages

Google DomainとGithub pagesのcustom domainについて[こちら](https://dev.to/trentyang/how-to-setup-google-domain-for-github-pages-1p58)参考した。

## Github Actions

Github Actionsに関するものたくさんあるし、ここはGithub Pagesにデプロイだけ説明する。

![Screenshot 2020-03-23 13.08.05.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/470919/6d81c510-7f25-a039-5087-f07854d6d75e.png)

~~`a`➡️`an`間違ってる、気づいたのはもう遅いわ😵~~

Githubのsettingから、`ACCESS_TOKEN`を取得
⬇️
上の図のように、`ACCESS_TOKEN`などgithubサーバ上に使いたいものを`Secrets`に保存
⬇️
workflowを書く

`Vussue`というgithub issue連携のコメントサービスも使うことに、`Vussue`のkeyも保存。

```yaml
name: Deploy GitHub Pages

# once pushed to master branch
on:
  push:
    branches:
      - master

# jobs to build and deploy
jobs:
  build-and-deploy-blog-to-github-page:
    # server env: latest Ubuntu
    runs-on: ubuntu-latest
    steps:
      # pull project
      - name: Checkout
        uses: actions/checkout@v2
        with:
          persist-credentials: false

      # Pass Variables
      - name: Pass Variables
        env:
          EXAMPLE: ${{ secrets.THIS_IS_A_EXAMPLE }}
          NOTEXIST: ${{ secrets.NOTEXIST }}
        run: echo 'try to show secret 😉' && echo $EXAMPLE && echo $NOTEXIST

      # build project
      - name: Build
        env:
          VSSUEID: ${{ secrets.VSSUEID }}
          VSSUESECRET: ${{ secrets.VSSUESECRET }}
        run: npm install && npm run build

      # deploy to Github Pages
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          BRANCH: gh-pages
          FOLDER: docs/.vuepress/dist


```

![Screenshot 2020-03-23 13.11.39.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/470919/e72b8478-89cb-6f45-f406-e6938f81e1c7.png)

`Secrets`に保存したものは***になってる！

```js
  vssueConfig: {
    platform: 'github',
    owner: 'xyyolab',
    repo: 'blog',
    clientId: process.env.VSSUEID,
    clientSecret: process.env.VSSUESECRET
  }
```

そして、nodeの`process.env`で使えるようになる。

![Screenshot 2020-03-23 13.36.35.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/470919/0a508150-59e8-948c-4601-b57012db2ed6.png)

コメントも使えるようになった。

## `package.json` script 追加

```sh
#!/usr/bin/env sh
git add .
git commit -m 'deploy'
git push

echo 'https://blog.xyyolab.com'
echo 'https://github.com/xyyolab/blog/actions'
```
最後にgitの操作も`package.json`に`scripts`化して、最終的に`yarn deploy`だけで、新しいもの書いたら、デプロイできるようになっている。


---
### 残念なところ
VuepressとQiitaのmarkdown文法は微秒な違いがある。今後もしQittaも自動デプロイの一部としてやりたいなら、手動で編集しかないかな。


- [Github](https://github.com/xyyolab)
- [ブログ](https://blog.xyyolab.com)
