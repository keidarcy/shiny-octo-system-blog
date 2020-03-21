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

## First Create Facade Manually

one file
```php
<?php

namespace App;

class Payment
{
    public function process()
    {
        return 'in process';
    }
}
```

another file
```php
<?php

namespace App;

use Illuminate\Support\Facades\Facade;

class PaymentFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return Payment::class;
    }
}
```

register alias in `app/config.php`

test in `web.php`

```php
Route::get('/', function () {
    return Payment::process();
});
```

## Second Create Facade Automatically (Real-time Facades)

without `PaymentFacade` class and alias in `config.php`, add something in `web.php`

```php
use Facades\App\Payment;

Route::get('/', function () {
    return Payment::process();
});
```
you can still get the same result! How Amazing 🙀 !

Actually, Laravel generate PaymentFacade class automatically. If you look into
```php
// storage/framework/cache/facade-713d26851e5ea21f90db4510b9ac1ce3e9199d9a.php
<?php

namespace Facades\App;

use Illuminate\Support\Facades\Facade;

/**
 * @see \App\Payment
 */
class Payment extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'App\Payment';
    }
}
```
there will be an almost same file with what we created before!

---
[explore more](how-to-create-laravel-facade.md)