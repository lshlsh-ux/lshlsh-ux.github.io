import { defineConfig } from 'vitepress'

export default defineConfig({
  base:'/',
  title: "我的个人主页信息",
  description: "welcome to 李思涵的个人主页",
  themeConfig: {
    logo: '/头像.jpg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '我的主页',
        items: [
          { text: '关于我', link: '/about' },
          { text: '我的文章', link: '/articles' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'zhihu', link: 'https://www.zhihu.com' }
    ],
    footer: {
      message: '本站基于Vitepress搭建',
      copyright: 'Copyright © 2025 李思涵的个人主页'
    },
    // 补全搜索功能配置
    search: {
      provider: 'local', // 本地搜索（无需第三方服务）
      options: {
        locales: {
          '/': {
            translations: {
              button: {
                buttonText: '搜索', // 搜索按钮文字
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '没有找到结果',
                resetButtonTitle: '清除查询',
                footer: {
                  selectText: '选择',
                  navigateText: '导航'
                }
              }
            }
          }
        }
      }
    }
  },
})