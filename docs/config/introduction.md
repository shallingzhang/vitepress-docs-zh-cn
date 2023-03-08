# 介绍
将配置文件放在`.vitepress/config.js`。这是所有`vitepress`特定文件的存放位置。

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  └─ index.md
└─ package.json
```
::: tip
您还可以使用`.ts`、`.cjs`、`.mjs`、`.cts`、`.mts`中的任何一个作为配置文件扩展名。
:::

`VitePress`有两种配置。
第一个是`AppConfig`，它配置站点的基本功能，例如设置站点标题，或自定义`markdown`解析器的工作方式。
第二个是配置站点主题的主题配置，例如，添加侧边栏，或添加 “在`GitHub`上编辑此页面” 链接等功能。
在`Frontmatter`中还可以进行另一种配置。`Frontmatter`配置可以覆盖在该特定页面的应用程序配置或主题配置中定义的全局配置。然而，也有几个选项仅在`frontmatter`上可用。

请参阅相应的配置页面以了解更多信息。

## 配置智能感知
由于`VitePress`附带`TypeScript`打字，您可以利用带有`jsdoc`类型提示的`IDE`智能感知：

```js
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```
或者，您可以使用`defineConfig`助手，在该助手处可以提供`intellisense`，而不需要`jsdoc`注释：

```js
import { defineConfig } from 'vitepress'

export default defineConfig({
  // ...
})
```

`VitePress`还直接支持`TS`配置文件。您也可以将`.vitepress/config.ts`与`defineConfig`助手一起使用。

## 键入的主题配置

默认情况下，`defineConfig` 助手利用默认主题中的主题配置类型：

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  themeConfig: {
    // Type is `DefaultTheme.Config`
  }
})
```

如果您使用自定义主题并希望对主题配置进行类型检查，则需要改用`defineConfigWithTheme`，并通过泛型参数传递自定义主题的配置类型：

```ts
import { defineConfigWithTheme } from 'vitepress'
import { ThemeConfig } from 'your-theme'

export default defineConfigWithTheme<ThemeConfig>({
  themeConfig: {
    // Type is `ThemeConfig`
  }
})
```


