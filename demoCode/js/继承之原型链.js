/*借助构造函数*/
function Parent1() {
    this.name = 'this is p1`s name'
}

Parent1.prototype.say = function () {
    console.log('this is p1.prototype`s say function')
}

function Child1() {
//    改变构造函数的this指向 指向Child1的实例 实现继承
    Parent1.call(this) //apply也行 改变上下文
    this.type = 'this is C1`s type'
}

//实例化child1
console.log(new Child1())

// ========================================================
/*
   * 借助原型链实现继承
   * */
function Parent2() {
    this.name = 'Parent2'
    this.p = [1, 2, 3]
}

function Child2() {
    this.type = 'child2'
}

//    重点！
Child2.prototype = new Parent2()
console.log(new Child2)
var s1 = new Child2()
var s2 = new Child2()
s1.p.push(4)
console.log(s1, s2)
// ===================================================
/*
   * 组合方式
   * */
function Parent3() {
    this.name = 'Parent3'
    this.p = [1, 2, 3]
}

function Child3() {
    this.type = 'child3'
    //    构造函数继承
    Parent3.call(this)
}

// =======================================
//    原型链继承
Child3.prototype = new Parent3()
var s3 = new Child3()
var s4 = new Child3()
s3.p.push(4)
console.log(s3, s4)

/*
* 组合方式 优化
* */
function Parent4() {
    this.name = 'Parent4'
    this.p = [1, 2, 4]
}

function Child4() {
    this.type = 'child4'
    //    构造函数继承
    Parent4.call(this)
}

//    原型链继承
Child4.prototype = Parent4.prototype
var s5 = new Child4()
var s6 = new Child4()
s5.p.push(5)
console.log(s5, s6)
console.log(s5 instanceof Child4, s5 instanceof Parent4)//true true
console.log(s5.constructor === Parent4)//true

//========================================
/*
* 组合方式 优化问题解决
* */
function Parent5() {
    this.name = 'Parent5'
    this.p = [1, 2, 5]
}

function Child5() {
    this.type = 'child5'
    //    构造函数继承
    Parent5.call(this)
}

//    原型链继承
Child5.prototype = Object.create(Parent5.prototype)
//    覆盖一下 不然还是找到父类的
Child5.prototype.constructor = Child5