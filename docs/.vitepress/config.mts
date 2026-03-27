import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Trek Notes',
  description: '户外知识体系与尼泊尔徒步专题',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'Trek Notes',
    nav: [
      { text: '首页', link: '/' },
      { text: '户外知识体系', link: '/outdoor/' },
      { text: '尼泊尔徒步', link: '/nepal/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ],
    footer: {
      message: 'Published with VitePress',
      copyright: 'Copyright © Xiaoyang666'
    },
    sidebar: {
      '/outdoor/': [
        {
          text: '户外知识体系',
          items: [
            { text: '总览', link: '/outdoor/' },
            { text: '底层认知', link: '/outdoor/basics/' },
            { text: '路线与规划', link: '/outdoor/planning/' },
            { text: '装备与补给', link: '/outdoor/gear/' },
            { text: '安全与风险', link: '/outdoor/safety/' }
          ]
        }
      ],
      '/nepal/': [
        {
          text: '尼泊尔徒步',
          items: [
            { text: '总览', link: '/nepal/' },
            { text: 'ABC + Poon Hill', link: '/nepal/abc-poon-hill/' },
            { text: '装备篇', link: '/nepal/gear/' },
            { text: '行程篇', link: '/nepal/itinerary/' },
            { text: '预算篇', link: '/nepal/budget/' },
            { text: '拍摄篇', link: '/nepal/filming/' }
          ]
        }
      ]
    }
  }
})
