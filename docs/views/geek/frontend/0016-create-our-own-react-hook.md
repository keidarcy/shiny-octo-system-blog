---
title: 教你如何写自己的 React useState hook
date: 2020-05-05
sidebar: false
categories:
  - technology
  - frontend
tags:
  - react
publish: true
# prev: /mac/#get-hostname-with-scutil
next: ./0017-create-react-copyn
---

## 关于 React useState Hook 的疑问

相信很多人跟我一样，一见到 Hook 就喜欢上了这简洁的语法，但是不知道大家有没有想过为什么简单的 `useState()` 就可以做到那么多事情呢,而且官方说：*Don’t call Hooks inside loops, conditions, or nested functions.* 。这又是为什么呢？

> [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)
_这篇文章是官方文档这页的拓展以及实践_

认真看完这篇文章你就会加深理解并且能自己写出 `useState` 。

## 用 `useState` 写一个最简单的例子

```js
const MyComponent = () => {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <p>{counter}</p>
      <button onClick={()=>setCounter(counter + 1)}>increment</button>
    </>
  )
}
```

## 尝试自己的 useState

 - 这是只是 `useState` 的功能重现，而不是真的写自己的 Hook 方程，实际实用时 Hook 都要以 useXXX 的命名方式去命名

要得到初始值的`0`和`setCounter`方程，首先想必大概是这样
```js
const myUseState = (defaultValue) => {
  const setValue = (newValue) => {
    defaultValue = newValue
    domRender()
  }
  const arr = [defaultValue, setValue]
}
```
再使用我们自己的 `myUseState` , 以及每次调用 `setValue` 时都需要重新 render dom。
```js
const MyComponent = () => {
  const [counter, setCounter] = myUseState(0)
  return (
    <>
      <p>{counter}</p>
      <button onClick={()=>setCounter(counter + 1)}>increment</button>
    </>
  )
}

const domRender = () => {
  ReactDOM.render(<MyComponent />, document.getElementById('root'))
}
domRender()
```
现在的问题是无法使用 `setCounter` 改变 `counter` 的值，想要一个可以改变的 `counter` 那必须指向另一个地方，就必须引入另一个变量。

```js
let states = []

const myUseState = (defaultValue) => {

  // 为了不让重新赋值，在已经初始化之后都不在执行之后的部分
  if (states.length !== 0) return state

  const setValue = (newValue) => {
    states[0] = newValue
    domRender()
  }
  const arr = [defaultValue, setValue]
  states = arr
  return arr
}
```
其实这个时候我们的 `counter` 已经可以正常的使用了。
但这个时候其实有个问题，当每次点击的时候， `states` 的内容就像这样 `[0, f()]` , `[1, f()]`, `[2, f()]`....
机智的小伙伴们已经发现了，那如果要有两个即两个以上要使用 `myUseState` 的时候那怎么办？？？

## 最终解决方案

那就是在引入另一个参数给 `states` 一个顺序！因为是被调用的顺序我们就叫 `callOrder` 吧！
```js
let states = []
let callOrder = -1 // 因为每次都要累加所以设为-1最方便啦

const myUseState = (defaultValue) => {
  const callId = ++callOrder

  // 这里要检查是不是已经初始化过了
  if (states[callId]) return states

  const setValue = (newValue) => {
    states[callId][0] = newValue
    domRender()
  }
  const arr = [defaultValue, setValue]
  states[callId] = arr
  return arr
}

const MyComponent = () => {
  const [counter, setCounter] = myUseState(0)
  const [another, setAnother] = myUseState(0)
  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
      <p>{another}</p>
      <button onClick={() => setAnother(another - 1)}>decrement</button>
    </>
  )
}

const domRender = () => {
  // 防止重新初始化所以要把 callOrder 复原
  callOrder = -1
  ReactDOM.render(<MyComponent />, document.getElementById('root'))
}
domRender()
```

## 更好的理解 hook 的规则与限制
实际上的 `useState` 当然会比这个复杂很多很多倍，但是核心的思想是不变的，也就是把所有初始化的值存在某个 `states` 里面， 所以顺序是十分重要的，那么也就能理解了 Hook 为什么是不可以在条件里面出现因为那样 React 会弄不清楚顺序。



理解了原理之后下次使用 `useState` 的时候是不是会更自信了呢💥

---

- [Github](https://github.com/keidarcy)
- [blog](https://blog.xyyolab.com)