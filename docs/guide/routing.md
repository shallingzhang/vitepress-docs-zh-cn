# 路由

## 基于文件的路由

`VitePress`使用基于文件的路由，这意味着生成的`HTML`页面是从源`Markdown`文件的目录结构映射的。例如，给定以下目录结构:

```
.
├─ guide
│  ├─ getting-started.md
│  └─ index.md
├─ index.md
└─ prologue.md
```

生成的HTML页面将是:

```
index.md                  -->  /index.html (accessible as /)
prologue.md               -->  /prologue.html
guide/index.md            -->  /guide/index.html (accessible as /guide/)
guide/getting-started.md  -->  /guide/getting-started.html
```
生成的`HTML`可以托管在任何可以提供静态文件的`web`服务器上。

## 根目录和源目录
在`VitePress`项目的文件结构中有两个重要的概念:项目根目录和源目录。

### 项目根目录

项目根目录是`VitePress`尝试寻找`. VitePress`这个特殊目录的地方。`. VitePress`目录是`VitePress`配置文件、开发服务器缓存、构建输出和可选主题定制代码的保留位置。

当您从命令行运行`vitepress dev`或`vitepress build`时，`vitepress`将使用当前工作目录作为项目根目录。要将子目录指定为根目录，需要将相对路径传递给该命令。例如，如果你的`VitePress`项目位于`./docs`中，你应该运行`VitePress dev docs`:

```
.
├─ docs                    # project root
│  ├─ .vitepress           # config dir
│  ├─ getting-started.md
│  └─ index.md
└─ ...
```

```sh
vitepress dev docs
```

这将导致以下`source-to-HTML`映射:

```
docs/index.md            -->  /index.html (accessible as /)
docs/getting-started.md  -->  /getting-started.html
```

### 源目录

源目录是`Markdown`源文件所在的位置。默认情况下，它与项目根目录相同。但是，您可以通过`srcDir`配置选项对其进行配置。

`srcDir`选项是相对于项目根目录进行解析的。例如，使用`srcDir: 'src'`，你的文件结构将是这样的:

```
.                          # project root
├─ .vitepress              # config dir
└─ src                     # source dir
   ├─ getting-started.md
   └─ index.md
```

由此产生`source-to-HTML`的映射:

```
src/index.md            -->  /index.html (accessible as /)
src/getting-started.md  -->  /getting-started.html
```

## 页面间链接

在页面之间链接时，可以使用绝对路径和相对路径。请注意，虽然`.md`和`.html`扩展名都可以工作，但最好的做法是省略文件扩展名，以便`VitePress`可以根据您的配置生成最终的`url`。

```md
<!-- Do -->
[Getting Started](./getting-started)
[Getting Started](../guide/getting-started)

<!-- Don't -->
[Getting Started](./getting-started.md)
[Getting Started](./getting-started.html)

```

有关链接到资产(如图像)的更多信息，请参见资产处理。

## 生成干净的`URL`

::: warning Server Support Required

To serve clean URLs with VitePress, server-side support is required.

:::

默认情况下，`VitePress`将入站链接解析为以`.html`结尾的`url`。然而，一些用户可能更喜欢“干净的`url`”，不带。`html`扩展名——例如，`example.com/path`而不是`example.com/path.html`。

一些服务器或托管平台(例如`Netlify`或`Vercel`)提供了将`/foo`这样的`URL`映射到`/foo.html`(如果存在的话)的能力，而不需要重定向:

- `Netlify`默认支持此功能。
- `Vercel`需要在`Vercel .json`中启用`cleanUrls`选项。

如果这个功能对你可用，你也可以启用`VitePress`自己的`cleanUrls`配置选项，这样:

- 页面之间的入站链接是在没有`.html`扩展名的情况下生成的。
- 如果当前路径以`.html`结尾，路由器将执行客户端重定向到无扩展名路径。

然而，如果你不能配置你的服务器这样的支持(例如`GitHub`页面)，你将不得不手动求助于以下目录结构:    

```
.
├─ getting-started
│  └─ index.md
├─ installation
│  └─ index.md
└─ index.md
```

## 路由重写

您可以自定义源目录结构和生成的页面之间的映射。当你有一个复杂的项目结构时，它很有用。例如，假设你有一个带有多个包的`monorepo`，并且希望像这样将文档与源文件一起放置:

```
.
├─ packages
│  ├─ pkg-a
│  │  └─ src
│  │      ├─ pkg-a-code.ts
│  │      └─ pkg-a-docs.md
│  └─ pkg-b
│     └─ src
│         ├─ pkg-b-code.ts
│         └─ pkg-b-docs.md
```

你想要这样生成`VitePress`页面:

