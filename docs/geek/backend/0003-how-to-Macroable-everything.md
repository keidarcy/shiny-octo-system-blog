---
title: Understand Laravel Core Concepts 4 (how to macroable your idea)
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
prev: 0002-how-collection-help-us
next: 0004-Japanese-random-word-generater
---

## Create our own collection from scratch

The `Illuminate\Support\Collection` class which is warp of array to helps us manipulate array!

use `collect()` helper function to create collection.

```php
>>> $items = collect([range(1,10)])->flatten();
=> Illuminate\Support\Collection {#3314
     all: [
       1,
       2,
       3,
       4,
       5,
       6,
       7,
       8,
       9,
       10,
     ],
   }
```

seems normal ?
```php
>>> $items->filter(function($item){ return $item > 5 ;});
=> Illuminate\Support\Collection {#3312
     all: [
       5 => 6,
       6 => 7,
       7 => 8,
       8 => 9,
       9 => 10,
     ],
   }

>>> $items->filter(function($item){ return $item > 5 ;})->map(function($item){return $item*3;});
=> Illuminate\Support\Collection {#3325
     all: [
       5 => 18,
       6 => 21,
       7 => 24,
       8 => 27,
       9 => 30,
     ],
   }

>>> $items->filter(function($item){ return $item > 5 ;})->map(function($item){return $item*3;})->reject(function($item){return $item % 2 == 0;});
=> Illuminate\Support\Collection {#3336
     all: [
       6 => 21,
       8 => 27,
     ],
   }
```
a little bit powerful

## Explore some real collection examples

### these two will get same array 😳😳😳

```php
$tags = Post::with('tags')->get()->pluck('tags')->flatten()->pluck('name');
        $topics = Post::with('topic')->get()->pluck('topic')->flatten()->pluck('name');

        return ['topicName' => $topics->countBy()->keys(),
                'topicNumber' => $topics->countBy()->values(),
                'tagName' => $tags->countBy()->keys(),
                'tagNumber' => $tags->countBy()->values()];
$posts = Post::all();
$tags = [];
foreach ($posts as $post) {
    foreach ($post->tags as $postTag) {
        $tags[] = $postTag->name;
    }
}
$topics = [];
foreach ($posts as $post) {
    foreach ($post->topic as $postTopic) {
        $topics[] = $postTopic->name;
    }
}
$topicName = [];
$topicNumber = [];
foreach (array_count_values((array)$topics) as $index => $topic) {
    $topicNumber[] = $topic;
    $topicName[] = $index;
}

$tagName = [];
$tagNumber = [];
foreach (array_count_values($tags) as $index => $tag) {
    $tagNumber[] = $tag;
    $tagName[] = $index;
}

return ['topicName' => $topicName,
        'topicNumber' => $topicNumber,
        'tagName' => $tagName,
        'tagNumber' => $tagNumber];
```

### Functionally Group By time using Collection and Carbon

How to get posts group by 'today', 'this week', 'last week', 'old' ?

```php
$posts = Post::latest()->get()->groupBy(function ($post) {
    if ($post->created_at->isToday()) {
        return 'today';
    } elseif ($post->created_at->isCurrentWeek()) {
        return 'this week';
    } elseif ($post->created_at->isCurrentMonth()) {
        return 'last week';
    } else {
        return 'old';
    }
});
```
## New Lazy Collection from Laravel 6

Collection warp array, however Lazy Collection warp 'generator'.

PHP generator is kinda difficult to understand which is useful when you deal with huge huge number of data that would eat all your memory.

### how to use lazy collection ?

instead of use `all()` use `cursor()`

```php
\App\Project::all();
\App\Project::cursor();
$items = range(1,10000000);
return 'done';
```
it will fail, since use out of memory.

```php
function customRange($begin, $end)
{
 for ($i = $begin; $i <= $end; $i++) {
 yield $i;
 }
}

foreach(customRange(1,10000000) as $i {
    if ($i < 10000) {
    dump($i);
    }
}
```

it won't build that array in memory, so it becomes possible.
