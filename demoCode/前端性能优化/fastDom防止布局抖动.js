/*
* 布局抖动
* 由于连续布局操作导致强制布局更新来制造一下布局抖动
* */
// // 获取页面上的卡片
// let card = document.getElementsByClassName('aaa')
// // 修改卡片宽度
// const update=(timeStamp)=>{
//     for(let i = 0;i<card.length;i++){
//         // 通过offsetTop计算修改width
//         card[i].style.width = ((Math.sin(card[i].offsetTop+timeStamp/1000)+1)*500)+'px'
//
//     }
//     window.requestAnimationFrame(update)
// }


/*
* 解决布局抖动问题
* fastDom 用于读写分离
* */
//  首先在HTML中引入fastDom文件
// <script src='./fastDom.js'></script>
// 获取页面上的卡片
let card = document.getElementsByClassName('aaa')
// 修改卡片宽度
const update = (timeStamp) => {
    for (let i = 0; i < card.length; i++) {
        //fastDom 读取
        fastdom.measure(() => {
            //    读取top值
            let top = card[i].offsetTop
            //    fastDom 赋值
            fastdom.mutate(() => {
                // 通过offsetTop计算修改width
                card[i].style.width = ((Math.sin(top + timeStamp / 1000) + 1) * 500) + 'px'

            })
        })

    }
    window.requestAnimationFrame(update)
}