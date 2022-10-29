let isDone:boolean = false

let age:number = 123
let binaryNumber:number = 0b111
let firstName:string = 'vikings'

let message:string = `hello, ${firstName},age is ${age}`

let u:undefined = undefined

let n:null = null

// let num:number = undefined

// any类型: 不会进行类型检测
let notsure:any = 'a string'
notsure = 1
notsure = false
notsure = undefined
notsure.getNam()

// 联合类型
let numberOrString: number | string = 'hello'
numberOrString = 1