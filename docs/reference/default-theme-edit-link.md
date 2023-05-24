# 编辑链接

## 站点级别的配置

编辑链接允许您在`GitHub`或`GitLab`等`Git`管理服务上显示编辑页面的链接。要启用它，请将`themeConfig.editLink`选项添加到您的配置中。
```js
export default {
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    }
  }
}
```

这个`pattern`选项定义链接的URL结构，并且`:path` 将替换为页面路径。

您还可以放置一个纯函数，该函数接受 `PageData` 作为参数并返回 URL 字符串。

```js
export default {
  themeConfig: {
    editLink: {
      pattern: ({ filePath }) => {
        if (filePath.startsWith('packages/')) {
          return `https://github.com/acme/monorepo/edit/main/${filePath}`
        } else {
          return `https://github.com/acme/monorepo/edit/main/docs/${filePath}`
        }
      }
    }
  }
}
```



它不应该有副作用，也不应该访问其范围之外的任何内容，因为它将在浏览器中序列化和执行。

默认情况下，这将在文档页面底部添加链接文本`Edit this page`。您可以通过定义`text`选项自定义此文本。

```js
export default {
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
}
```

## Frontmatter Config

这可以使用`frontmater`上的`editLink`选项按页面禁用：

```yaml
---
editLink: false
---
```

