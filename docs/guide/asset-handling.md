# 引用静态资产
所有 `Markdown` 文件都被编译成 `Vue` 组件并由 `Vite` 处理。您可以并且应该使用相对 `URL` 引用任何资产：

```
![An image](./image.png)
```

您可以使用绝对公共路径（基于项目根目录）或相对路径（基于文件系统）引用`markdown`文件中的静态资产、主题中的 `*.vue` 组件、样式和纯`.css`文件。后者类似于使用`vue-cli`或`webpack`的`file-loader`时所习惯的行为。

通用图像、媒体和字体文件类型会自动检测并作为资产包含。所有引用的资源（包括使用绝对路径的资源）都将复制到生产版本中具有哈希文件名的 `dist` 文件夹。不会复制从不引用的资源。与`vue-cli`类似，小于4kb的图像资产将被`base64`内联。

所有静态路径引用（包括绝对路径）都应基于工作目录结构。

## 公共文件

有时，您可能需要提供在任何 `Markdown` 或主题组件中未直接引用的静态资源（例如，收藏夹图标和 `PWA` 图标）。
项目根目录下的 `public` 目录（如果您正在运行`vitepress build docs`，则为`docs`文件夹）可用作逃生舱口，以提供从未在源代码中引用的静态资产（例如: robots.txt ），或者必须保留完全相同的文件名（ 无哈希 ）。

放置在 `public` 中的资产将按原样复制到 `dist` 目录下。

请注意，您应该使用绝对路径引用放置在`public`中的文件 - 例如，`public/icon.png` 在源代码中应始终引用为 `/icon.png`。

这里有一个例外情况： 如果您有一个`HTML`页面在`public`中并从主站点链接到它，则默认情况下路由器将产生404。

为了解决这个问题，`VitePress` 提供了一个 `pathname://` 协议，允许您链接到同一域中的另一个页面，就好像链接是外部链接一样。对比这两个链接：

* [/pure.html](/pure.html)
* <pathname:///pure.html>
* [pathname:///pure.html](pathname:///pure.html)

## Base URL
如果将站点部署到非根 `URL`，则需要在 `.vitepress/config.js` 中设置 `base` 选项。
例如，如果您计划将站点部署到 `https://foo.github.io/bar/`，则 `base` 应设置为“/bar/”（它应始终以斜杠开头和结尾）。

```js
// .vitepress/config.js
import { defineConfig } from 'vitepress'
export default defineConfig(
  { base: '/bar/' }
)
```

系统会自动处理所有静态资产路径，以针对不同的`base`配置值进行调整。
例如，如果您在`Markdowm`中使用绝对路径引用了`public`下的资产：
```md
![An image](/image-inside-public.png)
```
在这种情况下，更改`base`配置值时无需更新它。
然而，如果您正在创作动态链接到资产的主题组件，例如，其`src`基于主题配置值的图像：
```vue
<img :src="theme.logoPath" />
```
在这种情况下，建议使用`VitePress`提供的`withBase`助手包装路径：
```vue
<script setup>
import { withBase, useData } from 'vitepress'

const { theme } = useData()
</script>

<template>
  <img :src="withBase(theme.logoPath)" />
</template>
```

