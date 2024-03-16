## `a.b = undefined`和`delete a.b`的区别

```javascript
(() => {
    const a = {
        b: 0,
    };
    a.b = undefined;
    console.assert(a.b === undefined);
    console.assert(a.hasOwnProperty('b'));
})();

(() => {
    const a = {
        b: 0,
    };
    delete a.b;
    console.assert(a.b === undefined);
    console.assert(!a.hasOwnProperty('b'));
})();
```

## `{}`和`Map`的区别

```javascript
(() => {
    const o = {
        a: 0,
        b: 0,
        a1: 0,
        '1': 0,
        [Symbol('d')]: 0,
        [Symbol(2)]: 0,
        [Symbol('c')]: 0,
    };

    for (const key in o) {
        console.log(key);
    }
    // 顺序不确定
    // 输出:
    // 1
    // a
    // b
    // a1

    const symbols = Object.getOwnPropertySymbols(o);
    symbols.forEach(symbol => {
        console.log(symbol);
    });
    // 输出:
    // Symbol(d)
    // Symbol(2)
    // Symbol(c)
})();

(() => {
    const m = new Map([
        ['a', 0],
        ['b', 0],
        [Symbol('c'), 0],
        ['a1', 0],
        ['1', 0],
    ]);

    for (const [key] of m) {
        console.log(key);
    }
    // 固定按照添加顺序
    // 输出:
    // a
    // b
    // Symbol(c)
    // a1
    // 1
})();
```

* `Object.defineProperty`和直接赋值的区别