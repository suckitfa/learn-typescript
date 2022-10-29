// z表示可选参数，k参数默认值
function add(x:number,y:number,z?:number,k:number = 19):number {
    if (typeof z === 'number') {
        return x + y + z;
    } else {
        return x+y;
    }
}

let result = add(2,1)
// 函数表达式 add2的类型为: (x: number, y: number, z?: number, k?: number) => number
const add2 = (x:number,y:number,z?:number,k:number = 19):number => {
    if (typeof z === 'number') {
        return x + y + z;
    } else {
        return x+y;
    }
}

// 类型推断, ts系统在没有明确指定类型的时候自动推断
let str = '123'
str = 1