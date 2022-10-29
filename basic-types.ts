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

// 数组，会对数组内的元素进行限制，元素被限制了
let arrOfNumbers:number[] = [1,2,3,4]
arrOfNumbers.push('a')

// 类数组: ts有一些事内置的数据类型，提前给定义好了
function test() {
    console.log(arguments)
    arguments.length
    // let htmlCollection:Node = 
}

// 元祖中元素可以放不同的数据类型
let user:[string,number] = ['vikings',12]
// user = ['molly',2,'']