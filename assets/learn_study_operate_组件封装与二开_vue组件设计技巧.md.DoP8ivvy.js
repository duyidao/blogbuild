import{_ as s,c as i,o as a,a2 as l}from"./chunks/framework.BdMTL_bU.js";const g=JSON.parse('{"title":"Vue组件设计技巧","description":"","frontmatter":{},"headers":[],"relativePath":"learn/study/operate/组件封装与二开/vue组件设计技巧.md","filePath":"learn/study/operate/组件封装与二开/vue组件设计技巧.md","lastUpdated":1714058781000}'),t={name:"learn/study/operate/组件封装与二开/vue组件设计技巧.md"},e=l(`<h1 id="vue组件设计技巧" tabindex="-1">Vue组件设计技巧 <a class="header-anchor" href="#vue组件设计技巧" aria-label="Permalink to &quot;Vue组件设计技巧&quot;">​</a></h1><p>设计一个组件需要从以下四个方面来思考：</p><ol><li><p>样式</p><p>样式应该写哪些？需要注意什么？</p></li><li><p>template</p><p>通过插槽传递还是直接写在子组件内？</p></li><li><p>行为</p><p>某逻辑是由父组件处理还是子组件处理？</p></li><li><p>props</p><p>哪些东西放在子组件内？哪些数据通过父组件传参？</p></li></ol><h2 id="样式的思考" tabindex="-1">样式的思考 <a class="header-anchor" href="#样式的思考" aria-label="Permalink to &quot;样式的思考&quot;">​</a></h2><h3 id="容器、内部内容的基本样式" tabindex="-1">容器、内部内容的基本样式 <a class="header-anchor" href="#容器、内部内容的基本样式" aria-label="Permalink to &quot;容器、内部内容的基本样式&quot;">​</a></h3><p>以搜索栏为例：搜索栏一般都是有不同的输入框，和搜索重置两个按钮。因此按钮是固定的，样式由子组件设置。</p><p>而输入框子组件只提供最基础的样式，如宽高，边框等。</p><blockquote><p>总结</p><p>子组件中只定义其容器样式，即整体盒子样式，如宽度，阴影，内边距，字体样式等。</p></blockquote><h3 id="尽量使用低权值" tabindex="-1">尽量使用低权值 <a class="header-anchor" href="#尽量使用低权值" aria-label="Permalink to &quot;尽量使用低权值&quot;">​</a></h3><p>例如设置输入框的样式采取标签设置，如下：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>这样的好处是父组件使用想要修改覆盖其宽度样式时可以直接通过添加类名的方式覆盖样式，如下：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.father_use_input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>否则使用者使用时还要添加 <code>!important</code> ，显得不够优雅。</p><blockquote><p>总结</p><p>子组件设置样式时尽可能让权值变低，父组件在修改时可以很方便的覆盖。</p></blockquote><h3 id="预留调控类" tabindex="-1">预留调控类 <a class="header-anchor" href="#预留调控类" aria-label="Permalink to &quot;预留调控类&quot;">​</a></h3><p>预留部分可能需要的调控类名，如输入错误显示红色，正确显示绿色等，如下：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.input_error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    border-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.input_success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">green</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    border-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">green</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>这样使用者在需要使用时可直接添加类名，实现效果。代码如下所示：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">MyInput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;input_success&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">MyInput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="组件的思考" tabindex="-1">组件的思考 <a class="header-anchor" href="#组件的思考" aria-label="Permalink to &quot;组件的思考&quot;">​</a></h2><h3 id="组件分割" tabindex="-1">组件分割 <a class="header-anchor" href="#组件分割" aria-label="Permalink to &quot;组件分割&quot;">​</a></h3><p>对子组件进行分割，如果是固定内容就直接写死，不确定的部分、可能会变更的部分用 <code>slot</code> 部分传入。</p><ul><li>例如：搜索栏。搜索按钮是固定的，输入框可以采取插槽设置默认值的形式。</li><li>例如：弹窗。确定取消按钮是固定的，叉叉是固定的，标题是传入的。</li><li>例如：表格。表头是固定的，内容 <code>td</code> 是传入的。</li></ul><p>可以使用平衡写法：</p><ol><li>有 <code>slot</code> 用 <code>slot</code> ，无 <code>slot</code> 使用插槽默认内容。</li><li>具名插槽接收特定情况下父组件传入的结构</li></ol><p>代码示例如下</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;slot #input&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;slot #default&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    	&lt;input name=&quot;搜索&quot; /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/slot&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="数据操作" tabindex="-1">数据操作 <a class="header-anchor" href="#数据操作" aria-label="Permalink to &quot;数据操作&quot;">​</a></h3><p>如果数据在子组件内，子组件操作数据后还需要传递给父组件，过程繁琐。可以采用父组件通过插槽传递组件，数据变量也设置在父组件，这样父组件可以直接操作使用，无需子组件与父组件的通信。</p><h2 id="行为的思考" tabindex="-1">行为的思考 <a class="header-anchor" href="#行为的思考" aria-label="Permalink to &quot;行为的思考&quot;">​</a></h2><h3 id="行为类型拆分" tabindex="-1">行为类型拆分 <a class="header-anchor" href="#行为类型拆分" aria-label="Permalink to &quot;行为类型拆分&quot;">​</a></h3><p>把某一行为分为基本部分和业务部分，建议每一个行为都留给父组件监听。</p><p>例如弹窗组件，其拥有确定按钮和关闭按钮。其中：</p><ul><li>关闭事件，就是关闭弹窗，此行为属于逻辑行为，这个放在子组件内即可。最后通过 <code>emit</code> 提供父组件做其他额外操作</li><li>确定事件，此行为属于业务行为，直接 <code>emit</code> 留给父组件实现不同操作。</li></ul><h3 id="行为周期拆分" tabindex="-1">行为周期拆分 <a class="header-anchor" href="#行为周期拆分" aria-label="Permalink to &quot;行为周期拆分&quot;">​</a></h3><p>更有甚者可以把行为细分拆分，如确定按钮点击可以拆分为点击确定前，确定点击触发后等。类似于划分周期。</p><p>业务行为是由父组件自己处理，从开始到结束都是由父组件处理，此时无需考虑行为周期，父组件可以自主操控。</p><p>如果以上方案例关闭弹窗为例，父组件需要做到关闭前做特定处理，关闭后做特点处理，此时需要子组件传递自定义事件时拆分周期分别传递。如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> close</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    emit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;beforeColse&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    show.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    emit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;afterClose&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="props的思考" tabindex="-1">props的思考 <a class="header-anchor" href="#props的思考" aria-label="Permalink to &quot;props的思考&quot;">​</a></h2><h3 id="数据定义" tabindex="-1">数据定义 <a class="header-anchor" href="#数据定义" aria-label="Permalink to &quot;数据定义&quot;">​</a></h3><p>组件相关行为需要的数据内部定义，业务相关数据父组件传入。</p><p>例如，控制组件显隐状态可以写在子组件 <code>data</code> 中，而内容数据则通过 <code>props</code> 传递获取。</p><blockquote><p>React 官方建议，子组件尽可能不要在 <code>data</code> 内数值数据，尽量通过父组件 <code>props</code> 传递获取。这对 Vue 也适用。</p></blockquote><h3 id="组件扩展" tabindex="-1">组件扩展 <a class="header-anchor" href="#组件扩展" aria-label="Permalink to &quot;组件扩展&quot;">​</a></h3><p><code>props</code> 可以对传参做数据的定制，可以为使用者去掉某些功能或开启某些功能，比如是否能让使用者使用某些组件（如搜索的重置按钮、弹窗的取消按钮）等。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>要考虑子组件封装的便捷性与复用性。</p>`,49),n=[e];function p(h,k,d,r,o,E){return a(),i("div",null,n)}const u=s(t,[["render",p]]);export{g as __pageData,u as default};
