## 数组自动填充，填充的元素不是`undefined`

```js
(() => {
    const arr = [];
    arr[0] = 0;
    arr[10] = 10;

    console.log(arr); // [0, empty × 9, 10]
    console.log(arr[1]); // undefined
    console.assert(arr.length === 11);

    // forEach
    let count = 0;
    arr.forEach(x => {
        console.log(x);
        count += 1;
    });
    // 输出:
    // 0
    // 10
    console.assert(count === 2);

    // for
    count = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        count += 1;
    }
    // 输出:
    // 0
    // undefined × 9
    // 10
    console.assert(count === 11);

    // for of
    count = 0;
    for (const x of arr) {
        console.log(x);
        count += 1;
    }
    // 输出:
    // 0
    // undefined × 9
    // 10
    console.assert(count === 11);

    console.log(Object.keys(arr)); // ['0', '10']
    console.log(Object.values(arr)); // [0, 10]
})();
```

## 使用不同的方式创建一个长度为`n`的数组

```javascript
(() => {
    console.log(Array(3)); // [empty × 3]
    console.log([...Array(3)]); // [undefined, undefined, undefined]
    console.log(Array.apply(null, Array(3))); // [undefined, undefined, undefined]
    console.log(Array.from({ length: 3 })); // [undefined, undefined, undefined]
    console.log(Array.from({ length: 3 }, (_, i) => i)); //  [0, 1, 2]
})();
```