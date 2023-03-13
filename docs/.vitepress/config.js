import { defineConfig } from 'vitepress';

export default defineConfig({
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/' 
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: nav_en(),
        docFooter: {
          prev: 'Previous Page',
          next: 'Next Page'
        },
        outlineTitle: 'On this page',
        editLink: {
          pattern: 'https://github.com/shallingzhang/vitepress-docs-zh-cn/docs/:path',
          text: 'Edit this page on GitHub'
        },
        darkModeSwitchLabel: 'Appearance',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top',
        langMenuLabel: 'Change Language'    
      }
    }
  }, 

  title: 'VitePress',
  description: 'A VitePress site',
  appearance: true,
  base: '/vitepress-docs-zh-cn/',
  lastUpdated: true,
  ignoreDeadLinks: true,  
  cleanUrls: 'true',
  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: false
  },

// theme related configurations.

  themeConfig: {
    logo: '/images/logo.svg',
    siteTitle: 'VitePress',
    i18nRouting: true,
    aside: 'true',
    lastUpdatedText: '最后更新时间',
    outline: 'deep',
    outlineTitle: '本页目录',
    editLink: {
      pattern: 'https://github.com/shallingzhang/vitepress-docs-zh-cn/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    nav: nav(),
            
    sidebar: {
      '/guide/': sidebarGuide(),
      '/en/guide/': sidebarGuide_en(), 
      '/reference/': sidebarReference(),
      '/en/reference/': siderbarReference_en()
    },

    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2019-present Evan You'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    },
    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg'
    },
    socialLinks: [
      { icon: 'github',link: 'https://github.com/shallingzhang/vitepress-docs-zh-cn' }
    ],
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '选择语言'
  }
})


