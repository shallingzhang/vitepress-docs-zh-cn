
# 网站配置

网站配置是您可以定义站点的全局设置的地方。应用程序配置选项定义应用于每个`VitePress`站点的设置，而不管它使用的是什么主题。例如，基本目录或站点标题。

## 概述

### 配置示例

配置文件始终从`<root>/.vitpress/config.[ext]`解析，其中`<root>`是`vitepress`项目的根目录，`[ext]`是支持的文件扩展名之一。支持开箱即用的`TypeScript`。支持的扩展包括`.js`、`.ts`、.`cjs`、`.mjs`、`.cts`和`.mts`。

建议在配置文件中使用`ES`模块语法。配置文件默认应该导出一个对象:

```ts
export default {
  // app level config options
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  ...
}
```

### 配置智能感知

使用`defineConfig`助手将为配置选项提供`typescript`支持的智能感知。假设您的`IDE`支持它，这应该在`JavaScript`和`TypeScript`中都能工作。

```js
import { defineConfig } from 'vitepress'
export default defineConfig({
  // ...
})
```

### 典型主题配置

默认情况下，`defineConfig` 助手期望默认主题的主题配置类型:

```ts
import { defineConfig } from 'vitepress'
export default defineConfig({
  themeConfig: {
    // Type is `DefaultTheme.Config`
  }
})
```

如果你使用一个自定义主题，并且想要对主题配置进行类型检查，你需要使用`defineConfigWithTheme`来代替，并通过一个泛型参数来传递自定义主题的配置类型:

```ts
import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from 'your-theme'
export default defineConfigWithTheme<ThemeConfig>({
  themeConfig: {
    // Type is `ThemeConfig`
  }
})
```

### Vite, Vue & Markdown 配置

- Vite

  您可以使用`VitePress`配置中的`Vite`选项配置底层的`Vite`实例。不需要创建单独的`Vite`配置文件。

- Vue

  `VitePress`已经包含了`Vite`的官方`Vue`插件（`@vitejs/plugin-Vue`）。您可以使用`VitePress`配置中的`vue`选项来配置其选项。

- Markdown

   您可以使用`VitePress`配置中的`markdown`选项来配置底层的`Markdown-it`实例。
   
## 网站的元数据
### 标题

- 类型： `string`
- 默认值： `VitePress`
- 通过`Frontmatter`可以覆盖每页

网站的标题。当使用默认主题时，这将显示在导航栏中。

它也将用作所有单独页面标题的默认后缀，除非定义了`titleTemplate`。单个页面的最终标题将是其第一个`＜h1＞`标题的文本内容，并以全局标题作为后缀。例如，使用以下配置和页面内容：

```ts
export default {
  title: 'My Awesome Site'
}
```

```md
# Hello
```

页面的标题将是`Hello | My Awesome Site`。

### 标题模板（titleTemplate）

- 类型： `string`
- 通过`Frontmatter`可以覆盖每页

允许自定义每个页面的标题后缀或整个标题。例如：

```ts
export default {
  title: 'My Awesome Site',
  titleTemplate: 'Custom Suffix'
}
```
```md
# Hello
```
页面的标题将是`Hello | Custom Suffix`。

要完全自定义标题应该如何呈现，你可以在`titleTemplate`中使用`:title`符号:

```ts
export default {
  titleTemplate: ':title - Custom Suffix'
}
```

此处`:title`将被替换为从页面第一个`<h1>`标题推断出的文本。前面示例页面的标题将是`Hello - Custom Suffix`。

该选项可以设置为`false`以禁用标题后缀。

### 描述

- 类型：`string`
- 默认值：`A VitePress site
- 可通过`frontmatter`覆盖每页
站点的说明。这将在页面`HTML`中呈现为`＜meta＞`标记。
```ts
export default {
  description: 'A VitePress site'
}
```

### head

- 类型：`HeadConfig[]`
- 默认值：`[]`
- 可通过`frontmatter`覆盖每页

要在页面`HTML`的`<head>`标签中呈现的其他元素。用户添加的标签将在`</head>`之前，在`VitePress`标记之后呈现。

```ts
export default {
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ]
    // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ]
}
```

```ts
type HeadConfig =
  | [string, Record<string, string>]
  | [string, Record<string, string>, string]
```
### lang
- 类型: `string`
- 默认值: `en-US`
站点的语言属性。这将在页面`html`中呈现为`<html lang=“en-US”>`标记。
```ts
export default {
  lang: 'en-US'
}
```
### base

- 类型： `string`
- 默认值： `/`

网站将部署在`base URL`。如果您计划在子路径（例如`GitHub`页面）下部署网站，则需要设置此`base`值。
如果您计划将站点部署到`https://foo.github.io/bar/`，则应将`base`设置为“`/bar/`”。它应该始终以斜线开头和结尾。
在其他选项中，所有以`/`开头的`URL`都会自动加上`base`值，因此只需指定一次。

