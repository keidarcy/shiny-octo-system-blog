## [View](https://blog.xyyolab.com)

## Snippets

ts decorator
```ts
function time(name: string) {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        const fn = descriptor.value;
        descriptor.value = (...args) => {
            console.time(name);
            const v = fn(...args);
            console.timeEnd(name);
            return v;
        }
    }
}

class C{
    @time('C.method')
    method(name: string){
        console.log('method called', name)
        for (let i = 0; i < 1000000000; i++){}
    }
}

new C().method('koko')
```

node cli

vanilla node cli useage
```js
#! /usr/bin/env node

const args = process.argv.slice(2);
const mydir = args[0];
const myname = args[1].split('--name=')[1];
console.log({ mydir, myname });
```
type
`./dist/index.js myqpp --name=fun`

output
`{ mydir: 'myqpp', myname: 'fun' }`
