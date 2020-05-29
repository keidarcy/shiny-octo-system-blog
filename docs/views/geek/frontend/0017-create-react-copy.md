---
title: 10分钟写一个有useState和useEffect的简易版 React
date: 2020-05-06
sidebar: false
categories:
  - technology
  - frontend
tags:
  - react
publish: true
prev: ./0016-create-our-own-react-hook
# next: ../infra/0011-storing-using-secrets-github-action
---

## 简易版 React 包括了什么

模仿 React Hook 的 `useState` 和  `useEffect` 的功能，可以操作数据。但不涉及关于 `dom` 的操作，所以整个模拟会在命令行中模拟。

## 重现 `useState` 以及在命令行中模仿浏览器的行为

这里主要是功能上模仿上一篇文章，加上封装进 `React` 显得看起来更像 `React` , 由于大部分主要思想是相同的，所以只做简要说明。
```js
class MyReact {
  constructor() {
    this.hooks = []
    this.idx = 0
  }

  useState(initVal) {
    const _idx = this.idx
    const state = this.hooks[this.idx] || initVal

    const setState = newVal => {
      this.hooks[_idx] = newVal
    }

    this.idx++
    return [state, setState]
  }
}

```

这里因为没有 `dom` ，所以在 `Component` 里面模仿 `render` 方程和 `click` event。

```js
let React = new MyReact()

const Component = () => {
  const [counter, setCounter] = React.useState(0)
  const [text, setText] = React.useState('longdd')

  return {
    render: () => console.log({ text, counter }),
    click: () => setCounter(counter + 1),
    type: (name) => setText(name)
  }
}
```

`render` 方程也在 `MyReact` 里面模仿出来。

```js
class MyReact {
  // constructor 就不重新写啦
  ...
  render(Component) {
    this._idx = 0
    const _C = Component()
    _C.render()
    return _C
  }
}
```

最后模仿 `ReactDOM` ，并模仿点击事件。

```js
let app = React.render(Component)
app.click()
app = React.render(Component)
app.type('yyf')
React.render(Component)
```

到这里其实已经可以完整的模仿 `React` 在浏览器中的作用啦。

::: details 完整的代码
```js

class MyReact {
  constructor() {
    this.hooks = []
    this.idx = 0
  }

  useState(initVal) {
    const _idx = this.idx
    const state = this.hooks[this.idx] || initVal

    const setState = newVal => {
      this.hooks[_idx] = newVal
    }

    this.idx++
    return [state, setState]
  }

  render(Component) {
    this.idx = 0
    const _C = Component
    _C.render()
    return _C
  }
}

let React = new MyReact()

const Component = () => {
  const [counter, setCounter] = React.useState(0)
  const [text, setText] = React.useState('longdd')

  return {
    render: () => console.log({ text, counter }),
    click: () => setCounter(counter + 1),
    type: (name) => setText(name)
  }
}

let app = React.render(Component)
app.click()
app = React.render(Component)
app.type('yyf')
React.render(Component)
```
:::

## 实现 `useEffect`

`useEffect` Hook 的功能其实就是，在 `Component` 初始化以及有依赖(dependency)的变量变动时执行的方程。
所以我们就简单的执行一个 `console.log()` 啦！


从一般的 `useEffect` 用法开始考虑如何导入
```js
React.useEffect(() => {
  console.log('excuted in useEffect hooook')
  // 依赖有可能是 ['counter'] 或 ['text'] 或 ['counter', 'text']
}, [])
```
从结果来考虑需要的变量一个callback function `callback` 和依赖的数组 `depArray` 。

以及在比较依赖有没有改变时肯定就要导入 `oldDep` 和 `hasChanged` 用来比较。

```js
class MyReact {
  ...,
  useEffect(callback, depArray) {
    const oldDeps = this.hooks[this.idx]
    let hasChanged = true
    // 判断是否有变化
    if (hasChanged) callback()
    this.hooks[this.idx] = depArray
    this.idx++
  }
}
```

最后就是除了初始化的第一次，想办法判断 `oldDeps` 和 `depArray` 的值是否有变化有的话就执行 `callback()`, 这并不难但是以下可以简洁的写出

```js
...
hasChanged = oldDeps.some((dep, index) => !Object.is(depArray[index], dep))
```

那么完整的 `useEffect` 就像这样

```js
useEffect(callback, depArray) {
  const oldDeps = this.hooks[this.idx]
  let hasChanged = false
  if (oldDeps) {
    hasChanged = oldDeps.some((dep, index) => !Object.is(depArray[index], dep))
  }
  if (hasChanged) callback()
  this.hooks[this.idx] = depArray
  this.idx++
}
```
这样就完成 `useEffect` 了啦💥

下面是完整的代码

::: details
```js

class MyReact {
  constructor() {
    this.hooks = []
    this.idx = 0
  }

  useState(initVal) {
    const _idx = this.idx
    const state = this.hooks[this.idx] || initVal

    const setState = newVal => {
      this.hooks[_idx] = newVal
    }

    this.idx++
    return [state, setState]
  }

  useEffect(callback, depArray) {
    const oldDeps = this.hooks[this.idx]
    let hasChanged = false
    if (oldDeps) {
      hasChanged = oldDeps.some((dep, index) => !Object.is(depArray[index], dep))
    }
    if (hasChanged) callback()
    this.hooks[this.idx] = depArray
    this.idx++
  }

  render(Component) {
    this.idx = 0
    const _C = Component
    _C.render()
    return _C
  }
}

let React = new MyReact()

const Component = () => {
  const [counter, setCounter] = React.useState(0)
  const [text, setText] = React.useState('longdd')

  return {
    render: () => console.log({ text, counter }),
    click: () => setCounter(counter + 1),
    type: (name) => setText(name)
  }
}

let app = React.render(Component)
app.click()
app = React.render(Component)
app.type('yyf')
React.render(Component)
```
:::

其实不用 React class 只用closure方程也是可以的。
>closure就是可以持有变量的方程 --me🐸
>正是因为这点也可以完成class做到的事情

下面用closure重写 `React class`

::: details
```js
const React = (() => {
  let hooks = []
  let idx = 0

  function useState(initVal) {
    const state = hooks[idx] || initVal
    const _idx = idx
    const setState = (newVal) => {
      hooks[_idx] = newVal
    }
    idx++
    return [state, setState]
  }

  function render(Component) {
    idx = 0
    const C = Component()
    C.render()
    return C
  }

  function useEffect(callback, depArray) {
    const oldDeps = hooks[idx]
    console.log(oldDeps)
    let hasChanged = true
    if (oldDeps) {
      hasChanged = depArray.some((dep, i) => !Object.is(dep, oldDeps[i]))
    }
    if (hasChanged) callback()
    hooks[idx] = depArray
    idx++
  }
  return { useState, render, useEffect }
})()
```
:::

---

- [Github](https://github.com/xyyolab)
- [blog](https://blog.xyyolab.com)