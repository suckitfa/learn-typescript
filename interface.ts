// 对对象的形状进行描述
interface Person {
    // 标识可读属性
    readonly id:number
    name:string;
    age:number;
}
let viking:Person = {
    id:1,
    name:"viking",
    age:18
}
// 对可读readonly属性进行赋值报错
viking.id = 1;
// 对class进行抽象
// Duck Typing 鸭子类型