```ts
export default {
  base: '/base/'
}
```

## 路由

### cleanUrls

- 类型：`boolean`
- 默认值：`false`

当设置为`true`时，`VitePress`将从`URL`中删除尾随的`.html`。另请参阅生成干净的`URL`。

::: warning 服务器需要支持

启用此功能可能需要在您的托管平台上进行额外配置。要使其工作，您的服务器必须能够在访问`/foo`时提供`/foo.html`，而无需重定向。

:::

### rewrites

- 类型: `Record<string, string>`

定义`自定义目录`<->`URL`映射。有关更多详细信息，请参阅路由：路由重写。

```ts
export default {
  rewrites: {
    'source/:page': 'destination/:page'
  }
}
```

## 构建

### srcDir

- 类型: `string`
- 默认值: `.`

相对于项目根目录，存储`markdown`页面的目录。另请参阅根目录和源目录。

```ts
export default {
  srcDir: './src'
}
```

### srcExclude

- 类型：`string`
- 默认值：`undefined`

用于匹配应作为源内容排除的`markdown`文件的`glob`模式。

```ts
export default {
  srcExclude: ['**/README.md', '**/TODO.md']
}
```

### outDir

- 类型：`string`
- 默认值：`./.vitepress/dist`

站点的生成输出位置，相对于项目根目录。另请参阅根目录和源目录。

```ts
export default {
  outDir: '../public'
}
```

### cacheDir

- 类型：`string`
- 默认值：`./.vitepress/cache`

缓存文件的目录，相对于项目根目录。

```ts
export default {
  cacheDir: './.vitepress/.vite'
}
```

### ignoreDeadLinks

- 类型: `boolean | 'localhostLinks' | (string | RegExp | ((link: string) => boolean))[]`
- 默认值: `false`

当设置为`true`时，`VitePress`不会因死链接而导致构建失败。

当设置为`localhostLinks`时，构建将在死链接上失败，但不会检查`localhost`链接。

```ts
export default {
  ignoreDeadLinks: true
}
```

它也可以是extact url字符串、正则表达式模式或自定义过滤函数的数组。

```ts
export default {
  ignoreDeadLinks: [
    // ignore exact url "/playground"
    '/playground',
    // ignore all localhost links
    /^https?:\/\/localhost/,
    // ignore all links include "/repl/""
    /\/repl\//,
    // custom function, ignore all links include "ignore"
    (url) => {
      return url.toLowerCase().includes('ignore')
    }
  ]
}
```

### mpa <Badge type="info" text="experimental" />

  - 类型: `boolean`
  - 默认值: `false`

当设置为`true`时，生产应用程序将以`MAP`模式构建。`MPA`模式默认提供`0kb JavaScript`，代价是禁用客户端导航，并需要显式的交互选择。

## 主题
### 外观

- 类型： `boolean | dark`
- 默认值： `true`

是否启用“暗色”模式 (通过将`.dark`类添加到`＜html＞`元素)

- 如果该选项设置为`true`，则默认主题将由用户首选的颜色方案确定。
- 如果该选项设置为`dark`，则默认情况下主题将设置为`暗色`，除非用户手动切换它。
- 如果该选项设置为`false`，则用户将无法切换主题。

它还注入了内联脚本，该脚本尝试通过`vitepress-theme-appearances`键从本地存储读取用户设置，并恢复用户首选的颜色模式。这样可以确保在渲染页面之前应用`.dark`类，以避免闪烁。

```ts
export default {
  appearance: true
}
```

### lastUpdated 

- 类型: `boolean`
- 默认值: `false`

是否使用`Git`获取每个页面的最后更新时间戳。时间戳将包含在每个页面的页面数据中，可通过`useData`访问。

使用默认主题时，启用此选项将显示每个页面的上次更新时间。您可以通过`themeConfig.lastUpdatedText`选项自定义文本。


```ts
export default {
  lastUpdated: true
}
```

## 定制

### markdown

- 类型： `MarkDownOption`

配置`Markdown`解析器选项。`VitePress`使用`Markdown-it`作为解析器，使用`Shiki` 高亮显示语法语言。在该选项中，您可以传递各种与`Markdown`相关的选项以满足您的需求。

```js
export default {
  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true,
    // adjust how header anchors are generated,
    // useful for integrating with tools that use different conventions
    anchors: {
      slugify(str) {
        return encodeURIComponent(str)
      }
    }
  }
}
```
以下是此对象中可以使用的所有选项：

