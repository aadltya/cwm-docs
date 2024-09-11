import { defineConfig } from 'vitepress'

export default defineConfig({
  themeConfig: {
    siteTitle: 'code with monu',
    nav: [
      { text: 'Guide', link: '/guide' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aadltya' },
      { icon: 'twitter', link: 'https://twitter.com/aditya_swamii' },
    ],
    sidebar: [
      {
        text: 'Git and Github',
        collapsed: true,
        items: [
          { text: 'Git and Github', link: '/Git%20and%20Github/Git.md' },
          { text: 'Terminology', link: '/Git%20and%20Github/terminology.md' },
          { text: 'Git behind the scenes', link: '/Git%20and%20Github/Git-BTS.md' }
        ]
      },
      {
        text: 'DevOps',
        collapsed: true,
        items: [
          { text: 'Item C', link: '/item-c' },
          { text: 'Item D', link: '/item-d' },
        ]
      }
    ],
    search: {
      provider: 'local'
    }
  }
})
