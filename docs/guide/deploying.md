# 部署
以下指南基于一些共同的假设：

* 您将文档放在项目的 `docs` 目录下。
* 您使用的是网站默认生成输出位置（`.vitepress/dist`）。
* Vitepress 作为本地依赖项安装在您的项目中，并且在 `package.json` 中设置了以下脚本：

```json
{
  "scripts": {
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
}
```

::: tip
如果您的网站在一个子目录（`https://example.com/subdir/`）中提供服务，那么您必须在`docs/.vitepress/config.js`中设置 `'/subdir/'` 作为 `base` 变量值。
示例：如果您使用的是 Github (或 Gitlab) Pages，并部署到了 `user.github.io/repo/`，那么请将您的`base`值设置为`/repo/`。
:::

## 在本地生成和测试网站
* 您可以使用如下命令来生成文档：

```sh
$ yarn docs:build
```
* 生成文档后，可以通过运行以下命令在本地测试它们：
```sh
$ yarn docs:preview
```

预览命令将启动一个本地静态 Web 服务器，它将 `.vitepress/dist` 目录下的文件在 `http://localhost:4173` 提供展示。
这是检查生产版本在本地环境中看起来是否正常的一种简单方法。

* 您可以通过传递 `--port` 作为参数来配置服务器的端口。

```json
{
  "scripts": {
    "docs:preview": "vitepress preview docs --port 8080"
  }
}
```

现在通过以上方法，执行 `yarn docs：preview` 命令，将在 `http://localhost:8080` 启动服务器。

## Github Pages
### 使用 Github 操作
1. 在主题配置文件 `docs/.vitepress/config.js` 中，将 `base` 属性设置为您的 GitHub 存储库的名称。
如果您计划将站点部署到`https://foo.github.io/bar/`，则应将`base`设置为“/bar/”。它应该始终以斜线开头和结尾。

```js
// docs/.vitepress/config.js
import { defineConfig } from 'vitepress'
export default defineConfig(
  { base: '/bar/' }
)
```

2. 在项目的`.github/workflows`目录中创建一个名为`deploy.yml`的文件，内容如下：

```yaml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: yarn
      - run: yarn install --frozen-lockfile

      - name: Build
        run: yarn docs:build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
          # cname: example.com # if wanna deploy to custom domain
```

:::tip
请替换相应的分支名称。例如，如果要构建的分支是 `master`，则应在上述文件中将`main`替换为`master`。
:::

3. 现在提交您的代码并将其推送到 `main` 分支。
4. 等待操作完成。
5. 在存储库的“页面”菜单项下的“设置”中，选择`gh-Pages`分支作为`GitHub Pages`源。
现在，您的文档将在每次推送时自动部署。



