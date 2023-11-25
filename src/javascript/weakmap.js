(() => {
    const tMap = new WeakMap();

    class T {
        name = "T";

        constructor() {
            tMap.set(this, {
                privateMethod: () => {
                    console.log(`class name is ${ this.name }`); // class name is T
                },
            });
        }

        publicMethod() {
            tMap.get(this).privateMethod();
        }
    }

    const t = new T();

    console.log('tMap', tMap); // WeakMap {T => {…}}

    t.publicMethod();
    // t.privateMethod(); // t.privateMethod is not a function

    setTimeout(() => {
        console.log('tMap', tMap); // WeakMap {}
    }, 10000);
    // gc
})();