# 主页

`VitePress`默认主题提供了一个主页布局，您也可以在该网站的主页上看到该布局。您可以通过在`frontmatter`中指定`layout:home`在任何页面上使用它。

```yaml
---
layout: home
---
```
然而，仅此选项不会有多大作用。通过设置其他选项（如`hero`和`features`），您可以向主页添加几个不同的预置模板“部分”。

## Hero 部分

`hero`部分位于主页顶部。下面是如何配置`hero`部分。

```yaml
---
layout: home

hero:
  name: VitePress
  text: Vite & Vue powered static site generator.
  tagline: Lorem ipsum...
  image:
    src: /logo.png
    alt: VitePress
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

  // The image is displayed next to the text and tagline area.
  image?: ThemeableImage

  // Action buttons to display in home hero section.
  actions?: HeroAction[]
}

type ThemeableImage =
  | string
  | { src: string; alt?: string }
  | { light: string; dark: string; alt?: string }

interface HeroAction {
  // Color theme of the button. Defaults to `brand`.
  theme?: 'brand' | 'alt'

  // Label of the button.
  text: string

  // Destination link of the button.
  link: string
}
```
### 自定义名称颜色

`VitePress`使用品牌颜色（`--vp-c-brand`）作为`name`。然而，您可以通过覆盖`--vp-home-hero-name-color`变量来自定义此颜色。

```css
:root {
  --vp-home-hero-name-color: blue;
}
```
此外，您还可以通过组合`--vp-home-hero-name-background`来进一步自定义`name`渐变颜色。

```css
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
}
```

## Features 部分

在`features`部分，您可以在`hero`部分之后列出任何数量的特征。要配置它，请将`features`选项传递给`frontmatter`。

您可以为每个功能提供一个图标，可以是表情符号或任何类型的图像。当配置的图标是图像（svg、png、jpeg…）时，必须提供具有适当宽度和高度的图标；您还可以在需要时提供描述、其固有大小以及暗和亮主题的变体。

```yaml
---
layout: home

features:
  - icon: 🛠️
    title: Simple and minimal, always
    details: Lorem ipsum...
  - icon:
      src: /cool-feature-icon.svg
    title: Another cool feature
    details: Lorem ipsum...
  - icon:
      dark: /dark-feature-icon.svg
      light: /light-feature-icon.svg
    title: Another cool feature
    details: Lorem ipsum...
---
```

```ts
interface Feature {
  // Show icon on each feature box.
  icon?: FeatureIcon

  // Title of the feature.
  title: string

  // Details of the feature.
  details: string

  // Link when clicked on feature component. The link can
  // be both internal or external.
  //
  // e.g. `guide/theme-home-page` or `htttps://example.com`
  link?: string

  // Link text to be shown inside feature component. Best
  // used with `link` option.
  //
  // e.g. `Learn more`, `Visit page`, etc.
  linkText?: string
}

type FeatureIcon =
  | string
  | { src: string; alt?: string; width?: string; height: string }
  | {
      light: string
      dark: string
      alt?: string
      width?: string
      height: string
    }
```