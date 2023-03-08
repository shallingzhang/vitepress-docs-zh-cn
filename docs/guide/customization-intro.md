# 主题简介

`VitePress`自带默认主题，提供了许多开箱即用的功能。在下面列出的专用页面上了解有关每个功能的更多信息。

- [导航栏](./theme-nav)
- [侧边栏](./theme-sidebar)
- [上下页链接](./theme-prev-next-link)
- [编辑链接](./theme-edit-link)
- [最后更新日期](./theme-last-updated)
- [布局](./theme-layout)
- [主页](./theme-home-page)
- [团队页面](./theme-team-page)
- [徽章](./theme-badge)
- [页脚](./theme-footer)
- [搜索](./theme-search)
- [碳广告](./theme-carbon-ads)

如果你没有找到你想要的功能，或者你想创建自己的主题，你可以定制`VitePress`来满足你的需求。在下面的部分中，我们将介绍定制`VitePress`主题的各种方法。

## 使用自定义主题
您可以通过添加`.vitepress/theme/index.js`或`.vitepress/theme/index.ts`文件（ “主题条目文件” ）来启用自定义主题。
```
.
├─ docs
│  ├─ .vitepress
│  │  ├─ theme
│  │  │  └─ index.js
│  │  └─ config.js
│  └─ index.md
└─ package.json
```

VitePress自定义主题只是一个包含四个财产的对象，定义如下：

```ts
interface Theme {
  Layout: Component // Vue 3 component
  NotFound?: Component
  enhanceApp?: (ctx: EnhanceAppContext) => Awaitable<void>
  setup?: () => void
}

interface EnhanceAppContext {
  app: App // Vue 3 app instance
  router: Router // VitePress router instance
  siteData: Ref<SiteData>
}

```
主题条目文件应将作为主题导出的默认导出：

```js
// .vitepress/theme/index.js
import Layout from './Layout.vue'

export default {
  // root component to wrap each page
  Layout,

  // this is a Vue 3 functional component
  NotFound: () => 'custom 404',

  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`.
    // router is VitePress' custom router. `siteData` is
    // a `ref` of current site-level metadata.
  },

  setup() {
    // this function will be executed inside VitePressApp's
    // setup hook. all composition APIs are available here.
  }
}

```

…其中布局组件可能如下所示：
```vue
<!-- .vitepress/theme/Layout.vue -->
<template>
  <h1>Custom Layout!</h1>

  <!-- this is where markdown content will be rendered -->
  <Content />
</template>

```
默认导出是自定义主题的唯一约定。在自定义主题中，它的工作方式与普通的`Vite+Vue3`应用程序一样。请注意，主题还需要与`SSR`兼容。
要分发主题，只需导出包条目中的对象。要使用外部主题，请从自定义主题条目导入并重新导出该主题：

```js
// .vitepress/theme/index.js
import Theme from 'awesome-vitepress-theme'

export default Theme

```

## 扩展默认主题
如果您想扩展和自定义默认主题，可以从`viteprress/theme`导入它，并在自定义主题条目中扩充它。以下是一些常见自定义的示例：

### 注册全局组件

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx)

    // register your custom global components
    ctx.app.component('MyGlobalComponent' /* ... */)
  }
}

```
由于我们使用的是Vite，您还可以利用`Vite`的`glob`导入功能自动注册组件目录。

### 自定义CSS
默认主题CSS可通过重写根级CSS变量进行自定义：
```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme

```

```css
/* .vitepress/theme/custom.css */
:root {
  --vp-c-brand: #646cff;
  --vp-c-brand-light: #747bff;
}

```
查看可以覆盖的默认主题`CSS`变量。

### 布局插槽
默认主题的`＜Layout/＞`组件有几个插槽，可用于在页面的某些位置注入内容。下面是一个将组件注入前大纲的示例：

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'

export default {
  ...DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: MyLayout
}
```

```vue
<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #aside-outline-before>
      My custom sidebar top content
    </template>
  </Layout>
</template>
```
或者也可以使用渲染函数。

```js
// .vitepress/theme/index.js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import MyComponent from './MyComponent.vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-before': () => h(MyComponent)
    })
  }
}
```

默认主题布局中可用插槽的完整列表：

- 当 `layout: 'doc'`（默认）通过 `frontmatter`启用时：
    - doc-footer-before
    - doc-before
    - doc-after
    - sidebar-nav-before
    - sidebar-nav-after
    - aside-top
    - aside-bottom
    - aside-outline-before
    - aside-outline-after
    - aside-ads-before
    - aside-ads-after

- 当 `layout: 'home'` 通过 `frontmatter` 启用时：
    - home-hero-before
    - home-hero-image
    - home-hero-after
    - home-features-before
    - home-features-after

- 始终：
    - layout-top
    - layout-bottom
    - nav-bar-title-before
    - nav-bar-title-after
    - nav-bar-content-before
    - nav-bar-content-after
    - nav-screen-content-before
    - nav-screen-content-after
