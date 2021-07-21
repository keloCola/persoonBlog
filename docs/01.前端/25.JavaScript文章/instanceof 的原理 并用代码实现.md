---
title: instanceof 的原理 并用代码实现
date: 2021-07-19 16:13:07
permalink: /pages/35d691/
categories:
  - 前端
  - JavaScript文章
tags:
  - 
---
##   instanceof 的原理 并用代码实现

- 知识点：如果A沿着原型链能找到B.prototype,那么A instanceof B 为 true

- 解法：遍历A的原型链，如果找到B.prototype 返回true 否则返回false

```js
const instanceOf = (A,B)=>{
  let p = A
  while(p){
    if(p===B.prototype){
      return true
    }
    p= p.__proto__
  }
  return false
}

```
