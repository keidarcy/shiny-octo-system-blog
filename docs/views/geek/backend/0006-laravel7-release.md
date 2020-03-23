---
title: Laravel 7 Release Notes日本語訳
date: 2020-02-22
sidebar: 'auto'
categories:
  - geek
  - backend
tags:
  - PHP
  - Laravel
  - Japanese
publish: true
prev: 0005-laravel7-upgrade-guide
next: 0007-useful-laravel-tips
---

# Laravel 7 Release Notes

- [原文](https://laravel.com/docs/master/releases)

::: theorem @laravelphp·Mar 3
Laravel v7.0.0 has been released! https://laravel.com/docs/7.x/releases ... what's your favorite feature?
::: right
source [Taylor Otwell](https://twitter.com/taylorotwell)
:::

## Laravel Airlock

Airlock は SPA やモバイルアプリなどシンプル、トークン API を提供する機能的な認証システムです。Airlock はアプリケーションのユーザアカウントに複数の API トークンを生成することも可能にしました。これらのトークンはそれぞれの機能やスコップごとに機能します。

- 詳細は Airlock の[ドキュメント](https://laravel.com/docs/master/airlock)へ

## Custom Eloquent Casts

Laravel 自体は豊富なキャストタイプを持っていますが、あたなはよく自らのキャストタイプを定義したいこともあるでしょうか。Laravel ７は`CastsAttributes`インターフェイスを実装するクラスを定義すれば、できるようになりました。

このクラスは必ず`get`と`set`メソードを持ち、`get`はデータベースの生のデータをキャスト値に変換します。一方、`set`はキャスト値をデータベースの生のデータに変換します。例えば、`json`キャストタイプを作ってみましょう。

```php
class Json implements CastsAttributes
{
    /**
     * Cast the given value.
     *
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @param  string  $key
     * @param  mixed  $value
     * @param  array  $attributes
     * @return array
     */
    public function get($model, $key, $value, $attributes)
    {
        return json_decode($value, true);
    }

    /**
     * Prepare the given value for storage.
     *
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @param  string  $key
     * @param  array  $value
     * @param  array  $attributes
     * @return string
     */
    public function set($model, $key, $value, $attributes)
    {
        return json_encode($value);
    }
}
```

カスタマイズキャストタイプを定義したら、モデルに使うことができます。

```php
<?php

namespace App;

use App\Casts\Json;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'options' => Json::class,
    ];
}
```

- 詳細は Eloquent の[ドキュメント](https://laravel.com/docs/master/eloquent-mutators#custom-casts)

## Blade Component Tags & Improvements

簡単に言うと、Blade コンポネートはそれに対応しているクラスを持ち、それぞれのデータを受け入れることが可能になりました。全ての定義されたパブリックプロパーティーとメソードのコンポネートクラスは自動的にコンポネートビューに利用できます。コンポネート中の HTML の属性は`$attribute`と言う attribute インスタンスが自動的に追加されます。
例えば、`App\View\Components\Alert`はこのように定義され

```php

<?php
namespace App\View\Components;

use Illuminate\View\Component;

class Alert extends Component
{
    /**
     * The alert type.
     *
     * @var string
     */
    public $type;

    /**
     * Create the component instance.
     *
     * @param  string  $type
     * @return void
     */
    public function __construct($type)
    {
        $this->type = $type;
    }

    /**
     * Get the class for the given alert type.
     *
     * @return string
     */
    public function classForType()
    {
        return $this->type == 'danger' ? 'alert-danger' : 'alert-warning';
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.alert');
    }
}
```

次は、コンポネートの Blade テンプレートを定義し、

```html
<!-- /resources/views/components/alert.blade.php -->

<div class="alert {{ $classForType() }}" {{ $attributes }}>
  {{ $heading }} {{ $slot }}
</div>
```

コンポネートタグを使い、下の Blade にレンダリングされます。

```html
<x-alert type="error" class="mb-4">
  <x-slot name="heading">
    Alert content...
  </x-slot>

  Default slot content...
</x-alert>
```

この例はただ Blade component 機能の中の一部だけで、Laravel 7 は他の匿名、インラインビューコンポーネントなどたくさんの機能を改造しました。

- 詳細は full Blade component documentation の[ドキュメント](https://laravel.com/docs/master/blade#components)

## HTTP Client

今まで Laravel は`Guzzle HTTP client`を使用し、HTTP リクエストなどのサービスを提供しています。Laravel 7 は`Guzzle`一番よく使われる機能の部分を抜粋し、より使いやすいため、`Guzzle`のラッパーの`HTTP client`を作りました。例えば、JSON データの`Post`リクエストは以下のように

```php
use Illuminate\Support\Facades\Http;

$response = Http::withHeaders([
    'X-First' => 'foo'
    'X-Second' => 'bar'
])->post('http://test.com/users', [
    'name' => 'Taylor',
]);

return $response['id'];
```

更に、この`HTTP client`は素晴らしい、人間にわかりやすいテスト機能も搭載

```php
Http::fake([
    // Stub a JSON response for GitHub endpoints...
    'github.com/*' => Http::response(['foo' => 'bar'], 200, ['Headers']),

    // Stub a string response for Google endpoints...
    'google.com/*' => Http::response('Hello World', 200, ['Headers']),

    // Stub a series of responses for Facebook endpoints...
    'facebook.com/*' => Http::sequence()
                            ->push('Hello World', 200)
                            ->push(['foo' => 'bar'], 200)
                            ->pushStatus(404),
]);
```

- 詳細は HTTP client の[ドキュメント](https://laravel.com/docs/master/http-client)

## Fluent String Operations

Laravel の`Illuminate\Support\Str`クラスはもう馴染みな存在になっているでしょう。たくさんの文字列の操作に役に立つメソードがありますよね。Laravel ７はこれらのメソードに基づいて、オブジェクト指向、スムーズな文字列操作のライブラリを作成しました。`Str::of`メソードを使って、`Illuminate\Support\Stringable`インスタンスを使用します。たくさんのメソードはメソードチェンで文字列を操作

```php
return (string) Str::of('  Laravel Framework 6.x ')
                    ->trim()
                    ->replace('6.x', '7.x')
                    ->slug();
```

- 詳細はオブジェクト指向、スムーズな文字列操作の[ドキュメント](https://laravel.com/docs/master/helpers#fluent-strings)

## Route Model Binding Improvements

### Key Customization

Eloquent モデルのデータは`id`以外のコラムを使いたいことがあるでしょうか。Laravel 7 はルートパラメータにコラムを指定することを可能に

```php

Route::get('api/posts/{post:slug}', function (App\Post $post) {
    return $post;
});
```

### Automatic Scoping

1 つのルートに多数の Eloquent モデルをバンドする時に、2 つ目パラメータは 1 つ目のパラメータに属するスコップしたい時はあるでしょう。例えば、ある特定のユーザのブログポストの場合とか

```php
use App\Post;
use App\User;

Route::get('api/users/{user}/posts/{post:slug}', function (User $user, Post $post) {
    return $post;
});
```

Laravel 7 はこのように parent モデル側に定義されるコラム名をネストパラメータとして分析します。上の例では、`User`モデルに`posts`コラムが定義されると想定し、`Post`モデルデータの取得に利用します。

- 詳細は route model binding の[ドキュメント](https://laravel.com/docs/master/routing#route-model-binding)

## Multiple Mail Drivers

Laravel 7 は 1 つのアプリに多数の"mailers"ドライバをサポートすることも可能にしました。各 mailer ドライバは`mail`設定に独自の`option`や`transport`を持つことや、特定のメールサービスで特定のメッセージを送信することが可能です。例えば、`Postmark`にトランザクションのメールを、他の大部分のメールは`Amazon SES`に設定します。

デフォルトは`mail`設定ファイルに定義されているドライバを使用しますが、`mailer`メソードを使えば特定のメールドライバを指定できます。

```php

Mail::mailer('postmark')
        ->to($request->user())
        ->send(new OrderShipped($order));
```

## Route Caching Speed Improvements

Laravel 7 は新たなメソードを利用し、`route:cache`コマンドでコンパイル済みのルートキャッシュのマーチングを行っています。大規模なアプリ(800 ルート以上)にて"Hello World"のベンチマークは、毎秒 2 倍以上のリクエストスピードに改善されました。自らの対応はいりません。

## CORS Support

Laravel 7 自体は Barry vd. Heuvel さんの CORS パッケージの Cross-Origin Resource Sharing (CORS)`OPTIONS`のリクエストとレスポンスをサポートします。新たな`cors`設定ファイルは Laravel アプリに存在するようになります。

- 詳細は CORS の[ドキュメント](https://laravel.com/docs/master/routing#cors)

## Query Time Casts

テーブルから生のデータをセレクトするなど、クエリ実行時にキャストを使いたい時はあるでしょう。例えば、下のクエリ

```php

use App\Post;
use App\User;

$users = User::select([
    'users.*',
    'last_posted_at' => Post::selectRaw('MAX(created_at)')
            ->whereColumn('user_id', 'users.id')
])->get();
```

`last_posted_at`の結果は文字列になります。もしクエリ実行時は`date`キャストに変換できれば便利ですね。そのため、Laravel 7 に`withCasts`が誕生しました。

```php
$users = User::select([
    'users.*',
    'last_posted_at' => Post::selectRaw('MAX(created_at)')
            ->whereColumn('user_id', 'users.id')
])->withCasts([
    'last_posted_at' => 'date'
])->get();
```

## MySQL 8+ Database Queue Improvements

前回の Laravel リリースにて、`database`queue は deadlocks により、商用には不十分だと考えられます。Laravel 7 は MYSQL8+を使用し、データベースバックエンド queue を改善します。`FOR UPDATE SKIP LOCKED`clause と他の SQL 改善を使い、`database`稼働の queue は大負荷の商用にも対応できます。

## Artisan `test` Command

`phpunit`コマンドの追加として、`test` Artisan コマンドでもテスト実行できます。このコマンドにより、美しいコンソル UX や豊富なテスト情報が提供されます。更に、テストは初めての通らなかったテストに止まります。

```bash
php artisan test
```

> ![Screenshot 2020-02-22 13.01.33.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/470919/582e9318-412f-f79b-2b76-84dce1878118.png)

> ちょいお試し！

> ```
> vi tests/Unit/ExampleTest.php
> ```

> ![Screenshot 2020-02-22 13.03.28.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/470919/d3a0605d-9e1b-f0db-e82b-3f51e5fb986f.png)
>
> 確かに`phpunit`よりわかりやすくなってるけど 😳😳
> 大量なテストがあれば、どうなるだろうかな 🤔🤔

元々`phpunit`に渡せるパラメータは Artisan`test`コマンドにも渡せます。

```bash
php artisan test --group=feature
```

## Markdown Mail Template Improvements

デフォルトの Markdown メールテンプレートは、Tailwind CSS カラーパレットをベースにし、更にモダンなデザインにします。もちろん、このテンプレートは自由にカスタマイズするは可能です。

<img width="651" alt="Screen_Shot_2020-02-19_at_2.04.11_PM.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/470919/9ee20ea5-e389-4a70-1221-8989d328533a.png">

- 詳細は Markdown mail の[ドキュメント](https://laravel.com/docs/master/mail#markdown-mailables)

## Stub Customization

Artisan `make`コマンドは controllers, jobs, migrations, tests など様々なクラスを生成することに使われます。これらのクラスは'stub'ファイルを使用し、インプットの値を参照し、作られます。ただし、これらのクラスの構造を少し編集して`make`コマンドを使いたい事があるでしょう。Laravel 7 は`stub:publish`を使用したら、よく使われる stub をカスタマイズすることも可能です。

```sh
php artisan stub:publish
```

published`stubs`フォルダは Laravel のルーツフォルダに、これらのファイルの全ての編集は`make`コマンドに反映されます。

> ![Screenshot 2020-02-22 13.27.56.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/470919/54bfcf14-a9c0-747e-35a0-db964bed665b.png)

---

便利そうな機能いっぱい 🙈
