import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Trek Notes',
  description: '户外知识体系与尼泊尔徒步专题',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#d6c4a6' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Trek Notes' }],
    ['meta', { property: 'og:description', content: '户外知识体系与尼泊尔徒步专题' }],
    ['meta', { property: 'og:site_name', content: 'Trek Notes' }],
    ['meta', { property: 'og:image', content: '/og-cover.svg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Trek Notes' }],
    ['meta', { name: 'twitter:description', content: '户外知识体系与尼泊尔徒步专题' }],
    ['meta', { name: 'twitter:image', content: '/og-cover.svg' }],
    ['script', {
      defer: '',
      'data-domain': 'trek.xiaoyang666.cc',
      src: 'https://plausible.io/js/script.js'
    }]
  ],
  themeConfig: {
    siteTitle: 'Trek Notes',
    logo: '/favicon.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '户外知识体系', link: '/outdoor/' },
      { text: '尼泊尔徒步', link: '/nepal/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vints327/trek-xiaoyang666' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Field notes shaped into a public knowledge base.',
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
            { text: '天气判断', link: '/outdoor/weather/' },
            { text: '导航与信息判断', link: '/outdoor/navigation/' },
            { text: '过夜与露营', link: '/outdoor/overnight/' },
            { text: '团队协作', link: '/outdoor/teamwork/' },
            { text: '安全与风险', link: '/outdoor/safety/' }
          ]
        }
      ],
      '/nepal/': [
        {
          text: '尼泊尔徒步',
          items: [
            { text: '总览', link: '/nepal/' },
            { text: '路线选择', link: '/nepal/routes/' },
            { text: '背景与目的地', link: '/nepal/background/' },
            { text: '季节与许可', link: '/nepal/season-permits/' },
            { text: 'ABC + Poon Hill', link: '/nepal/abc-poon-hill/' },
            { text: 'ABC 补给与买水', link: '/nepal/abc-poon-hill/water-supply' },
            { text: 'ABC 住宿策略', link: '/nepal/abc-poon-hill/lodging-strategy' },
            { text: 'ABC 装备清单', link: '/nepal/abc-poon-hill/packing-list' },
            { text: 'ABC 雨季与天气应对', link: '/nepal/abc-poon-hill/weather-rain' },
            { text: 'ABC 水袋 vs 水壶', link: '/nepal/abc-poon-hill/water-bladder-vs-bottle' },
            { text: 'ABC 英文简称对照', link: '/nepal/abc-poon-hill/terms-glossary' },
            { text: '高海拔防晒', link: '/nepal/gear/high-altitude-sun-protection' },
            { text: '头灯怎么选', link: '/nepal/gear/headlamp-guide' },
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

