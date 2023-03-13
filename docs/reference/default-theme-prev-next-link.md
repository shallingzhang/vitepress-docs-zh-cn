# 上下页链接

您可以自定义上一页和下一页的文本和链接（显示在文档页脚）。
如果您想要与侧边栏上的文本不同的文本，这很有用。
此外，您可能会发现禁用页脚或指向未包含在侧边栏中的页面的链接非常有用。

## prev（上一页）

- 类型： `string | false | { text?: string | link?: string }`
- 细节： 
  指定要显示在“上一页”链接上的“文本/链接”。如果不在`frontmatter`中设置此项，则“文本/链接”将从侧边栏配置中推断出来。
- 示例：
  - 只自定义文本
    ```yaml
    ---
    prev: 'Get Started | Markdown'
    ---
    ```
  - 自定义文本和链接
    ```yaml
    ---
    prev:
    text: 'Markdown'
    link: '/guide/markdown'
    ---
    ```
  - 隐藏“上一页”
    ```yaml
    ---
    prev: false
    ---
    ```

## next（下一页）

与`prev` （上一页）相同，但适用于`next`（下一页）。

## docFooter

English

```js
  themeConfig: {
    docFooter: {
      prev: 'Previous Page',
      next: 'Next Page'
    }
  }
```
中文

```js
  themeConfig: {
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
```




