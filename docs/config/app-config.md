# App 配置
`App` 配置是您可以定义站点的全局配置的地方。`App`配置选项定义应用于每个`VitePress`站点的设置，而不管它使用的是什么主题。例如，基本目录或站点标题。

```ts
export default {
  // app level config options
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  ...
}
```

## 外观

- 类型： `boolean | dark`
- 默认值： `true`

是否启用“暗色”模式

- 如果该选项设置为`true`，则默认主题将由用户首选的颜色方案确定。
- 如果该选项设置为`dark`，则默认情况下主题将设置为`暗色`，除非用户手动切换它。
- 如果该选项设置为`false`，则用户将无法切换主题。

它还注入了内联脚本，该脚本尝试通过`vitepress-theme-appearances`键从本地存储读取用户设置，并恢复用户首选的颜色模式。

```ts
export default {
  appearance: true
}
```

## base
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

## 描述

- 类型：`string`
- 默认值：`A VitePress site`

站点说明。这将在页面`HTML`中呈现为`＜meta＞`标记。

```ts
export default {
  description: 'A VitePress site'
}
```

## head

- 类型：`HeadConfig[]`
- 默认值：`[]`

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
```
type HeadConfig =
  | [string, Record<string, string>]
  | [string, Record<string, string>, string]
```

## ignoreDeadLinks

- 类型: `boolean|localhostLinks`
- 默认值: `false`

当设置为`true`时，`VitePress`不会因死链接而导致构建失败。当设置为`localhostLinks`时，构建将在死链接上失败，但不会检查`localhost`链接。

```ts
export default {
  ignoreDeadLinks: true
}
```

## lang

- 类型: `string`
- 默认值: `en-US`

站点的语言属性。这将在页面`html`中呈现为`<html lang=“en-US”>`标记。

```ts
export default {
  lang: 'en-US'
}
```

## lastUpdated 

- 类型: `boolean`
- 默认值: `false`

使用`git commit`获取时间戳。此选项启用默认主题以显示页面的“上次更新时间”。您可以通过`themeConfig.lastUpdatedText`选项自定义文本。

```ts
export default {
  lastUpdated: true
}
```

## markdown

- 类型： `MarkDownOption`

配置`Markdown`解析器选项。`VitePress`使用`Markdown-it`作为解析器，使用`Shiki` 高亮显示语法语言。在该选项中，您可以传递各种与`Markdown`相关的选项以满足您的需求。

```js
export default {
  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true
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

## outDir
- 类型：`string`
- 默认值：`./.vitepress/dist`

站点的构建输出位置，相对于项目根目录（如果您正在运行`vitepress build docs`，则为`docs`文件夹）。

```ts
export default {
  outDir: '../public'
}
```

## cacheDir

- 类型：`string`
- 默认值：`./.vitepress/cache`

缓存文件的目录，相对于项目根目录（如果您正在运行`vitebress build docs`，则为`docs`文件夹）。

```ts
export default {
  cacheDir: './.vitepress/.vite'
}
```

## srcDir

- 类型：`string`
- 默认值：`.`

存储`markdown`页面文件的目录，相对于项目根目录。

```ts
export default {
  srcDir: './src'
}
```

## title

- 类型：`string`
- 默认值：`VitePress`

站点的标题。这将显示在导航栏中。也用作所有页面标题的后缀，除非定义了`titleTemplate`。

```ts
export default {
  title: 'VitePress'
}
```

## titleTemplate

- 类型: `string|boolean`

标题的后缀。例如，如果将`title`设置为`VitePress`，并将`titleTemplate`设置为`My Site`，则`html`标题将变为`VitePress| My Site`。

设置为`false`以禁用该功能。如果选项`undefined`，则将使用`title`选项的值。

```ts
export default {
  title: 'VitePress',
  titleTemplate: 'Vite & Vue powered static site generator'
}
```

要配置除`|`以外的标题分隔符，可以省略`title`并在`titleTemplate`中使用`:title`符号。

```ts
export default {
  titleTemplate: ':title - Vitepress'
}
```


## cleanUrls

- 类型：`boolean`
- 默认值：`false`

允许从`URL`中删除尾随的`.html`

```ts
export default {
  cleanUrls: true
}
```

::: warning
启用此功能可能需要在宿主平台上进行其他配置。要使其工作，服务器必须在请求`/foo`时提供`/foo.html`，而无需重定向。
:::

## rewrites

- 类型：`Record<string,string>`

定义"自定义目录"<->"URL" 映射。

```ts
export default {
  rewrites: {
    'source/:page': 'destination/:page'
  }
}
```

## Build Hooks

`VitePress`构建挂钩允许您向网站添加新功能和行为：

- Sitemap
- Search Indexing
- PWA
- Teleports







