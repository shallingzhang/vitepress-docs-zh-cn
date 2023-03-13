# 导航栏

导航是显示在页面顶部的导航栏。它包含站点标题、全局菜单链接等。

## 站点标题与 Logo

默认情况下，导航栏显示引用`config.title`值的站点标题。如果您想更改导航栏上显示的内容，可以在`themeConfig.siteTitle`选项中定义自定义文本。.
```js
export default {
  themeConfig: {
    siteTitle: 'My Custom Title'
  }
}
```
如果您的网站有 Logo ，则可以通过传递到图像的路径来显示它。您应该将 Logo 直接放置在`public`目录下，并定义其绝对路径。
```js
export default {
  themeConfig: {
    logo: '/my-logo.svg'
  }
}
```
添加Logo时，它会与网站标题一起显示。如果你的Logo是你所需要的，并且你想隐藏网站标题文本，请将`siteTitle`选项设置为`false`。
```js
export default {
  themeConfig: {
    logo: '/my-logo.svg',
    siteTitle: false
  }
}
```

如果要添加`alt`属性或根据暗/亮模式自定义，也可以将对象作为Logo传递。有关详细信息，请参阅`themeConfig.logo`。

## 导航链接
您可以定义`themeConfig.nav`选项来向导航栏添加链接。
```js
export default {
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Config', link: '/config' },
      { text: 'Changelog', link: 'https://github.com/...' }
    ]
  }
}
```
`text`是导航中显示的实际文本，`link`是单击文本时将导航到的链接。对于链接，将路径设置为不带`.md`前缀的实际文件，并始终以`/`开头。

导航链接也可以是下拉菜单。为此，请在链接选项上设置`items`。
```js
export default {
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ]
  }
}
```
请注意，下拉菜单标题（上例中的`Dropdowm Menu`）不能具有链接属性，因为它变成了打开下拉对话框的按钮。
您还可以通过传递更多嵌套项，将 `Section` 添加到下拉菜单项中。
```js
export default {
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        items: [
          {
            // Title for the section.
            text: 'Section A Title',
            items: [
              { text: 'Section A Item A', link: '...' },
              { text: 'Section B Item B', link: '...' }
            ]
          }
        ]
      },
      {
        text: 'Dropdown Menu',
        items: [
          {
            // You may also omit the title.
            items: [
              { text: 'Section A Item A', link: '...' },
              { text: 'Section B Item B', link: '...' }
            ]
          }
        ]
      }
    ]
  }
}
```

