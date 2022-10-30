// 定义函数的时候定义不指定使用的时候制定类型
// 可以看成是占位符
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

function echoWithArray<T >(arg:T[]):T[] {
    console.log(arg.length)
    return arg
}

const arrs = echoWithArray([1,2,3,4])
console.log(arrs)

// 使用接口来约束泛型
interface IWithLength {
    length:number;
}
function echoWithLength<T extends IWithLength>(arg:T):T {
    return arg;
}
const strTest = echoWithLength('str')
const obj = echoWithLength({length:1})
const arr2 = echoWithLength([1,2,3])

// 实现队列
class Queue<T> {
    private data:T[] = []
    push(item:T) {
        return this.data.push(item)
    }
    pop():T {
        return this.data.shift()
    }
}

const queue = new Queue<Number>()
queue.push(1)
console.log(queue.pop().toFixed())

// 泛型对接口约束
interface KeyPair<T,U> {
    key:T;
    value:U;
}
let kp1: KeyPair<number,string>  = {key:1,value:"str"}
let kp2: KeyPair<string,number> = {key:'test',value:123}

let arr:number[] = [1,2,3,4]

let arrTow:Array<number> = [1,2,3]

// 接口描述函数的类型
interface IPlus<T> {
    (a:T,b:T):T;
}
function plus(a:number,b:number):number {
    return a + b;
}
const a:IPlus<number> = plus

function connnect(a:string,b:string):string {
    return a + b;
}

