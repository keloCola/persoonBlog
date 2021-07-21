function deepClone(obj) {
//    先判断是不是值类型
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
//    递归
    for (let key in obj) {
        //   判断是不是自身原型链上的 保证key不是原型上的属性
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
        }
    }
//    返回
    return result
}