//利用Chrome DevTools 打开时可以复现抖动的问题（pointer event）
//获取卡片
// let cards = document.getElementsByClassName('aaa')
//
// //修改图片宽度
// function changeWidth(rand) {
//     for (let i = 0; i < cards.length; i++) {
//         //    使用随机函数更改宽度
//         cards[i].style.width = (Math.sin(rand / 1000) + 1) * 500 + 'px';
//
//     }
// }
//
// window.addEventListener('pointermove', (e) => {
//     //获取鼠标横坐标
//     let pos = e.clientX
//     changeWidth(pos)
// })

/*解决
* */
let cards = document.getElementsByClassName('aaa');

//修改图片宽度
function changeWidth(position) {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.width = (Math.sin(position / 1000) + 1) * 500 + 'px';
    }
}

let ticking = false;
//利用Chrome DevTools来复现并分析抖动问题(pointer event)
window.addEventListener('pointermove', (e) => {
    let pos = e.clientX //获取鼠标的横坐标位置
    if (ticking) return; //如果ticking为true，说明已经有个requestAnimationFrame执行了

    ticking = true; //如果ticking为true，说明已经有个requestAnimationFrame执行了
    window.requestAnimationFrame(() => {
        changeWidth(pos);
        //如果requestAnimationFrame里面的事情执行了，ticking再调整回false，接着又可以触发下一个requestAnimationFrame，这样即使pointermove的触发频率很高我们也不按照它实际的触发频率去触发，而是按照requestAnimationFrame调度的频率。
        ticking = false;
    });
})
