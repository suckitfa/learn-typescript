// 定义函数的时候定义不指定使用的时候制定类型
// 可以看成是占位符
function echo(arg) {
    return arg;
}
var str = 'str';
var result = echo('str');
var flag = echo(false);
// 泛型的写法 generics
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
var result2 = swap(['string', 12]);
console.log(result2);
function echoWithArray(arg) {
    console.log(arg.length);
    return arg;
}
var arrs = echoWithArray([1, 2, 3, 4]);
console.log(arrs);
function echoWithLength(arg) {
    return arg;
}
var strTest = echoWithLength('str');
var obj = echoWithLength({ length: 1 });
var arr2 = echoWithLength([1, 2, 3]);
// 实现队列
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        return this.data.push(item);
    };
    Queue.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.push(1);
console.log(queue.pop().toFixed());
