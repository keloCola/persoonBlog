//父类
class People{
    constructor(name) {
        this.name = name
    }
    eat(){
        console.log(`${this.name}eat something`)
    }
}
class Student extends People{
    constructor(name,number) {
        super(name)
        this.number = number
    }
    sayHi(){
        console.log(`姓名：${this.name}学号${this.number}`)
    }
}
//使用
Student.sayHi()