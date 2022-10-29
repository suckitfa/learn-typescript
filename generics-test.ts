// 定义函数的时候定义不指定使用的时候制定类型
function echo<T>(arg:T):T {
    return arg;
}

const str:string = 'str'
const result = echo('str')
const flag = echo(false)

// 泛型的写法 generics
function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]]
}
const result2 = swap(['string',12])
console.log(result2)