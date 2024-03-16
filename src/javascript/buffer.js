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