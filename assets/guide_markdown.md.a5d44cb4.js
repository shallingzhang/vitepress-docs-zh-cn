import{_ as e,o as a,c as s,a as n}from"./app.d6ffb474.js";const g=JSON.parse('{"title":"Markdown 扩展","description":"","frontmatter":{},"headers":[{"level":2,"title":"Header Anchors","slug":"header-anchors","link":"#header-anchors","children":[]},{"level":2,"title":"链接","slug":"链接","link":"#链接","children":[{"level":3,"title":"内部链接","slug":"内部链接","link":"#内部链接","children":[]},{"level":3,"title":"Page Suffix","slug":"page-suffix","link":"#page-suffix","children":[]},{"level":3,"title":"外部链接","slug":"外部链接","link":"#外部链接","children":[]}]},{"level":2,"title":"GitHub-Style 表格","slug":"github-style-表格","link":"#github-style-表格","children":[]},{"level":2,"title":"Emoji 🎉","slug":"emoji-🎉","link":"#emoji-🎉","children":[]}],"relativePath":"guide/markdown.md","lastUpdated":null}'),l={name:"guide/markdown.md"},t=n(`<h1 id="markdown-扩展" tabindex="-1">Markdown 扩展 <a class="header-anchor" href="#markdown-扩展" aria-hidden="true">#</a></h1><p><code>VitePress</code>附带内置<code>Markdown</code>扩展。</p><h2 id="header-anchors" tabindex="-1">Header Anchors <a class="header-anchor" href="#header-anchors" aria-hidden="true">#</a></h2><p>标题头部自动应用锚链接。可以使用 <code>markdown.anchor</code> 选项配置锚点的渲染。</p><h2 id="链接" tabindex="-1">链接 <a class="header-anchor" href="#链接" aria-hidden="true">#</a></h2><p>内部和外部链接都得到特殊处理。</p><h3 id="内部链接" tabindex="-1">内部链接 <a class="header-anchor" href="#内部链接" aria-hidden="true">#</a></h3><p>内部链接被转换为<code>SPA</code>导航的路由器链接。此外，在每个子目录中的<code>index.md</code>都将自动转换为<code>index.html</code>，并带有相应的<code>URL /</code>。 例如，给定以下目录结构：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ foo</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ one.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ two.md</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ bar</span></span>
<span class="line"><span style="color:#A6ACCD;">   ├─ index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">   ├─ three.md</span></span>
<span class="line"><span style="color:#A6ACCD;">   └─ four.md</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如果您在<code>foo/one.md</code>中：</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">Home</span><span style="color:#89DDFF;">](</span><span style="color:#F07178;text-decoration:underline;">/</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> &lt;!-- sends the user to the root index.md --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">](</span><span style="color:#F07178;text-decoration:underline;">/foo/</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> &lt;!-- sends the user to index.html of directory foo --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">foo heading</span><span style="color:#89DDFF;">](</span><span style="color:#F07178;text-decoration:underline;">./#heading</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> &lt;!-- anchors user to a heading in the foo index file --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">bar - three</span><span style="color:#89DDFF;">](</span><span style="color:#F07178;text-decoration:underline;">../bar/three</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> &lt;!-- you can omit extension --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">bar - three</span><span style="color:#89DDFF;">](</span><span style="color:#F07178;text-decoration:underline;">../bar/three.md</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> &lt;!-- you can append .md --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">bar - four</span><span style="color:#89DDFF;">](</span><span style="color:#F07178;text-decoration:underline;">../bar/four.html</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> &lt;!-- or you can append .html --&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="page-suffix" tabindex="-1">Page Suffix <a class="header-anchor" href="#page-suffix" aria-hidden="true">#</a></h3><p>默认情况下，页面和内部链接使用<code>.html</code>后缀生成。</p><h3 id="外部链接" tabindex="-1">外部链接 <a class="header-anchor" href="#外部链接" aria-hidden="true">#</a></h3><p>出站链接自动获取target=“_blank”rel=“noreferrer”：</p><ul><li><a href="https://vuejs.org/" target="_blank" rel="noreferrer"> vuejs </a></li><li><a href="https://github.com/vuejs/vitepress" target="_blank" rel="noreferrer"> VitePress on GitHub </a></li></ul><h2 id="github-style-表格" tabindex="-1">GitHub-Style 表格 <a class="header-anchor" href="#github-style-表格" aria-hidden="true">#</a></h2><p>输入</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">| Tables        |      Are      |  Cool |</span></span>
<span class="line"><span style="color:#A6ACCD;">| ------------- | :-----------: | ----: |</span></span>
<span class="line"><span style="color:#A6ACCD;">| col 3 is      | right-aligned | $1600 |</span></span>
<span class="line"><span style="color:#A6ACCD;">| col 2 is      |   centered    |   $12 |</span></span>
<span class="line"><span style="color:#A6ACCD;">| zebra stripes |   are neat    |    $1 |</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>输出</p><table><thead><tr><th>Tables</th><th style="text-align:center;">Are</th><th style="text-align:right;">Cool</th></tr></thead><tbody><tr><td>col 3 is</td><td style="text-align:center;">right-aligned</td><td style="text-align:right;">$1600</td></tr><tr><td>col 2 is</td><td style="text-align:center;">centered</td><td style="text-align:right;">$12</td></tr><tr><td>zebra stripes</td><td style="text-align:center;">are neat</td><td style="text-align:right;">$1</td></tr></tbody></table><h2 id="emoji-🎉" tabindex="-1">Emoji 🎉 <a class="header-anchor" href="#emoji-🎉" aria-hidden="true">#</a></h2><p>输入</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">:tada: :100:</span></span>
<span class="line"></span></code></pre></div><p>输出</p><p>🎉 💯</p><p>所有可用的<a href="https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json" target="_blank" rel="noreferrer">表情符号列表</a>。</p>`,27),o=[t];function r(p,i,c,d,h,y){return a(),s("div",null,o)}const D=e(l,[["render",r]]);export{g as __pageData,D as default};