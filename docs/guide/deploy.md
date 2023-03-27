# 部署
## 部署你的 `VitePress`网站。
以下指南基于一些共同的假设：

* `VitePress` 网站位于项目的`docs`目录中。
* 您使用的是默认构建输出目录（`.vitepress/dist`）。
* VitePress 作为本地依赖项安装在您的项目中，并且在 `package.json` 中设置了以下脚本：

```json
{
  "scripts": {
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
}
```

## 在本地构建和测试网站

1. 运行如下命令来生成文档：

```sh
$ npm run docs:build
```
2. 生成文档后，通过运行以下命令在本地预览它：

```sh
$ npm run docs:preview
```

`preview`命令将启动一个本地静态` Web` 服务器，它将 `.vitepress/dist` 目录下的文件在 `http://localhost:4173` 提供展示。您可以使用它来确保一切在推送到生产环境之前一切正常。

3. 您可以通过传递 `--port` 作为参数来配置服务器的端口。

```json
{
  "scripts": {
    "docs:preview": "vitepress preview docs --port 8080"
  }
}
```

现在通过 `docs：preview` 方法，将在 `http://localhost:8080` 启动服务器。

## 设置公共基本路径

默认情况下，我们假设站点将部署在域 （`/`） 的根路径上。如果您的网站将在子路径（例如 `https://mywebsite.com/blog/`）中提供服务，则需要在 `VitePress`配置中将`base`选项设置为“`/blog/`”。

示例：如果您使用的是` Github`（或` GitLab`）页面并部署到` user.github.io/repo/`，请将您的`base`设置为` /repo/`。

## 平台指南
### Netlify / Vercel / Cloudflare Pages / AWS Amplify / Render
使用仪表板设置新项目并更改这些设置：

-  构建命令: `npm run docs:build`
-  输出目录: `docs:/.vitepress/dist`
-  Node 版本: `16`(或更高，默认情况下通常为` 14` 或 `16`，但在 `Cloudflare`页面上，默认值仍然是 `12`，因此您可能需要更改它)

::: warning
Don't enable options like Auto Minify for HTML code. It will remove comments from output which have meaning to Vue. You may see hydration mismatch errors if they get removed.
:::

### Github Pages

1. 在主题配置文件 `docs/.vitepress/config.js` 中，将 `base` 属性设置为您`GitHub`仓库的名称。
如果您计划将站点部署到`https://foo.github.io/bar/`，则应将`base`设置为`/bar/`。它应该始终以斜线开头和结尾。

```js
// docs/.vitepress/config.js
import { defineConfig } from 'vitepress'
export default defineConfig(
  { base: '/bar/' }
)
```

2. 在项目的`.github/workflows`目录中创建一个名为`deploy.yml`的文件，其中包含以下内容：

```yaml
# Simple workflow for deploying static content to GitHub Pages

name: Deploy 
on:
  push:
    branches: "main"
    workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: "pages"
  cancel-in-progress: true
jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - name: Setup pages
        uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: npm
      - run: npm install --frozen-lockfile
      - name: Build
        run: npm run docs:build
      - uses: actions/configure-pages@v3
      - uses: actions/upload-pages-artifact@v1
        with:
          path: docs/.vitepress/dist
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v1

```

:::tip
请替换相应的分支名称。例如，如果要构建的分支是 `master`，则应在上述文件中将`main`替换为`master`。
:::

3. 在存储库“设置”中的“`Pages`”菜单项下，选择“构建和部署的源”中的“`GitHub Actions`”。
4. 现在提交您的代码并将其推送到 `main` 分支。
5. 等待操作完成。
6. 在存储库“设置”中的“`Pages`”菜单项下，单击`Visit site`，然后可以看到您的站点，
以后在每次推送时，您的文档将会自动部署。

### GitLab Pages

1. 在 `docs/.vitepress/configs`中设置`outDir` 为`../public`

2. 仍然在您的配置文件`docs/.witpress/config.js`中，将`base`属性设置为`GitLab`存储库的名称。如果您计划将站点部署到`https://foo.gitlab.io/bar/`，则应将`base`设置为“`/bar/`”。它应该总是以斜线开头和结尾。

3. 在项目的根目录中创建一个名为`.gitlab-ci.yml`的文件，内容如下。每当您对内容进行更改时，这将构建和部署您的网站：

```yaml
   image: node:16
   pages:
     cache:
       paths:
         - node_modules/
     script:
       - npm install
       - npm run docs:build
     artifacts:
       paths:
         - public
     only:
       - main
```

4.  或者，如果您想使用`node`的`alpine`版本，则必须手动安装`git`。在这种情况下，上面的代码修改为：

```yaml
image: node:16-alpine
pages:
  cache:
    paths:
      - node_modules/
  before_script:
    - apk add git
  script:
    - npm install
    - npm run docs:build
  artifacts:
    paths:
      - public
  only:
    - main
```