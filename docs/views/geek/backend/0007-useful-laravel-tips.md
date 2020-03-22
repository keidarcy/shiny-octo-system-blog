---
title: A collection of userful Laravel tips
date: 2019-11-21
sidebar: 'auto'
categories:
  - technology
  - backend
tags:
  - PHP
  - Laravel
  - English
publish: true
prev: 0006-laravel7-release
next: 0008-useful-git-examples
---

# Create fake data seeder with relationships

## An example for Post Topics and Tags

Basically, we’re creating 10 posts, and for each of them we’re creating one tag and one topic, using Eloquent relationship in `app/Post.php`:

```php
public function tags()
{
    return $this->hasMany(Tag::class, 'post_id');
}

public function topics()
{
    return $this->hasMany(Topic::class, 'post_id');
}
```

Firstly, create factory normally like

```php
//database/factories/PostFactory.php
<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'id' => md5($faker->word),
        'slug'=> $faker->slug,
        'title' => $faker->sentence,
        'summary' => $faker->sentence,
        'body' => $faker->paragraph,
        'featured_image' => $faker->imageUrl,
        'featured_image_caption' => 'Photo by'.$faker->imageUrl,
        'user_id' => 1,
        'meta' => $faker->sentence,
        'complete' => 1
    ];
});
```

also similarly create `TopicFactory` and `TagFactory`

```php
//database/seeds/PostsTableSeeder.php
<?php

use Illuminate\Database\Seeder;
use App\Post;
use App\Topic;
use App\Tag;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Post::class, 5)->create()
        ->each(function ($post) {
            $post->tags()->save(factory(Tag::class)->make());
        })
        ->each(function ($post) {
            $post->topic()->save(factory(Topic::class)->make());
        });
    }
}
```
