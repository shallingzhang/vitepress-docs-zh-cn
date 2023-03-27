# 连接到 CMS （内容管理系统）

## 一般工作流程

将`VitePress`连接到`CMS`将主要围绕动态路由进行。在继续之前一定要了解它是如何工作的。

由于每个`CMS`的工作方式不同，在这里我们只能提供一个通用的工作流，您将需要适应您的特定场景。

1. 如果你的`CMS`需要身份验证，创建一个`.env`文件来存储你的`API`令牌并加载它:

   ```js
   // posts/[id].paths.js
   import { loadEnv } from 'vitepress'
   
   const env = loadEnv('', process.cwd())
   ```

2. 从`CMS`中获取必要的数据，并将其格式化为适当的路径数据:

   ```js
   export default {
     async paths() {
       // use respective CMS client library if needed
       const data = await (await fetch('https://my-cms-api', {
         headers: {
           // token if necessary
         }
       })).json()
   
       return data.map(entry => {
         return {
           params: { id: entry.id, /* title, authors, date etc. */ },
           content: entry.content
         }
       })
     }
   }
   ```

3. 渲染页面内容:

   ```md
   # {{ $params.title }}
   
   - by {{ $params.author }} on {{ $params.date }}
   
   <!-- @content -->
   
   ```

## 集成指南

如果您已经编写了关于将`VitePress`与特定`CMS`集成的指南，请使用下面的“编辑此页”链接将其提交到这里!