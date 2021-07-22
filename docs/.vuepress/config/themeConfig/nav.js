// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '技能点',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: 'HTML',
        link: '/HTML/',
        // items: [
        //   { text: 'JavaScript', link: '/pages/b69269/' },
        // ],
      },
      {
        text: 'JS',
        link: '/JavaScript/',
        // items: [
        //   { text: 'JavaScript', link: '/pages/b69269/' },
        // ],
      },
      {
        text: 'CSS',
        link: '/CSS/',
        // items: [
        //   { text: 'JavaScript', link: '/pages/b69269/' },
        // ],
      },
      {
        text: '性能优化',
        link: '/Performance/',

      },
    ],
  },
  {
    text: '算法',
    link: '/algorithm/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '算法-栈',
        link: '/Stack/',
        // items: [
        //   { text: '栈', link: '/pages/b69269/' },
        // ],
      },
      {text: "算法-队列",
        link: '/Quence/',},
      {text: "算法-链表",
        link: '/Link/',},
    ],
  },
  {
    text: '面经',
    link: '/ms/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页

  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      {text: '分类', link: '/categories/'},
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'},
    ],
  },
]
