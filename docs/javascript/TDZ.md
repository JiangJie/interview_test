## Temporal Dead Zone(TDZ)

* `var`是函数级别的作用域，存在`变量提升（hoisting）`的特性，只提升声明部分
* `let`和`const`是块级作用域，变量在声明前都处于`TDZ`中，访问会报错
* `function`也存在变量提升，并且声明和实现一起提升
* TDZ造成的性能问题(https://esbuild.github.io/faq/#top-level-var)

```javascript
(() => {
    if (true) {
        var a = 1;
    }
    console.log(a); // 1
    console.log(b); // undefined
    console.log(f()); // undefined
    console.log(g()); // TypeError: g is not a function

    var b = 2;

    function f() {
        return b;
    }

    var g = function () {
        return b;
    };
})();

(() => {
    if (true) {
        let a = 1;
    }
    // window.a
    console.log(a); // ReferenceError: a is not defined
    // 'b' is in TDZ
    console.log(b); // ReferenceError: Cannot access 'b' before initialization
    console.log(f()); // ReferenceError: Cannot access 'b' before initialization

    function f() {
        return b;
    }

    let b = 2;
})();
```