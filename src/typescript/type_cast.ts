(() => {
    const enum N {
        Zero = 0,
    }
    const zero = 0;
    const one = 1;

    // 类型注解（Type Annotation）
    // 主要用于变量声明，明确告诉编译器zero1是一个N类型的变量
    // 大多数时候编译器能自动推断出类型
    const zero1: N = zero;

    // 类型注解会做有效性检查
    // error: 不能将类型“1”分配给类型“N”。
    const one1: N = one;

    // 类型断言（Type Assertion）
    // 类似其他静态类型语言的强制类型转换
    // 告诉编译器将zero2视为N类型，不仅限于变量声明，该语法可用于任何可以是表达式的地方
    // 不过需要注意的是和tsc语法有冲突
    const zero2 = <N> zero;
    // 这样是成功的
    const one2 = <N> one;

    // 也是类型断言（Type Assertion）
    // 和`zero2`完全等价，不过适用性更好，不和tsx语法冲突，推荐使用
    const zero3 = zero as N;
    const one3 = one as N;

    // 两个八竿子打不着的类型是不能转换的
    // 类型 "string" 到类型 "N" 的转换可能是错误的，因为两种类型不能充分重叠。
    const one4 = '1' as N;

    // 也有始终能骗过编译器的万能转换方式，可能存在潜在错误，慎用
    const one5 = '1' as any as N;
    const one6 = '1' as unknown as N;
})();