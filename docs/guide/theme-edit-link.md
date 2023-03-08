# 编辑链接
编辑链接允许您在`GitHub`或`GitLab`等`Git`管理服务上显示编辑页面的链接。要启用它，请将`themeConfig.editLink`选项添加到配置中。
```js
export default {
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    }
  }
}
```

`pattern`选项定义链接的URL结构，`:path` 将替换为页面路径。
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

