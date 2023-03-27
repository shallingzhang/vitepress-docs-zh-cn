# Markdown 扩展
`VitePress`附带内置`Markdown`扩展。

## Header Anchors 
标题头部自动应用锚链接。可以使用 `markdown.anchor` 选项配置锚点的渲染。

## 链接
内部和外部链接都得到特殊处理。
### 内部链接
内部链接被转换为`SPA`导航的路由器链接。此外，在每个子目录中的`index.md`都将自动转换为`index.html`，并带有相应的`URL /`。
例如，给定以下目录结构：

```
.
├─ index.md
├─ foo
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ index.md
   ├─ three.md
   └─ four.md
```
如果您在`foo/one.md`中：

```md
[Home](/) <!-- sends the user to the root index.md -->
[foo](/foo/) <!-- sends the user to index.html of directory foo -->
[foo heading](./#heading) <!-- anchors user to a heading in the foo index file -->
[bar - three](../bar/three) <!-- you can omit extension -->
[bar - three](../bar/three.md) <!-- you can append .md -->
[bar - four](../bar/four.html) <!-- or you can append .html -->
```

### Page Suffix 
默认情况下，页面和内部链接使用`.html`后缀生成。
### 外部链接
出站链接自动获取target=“_blank”rel=“noreferrer”：

- [ vuejs ]( https://vuejs.org/ )
- [ VitePress on GitHub ]( https://github.com/vuejs/vitepress )

## Frontmatter

YAML frontmatter 支持开箱即用：

```yaml
---
title: Blogging Like a Hacker
lang: en-US
---
```

这些数据将与所有自定义组件和主题组件一起提供给页面的其余部分。

更多细节请参看 [ Frontmatter ](../reference/frontmatter-config)

## GitHub-Style 表格

输入
```md
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

```
输出
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## Emoji 🎉 
输入
```md
:tada: :100:
```
输出

:tada: :100:

所有可用的[表情符号列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)。

## 目录

输入

```
[[toc]]
```

输出

[[toc]]

`TOC`的渲染可以使用`markdown.doc`选项进行配置。

## 自定义容器

自定义容器可以根据其类型、标题和内容进行定义。

### 默认标题

输入

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

输出

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### 自定义标题

您可以通过在容器的“类型”后面添加文本来设置自定义标题。

输入

```md
::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
​```js
console.log('Hello, VitePress!')
​```
:::
```

输出

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::

### `raw`

这是一个特殊的容器，可用于防止与`VitePress`发生样式和路由器冲突。当您对组件库进行文档化时，这一点尤其有用。你可能还想看看`whyframe`，以便更好地隔离。

语法

```md
::: raw
Wraps in a <div class="vp-raw">
:::
```

`vp-raw`类也可以直接用于元素。样式隔离当前是可选择的：

::: details 详细信息

- 使用您首选的软件包管理器安装所需的依赖：

  ```sh
  $ npm install -D postcss postcss-prefix-selector
  ```

  

- 创建一个名为`docs/.postcssrc.js`的文件，并将其添加到其中：

  ```js
  module.exports = {
    plugins: {
      'postcss-prefix-selector': {
        prefix: ':not(:where(.vp-raw *))',
        includeFiles: [/vp-doc\.css/],
        transform(prefix, _selector) {
          const [selector, pseudo = ''] = _selector.split(/(:\S*)$/)
          return selector + prefix + pseudo
        }
      }
    }
  }
  ```

:::

## 代码块中的语法高亮显示

`VitePress`使用`Shiki`在`Markdown`代码块中突出显示语言语法，使用彩色文本。`Shiki`支持多种编程语言。您所需要做的就是将一个有效的语言别名附加到代码块的开始回溯：

输入

```
​```js
export default {
  name: 'MyComponent',
  // ...
}
​```
```

```
​```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
​```
```

输出

```js
export default {
  name: 'MyComponent'
  // ...
}
```

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

`Shiki`的存储库中提供了有效语言的列表。

您也可以在应用程序配置中自定义语法高亮主题。有关更多详细信息，请参阅降价选项。

## 代码块中的行高亮显示

输入

```
​```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
​```
```

输出

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

除了单行外，还可以指定多个不连续的单行、行范围或同时指定这两种情况：

- 行范围：例如 `{5-8}`，`{3-10}`，`{10-17}`

- 多个不连续单行：例如 `{4,7,9}`
- 行范围和多个单行：例如 `{4,7-13,16,23-27,40}`

输入

```
​```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
​```
```

输出

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```

## 代码块中的焦点

在一行上添加`// [!code focus]`注释将使其聚焦并模糊代码的其他部分。

此外，您可以使用`// [!code focus:<lines>]`定义要聚焦的行数。

输入

请注意，`!code`后面只需要一个空格，这里有两个的话将无法处理。

```
​```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code  focus]
    }
  }
}
​```
```

