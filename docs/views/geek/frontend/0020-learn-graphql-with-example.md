---
title: GraphQL Learning MEMO
date: 2020-08-02
sidebar: false
categories:
  - react
  - frontend
sticky: 1
tags:
  - react
  - graphql
publish: true

---

## GraphQL

GraphQl 全称Graph Query Language(SQL: Structured Query Language), 用的是越来越多了。代替rest是可能的，不过一旦设计需要使用Graphql去fetch data的时候，不懂原理的话写起来就会很麻烦。

### Basic

GraphQl的 Operation Name 分为读取的`query`，修改的`mutation`, 和订阅修改的`subscription`。
所有的`{}`为`root`的都是`query`, 就像js的匿名函数，所以为了明确最好给一个有意义名字。
其他terms,`argument`
```
{
  viewer{
    login
  }
}
```

```
query getLoginUser {
  viewer{
    login
  }
}
```

### Fragment

当涉及重复片段时，`Fragment`是一种解决方法。
*empireHero: hero* 是出现重复key时的alias。

```
query HeroNameAndFriends {
  empireHero: hero(episode: EMPIRE) {
    name
    appearsIn
    friends {
      name
    }
  }
  jediHero: hero(episode: JEDI) {
    name
    appearsIn
    friends {
      name
    }
  }
}
```
```
query HeroNameAndFriends {
  empireHero: hero(episode: EMPIRE) {
    name
  appearsIn
  friends {
    name
  }
  }
  jediHero: hero(episode: JEDI) {
    ...heroFields
  }
}

fragment heroFields on Character {
  name
  appearsIn
  friends {
    name
  }
}

```

### 定义查询时的`Variables`

定义变量的方法，`$...`,并定义类型。
再以JSON的方式指定`Query Variables`。
optional or required `$episode: Episode!`, `!`就是requried。

```
query HeroNameAndFriends($episode: Episode!) {
  hero(episode: $episode) {
    ...heroFields
  }

}

fragment heroFields on Character {
  name
  appearsIn
  friends {
    name
  }
}
```
```
{
  "episode": "NEWHOPE"
}
```

### Mutaion

修改以mutaion开始。
episode和review是需要的变量。
中间的episode和stars是修改之后查询的结果。

```
mutation{
  createReview(episode:NEWHOPE, review:{stars:3}){
    episode
    stars
  }
}
```

### Inline Fragments
```
query HeroForEpisode($ep: Episode!) {
  hero(episode: $ep){
    name
    id
    appearsIn
  }
}
```
当想查询Character字段时就没办法了，因为不知道是huamn还是droid,这时候就需要使用`inline fragment`了。
```
query HeroForEpisode($ep: Episode!) {
  hero(episode: $ep){
    name
    id
    appearsIn
    ... on Droid {
      primaryFunction
    }
  }
}
```

```
{
  search(text:"an"){
    __typename
    ... on Human{
      name
      height
    }
    ... on Starship{
      name
      coordinates
    }
  }
}
```



### resources
 - [starwars-server](https://github.com/apollographql/starwars-server)
 - [graphql-voyager](https://github.com/APIs-guru/graphql-voyager)

