var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
// 会自动递增？为啥要设计成这样？搞不懂啊！
var value = 'Up';
if (value === Direction.Up) {
    console.log('go up!');
}
