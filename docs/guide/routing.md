# 路由

VitePress 是使用基于文件系统的路由构建的，这意味着源文件的目录结构对应于最终 URL。您也可以自定义目录结构和 URL 的映射。通过阅读此页面，了解有关 VitePress 路由系统的所有信息。

## 基本路由
默认情况下，VitePress 假定您的页面文件存储在项目的根目录中。在这里，您可以添加名称为URL路径的 markdown 文件。例如，当您具有以下目录结构时：

```
.
├─ guide
│  ├─ getting-started.md
│  └─ index.md
├─ index.md
└─ prologue.md
```

然后，您可以通过以下 URL 访问页面。

```
index.md           -> /
prologue.md        -> /prologue.html
guide/index.md     -> /guide/
getting-started.md -> /guide/getting-started.html
```

如您所见，目录结构对应于最终 URL，就像从典型的 Web 服务器托管普通的 HTML 一样。