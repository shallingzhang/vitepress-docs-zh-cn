# 搜索
`VitePress`支持使用`Algolia DocSearch`搜索您的文档站点。参考他们的入门指南。在`.vitepress/config.ts`中，您至少需要提供以下内容才能正常工作：
```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  themeConfig: {
    algolia: {
      appId: '...',
      apiKey: '...',
      indexName: '...'
    }
  }
})
```
如果您不符合`DocSearch`的资格，您可能需要使用一些社区插件，如`https://github.com/emersonbottero/vitepress-plugin-search`或者在这个`GitHub`线程上探索一些自定义解决方案。

## i18n

您可以使用如下配置来使用多语言搜索：
```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  // ...
  themeConfig: {
    // ...

    algolia: {
      appId: '...',
      apiKey: '...',
      indexName: '...',
      locales: {
        zh: {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档'
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消'
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除'
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接'
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者'
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈'
              }
            }
          }
        }
      }
    }
  }
})
```
可以覆盖这些选项。请参阅`Algolia`官方文档以了解更多信息。