function nav() {
  return [ 
      { text: '指南', link: '/guide/what-is-vitepress' },
      { text: '参考', link: '/reference/site-config' },
      { text: '1.0.0-alpha.50',
         items: [
           { text: '变更日志', link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md' },
           { text: '贡献', link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md' }
         ]
       }        
  ]
}

function nav_en() {
  return [ 
      { text: 'Guide', link: '/en/guide/what-is-vitepress' },
      { text: 'Reference', link: '/en/reference/site-config' },
      { text: '1.0.0-alpha.50',
         items: [
           { text: 'Changelog', link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md' },
           { text: 'Contributing', link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md' }
         ]
       }        
  ]
}

function sidebarReference() {
  return [
    { text: '参考',
        collapsed: false,
        items: [
          { text: '网站配置', link: '/reference/site-config' },
          { text: 'Frontmatter 配置', link: '/reference/frontmatter-config' },
          { text: '运行时 API', link: '/reference/runtime-api' },
          { text: '命令行接口', link: '/reference/cli' }
        ]
    },
    { text: '默认主题',
      collapsed: false,
      items: [
        { text: '概述', link: '/reference/default-theme-config' },
        { text: '导航栏', link: '/reference/default-theme-nav' },
        { text: '侧边栏', link: '/reference/default-theme-sidebar' },
        { text: '主页', link: '/reference/default-theme-home-page' },
        { text: '页脚', link: '/reference/default-theme-footer' },
        { text: '布局', link: '/reference/default-theme-layout' },
        { text: '徽章', link: '/reference/default-theme-badge' },
        { text: '团队页面', link: '/reference/default-theme-team-page' },
        { text: '上/下页链接', link: '/reference/default-theme-prev-next-link' },
        { text: '编辑链接', link: '/reference/default-theme-edit-link' },
        { text: '最近更新的时间戳', link: '/reference/default-theme-last-updated' },
        { text: 'Algolia 搜索', link: '/reference/default-theme-search' },
        { text: 'Carbon Ads', link: '/reference/default-theme-carbon-ads' }
      ]
    }
  ]
}

function siderbarReference_en() {
  return [
    { text: 'Reference',
      collapsed: false,
      items: [
        { text: 'Site Config', link: '/en/reference/site-config' },
        { text: 'Frontmatter Config', link: '/en/reference/frontmatter-config' },
        { text: 'Runtime API', link: '/en/reference/runtime-api' },
        { text: 'CLI', link: '/en/reference/cli' }
      ]
    },
    { text: 'Default Theme',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/en/reference/default-theme-config' },
        { text: 'Nav', link: '/en/reference/default-theme-nav' },
        { text: 'Sidebar', link: '/en/reference/default-theme-sidebar' },
        { text: 'Home Page', link: '/en/reference/default-theme-home-page' },
        { text: 'Footer', link: '/en/reference/default-theme-footer' },
        { text: 'Layout', link: '/en/reference/default-theme-layout' },
        { text: 'Badge', link: '/en/reference/default-theme-badge' },
        { text: 'Team Page', link: '/en/reference/default-theme-team-page' },
        { text: 'Prev / Next Links', link: '/en/reference/default-theme-prev-next-link' },
        { text: 'Edit Link', link: '/en/reference/default-theme-edit-link' },
        { text: 'Last Updated Timestamp', link: '/en/reference/default-theme-last-updated' },
        { text: 'Algolia Search', link: '/en/reference/default-theme-search' },
        { text: 'Carbon Ads', link: '/en/reference/default-theme-carbon-ads' }
      ]
    }

  ]
}

function sidebarGuide() {
  return [
    { text: '简介',
      collapsed: false,
      items: [
        { text: '什么是 VitePress ?', link: '/guide/what-is-vitepress' },
        { text: '快速开始', link: '/guide/getting-started' },
        { text: '路由', link: '/guide/routing' },
        { text: '部署', link: '/guide/deploy' }      
      ]
    },
    { text: '写作',
      collapsed: false,
      items: [
        { text: 'Markdown 扩展', link: '/guide/markdown' },
        { text: '资产处理', link: '/guide/asset-handling' },
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: '在 Markdown 中使用 Vue', link: '/guide/using-vue-in-markdown' },       
        { text: '国际化', link: '/guide/i18n' }
      ]
    },
    { text: '自定义',
      collapsed: false,
      items: [
        { text: '使用自定义主题', link: '/guide/custom-theme' },
        { text: '扩展默认主题', link: '/guide/extending-default-theme' },         
        { text: '构建时数据加载', link: '/guide/data-loading' },    
        { text: '连接到内容管理系统', link: '/guide/cms' }
      ]
    },
    { text: '实验',
      collapsed: false,
      items: [
        { text: 'MPA Mode', link: '/guide/mpa-mode' }
      ]
    },
    { text: '配置 和 API 参考', link: '/reference/site-config' }   
  ]
}

function sidebarGuide_en() {
  return [
    { text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is VitePress ?', link: '/en/guide/what-is-vitepress' },
        { text: 'Getting Started', link: '/en/guide/getting-started' },
        { text: 'Routing', link: '/en/guide/routing' },
        { text: 'Deploy', link: '/en/guide/deploy' }         
      ]
    },      
    { text: 'Writing',
      collapsed: false,
      items: [
        { text: 'Markdown Extensions', link: '/en/guide/markdown' },
        { text: 'Asset Handling', link: '/en/guide/asset-handling' },
        { text: 'Frontmatter', link: '/en/guide/frontmatter' },
        { text: 'Using Vue in Markdown', link: '/en/guide/using-vue-in-markdown' },
        { text: 'Internationalization', link: '/en/guide/i18n' } 
      ]
    },        
    { text: 'Customization',
        collapsed: false,
        items: [
          { text: 'Using a Custom Theme', link: '/en/guide/custom-theme' },
          { text: 'Extending the Default Theme', link: '/en/guide/extending-default-theme' },         
          { text: 'Build-Time Data Loading', link: '/en/guide/data-loading' },    
          { text: 'Connecting to a CMS', link: '/en/guide/cms' }      
        ]
    },
    { text: 'Experimental',
      collapsed: false,
      items: [
        { text: 'MPA Mode', link: '/en/guide/mpa-mode' }
      ]
    },
    { text: 'Config & API Reference', link: '/en/reference/site-config' }    
  ]
}