```ts
interface MarkdownOptions extends MarkdownIt.Options {
  // Custom theme for syntax highlighting.
  // You can use an existing theme.
  // See: https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
  // Or add your own theme.
  // See: https://github.com/shikijs/shiki/blob/main/docs/themes.md#loading-theme
  theme?:
    | Shiki.IThemeRegistration
    | { light: Shiki.IThemeRegistration; dark: Shiki.IThemeRegistration }
  // Enable line numbers in code block.
  lineNumbers?: boolean
  // Add support for your own languages.
  // https://github.com/shikijs/shiki/blob/main/docs/languages.md#supporting-your-own-languages-with-shiki
  languages?: Shiki.ILanguageRegistration
  // markdown-it-anchor plugin options.
  // See: https://github.com/valeriangalliat/markdown-it-anchor#usage
  anchor?: anchorPlugin.AnchorOptions
  // markdown-it-attrs plugin options.
  // See: https://github.com/arve0/markdown-it-attrs
  attrs?: {
    leftDelimiter?: string
    rightDelimiter?: string
    allowedAttributes?: string[]
    disable?: boolean
  }
  // specify default language for syntax highlighter
  defaultHighlightLang?: string
  // @mdit-vue/plugin-frontmatter plugin options.
  // See: https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-frontmatter#options
  frontmatter?: FrontmatterPluginOptions
  // @mdit-vue/plugin-headers plugin options.
  // See: https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-headers#options
  headers?: HeadersPluginOptions
  // @mdit-vue/plugin-sfc plugin options.
  // See: https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-sfc#options
  sfc?: SfcPluginOptions
  // @mdit-vue/plugin-toc plugin options.
  // See: https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
  toc?: TocPluginOptions
  // Configure the Markdown-it instance.
  config?: (md: MarkdownIt) => void
}
```

### vite

- 类型: `import('vite').UserConfig`

将原始`Vite Config`传递给内部`Vite dev`服务器/`bundler`。

```js
export default {
  vite: {
    // Vite config options
  }
}
```

### vue

- 类型: `import('@vitejs/plugin-vue').Options`

将原始的 `@vitejs/plugin-vue` 选项传递给内部插件实例。

```js
export default {
  vue: {
    // @vitejs/plugin-vue options
  }
}
```

## Build Hooks

- Sitemap
- Serach Indexing
- PWA
- Teleports

### buildEnd

- 类型: `(siteConfig: SiteConfig) => Awaitable<void>`

`buildEnd`是一个构建`CLI`挂钩，它将在构建（`SSG`）完成后但在`VitePress CLI`进程退出之前运行。

```ts
export default {
  async buildEnd(siteConfig) {
    // ...
  }
}
```

### postRender

- 类型: `(context: SSGContext) => Awaitable<SSGContext | void>`

`postRender`是一个构建挂钩，在`SSG`渲染完成时调用。它将允许您在`SSG`期间处理传送的内容。

```ts
export default {
  async postRender(context) {
    // ...
  }
}
```

```ts
interface SSGContext {
  content: string
  teleports?: Record<string, string>
  [key: string]: any
}
```

### transformHead

- 类型: `(context: TransformContext) => Awaitable<HeadConfig[]>`

`transformHead`是一个构建钩子，用于在生成每个页面之前转换头。它将允许您添加无法静态添加到`VitePress`配置中的头条目。您只需要返回额外的条目，它们将自动与现有条目合并。

::: warning

Don't mutate anything inside the `ctx`.

:::

```ts
export default {
  async transformHead(context) {
    // ...
  }
}
```

```ts
interface TransformContext {
  page: string // e.g. index.md (relative to srcDir)
  assets: string[] // all non-js/css assets as fully resolved public URL
  siteConfig: SiteConfig
  siteData: SiteData
  pageData: PageData
  title: string
  description: string
  head: HeadConfig[]
  content: string
}
```

### transformHtml

- 类型: `(code: string, id: string, ctx: TransformContext) => Awaitable<string | void>`

`transformHtml`是一个构建挂钩，用于在保存到磁盘之前转换每个页面的内容。

::: warning

Don't mutate anything inside the `ctx`. Also, modifying the html content may cause hydration problems in runtime.

:::

```ts
export default {
  async transformHtml(code, id, context) {
    // ...
  }
}
```

### transformPageData

- 类型: `(pageData: PageData, ctx: TransformPageContext) => Awaitable<Partial<PageData> | { [key: string]: any } | void>`

`transformPageData`是一个钩子，用于转换每个页面的`pageData`。您可以直接更改`pageData`或返回更改后的值，这些值将合并到`pageData`中。

::: warning

Don't mutate anything inside the `ctx`.

:::

```ts
export default {
  async transformPageData(pageData, { siteConfig }) {
    pageData.contributors = await getPageContributors(pageData.relativePath)
  }
  // or return data to be merged
  async transformPageData(pageData, { siteConfig }) {
    return {
      contributors: await getPageContributors(pageData.relativePath)
    }
  }
}
```

```ts
interface TransformPageContext {
  siteConfig: SiteConfig
}
```


