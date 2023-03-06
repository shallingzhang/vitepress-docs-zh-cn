import{_ as a,o as e,c as s,a as n}from"./app.d6ffb474.js";const m=JSON.parse('{"title":"布局","description":"","frontmatter":{},"headers":[{"level":2,"title":"文档布局","slug":"文档布局","link":"#文档布局","children":[]},{"level":2,"title":"页面布局","slug":"页面布局","link":"#页面布局","children":[]},{"level":2,"title":"主页布局","slug":"主页布局","link":"#主页布局","children":[]},{"level":2,"title":"无布局","slug":"无布局","link":"#无布局","children":[]}],"relativePath":"guide/theme-layout.md","lastUpdated":null}'),l={name:"guide/theme-layout.md"},o=n(`<h1 id="布局" tabindex="-1">布局 <a class="header-anchor" href="#布局" aria-hidden="true">#</a></h1><p>您可以通过将<code>layout</code>选项设置为页面<code>frontmatter</code>来选择页面布局。这有3种<code>layout</code>选项，<code>doc</code>、<code>page</code>、和 <code>home</code>。如果未指定任何内容，则将该页视为<code>doc</code>页。</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">doc</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"></span></code></pre></div><h2 id="文档布局" tabindex="-1">文档布局 <a class="header-anchor" href="#文档布局" aria-hidden="true">#</a></h2><p>选项<code>doc</code>是默认布局，它将整个<code>Markdown</code>内容设置为 “文档” 外观。它的工作原理是将整个内容包装在<code>vp-doc</code> 的css类中，并将样式应用于其下的元素。 几乎所有泛型元素（如<code>p</code>或<code>h2</code>）都有特殊的样式。因此，请记住，如果在<code>Markdown</code>内容中添加任何自定义<code>HTML</code>，这些<code>HTML</code>也会受到这些样式的影响。 它还提供以下列出的文档特定功能。这些功能仅在此布局中启用。</p><ul><li>Edit Link</li><li>Prev Next Link</li><li>Outline</li><li>Carbon Ads</li></ul><h2 id="页面布局" tabindex="-1">页面布局 <a class="header-anchor" href="#页面布局" aria-hidden="true">#</a></h2><p>选项<code>page</code>被视为“空白页”。<code>Markdown</code>仍然会被解析，所有<code>Markdown</code>扩展的工作方式与<code>doc</code>布局相同，但它不会得到任何默认样式。</p><p>页面布局将允许您自行设置所有内容的样式，而<code>VitePress</code>主题不会影响标记。当您想要创建自己的自定义页面时，这非常有用。</p><p>注意，即使在这种布局中，如果页面具有匹配的侧边栏配置，侧边栏仍然会显示。</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">page</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"></span></code></pre></div><h2 id="主页布局" tabindex="-1">主页布局 <a class="header-anchor" href="#主页布局" aria-hidden="true">#</a></h2><p>选项<code>home</code>将生成模板化的“主页”。在此布局中，您可以设置<code>hero</code>和<code>features</code>等额外选项，以进一步自定义内容。请访问“主题：主页”了解更多详情。</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">home</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"></span></code></pre></div><h2 id="无布局" tabindex="-1">无布局 <a class="header-anchor" href="#无布局" aria-hidden="true">#</a></h2><p>如果不需要任何布局，可以通过<code>frontmatter</code>传递<code>layout:false</code>。如果您想要完全自定义的登录页面（默认情况下没有任何侧边栏、导航栏或页脚），此选项很有用。</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"></span></code></pre></div>`,17),c=[o];function p(t,d,i,r,h,y){return e(),s("div",null,c)}const C=a(l,[["render",p]]);export{m as __pageData,C as default};
