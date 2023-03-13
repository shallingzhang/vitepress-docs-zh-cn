# 默认主题配置

主题配置允许您自定义主题。您可以通过配置文件中的`themeConfig`选项定义主题配置：

```ts
export default {
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  // Theme related configurations.
  themeConfig: {
    logo: '/logo.svg',
    nav: [...],
    sidebar: { ... }
  }
}
```
本页中记录的选项仅适用于默认主题。不同的主题需要不同的主题配置。当使用自定义主题时，主题配置对象将传递给主题，以便主题可以基于它定义条件行为。

## i18nRouting

- 类型: `boolean`

将语言环境更改为`zh`会将`URL`从`/foo`（或`/en/foo/`）更改为`/zh/foo`。您可以通过将`themeConfig.i18nRoute`设置为`false`来禁用此行为。

## logo

- 类型: `ThemeableImage`

要在导航栏中显示的`logo`文件，就在网站标题之前。接受路径字符串或对象以设置不同的亮/暗模式的`logo`。

```ts
export default {
  themeConfig: {
    logo: '/logo.svg'
  }
}
```
```ts
type ThemeableImage =
  | string
  | { src: string; alt?: string }
  | { light: string; dark: string; alt?: string }
```

## siteTitle

- 类型: `string | false`

您可以自定义此项以替换导航栏中的默认站点标题（`App`配置中的标题）。当设置为`false`时，导航栏中的标题将被禁用。当您的`logo`已经包含网站标题文本时，这很有用。

```ts
export default {
  themeConfig: {
    siteTitle: 'Hello World'
  }
}
```

## nav

- 类型: `NavItem`

导航栏菜单项的配置。您可以在“主题：导航”中了解更多详细信息。

```js
export default {
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ]
  }
}
```

```ts
type NavItem = NavItemWithLink | NavItemWithChildren

interface NavItemWithLink {
  text: string
  link: string
  activeMatch?: string
  target?: string
  rel?: string
}

interface NavItemChildren {
  text?: string
  items: NavItemWithLink[]
}

interface NavItemWithChildren {
  text?: string
  items: (NavItemChildren | NavItemWithLink)[]
  activeMatch?: string
}
```

## sidebar

- 类型: `Siderbar`

侧边栏菜单项的配置。您可以在"主题：侧边栏"了解更多详细信息。

```js
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
          ...
        ]
      }
    ]
  }
}
```
```ts
export type Sidebar = SidebarItem[] | SidebarMulti

export interface SidebarMulti {
  [path: string]: SidebarItem[]
}

export type SidebarItem = {
  /**
   * The text label of the item.
   */
  text?: string

  /**
   * The link of the item.
   */
  link?: string

  /**
   * The children of the item.
   */
  items?: SidebarItem[]

  /**
   * If not specified, group is not collapsible.
   *
   * If `true`, group is collapsible and collapsed by default
   *
   * If `false`, group is collapsible but expanded by default
   */
  collapsed?: boolean
}
```

## aside

- 类型: `boolean`
- 默认值: `true`

将此值设置为`false`将阻止渲染备用容器。

## outline

- 类型: `number | [number,number] | deep | false`
- 默认值: `2`

要在大纲中显示的标题级别。您可以通过传递数字来指定特定级别，也可以通过传递包含下限和上限的元组来提供级别范围。当传递等于`[2，6]`的 \`deep\` 时，除`h1`外，所有标题级别都显示在大纲中。设置`false`以隐藏大纲目录。

## outlineBadges

- 类型: `boolean`
- 默认值: `true`

默认情况下，徽章文本显示在大纲中。禁用此选项可从大纲中隐藏徽章文本。

## outlineTitle

- 类型: `string`
- 默认值: `On this page`

可用于自定义右侧边栏的标题（在大纲链接的顶部）。这在用另一种语言编写文档时很有用。

```js
export default {
  themeConfig: {
    outlineTitle: 'In hac pagina'
  }
}
```

## socialLinks

- 类型: `socialLink[]`

您可以定义此选项，以在导航栏中显示带有图标的社交帐户链接。

```js
export default {
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: '...'
      }
    ]
  }
}
```
```ts
interface SocialLink {
  icon: SocialLinkIcon
  link: string
}

type SocialLinkIcon =
  | 'discord'
  | 'facebook'
  | 'github'
  | 'instagram'
  | 'linkedin'
  | 'mastodon'
  | 'slack'
  | 'twitter'
  | 'youtube'
  | { svg: string }
```

## footer

- 类型: `Footer`

页脚配置。您可以在页脚上添加消息或版权文本，但是，只有当页面不包含侧边栏时才会显示。这是由于设计问题。

```ts
export default {
  themeConfig: {
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
}
```
```ts
export interface Footer {
  message?: string
  copyright?: string
}
```

## editLink

- 类型: `EditLink`

编辑链接允许您在`GitHub`或`GitLab`等`Git`管理服务上显示编辑页面的链接。有关详细信息，请参见"主题：编辑链接"。

```js
export default {
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
}
```
```ts
export interface EditLink {
  pattern: string
  text?: string
}
```

## lastUpdatedText

- 类型: `string`
- 默认值: `Last updated`

在上次更新时间之前显示的前缀文本。

```ts
export default {
  themeConfig: {
    lastUpdatedText: 'Updated Date'
  }
}
```

## algolia

- 类型: `AlgoliaSearch`

支持使用`Algolia DocSearch`搜索文档站点的选项。在"主题：搜索"中了解更多信息

```ts
export interface AlgoliaSearchOptions extends DocSearchProps {
  locales?: Record<string, Partial<DocSearchProps>>
}
```


## carbonAds

- 类型: `CarbonAdsOptions`

一个显示碳广告的选项

```ts
export default {
  themeConfig: {
    carbonAds: {
      code: 'your-carbon-code',
      placement: 'your-carbon-placement'
    }
  }
}
```
```ts
export interface CarbonAdsOptions {
  code: string
  placement: string
}
```

## docFooter

- 类型: `docFooter`

可用于自定义出现在上一个和下一个链接上方的文本。如果不是用英语写文档时，会很有用。

```js
export default {
  themeConfig: {
    docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    }
  }
}
```
```ts
export interface DocFooter {
  prev?: string
  next?: string
}
```

## darkModeSwitchLabel

- 类型: `string`
- 默认值: `Appearance`

可用于自定义暗模式开关标签。此标签仅显示在移动视图中。

## sidebarMenuLabel

- 类型: `string`
- 默认值: `Menu`

可用于自定义侧边栏菜单标签。此标签仅显示在移动视图中。

## returnToTopLabel

- 类型: `string`
- 默认值: `Return to top`

可用于自定义`returnToTop`的标签。此标签仅显示在移动视图中。