输出

```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```

## 代码块中的彩色差异

在一行上添加`// [!code --]`或`// [!code ++]`注释将创建该行的差异，同时保留代码块的颜色。

输入

请注意，`!code`后面只需要一个空格，这里有两个的话将无法处理。

```
​```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code  --]
      msg: 'Added' // [!code  ++]
    }
  }
}
​```
```

输出

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

## 代码块中的错误和警告

在一行中添加`// [!code warning]`或`// [!code error]`注释将相应地给它上色。

输入

请注意，`!code`后面只需要一个空格，这里有两个的话将无法处理。

```
​```js
export default {
  data () {
    return {
      msg: 'Error', // [!code  error]
      msg: 'Warning' // [!code  warning]
    }
  }
}
​```
```

输出

```js
export default {
  data () {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```

## 行号

您可以通过配置为每个代码块启用行号：

```js
export default {
  markdown: {
    lineNumbers: true
  }
}
```

请查看 `markdown options` 以获得更多的细节。

您可以在围栏代码块中添加`:line-numbers`/`:no-line-numbers`标记，以覆盖配置中设置的值。

输入

```md
​```ts {1}
// line-numbers is disabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
​```

​```ts:line-numbers {1}
// line-numbers is enabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
​```
```

输出

```ts {1}
// line-numbers is disabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// line-numbers is enabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

## 导入代码段

您可以通过以下语法从现有文件中导入代码段：

```md
<<< @/filepath
```

它还支持线条高亮显示：

```md
<<< @/filepath{highlightLines}
```

输入

```md
<<< @/snippets/snippet.js{2}
```

代码文件

```js
export default function () {
  // ..
}
```

输出

```js
export default function () {
  // ..
}
```

::: tip

The value of `@` corresponds to the source root. By default it's the VitePress project root, unless `srcDir` is configured.

:::

您也可以使用`VS Code`区域来只包括代码文件的相应部分。您可以在文件路径后面的`#`面提供自定义区域名称：

输入

```md
<<< @/snippets/snippet-with-region.js#snippet{1}
```

代码文件

```js
// #region snippet
function foo() {
  // ..
}
// #endregion snippet

export default foo
```

输出

```js
function foo() {
  // ..
}
```

您也可以在大括号`（｛｝）`中指定语言，如下所示：

```md
<<< @/snippets/snippet.cs{c#}

<!-- with line highlighting: -->

<<< @/snippets/snippet.cs{1,2,4-6 c#}

<!-- with line numbers: -->

<<< @/snippets/snippet.cs{1,2,4-6 c#:line-numbers}
```

如果无法从文件扩展名推断出源语言，这将非常有用。

## 代码组

您可以将多个代码块分组，如下所示：

输入

```md
::: code-group

​```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
​```

​```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
​```

:::
```

输出

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::

您还可以在代码组中导入代码段：

输入

```md
::: code-group

<!-- filename is used as title by default -->

<<< @/snippets/snippet.js

<!-- you can provide a custom one too -->

<<< @/snippets/snippet-with-region.js#snippet{1,2 ts:line-numbers} [snippet with region]

:::
```

输出

::: code-group

<!-- filename is used as title by default -->

<<< @/snippets/snippet.js

<!-- you can provide a custom one too -->

<<< @/snippets/snippet-with-region.js#snippet{1,2 ts:line-numbers} [snippet with region]

:::

## Markdown 文件包含 

您可以将一个`markdown`文件包含在另一个`markdown`文件中，如下所示：

输入

```
# Docs

## Basics

<!--@include: ./parts/basics.md-->
```

部分文件（`parts/basics.md`）

```md
Some getting started stuff.

### Configuration

Can be created using `.foorc.json`.
```

等效代码

```md
# Docs

## Basics

Some getting started stuff.

### Configuration

Can be created using `.foorc.json`.
```

::: warning

Note that this does not throw errors if your file is not present. Hence, when using this feature make sure that the contents are being rendered  as expected.

:::

## 高级配置

`VitePress`使用`markdown-it`作为`markdown`渲染器。上面的许多扩展都是通过自定义插件实现的。您可以使用`.vitepress/config.js`中的`markdown`选项进一步自定义`markdown-it`实例：

```md
const anchor = require('markdown-it-anchor')

module.exports = {
  markdown: {
    // options for markdown-it-anchor
    // https://github.com/valeriangalliat/markdown-it-anchor#usage
    anchor: {
      permalink: anchor.permalink.headerLink()
    },

    // options for @mdit-vue/plugin-toc
    // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
    toc: { level: [1, 2] },

    config: (md) => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-xxx'))
    }
  }
}
```

请参阅配置参考：`App Config`中的可配置财产的完整列表。

