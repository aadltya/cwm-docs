import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'CWM',
  description: 'A documentation site for advanced topics in programming and Software Engineers.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],

  themeConfig: {
    siteTitle: 'Code with Me',
    nav: [
      { text: 'Guide', link: '/Git and Github/Git.md' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aadltya/cwm-docs' },
      { icon: 'twitter', link: 'https://twitter.com/aditya_swamii' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 CWM',
    },
    sidebar: [
      {
        text: 'Git',
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
          { text: 'Docker', link: '/DevOps/Docker.md' },
          { text: 'Kubernetes', link: '/DevOps/Kubernetes.md' },
        ]
      }
    ],
    search: {
      provider: 'local'
    }
  }
})
