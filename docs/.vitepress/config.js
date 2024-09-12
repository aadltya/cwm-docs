import { defineConfig } from 'vitepress'

export default defineConfig({
  themeConfig: {
    siteTitle: 'code with me',
    nav: [
      { text: 'Guide', link: '/Git and Github/Git.md' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aadltya/cwm-docs' },
      { icon: 'twitter', link: 'https://twitter.com/aditya_swamii' },
    ],
    sidebar: [
      {
        text: 'Git and Github',
        collapsed: true,
        items: [
          { text: 'Git and Github', link: '/Git%20and%20Github/Git.md' },
          { text: 'Terminology', link: '/Git%20and%20Github/terminology.md' },
          { text: 'Git behind the scenes', link: '/Git%20and%20Github/Git-BTS.md' },
          { text: 'Branches in git', link: '/Git%20and%20Github/Branches-in-git.md' },
          { text: 'diff stash and Tags', link: '/Git%20and%20Github/diff-stash-and-tags.md' },
        ]
      },
      {
        text: 'DevOps',
        collapsed: true,
        items: [
          { text: 'comming soon', link: '/DevOps/cumingSoon.md' },
        ]
      }
    ],
    search: {
      provider: 'local'
    }
  }
})
