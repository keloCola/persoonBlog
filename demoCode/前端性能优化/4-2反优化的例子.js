//在Node环境下运行
//引用
const {performance, PerformanceObserver} = require('perf_hooks');

const add = (a, b) => a+b;

const num1 = 1;
const num2 = 2;
//标记 开始测量
performance.mark('start');

for(let i = 0; i < 10000000; i++) {
	add(num1, num2);
}

// 在此之前的优化方式不适用于 下面的add 于是反优化之前方式，重新优化17行的add 耗能增加 可以通过注释来查看性能
// add(num1, 's');

for(let i = 0; i < 10000000; i++) {
	add(num1, num2);
}
//标记结束测量
performance.mark('end');
//进行一个监听 得到的对象
const observer = new PerformanceObserver((list) => {
	console.log(list.getEntries()[0]);
})
observer.observe({entryTypes: ['measure']});

//使用测量
performance.measure('测量1', 'start', 'end');