# 快速开始

本节将帮助您从头开始构建一个基本的 VitePress 文档网站。如果您已经有一个现有的项目，并且希望将文档保存在项目中，请从步骤2开始。

::: warning

VitePress 目前处于 alpha 状态. 它已经适合开箱即用的文档使用,但是配置和主题 API 仍然可能在小版本之间发生变化。

:::

## 步骤 1：创建一个新的项目
创建并进入一个新目录

```sh
$ mkdir vitepress-starter && cd vitepress-starter
```

然后，使用首选的包管理器进行初始化

::: code-group

```sh [npm]
$ npm init
```

```sh [yarn]
$ yarn init
```

```sh [pnpm]
$ pnpm init
```

:::

## 步骤 2：安装 vitepress

为项目添加 vitepress 和 vue 作为开发依赖项

:::code-group

```sh [npm]
$ npm install -D vitepress vue
```

```sh [yarn]
$ yarn add -D vitepress vue
```

```sh [pnpm]
$ pnpm add -D vitepress vue
```

:::

::: details Getting missing peer deps warnings?
`@docsearch/js` has certain issues with its peer dependencies. If you see some commands failing due to them, you can try this workaround for now:

If using PNPM, add this in your `package.json`:

```json
"pnpm": {
  "peerDependencyRules": {
    "ignoreMissing": [
      "@algolia/client-search"
    ]
  }
}
```

:::

创建您的第一个文档

```sh
$ mkdir docs && echo '# Hello VitePress' > docs/index.md
```

## 步骤 3：启动开发环境
向 `package.json` 中添加一些脚本

```json
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  ...
}
```
在本地服务器上提供文档站点

:::code-group

```sh [npm]
$ npm run docs:dev
```

```sh [yarn]
$ yarn docs:dev
```

```sh [pnpm]
$ pnpm run docs:dev
```
:::

vitepress 将在 `http://localhost:5173` 启动一个热重载开发服务器。

## 步骤 4：添加更多页面
让我们向站点添加另一个页面，创建一个名为 `getting-started.md` 的文件和您在步骤2中创建的 `index.md` 放在一起，现在您的目录结构应该如下所示。

```
.
├─ docs
│  ├─ getting-started.md
│  └─ index.md
└─ package.json
```

然后, 尝试访问 `http://localhost:5173/getting-started.html`，您应该看见 `getting-started.md` 的内容被显示.

这就是 vitepress 的基本工作原理。目录结构对应 URL 路径。您添加文件，然后试着访问它。

## 接下来是什么？

现在，您应该有一个基本但功能强大的VitePress文档站点。但目前，用户无法在网站上导航，因为它缺少例如我们在这个网站上的侧边栏菜单。

要启用这些导航，我们必须向站点添加一些配置。前往配置指南，了解如何配置 `VitePress`。

如果您想了解更多关于在页面中可以做什么的信息，例如，编写`markdown`内容或使用`Vue Component`，请查看文档的“写作”部分。降价指南将是一个很好的起点。

如果您想了解如何自定义网站外观（主题），并了解`VitePress`默认主题提供的功能，请访问主题：简介。

当您的文档站点开始成形时，请务必阅读部署指南。

