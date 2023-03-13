# 徽章
徽章允许您将状态添加到标题中。例如，指定节的类型或支持的版本可能很有用。

## 使用方法
您可以使用全局生效的`Badge`组件。

```html
### Title <Badge type="info" text="default" />
### Title <Badge type="tip" text="^1.9.0" />
### Title <Badge type="warning" text="beta" />
### Title <Badge type="danger" text="caution" />
```

上面的代码呈现为：

### Title <Badge type="info" text="default" />
### Title <Badge type="tip" text="^1.9.0" />
### Title <Badge type="warning" text="beta" />
### Title <Badge type="danger" text="caution" />

## 自定义子项
`<Badge>`接受`children`，这将显示在徽章中

```html
### Title <Badge type="info">custom element</Badge>
```

### Title <Badge type="info">custom element</Badge>

## 自定义类型颜色
您可以通过覆盖`css`变量自定义徽章的`background-color`。以下是默认值：

```css
:root {
  --vp-badge-info-border: var(--vp-c-divider-light);
  --vp-badge-info-text: var(--vp-c-text-2);
  --vp-badge-info-bg: var(--vp-c-white-soft);

  --vp-badge-tip-border: var(--vp-c-green-dimm-1);
  --vp-badge-tip-text: var(--vp-c-green-darker);
  --vp-badge-tip-bg: var(--vp-c-green-dimm-3);

  --vp-badge-warning-border: var(--vp-c-yellow-dimm-1);
  --vp-badge-warning-text: var(--vp-c-yellow-darker);
  --vp-badge-warning-bg: var(--vp-c-yellow-dimm-3);

  --vp-badge-danger-border: var(--vp-c-red-dimm-1);
  --vp-badge-danger-text: var(--vp-c-red-darker);
  --vp-badge-danger-bg: var(--vp-c-red-dimm-3);
}

.dark {
  --vp-badge-info-border: var(--vp-c-divider-light);
  --vp-badge-info-bg: var(--vp-c-black-mute);

  --vp-badge-tip-border: var(--vp-c-green-dimm-2);
  --vp-badge-tip-text: var(--vp-c-green-light);

  --vp-badge-warning-border: var(--vp-c-yellow-dimm-2);
  --vp-badge-warning-text: var(--vp-c-yellow-light);

  --vp-badge-danger-border: var(--vp-c-red-dimm-2);
  --vp-badge-danger-text: var(--vp-c-red-light);
}
```

## `<Badge>`
`<Badge>`组件接受以下道具：

```ts
interface Props {
  // When `<slot>` is passed, this value gets ignored.
  text?: string

  // Defaults to `tip`.
  type?: 'info' | 'tip' | 'warning' | 'danger'
}
```





