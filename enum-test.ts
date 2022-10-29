enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
// 会自动递增？为啥要设计成这样？搞不懂啊！

const value = 'Up'
if (value === Direction.Up) {
    console.log('go up!')
}