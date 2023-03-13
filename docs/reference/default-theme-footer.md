# 页脚
当`themeConfig.footer`出现时，`VitePress`将在页面底部显示全局页脚。

```ts
export default {
  themeConfig: {
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
}
```

```ts
export interface Footer {
  // The message shown right before copyright.
  message?: string

  // The actual copyright text.
  copyright?: string
}
```
上述配置还支持`HTML`字符串。因此，例如，如果您希望将页脚文本配置为具有某些链接，可以按如下方式调整配置：

```ts
export default {
  themeConfig: {
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>'
    }
  }
}
```
请注意，当侧边栏可见时，不会显示页脚。