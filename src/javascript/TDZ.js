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