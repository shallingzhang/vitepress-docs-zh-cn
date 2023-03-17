# 快速开始

本节将帮助您从头开始构建一个基本的 VitePress 文档网站。

::: warning

VitePress 目前处于 alpha 状态. 它已经适合开箱即用的文档使用,但是配置和主题 API 仍然可能在小版本之间发生变化。

:::

## 在线试用

您可以通过浏览器在[`StackBlitz`](https://vitepress.new)上直接尝试`VitePress`。

## 安装

### 安装准备

- Node.js 版本 16 或更高。
- 通过命令行界面可以访问`Vitepress`的终端。
- 支持`Markdown`语法的文本编辑器。
  - 推荐使用`VSCode`以及官方`Vue`扩展。

创建并进入一个新目录

```sh
$ mkdir vitepress-starter && cd vitepress-starter
```

`VitePress`可以单独使用，也可以安装到现有项目中。在这两种情况下，您都可以使用以下工具安装：（下面为项目添加 vitepress 和 vue 作为开发依赖项）

::: code-group

```sh [npm]
$ npm install -D vitepress vue
```

```sh [pnpm]
$ pnpm add -D vitepress vue
```

```sh [yarn]
$ yarn add -D vitepress vue
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

### 安装向导

`VitePress`附带了一个命令行设置向导，可帮助您构建基本项目。安装后，运行以下命令启动向导：

::: code-group

```sh [npm]
$ npm install -g npx
$ npx vitepress init
```

```sh [pnpm]
$ pnpm exec vitepress init
```

:::

你会遇到几个简单的问题：

![初始化向导](/images/vitepress-init.png)

::: tip Vue 作为对等依赖项

   如果您打算执行使用`Vue`组件或`API`的定制，还应该将`Vue`明确安装为对等依赖项。

:::

## 文件结构

如果您正在构建一个独立的`VitePress`站点，则可以在当前目录中构建该站点（./）。
但是，如果您在现有项目中安装`VitePress`以及其他源代码，建议将站点脚手架放置在嵌套目录中（例如`./docs`）, 以使它与项目的其余部分是分开的。

假设您选择在`./docs`中构建`VitePress项目文档，生成的文件结构应该如下所示：

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
```

`docs`目录被视为`VitePress`站点的项目根目录。`.vitepress`目录是`.vitepress`的配置文件、开发服务器缓存、构建输出和可选主题定制代码的保留位置。

::: tip 注意
默认情况下，`VitePress`将其开发服务器缓存存储在`.VitePress/cache`中，而生产构建输出存储在`.witepress/dist`中。如果使用`Git`，则应将其添加到`.gitignore`文件中。还可以配置这些位置。
:::

## 配置文件

配置文件（`.vitepress/config.js`）允许您自定义`vitepress`站点的各个方面，最基本的选项是站点的标题和描述：

```js
// .vitepress/config.js
export default {
  // site-level options
  title: 'VitePress',
  description: 'Just playing around.',

  themeConfig: {
    // theme-level options
  }
}
```
您也可以通过`themeConfig`选项配置主题的行为。有关所有配置选项的详细信息，请参阅配置参考。

## 源文件

把`.vitepress`目录之外的`Markdown`文件被视为源文件。

`VitePress`使用基于文件的路由：每个`.md`文件都被编译成具有相同路径的相应`.html`文件。例如，`index.md`将被编译成`index.html`，并且可以在生成的`VitePress`站点的根路径`/`上访问。

`VitePress` 还提供了生成干净`URL`、重写路径和动态生成页面的能力。这些将在路由指南中介绍。

## 启动和运行

如果您在安装过程中选择允许，则该工具还应该向`package.json`注入以下`npm`脚本，也可以手动向 `package.json` 中添加一些脚本

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

`docs:dev` 脚本将启动具有即时热更新的本地 `dev` 服务器。使用以下命令来运行它：

::: code-group

```sh [npm]
$ npm run docs:dev
```
```sh [pnpm]
$ pnpm run docs:dev
```
```sh [yarn]
$ yarn docs:dev
```
:::

您也可以使用以下命令直接调用 `VitePress`，而不是 `npm` 脚本：

::: code-group

```sh [npm]
$ npx vitepress dev docs
```
```sh [pnpm]
$ pnpm exec vitepress dev docs
```
:::

`CLI` 参考中记录了更多命令行用法。

开发服务器将在 `http://localhost:5173` 运行，访问浏览器中的 `URL` 以查看您的新网站运行情况。

## 下一步是什么？

- 要更好地了解 markdown 文件如何映射到生成的 HTML，请继续阅读路由指南。
- 要发现更多关于你可以在页面上做什么，比如写`Mmarkdown`内容或使用` Vue `组件，请参考指南的“写作”部分。一个很好的起点是了解`Markdown ` 扩展。
- 要探索默认文档主题提供的功能，请查看默认主题配置参考。
- 如果要进一步自定义网站的外观，请探索如何扩展默认主题或构建自定义主题。
- 文档站点形成后，请务必阅读部署指南。


