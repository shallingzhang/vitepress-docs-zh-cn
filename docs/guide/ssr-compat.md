# SSR 兼容性

`VitePress`在生产构建期间使用`Vue`的服务器端渲染（`SSR`）功能在`Node.js`中预渲染应用程序。这意味着主题组件中的所有自定义代码都要遵守`SSR`兼容性。

`Vue`官方文档中的`SSR`部分提供了更多关于什么是`SSR`、`SSR/SSG`之间的关系以及编写`SSR-friendly `代码的常见注释的上下文。经验法则是只在`Vue`组件的`beforeMount`或`mounted`钩子中访问浏览器/ `DOM api`。

## `<ClientOnly>`

如果你正在使用或演示的组件不是`SSR-friendly` (例如，包含自定义指令)，你可以将它们包装在内置的`<ClientOnly>`组件中:

```md
<ClientOnly>
  <NonSSRFriendlyComponent />
</ClientOnly>
```

## 在导入时访问浏览器API的库

一些组件或库在导入时访问浏览器`api`。要在导入时使用假定浏览器环境的代码，您需要动态地导入它们。

### Importing in Mounted Hook 

```vue
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  import('./lib-that-access-window-on-import').then((module) => {
    // use code
  })
})
</script>
```

### Conditional Import 

你也可以使用`import.meta.env. ssr`标记(`Vite`环境变量的一部分)有条件地导入一个依赖:

```js
if (!import.meta.env.SSR) {
  import('./lib-that-access-window-on-import').then((module) => {
    // use code
  })
}
```

因为`theme.enhanceApp`可以是异步的，你可以有条件地导入和注册Vue插件，这些插件在导入时访问浏览器`api`:

```js
// .vitepress/theme/index.js
export default {
  // ...
  async enhanceApp({ app }) {
    if (!import.meta.env.SSR) {
      const plugin = await import('plugin-that-access-window-on-import')
      app.use(plugin)
    }
  }
}
```

### `defineClientComponent`

`VitePress`为导入`Vue`组件提供了一个方便的助手，这些组件在导入时访问浏览器`API`。

```vue
<script setup>
import { defineClientComponent } from 'vitepress'

const ClientComp = defineClientComponent(() => {
  return import('component-that-access-window-on-import')
})
</script>

<template>
  <ClientComp />
</template>
```

您还可以将`props`/`children`/`slots`传递到目标组件：

```vue
<script setup>
import { ref } from 'vue'
import { defineClientComponent } from 'vitepress'

const clientCompRef = ref(null)
const ClientComp = defineClientComponent(
  () => import('component-that-access-window-on-import'),

  // args are passed to h() - https://vuejs.org/api/render-function.html#h
  [
    {
      ref: clientCompRef
    },
    {
      default: () => 'default slot',
      foo: () => h('div', 'foo'),
      bar: () => [h('span', 'one'), h('span', 'two')]
    }
  ],

  // callback after the component is loaded, can be async
  () => {
    console.log(clientCompRef.value)
  }
)
</script>

<template>
  <ClientComp />
</template>
```

目标组件将仅在包装器组件的已安装挂钩中导入。