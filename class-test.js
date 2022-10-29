var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类：定义了一切事物的抽象特点
// 对象：类的实例
// 面向对象: OOP 封装，继承，多态
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        return "".concat(this.name, " is running.");
    };
    return Animal;
}());
// const snake = new Animal('lily')
// console.log(snake.run())
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        return "".concat(this.name, " is barking...");
    };
    return Dog;
}(Animal));
// const xiaobao = new Dog('xiaobao')
// console.log(xiaobao.bark())
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log("Class Cat's name is : ".concat(_this.name));
        return _this;
    }
    Cat.prototype.run = function () {
        return "Meow, " + _super.prototype.run.call(this);
    };
    return Cat;
}(Animal));
var maomao = new Cat('maomao');
console.log(maomao.run());
