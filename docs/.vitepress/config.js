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
          pattern: 'https://github.com/shallingzhang/vitepress-docs-zh-cn/:path',
          text: 'Edit this page on GitHub'
        },
        darkModeSwitchLabel: 'Appearance',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top'     
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
  carbonAds: {
    code: 'CEBDT27Y',
    placement: 'vuejsorg'
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
      pattern: 'https://github.com/shallingzhang/vitepress-docs-zh-cn/:path',
      text: '在 GitHub 上编辑此页'
    },

    nav: nav(),
            
    sidebar: {
      '/guide/': sidebarGuide(),
      '/en/guide/': sidebarGuide_en(), 
      '/config/': sidebarConfig(),
      '/en/config/': siderbarConfig_en()
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
    socialLinks: [
      { icon: 'github',link: 'https://www.baidu.com'}
    ],
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部'
  }
})


function nav() {
  return [ 
      { text: '指南', link: '/guide/what-is-vitepress' },
      { text: '配置参考', link: '/config/introduction' },
      { text: '运行时 API', link: '/guide/api' },
      { text: '1.0.0-alpha.49',
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
      { text: 'Config Reference', link: '/en/config/introduction' },
      { text: 'Runtime API', link: '/en/guide/api' },
      { text: '1.0.0-alpha.49',
         items: [
           { text: 'Changelog', link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md' },
           { text: 'Contributing', link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md' }
         ]
       }        
  ]
}

function sidebarConfig() {
  return [
    { text: '配置参考',
        collapsed: false,
        items: [
          { text: '介绍', link: '/config/introduction' },
          { text: 'App 配置', link: '/config/app-config' },
          { text: '默认主题配置', link: '/config/theme-config' },
          { text: 'Frontmatter 配置', link: '/config/frontmatter-config' }
        ]
    }  
  ]
}

function siderbarConfig_en() {
  return [
    { text: 'Config Reference',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/en/config/introduction' },
        { text: 'App Config', link: '/en/config/app-config' },
        { text: 'Default Theme Config', link: '/en/config/theme-config' },
        { text: 'Frontmatter Config', link: '/en/config/frontmatter-config' }
      ]
    }
  ]
}

function sidebarGuide() {
  return [
    { text: '介绍',
      collapsed: false,
      items: [
        { text: '什么是 VitePress ?', link: '/guide/what-is-vitepress' },
        { text: '快速开始', link: '/guide/getting-started' },
        { text: '配置', link: '/guide/configuration' },
        { text: '路由', link: '/guide/routing' },
        { text: '部署', link: '/guide/deploying' }      
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
        { text: '构建自定义主题', link: '/guide/customization-intro' },
        { text: '运行时 API', link: '/guide/api' },
        { text: 'Build-Time Data Loading', link: '/guide/data-loading' }
      ]
    },
    { text: '迁移',
      collapsed: false,
      items: [
        { text: '从 VuePress 迁移', link: '/guide/migration-from-vuepress' },
        { text: '从 VitePress 0.x 迁移', link: '/guide/migration-from-vitepress-0' }
      ]
    }    
  ]
}

function sidebarGuide_en() {
  return [
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
    { text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is VitePress ?', link: '/en/guide/what-is-vitepress' },
        { text: 'Getting Started', link: '/en/guide/getting-started' },
        { text: 'Configuration', link: '/en/guide/configuration' },
        { text: 'Routing', link: '/en/guide/routing' },
        { text: 'Deploying', link: '/en/guide/deploying' }         
      ]
    },              
    { text: 'Customization',
        collapsed: false,
        items: [
          { text: 'Building a Custom Theme', link: '/en/guide/customization-intro' },
          { text: 'Runtime API', link: '/en/guide/api' },         
          { text: 'Build-Time Data Loading', link: '/en/guide/data-loading' }          
        ]
    },
    { text: 'Migrations',
      collapsed: false,
      items: [
        { text: 'Migration from VuePress', link: '/en/guide/migration-from-vuepress' },
        { text: 'Migration from VitePress 0.x', link: '/en/guide/migration-from-vitepress-0' }
      ]
    }    
  ]
}
