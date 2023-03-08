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