```
packages/pkg-a/src/pkg-a-docs.md  -->  /pkg-a/index.html
packages/pkg-b/src/pkg-b-docs.md  -->  /pkg-b/index.html
```

你可以通过这样配置`rewrites`选项来实现:

```ts
export default {
  rewrites: {
    'packages/:pkg/src/(.*)': ':pkg/index.md'
  }
}
```

重写路径是使用`path-to-regexp`包编译的——要了解更高级的语法，请参阅其文档。

::: warning Relative Links with Rewrites

When rewrites are enabled, **relative links should be based on the rewritten paths**. For example, in order to create a relative link from `packages/pkg-a/src/pkg-a-code.md` to `packages/pkg-b/src/pkg-b-code.md`, you should use:

```md
[Link to PKG B](../pkg-b/pkg-b-code)
```

:::

## 动态路由

您可以使用单个`Markdown`文件和动态数据生成多个页面。例如，创建“`packages/[pkg]`”`.Md`文件，为项目中的每个包生成相应的页面。这里，`[pkg]`段是一个路由参数，用于将每个页面与其他页面区分开来。

### 路径加载文件

由于`VitePress`是一个静态站点生成器，因此必须在构建时确定可能的页面路径。因此，动态路由页面必须伴随着路径加载器文件。`packages/[pkg].md`，我们需要`packages/[pkg].paths.js`(`.ts`也支持):

```
.
└─ packages
   ├─ [pkg].md         # route template
   └─ [pkg].paths.js   # route paths loader
```

路径加载器应该提供一个具有`paths`方法的对象作为其默认导出。`paths`方法应该返回一个带有`params`属性的对象数组。每个对象都将生成一个相应的页面。

给定以下路径数组:

```js
// packages/[pkg].paths.js
export default {
  paths() {
    return [
      { params: { pkg: 'foo' }},
      { params: { pkg: 'bar' }}
    ]
  }
}

```

生成的`HTML`页面将是:

```
.
└─ packages
   ├─ foo.html
   └─ bar.html
```

### 多个参数

动态路由可以包含多个参数:

文件结构

```
.
└─ packages
   ├─ [pkg]-[version].md
   └─ [pkg]-[version].paths.js

```

路径加载器

```js
export default {
  paths: () => [
    { params: { pkg: 'foo', version: '1.0.0' }},
    { params: { pkg: 'foo', version: '2.0.0' }},
    { params: { pkg: 'bar', version: '1.0.0' }},
    { params: { pkg: 'bar', version: '2.0.0' }}
  ]
}
```

输出

```
.
└─ packages
   ├─ foo-1.0.0.html
   ├─ foo-2.0.0.html
   ├─ bar-1.0.0.html
   └─ bar-2.0.0.html
```

### 动态生成路径

路径加载器模块在`Node.js`中运行，只在构建时执行。您可以使用本地或远程的任何数据动态生成路径数组。

从本地文件生成路径:

```js
import fs from 'fs'

export default {
  paths() {
    return fs
      .readdirSync('packages')
      .map((pkg) => {
        return { params: { pkg }}
      })
  }
}

```

从远程数据生成路径:

```js
export default {
  async paths() {
    const pkgs = await (await fetch('https://my-api.com/packages')).json()

    return pkgs.map((pkg) => {
      return {
        params: {
          pkg: pkg.name,
          version: pkg.version
        }
      }
    })
  }
}

```

### 在页面中访问参数

您可以使用参数向每个页面传递额外的数据。`Markdown`路由文件可以通过`$params`全局属性访问`Vue`表达式中的当前页面参数:

```md
- package name: {{ $params.pkg }}
- version: {{ $params.version }}
```

你也可以通过`[useData](../reference/runtime- API # useData)`运行时API访问当前页面的参数。这在Markdown文件和`Vue`组件中都可用:

```vue
<script setup>
import { useData } from 'vitepress'

// params is a Vue ref
const { params } = useData()

console.log(params.value)
</script>

```

### 渲染原始内容

传递给页面的参数将在客户端`JavaScript`有效负载中序列化，因此应该避免在参数中传递大量数据，例如从远程`CMS`获取的原始`Markdown`或`HTML`内容。

相反，你可以使用每个路径对象上的`content`属性将这样的内容传递到每个页面:

```js
export default {
  paths() {
    async paths() {
      const posts = await (await fetch('https://my-cms.com/blog-posts')).json()

      return posts.map((post) => {
        return {
          params: { id: post.id },
          content: post.content // raw Markdown or HTML
        }
      })
    }
  }
}

```

然后，使用下面的特殊语法将内容呈现为`Markdown`文件本身的一部分:

```md
<!-- @content -->
```

