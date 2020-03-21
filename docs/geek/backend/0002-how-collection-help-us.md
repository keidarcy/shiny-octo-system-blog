---
title: Understand Laravel Core Concepts 3 (how collection help us)
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

## Basic Usage of Macro

Usually macro is used to expand the functionality of Laravel build-in class, such as collection like below.

There are plenty of methods in collection class `first()`, `last()` etc, but no `second()`. Let's create one!

```php
use Illuminate\Support\Collection;

Collection::macro('second', function () {
    return $this->items[1];
});

Route::get('/', function () {
    dd(collect([1,2,3])->second());
});
```
## Create Marcoable Trait ourself
```php
trait Maroable {

    protected static $marco = [];

    public static function ($name, $macro)
    {
        static::$macro[$name] = $macro;
    }

    //a php [magic method](https://www.php.net/manual/en/language.oop5.magic.php)
    //when a method not exist be called, this '__call()' will be called
    public function __call($method, $parameters)
    {
        if(isset(static::$marco[$method])) {
            $macro = static::$marco[$method];
            $macro = $macro->bindTo($this, static::class);

            return $macro(...$parameters);
        }
        throw new BadMethodCallException('Method does not exist');
    }
}


class ExampleCollection {
    use Macroable;

    protected $items;

    public function __construct($items)
    {
        $this->items = $items;
    }

    public function first()
    {
        return $this->items[0];
    }

}

ExampleCollection::marco('last', function() {
    return end($this->items);
});

Route::get('/', function () {
    //return (new ExampleCollection([1,2,3]))->first();
    return (new ExampleCollection([1,2,3]))->last();
});
```

Take a look `vendor/laravel/framework/src/Illuminate/Support/Traits/Macroable.php`, it's exactly same with what we create !

---
[explore more](/)