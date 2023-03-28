# 命令行接口

## `vitepress dev`

以指定的根目录启动`VitePress dev`服务器。默认为当前目录。在当前目录下运行时，`dev`命令也可以省略。

用法

```sh
# start in current directory, omitting `dev`
vitepress

# start in sub directory
vitepress dev [root]
```

选项

| 选项  | 描述  |
| :---- | :---- |
| `--open [path]` | 启动时打开浏览器 ( `boolean \| string` ) |
| `--open <port>` | 指定端口（ `number` ）|
| `--base <path>` | 公共基本路径 ( 默认:`/`）（`string` ) |
| `--cors` | 启用 CORS |
| `--strictPort` | 如果指定的端口已被使用，则退出 ( `boolean` ) |
| `--force` | 强制优化器忽略缓存并重新绑定（ `boolean` ）|

## `vitepress build`

为生产构建`VitePress`站点 。

用法

```sh
vitepress build [root]
```

选项

| 选项  | 描述  |
| :---- | :---- |
| `--mpa（实验功能）` | 在没有客户端水化的情况下构建MPA模式 ( `boolean` ) |
| `--base <path>` | 公共基本路径 ( 默认:`/`）（`string` ) |
| `--target <target>` | Transpile target (default: `modules`) (`string`) |
| `--outDir <dir>` | 输出目录 ( 默认：`.vitepress/dist` ) (`string`) |
| `--minify [minifier]` | 启用/禁用缩小，或指定要使用的缩小器（ 默认: `esbuild`) (`boolean` \| `terser` \| `esbuild`) |
| `--assetsInlineLimit <number>` | 静态资产`base64`内联阈值(字节)（ 默认：`4096` ）（`number`）|

## `vitepress preview`

在本地预览产品构建。

用法

```sh
vitepress preview [root]
```
选项

| 选项  | 描述  |
| :---- | :---- |
| `--base <path>` | 公共基本路径 ( 默认:`/`）（`string` ) |
| `--port <port>` | 指定端口（`prot`) |

## `vitepress init`

在当前目录下启动安装向导。

用法

```sh
vitepress init
```
