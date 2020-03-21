---
title: Laravel 7 Upgrade Guide日本語訳
date: 2020-02-20
sidebar: 'auto'
categories:
  - geek
  - backend
tags:
  - PHP
  - Laravel
  - Japanese
publish: true
---

![1_GfmHsC_I5egGyPx1lvXR9Q.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/470919/fa9d54e6-ffd0-4779-9335-6ff93d7027ac.png)

# Laravel 7 系

[Laravel](https://laravel.com/docs/master/releases)公式サイトにより、Laravel 7 のリリースは 2020 年の 3 月 3 日と発表されました 😍

皆さんは 6 系にしましたか？7 系もう目の前ですよ！😳
ただし、7 は LTS(Long-Term Support)じゃなさそうなので、商用なら 6 の方が良いかな。

Laravel 6

- 2021 年 9 月 3 日までのバグ修正
- 2022 年 9 月 3 日までのセキュリティ修正

Laravel 7

- 2020 年 9 月 3 日までのバグ修正
- 2021 年 9 月 3 日までのセキュリティ修正

![Screenshot 2020-02-16 12.37.50.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/470919/dfd0ac07-eddc-ba69-719a-668f9fde8be0.png)

# 現時点 Laravel 7 のインストール方

[packagist](https://packagist.org/packages/laravel/laravel#dev-develop)の Laravel 7.0 すでに`dev-develop`ブランチに更新したので、
![1_VcaiBk0M6oRApRQ1rypIUA.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/470919/2731cccf-632b-8f87-638a-9a499ddeb869.png)

以下のコマンドは xyyo という Laravel アプリが作成できます。

```bash

composer create-project --prefer-dist laravel/laravel xyyo dev-develop
```

インストール完了したら、
🌟7.x だ 🌟
![Screenshot 2020-02-16 17.22.00.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/470919/6ca060f2-c83c-9ca1-0b68-fc9b03498611.png)

7 系と遊びたい方はぜひ！！

変わっているものは、以下に記載されているようにそんなに多くありませんが、5.x 系前半からなど、だんだんキツくなるでしょう。個人プロジェクトは早くアップデートしましょうね。では、早速見てみましょう 🚀

# Upgrade Guide

6.x から 7 へ

## PHP バージョン

- 7.2.5 以上は必須

## Symfony 5 関連のアップグレード

- 影響性　：　高

Laravel7 は Symfony5 系のコンポネートを使用しているので、Symfony5 系の変更によって、変更が必要になってきます。

`App\Exceptions\Handler`クラスの`report`と`render`メソードは`Exception`インスタンスを格納されなくて、インターフェイス`Throwable`のインスタンスを格納します。

```php
// Laravel 6
public function report(Exception $exception);
public function render($request, Exception $exception)
```

⬇︎

```php

// Laravel 7
use Throwable;
public function report(Throwable $exception);
public function render($request, Throwable $exception);
```

コンフィグファイルの`session`の`option`のデフォルト値の変更

```php

// Laravel 6
'secure' => env('SESSION_SECURE_COOKIE', false).
'same_site' => null,
```

⬇︎

```php

// Laravel 7
'secure' => env('SESSION_SECURE_COOKIE', null),
'same_site' => 'lax',
```

## Authentication ー認証

- 影響性　：　高

全ての認証系の scaffolding は`laravel/ui`に移動されました。もし 5 系の`php artisan make:auth`か、6 系`php artisan ui:auth`利用しているなら、`laravel/ui`を`~2.0`にする必要があります。

```bash

composer require laravel/ui "~2.0"
```

> ちなみに、scaffolding のフロント側デフォルトは`vue`使用ですが、パラメータ指定で`Arguments:type ー The preset type (bootstrap, vue, react)`変更することもできます。

## Date Serialization ー日付のシリアライズ化

- 影響性　：　高

Eloquent の`toArray`と`toJson`メソードを使う際、Laravel7 は新たな日付のシリアライズフォーマットを使用します。Laravel7 は日付のシリアライズをする時に、タイムゾン秒の小数部に対応している ISO-8601 に適用される Carbon の`toJson`メソードを使用します。プラス、この変更はより良いフロント側の日付の対応を提供します。

7 系前の日付フォーマット`2019-12-02 20:01:00`は 7 系から`2019-12-02T20:01:00.283041Z`に更新されます。

もし 7 系以前のフォーマットを使用したければ、モデルに`serializeDate`を override してください。

```php

/**
 * Prepare a date for array / JSON serialization.
 *
 * @param  \DateTimeInterface  $date
 * @return string
 */
protected function serializeDate(DateTimeInterface $date)
{
    return $date->format('Y-m-d H:i:s');
}
```

> この変更はモデルレベルの影響しかないです。データベースに保存されているデータに影響しません。

## Blade

### The component Method

- 影響性　：　中

`Blade::component`メソードを`Blade::aliasComponent`に変更したので、使用している場合は変更してください。

### Blade Components & "Blade X"

- 影響性　：　中

Laravel7 は公式的に Blade の"tag components"をサポートします。もし続いて`spatie/laravel-blade-x`パッケージ利用の場合は、`Blade::withoutComponentTags`メソードを使って、Blade の"tag components"を無効にしてください。
もし`spatie/laravel-blade-x`パッケージ使用てなければ、これを無視してよろしいです。
使用している場合は、`withoutComponentTags`メソードを`AppServiceProvider`の`boot`に追加してください。

```php

use Illuminate\Support\Facades\Blade;

Blade::withoutComponentTags();
```

### Factory Types

- 影響性　：　中

7 系から"factory types"機能を削除します。この機能は 2016 年の 10 月からドキュメントに下げられて、もし使っている場合はよりフレキシブルな[factory states](https://laravel.com/docs/master/database-testing#factory-states)機能に移行してください。

## Eloquent

### The addHidden / addVisible Methods

- 影響性　：　低

ドキュメントされていない`addHidden`と`addVisible`メソードが削除されました。使用している場合は`makeHidden`と`makeVisible`を使ってください。

### The booting / booted Methods

- 影響性　：　低

モデルの"boot"の時にロジックを追加するメソード`booting`と`booted`を Eloquent に追加しました。もし同じ名前のメソードを使っている場合は名前を変更してください。

## Route Binding

- 影響性　：　低

`Illuminate\Contracts\Routing\UrlRoutable`インターフェイスにある`resolveRouteBinding`メソードは`$field`パラメータを使います。もしこのインターフェイスを使用していれば、更新してください。

更に、`Illuminate\Database\Eloquent\Model`クラスの`resolveRouteBinding`メソードも`$field`パラメータを使いますので、もしこのメソードを override したら、更新してください。

最後、`Illuminate\Http\Resources\DelegatesToResources`trait の`resolveRouteBinding`メソードも`$field`パラメータを使いますので、もしこのメソードを override したら、更新してください。

## The `getOriginal` Method

- 影響性　：　低

`$model->getOriginal()`メソードはキャストされたモデールを参考にします。もし以前のキャストされない、生の属性を使用したい場合は`getRawOriginal`を使ってください。

## `TokenRepositoryInterface` クラス

- 影響性　：　低
-

`Illuminate\Auth\Passwords\TokenRepositoryInterface`に`recentlyCreatedToken`メソードを追加したので、もしこのインターフェイスを使用している場合は、`recentlyCreatedToken`メソードを追加してください。

## HTTP ー PSR-7 の適用性

- 影響性　：　低

PSR-7 レスポンス生成ための Zend Diactoros ライブラリが推奨されません。もし PSR-7 の適用性のために、使用している場合は`nyholm/psr7`composer パッケージを使用してください。更に、composer パッケージの`symfony/psr-http-message-bridge ^2.0`も一緒にインストールしてください。

## Mail ー Markdown メールテンプレートの更新

デフォルトの Markdown メールテンプレートのデザインなどはより良くなります。プラス、ドキュメントに書かれていない`promotion`テンプレートは削除されます。

## Queue ー非推奨される`--daemon`削除

- 影響性　：　低

`queue:work`コマンドのフラグ`--daemon`が削除されます。daemon として実行されるのはデフォルトになります。

## Resources ー`Illuminate\Http\Resources\Json\Resource`クラス

- 影響性　：　低

非推奨される`Illuminate\Http\Resources\Json\Resource`は削除されます。リソースは`Illuminate\Http\Resources\Json\JsonResource`クラスを継承にします。

## Session ー`array` セッションドライバ

- 影響性　：　低

`array` セッションドライバのデータはカレントリクエストに持続的にアクセスできるようになります。7 系以前は使えません。

## Testing ー`assertSee` アサーション

- 影響性　：　中

`TestResponse`クラスの`assertSee` アサーションは自動的にエスケープされます。もし手動的にエスケープしてきたら、しないでください。

## Validation ー`different`ルール

- 影響性　：　中

`different`ルールはリクエストに特定のパラメータが足りない場合に通りません。

---

個人的に 7 系に非常に楽しみにしています 🤓
特にこれ、元々はモデルに`getRouteKeyName`メソード使って、primary key を override しないといけないこと以下のように記述すれば、終わりみたい！便利そう！

```php
Route::get('/posts/{post:slug}', function (Post $post) {
    // ...
});
```
