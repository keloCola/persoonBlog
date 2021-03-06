// HindClass 我们简称 HC
/* 1 */
class RectArea { // HC0 隐藏对象0
    constructor(l, w) {
        this.l = l; // HC1
        this.w = w; // HC2
    }
}

const rect1 = new RectArea(3,4); // 创建了隐藏类HC0, HC1, HC2
const rect2 = new RectArea(5,6); // 相同的对象结构，可复用之前的所有隐藏类



const car1 = {color: 'red'}; // HC0
car1.seats = 4; // HC1

const car2 = {seats: 2}; // 没有可复用的隐藏类，创建HC2
car2.color = 'blue'; // 没有可复用的隐藏类，创建HC3



/* 2 */
const car1 = {color: 'red'}; // In-object 属性
car1.seats = 4; // Normal/Fast 属性，存储在property store里，需要通过描述数组间接查找



/* 3 */
//类数组的foreach实现
Array.prototype.forEach.call(arrObj, (value, index) => { // 不如在真实数组上效率高
  console.log(`${ index }: ${ value }`);
});
//推荐方式
const arr = Array.prototype.slice.call(arrObj, 0); // 转换的代价比影响优化小
arr.forEach((value, index) => {
  console.log(`${ index }: ${ value }`);
});



/* 4 避免读取超过数组的长度*/
function foo(array) {
  for (let i = 0; i <= array.length; i++) { // 越界比较
    if(array[i] > 1000) { // 1.沿原型链的查找 2.造成undefined与数进行比较
        console.log(array[i]); // 业务上无效、出错
    }
  }
}
//[0,100,1000]


/* 5 避免类型转换 */
const array = [3, 2, 1]; // PACKED_SMI_ELEMENTS

array.push(4.4); // PACKED_DOUBLE_ELEMENTS




