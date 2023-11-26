## `__proto__`和`prototype`的关系

```javascript
(() => {
    const F = function () { };
    const f = new F();
    // Object.getPrototypeOf(f) === f.__proto__
    console.assert(Object.getPrototypeOf(f) === F.prototype);
})();
```