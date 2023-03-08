# Frontmatter 配置

`Frontmatter`支持基于页面的配置。在每个`markdown`文件中，您可以使用`frontmatter`配置来覆盖应用程序级别或主题配置选项。此外，还有一些配置选项只能在`frontmatter`中定义。

```yaml
---
title: Docs with VitePress
editLink: true
---
```

您可以通过任何`markdown`文件中的`$frontmatter helper`访问`frontmatter`。

```md
{{ $frontmatter.title }}
```

## title

- 类型: `string`

页面标题。它与`config.title`相同，并覆盖应用程序配置。

```yaml
---
title: VitePress
---
```

## titleTemplate

- 类型: `string | boolean`

标题的后缀。它与`config.titleTemplate`相同，并覆盖应用程序配置。

```yaml
---
title: VitePress
titleTemplate: Vite & Vue powered static site generator
---
```

## description

- 类型: `string`

页面的说明。它与`config.description`相同，并覆盖应用程序配置。

```yaml
---
description: VitePress
---
```

## head

- 类型: `HeadConfig[]`

指定要注入的额外头标记：

```yaml
---
head:
  - - meta
    - name: description
      content: hello
  - - meta
    - name: keywords
      content: super duper SEO
---
```
```ts
type HeadConfig =
  | [string, Record<string, string>]
  | [string, Record<string, string>, string]
```


## lastUpdated

- 类型: `boolean`
- 默认值: `true`

是否在当前页面中显示上次更新的文本。

```yaml
---
lastUpdated: false
---
```

## layout

- 类型: `doc | home | page`
- 默认值: `doc`

确定页面的布局。

- doc 它将默认文档样式应用于标记内容。
- home “主页”的特殊布局。您可以添加额外的选项，如`hero`和`features`，以快速创建漂亮的登录页面。
- page 行为类似于`doc`，但它不会对内容应用样式。当您想要创建完全自定义的页面时非常有用。

```yaml
---
layout: doc
---
```

## hero

- 类型: `Hero`

此选项仅在`layout`设置为`home`时生效。
它定义了`home`布局的`hero`部分的内容。

```yaml
---
layout: home

hero:
  name: VitePress
  text: Vite & Vue powered static site generator.
  tagline: Lorem ipsum...
  actions:
    - theme: brand
      text: Get Started
      link: /guide/what-is-vitepress
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress
---
```
```ts
interface Hero {
  // The string shown top of `text`. Comes with brand color
  // and expected to be short, such as product name.
  name?: string

  // The main text for the hero section. This will be defined
  // as `h1` tag.
  text: string

  // Tagline displayed below `text`.
  tagline?: string

  // Action buttons to display in home hero section.
  actions?: HeroAction[]
}

interface HeroAction {
  // Color theme of the button. Defaults to `brand`.
  theme?: 'brand' | 'alt'

  // Label of the button.
  text: string

  // Destination link of the button.
  link: string
}
```
`

## features

- 类型: `Feature[]`

此选项仅在`layout`设置为`home`时生效.

它定义要在特色部分中显示的项目。
您可以在“主题：主页”中了解更多信息。

## aside

- 类型: `boolean`
- 默认值: `true`

如果希望不显示`doc`布局中的右侧组件，请将此选项设置为`false`。

```yaml
---
aside: false
---
```

## outline

- 类型: `number | [number,number] | `deep` | false`
- 默认值: `2`

要为页面显示的大纲中的标题级别。它与`config.themeConfig.outline`相同，并覆盖主题配置。




