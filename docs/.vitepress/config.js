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
      { text: 'Guide', link: '/Kubernetes/Kubernetes-lvl-1.md' },
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
        text: 'Kubernetes',
        collapsed: true,
        items: [
          { text: 'Kubernetes lvl 1', link: '/Kubernetes/Kubernetes-lvl-1.md' },
          { text: 'Kubernetes lvl 2', link: '/Kubernetes/Kubernetes-lvl-2.md' },
        ]
      },
      {
        text: 'Git',
        collapsed: true,
        items: [
          { text: 'Git and Github', link: '/Git-and-Github/Git.md' },
          { text: 'Branches in git', link: '/Git-and-Github/Branches-in-git.md' },
          { text: 'Terminology', link: '/Git-and-Github/terminology.md' },
          { text: 'Git behind the scenes', link: '/Git-and-Github/Git-BTS.md' },
          { text: 'diff stash and Tags', link: '/Git-and-Github/diff-stash-and-tags.md' },
        ]
      },
      {
        text: 'DevOps',
        collapsed: true,
        items: [
          { text: 'Docker', link: '/DevOps/Docker.md' },
        ]
      },
      {
        text: 'WebSockets',
        collapsed: true,
        items: [
          { text: 'Comming Soon', link: '/Websockets/soon.md' },
        ]
      }
    ],
    search: {
      provider: 'local'
    }
  }
})
