// 类：定义了一切事物的抽象特点
// 对象：类的实例
// 面向对象: OOP 封装，继承，多态
class Animal {
    protected name:string;
    static catogrioes:string[] = ['hello ','hi']
    constructor(name:string) {
        this.name = name;
    }
    run() {
        return `${this.name} is running.`
    }
}

// const snake = new Animal('lily')
// console.log(snake.run())

class Dog extends Animal {
    bark() {
        return `${this.name} is barking...`
    }
}
// const xiaobao = new Dog('xiaobao')
// console.log(xiaobao.bark())

class Cat extends Animal {
    // 重写父类的constructor必须调用 super，通过super可以访问父类的属性
    constructor(name) {
        super(name)
        console.log(`Class Cat's name is : ${this.name}`)
    }
    run() {
        return `Meow, ` + super.run()
    }
}

const maomao = new Cat('maomao')
console.log(maomao.run())
// 默认的属性和方法都是public
// 子类和父类可以访问 protected
// 私有属性 private
// 只读 readonly
// static 