# Frontmatter

任何包含 `YAML` 前页块的 `Markdown`文件都将由`gray-matter`处理。

前页必须位于 `Markdown` 文件的顶部，并且必须采用在三段线之间设置的有效 `YAML` 的形式。例：

```md
---
title: Docs with VitePress
editLink: true
---
```

在三条虚线之间，您可以设置预定义的变量，甚至创建自己的自定义变量。这些变量可以通过特殊的`$frontmatter`变量使用。
以下是如何在`Markdown`文件中使用它的示例：
```md
---
title: Docs with VitePress
editLink: true
---

# {{ $frontmatter.title }}

Guide content
```

## 可选的`frontmatter`格式

`VitePress`还支持`JSON frontmatter`语法，以大括号开头和结尾：
```md
---
{
  "title": "Blogging Like a Hacker",
  "editLink": true
}
---
```

