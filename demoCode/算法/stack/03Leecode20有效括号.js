/*
* 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

- 左括号必须用相同类型的右括号闭合。
- 左括号必须以正确的顺序闭合。
* */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //字符串不是偶数的 直接不合法
    if(s.length%2===1){return false}
    //建一个栈
    const stack = []
    // 扫描字符串
    for(let i =0 ;i<s.length;i++){
        const c = s[i]
        // 遇见左括号 入栈
        if((c==='(')||(c==="[")||(c==="{")){
            stack.push(c)
        }else{
            // 获取栈顶
            const top = stack[stack.length-1]
            // 判断栈顶是否匹配
            if(
                (top==='('&&c===')')||
                (top==='{'&&c==='}')||
                (top==='['&&c===']')
            ){
                // 匹配就出栈
                stack.pop()
            }else{
                return false
            }
        }
    }
    // 判断栈空
    return stack.length===0

};