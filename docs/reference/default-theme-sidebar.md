# 侧边栏
侧边栏是文档的主要导航块。您可以在`themeConfig.sidebar`中配置侧边栏菜单。

```js
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
          ...
        ]
      }
    ]
  }
}
```
## 基础知识

侧边栏菜单的最简单形式是传入单个链接数组。第一级项目定义了侧边栏的“章节”。它应该包含`text`（这是章节的标题）和`items`（这是实际的导航链接）。

```js
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Section Title A',
        items: [
          { text: 'Item A', link: '/item-a' },
          { text: 'Item B', link: '/item-b' },
          ...
        ]
      },
      {
        text: 'Section Title B',
        items: [
          { text: 'Item C', link: '/item-c' },
          { text: 'Item D', link: '/item-d' },
          ...
        ]
      }
    ]
  }
}
```
每个 `link` 应指定以 `/` 开头的实际文件的路径。如果在链接末尾添加尾斜杠，它将显示相应目录的 `index.md`。

```js
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          // This shows `/guide/index.md` page.
          { text: 'Introduction', link: '/guide/' }
        ]
      }
    ]
  }
}
```
您可以进一步嵌套侧边栏项目，从根级别向上计数，深度可达6级。注意，超过6级的嵌套项将被忽略，并且不会显示在侧边栏上。

```js
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Level 1',
        items: [
          {
            text: 'Level 2',
            items: [
              {
                text: 'Level 3',
                items: [
                  ...
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
```
## 多个侧边栏
您可以根据页面路径显示不同的侧边栏。例如，如本网站所示，您可能希望在文档中创建单独的内容部分，如“指南”页和“配置”页。
为此，首先将页面组织到每个所需部分的目录中：
```
.
├─ guide/
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ config/
   ├─ index.md
   ├─ three.md
   └─ four.md
```
然后，更新配置以定义每个部分的侧边栏。这次，您应该传递一个对象而不是数组。
```js
export default {
  themeConfig: {
    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `config` directory.
      '/config/': [
        {
          text: 'Config',
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ]
    }
  }
}
```
## 可折叠的侧边栏组

通过向侧边栏组添加`collapsed`选项，它会显示一个隐藏/显示每个部分的切换按钮。
```js
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Section Title A',
        collapsed: false,
        items: [...]
      }
    ]
  }
}
```
默认情况下，所有部分都“打开”。若您希望它们在初始页面加载时“关闭”，请将`collapsed`选项设置为`true`。

```js
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Section Title A',
        collapsed: true,
        items: [...]
      }
    ]
  }
}
```

