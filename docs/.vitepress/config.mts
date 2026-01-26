import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/kkdzd/',
  title: "框框的洲店",
  description: "三角洲辅助软件店官网",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      {
        text: '产品',
        items: [
          { text: '框框的扫货机', link: '/kk_trader/kk_trader_summary' },
          { text: '框框的滚仓机', link: '/kk_roll_single/kk_roll_single_summary' },
        ]
      },
    ],

    sidebar: {
      '/kk_trader/': [
        {
          text: '框框的扫货机',
          items: [
            { text: '简介', link: '/kk_trader/kk_trader_summary' },
            { text: '使用教程', link: '/kk_trader/kk_trader_guide' },
            { text: '常见问题', link: '/kk_trader/kk_trader_faq' },
            { text: '下载与更新', link: '/kk_trader/kk_trader_download' },
          ]
        },
        {
          text: '帮助中心',
          items: [
            { text: '关于抢配件', link: '/kk_trader/kk_trader_qiangpeijian' },
            { text: '加群交流', link: '/kk_trader/kk_trader_addQQ' },
          ]
        },
      ],
      // '/kk_roll_single/': [
      //   {
      //     text: '框框的滚仓机(单端)',
      //     items: [
      //       { text: '简介', link: '/kk_roll_single/kk_roll_single_summary' },
      //     ]
      //   }
      // ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
