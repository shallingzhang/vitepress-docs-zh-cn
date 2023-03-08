# 配置
## 目录结构
在没有任何配置的情况下，页面非常小，用户无法在站点中导航。为了自定义您的站点，让我们首先在您的 docs 目录下创建一个 `.vitepress` 目录。
这是所有 vitepress 特定文件将放置的地方。您的项目结构可能是这样的：

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  └─ index.md
└─ package.json

```

配置 vitepress 站点的基本文件是 `./vitepress/config.js`, 它应该导出一个 javascript 对象：

```js
export default {
  title: 'VitePress',
  description: 'Just playing around.'
}
```

在上面的例子中，该站点将具有标题：`vitepress` 和 站点描述信息标签：`Just playing around.`