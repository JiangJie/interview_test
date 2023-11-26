(() => {
    const F = function () { };
    const f = new F();
    // Object.getPrototypeOf(f) === f.__proto__
    console.assert(Object.getPrototypeOf(f) === F.prototype);
})();