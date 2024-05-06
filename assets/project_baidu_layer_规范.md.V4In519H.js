import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.BdMTL_bU.js";const g=JSON.parse('{"title":"规范","description":"","frontmatter":{},"headers":[],"relativePath":"project/baidu/layer/规范.md","filePath":"project/baidu/layer/规范.md","lastUpdated":1706340641000}'),l={name:"project/baidu/layer/规范.md"},t=n(`<h1 id="规范" tabindex="-1">规范 <a class="header-anchor" href="#规范" aria-label="Permalink to &quot;规范&quot;">​</a></h1><p>多人合作开发的项目，如果不设置规范，会出现每个人的风格不一样，一改动则把其他人的风格给改了，提交代码时不明确本地改动改到了啥。设置规范也是为了确保多人合作开发的顺利。</p><p>规范设置范围很广泛，从文件夹规范到代码风格规范等，都需要有一个统一。</p><h2 id="文件夹规范" tabindex="-1">文件夹规范 <a class="header-anchor" href="#文件夹规范" aria-label="Permalink to &quot;文件夹规范&quot;">​</a></h2><p>前面已经介绍过了项目大体文件夹的位置与作用，由于该项目是一个项目结构包含多个图层，因此在开发时，保持文件夹结构一致也方便他人的排查和项目后续的维护。</p><p>项目文件夹规范如下：</p><ol><li><p>在 <code>examples</code> 文件夹中设置当前图层的一级路由组件，该组件用于引入地图组件和本图层的组件。</p></li><li><p>在 <code>src/components/Common</code> 文件夹中设置公共组件，如地图组件；在 <code>src/components/Layer</code> 文件夹中设置各个图层的组件。</p></li><li><p>公共资源、方法都放到 <code>src</code> 文件夹下的对应位置，图层各自用到的则放到每个图层文件夹内，其中分工如下：</p><ul><li><code>assets</code> 存放静态资源（如图片、字体等）</li><li><code>components</code> 存放当前图层的组件</li><li><code>store</code> 存放多组件使用的变量和事件函数</li><li><code>utils</code> 存放当前图层公共方法</li><li><code>config</code> 存放当前图层的枚举和字典</li></ul></li><li><p>定义图层的路由，在 <code>router</code> 文件夹下</p></li><li><p>定义图层路由的简写形式，分为两个步骤：</p><ul><li><p>在 <code>script</code> 文件夹下新建一个 <code>common.js</code> 文件，创建一个对象，键名为简写形式，键值为全全路径</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> aliasMap</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;@TestLayer&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./src/xxx/TestLayer&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div></li><li><p>在 <code>vite.cinfig.js</code> 文件中配置简写路径</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {aliasMap} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./scripts/common.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(({</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        resolve: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            alias: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;@Test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fileURLToPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">aliasMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@TestLayer&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.url)),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div></li></ul></li></ol><h2 id="代码风格规范" tabindex="-1">代码风格规范 <a class="header-anchor" href="#代码风格规范" aria-label="Permalink to &quot;代码风格规范&quot;">​</a></h2><p>代码风格主要表现在是否使用逗号、分号；每行代码长度；箭头函数只有一个参数时是否需要加括号等。</p><p>代码风格设置方法为安装依赖和插件 <code>Eslint</code> 和 <code>Stylelint</code> 。然后在 VScode 的设置 <code>setting.json</code> 中配置保存格式化，如下所示：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;editor.codeActionsOnSave&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;source.fixAll.eslint&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eslint.validate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [  </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;javascript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;javascriptreact&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;html&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;vue&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span></code></pre></div><p>后续保存代码后他会自动格式化。</p><blockquote><p>注意</p><p>如果安装了 <code>prettier</code> 等扩展，需要禁用。</p></blockquote>`,13),e=[t];function p(h,k,d,o,r,E){return a(),i("div",null,e)}const y=s(l,[["render",p]]);export{g as __pageData,y as default};
