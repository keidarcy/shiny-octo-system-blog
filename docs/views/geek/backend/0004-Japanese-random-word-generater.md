---
title: Random Japanese generater PHP package
date: 2020-02-20
sidebar: 'auto'
categories:
  - geek
  - backend
tags:
  - PHP
  - Japanese
publish: true
prev: 0003-how-to-Macroable-everything
next: 0005-laravel7-upgrade-guide
---

::: tip

- PHP のランダムジェネレータは[fzaninotto/Faker](https://github.com/fzaninotto/Faker)は有名だと思いますが、名前などの日本語バージョンもあります。
- でも、単語、住所、メールなども色々欲しい！
- 無かったので、`fzaninotto/Faker`を利用して、作りました。

:::

<!-- more -->

➡︎ [Github⛩](https://github.com/keidarcy/faker-japanese)

## インストール

コンポーザー利用、インストール

```bash
composer require xyyo/faker-japanese
```

## 使い方(ほぼ全ての例)

- 元々日本語特定用の`Faker\Factory::create('ja_JP')`は不要
- 全てのロジックは自分のプロバイダーに

以下の例をご覧ください。
::: details

```php
<?php
// psr-4 クラスのオートロード
require_once 'vendor/autoload.php';

$faker = Faker\Factory::create();

$faker->addProvider(new Faker\Provider\Japanese($faker));

// テキスト関連
$faker->color => 薄橙
$faker->kanji => 悠
$faker->word => 給料
$faker->idiom => 画竜点睛
$faker->pokemon => スリーパー
$faker->realText => 大きな望遠鏡ぼうえんきょうで銀河ぎんがをよっく調しらべると銀河ぎんがはだいたい何でしょう。

// インターネット関連
$faker->domainName => saito.org
$faker->url => www.hiroshi.com
$faker->email => hirokawa@yahoo.co.jp
$faker->userFirstName => osamu
$faker->userLastName => yamada
$faker->userName => yamaguchi chiyo

// アドレス関連
$faker->bank => 北九州銀行
$faker->postcode => 869-5565
$faker->country => 合衆国領有小離島
$faker->prefecture => 三重県
$faker->ward => 西区
$faker->city => 松本市
$faker->streetAddress => 西之園町3-7-3
$faker->secondaryAddress => 吉田コーポ104号
$faker->address => 佐賀県山口市南区中村町4-5-9
$faker->addressWithCode => 304-6851  奈良県田中市南区佐藤町5-4-3 若松ハイツ105号

// 人間関連
$faker->phone => 00332-8-0234
$faker->company => 有限会社佐々木木材
$faker->lastName => 渡辺
$faker->firstName('male') => 太一
$faker->firstName('female') => 明美
$faker->name('male') => 松本 涼平
$faker->name('female') => 村山 春香
$faker->lastKanaName => ツダ
$faker->firstKanaName('male') => ヨウスケ
$faker->firstKanaName('female') => モモコ
$faker->kanaName('male') => ナカジマ ミツル
$faker->kanaName('female') => ナカムラ ハルカ
```

:::

#### Laravel の Factory の使い方

```php
// UserFactory.php
$factory->define(User::class, function (Faker $faker) {
    // add this simple line here
    $faker->addProvider(new \Faker\Provider\Japanese($faker));
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
.....

```

##### tinker ですぐ確認しましょう !

```php
Psy Shell v0.9.12 (PHP 7.3.13 — cli) by Justin Hileman
>>> factory(App\User::class,2)->create()
=> Illuminate\Database\Eloquent\Collection {#3330
     all: [
       App\User {#3326
         name: "宮沢 直人",
         email: "satomi.xidao@example.org",
         email_verified_at: "2020-02-17 12:21:38",
         updated_at: "2020-02-17 12:21:38",
         created_at: "2020-02-17 12:21:38",
         id: 5,
       },
       App\User {#3335
         name: "大垣 智也",
         email: "tsubasa08@example.org",
         email_verified_at: "2020-02-17 12:21:38",
         updated_at: "2020-02-17 12:21:38",
         created_at: "2020-02-17 12:21:38",
         id: 7,
       },
     ],
   }

```
