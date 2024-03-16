# ArrayBuffer Unit8Array(TypedArray) DataView的关系

* ArrayBuffer使用连续内存存储二进制数据
* TypedArray和DataView都是操作ArrayBuffer的视图类型，通过buffer属性引用ArrayBuffer
* 实际上TypedArray是类型数组（如Unit8Array）的统称，并不存在TypedArray class
* ArrayBuffer本身创建后不可操作，只能由视图类型来操作
* TypedArray使用本机端序（通常是小端序），DataView默认是大端序，可通过传参使用小端序
* TypedArray便于操作同一类型的数据，DataView可支持多种类型

```js
(() => {
    const buffer = new ArrayBuffer(15);
    const dataView = new DataView(buffer);
    const buff = new Uint8Array(buffer);

    // 大端序写入
    dataView.setUint8(0, 1);
    dataView.setUint16(1, 1 << 15);
    dataView.setUint32(3, 1 << 31);
    dataView.setBigUint64(7, 1n << 63n);

    console.assert(buff[0], 1);
    console.assert(buff[1], 128);
    console.assert(buff[3], 128);
    console.assert(buff[7], 128);
})();
```