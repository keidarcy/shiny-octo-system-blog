---
title: Understand Laravel Core Concepts 2 (create your own Facade 2 ways)
date: 2020-01-01
sidebar: 'auto'
categories:
  - geek
  - backend
tags:
  - PHP
  - Laravel
  - English
publish: true
---

## How could we use facade class

in `config\app.php`

these is a area for aliases like

```php
'aliases' => [
        'App' => Illuminate\Support\Facades\App::class,
        'Arr' => Illuminate\Support\Arr::class,
        'Artisan' => Illuminate\Support\Facades\Artisan::class,
        'Auth' => Illuminate\Support\Facades\Auth::class,
        'Blade' => Illuminate\Support\Facades\Blade::class,
        'Broadcast' => Illuminate\Support\Facades\Broadcast::class,
        'Bus' => Illuminate\Support\Facades\Bus::class,
        'Cache' => Illuminate\Support\Facades\Cache::class,
        'Config' => Illuminate\Support\Facades\Config::class,
        'Cookie' => Illuminate\Support\Facades\Cookie::class,
        'Crypt' => Illuminate\Support\Facades\Crypt::class,
        'DB' => Illuminate\Support\Facades\DB::class,
        'Eloquent' => Illuminate\Database\Eloquent\Model::class,
        'Event' => Illuminate\Support\Facades\Event::class,
        'File' => Illuminate\Support\Facades\File::class,
        //'Gate' => Illuminate\Support\Facades\Gate::class,
        ....
```
if you comment out alias, you can still access manually.

```php
// php artisan tinker
>>> class_alias(Illuminate\Support\Facades\Gate::class,'Gate');
=> true
>>> Gate::allows('update');
=> false

```

## How to call a Method in Facade Class

```php
# vendor/laravel/framework/src/Illuminate/Support/Facades/Facade.php

public static function __callStatic($method, $args)
{
    $instance = static::getFacadeRoot();

    if (! $instance) {
        throw new RuntimeException('A facade root has not been set.');
    }

    return $instance->$method(...$args);
}
```
which is a build in php Magic Methods.

**`__callStatic()`** is triggered when invoking inaccessible methods in a static context.

```php
public static function getFacadeRoot()
{
    return static::resolveFacadeInstance(static::getFacadeAccessor());
}
⬇︎
protected static function resolveFacadeInstance($name)
{
    if (is_object($name)) {
        return $name;
    }

    if (isset(static::$resolvedInstance[$name])) {
        return static::$resolvedInstance[$name];
    }

    if (static::$app) {
        return static::$resolvedInstance[$name] = static::$app[$name];
    }
}
```
in every Facade classes there is a
```php
protected static function getFacadeAccessor()
{
  return GateContract::class;
}
```
return a string or class name which will passed to `resolveFacadeInstance`.
`static::$app[$name]`is same with `app('gate') or $this->app(Gate::class)` or others which will get the registered class with the given 'string' like 'gate' or `GateContract::class` in ServiceProvider.

## How Service Provider works ?

```php
// vendor/laravel/framework/src/Illuminate/Auth/Access/Gate.php
protected function registerAccessGate()
{
    $this->app->singleton(GateContract::class, function ($app) {
        return new Gate($app, function () use ($app) {
            return call_user_func($app['auth']->userResolver());
        });
    });
}
```
it register 'gate' to Laravel, so when call a facade method like Gate::allows('update') is not call a static method.
But call a `__callStatic` method then get the registered  gate or `Illuminate\Support\Facades\Gate::class` in service provider of the Laravel application which point to `Illuminate\Auth\Access\Gate` which has a allows method
```php
# vendor/laravel/framework/src/Illuminate/Auth/Access/Gate.php

public function allows($ability, $arguments = [])
{
    return $this->check($ability, $arguments);
}
```

## How to register in servicer provider ?
```php
# app/web.php

app()->bind('foo', function () {
    return 'value';
});

#php artisan tinker
>>> app('foo');
=> "value"
```