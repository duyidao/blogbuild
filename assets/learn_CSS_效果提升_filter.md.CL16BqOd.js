import{_ as a,D as i,c as e,I as t,a2 as n,o as l}from"./chunks/framework.BdMTL_bU.js";const u=JSON.parse('{"title":"filter","description":"","frontmatter":{},"headers":[],"relativePath":"learn/CSS/效果提升/filter.md","filePath":"learn/CSS/效果提升/filter.md","lastUpdated":1714664173000}'),p={name:"learn/CSS/效果提升/filter.md"},h=n(`<h1 id="filter" tabindex="-1">filter <a class="header-anchor" href="#filter" aria-label="Permalink to &quot;filter&quot;">​</a></h1><p><strong><code>filter</code></strong> 属性将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像、背景和边框的渲染。</p><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><p>下面简单罗列一下它所有的属性语法：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* &lt;filter-function&gt; 值 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: blur(5px);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: brightness(0</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: contrast(200%);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: drop-shadow(16px 16px 20px blue);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: grayscale(50%);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: hue-rotate(90deg);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: invert(75%);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: opacity(25%);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: saturate(30%);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: sepia(60%);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* URL */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: url(&quot;filters</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.svg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter-id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 多个滤镜 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: contrast(175%) brightness(3%);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: drop-shadow(3px 3px red) sepia(100%) drop-shadow(-3px -3px blue);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 不使用滤镜 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: none;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 全局值 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: inherit;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: initial;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: revert;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">revert-layer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: unset;</span></span></code></pre></div><h2 id="函数方法" tabindex="-1">函数方法 <a class="header-anchor" href="#函数方法" aria-label="Permalink to &quot;函数方法&quot;">​</a></h2><p>下面针对部分函数方法做详细说明。</p><h3 id="drop-shadow" tabindex="-1">drop-shadow <a class="header-anchor" href="#drop-shadow" aria-label="Permalink to &quot;drop-shadow&quot;">​</a></h3><p>使用 <code>&lt;shadow&gt;</code> 参数沿图像的轮廓生成阴影效果。阴影语法类似于 <code>&lt;box-shadow&gt;</code>（在 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_backgrounds_and_borders" target="_blank" rel="noreferrer">CSS 背景和边框模块</a>中定义），但不允许使用 <code>inset</code> 关键字以及 <code>spread</code> 参数。与所有 <code>filter</code> 属性值一样，任何在 <code>drop-shadow()</code> 后的滤镜同样会应用在阴影上。</p><p>使用场景为在 <code>box-shadow</code> 只能给整个盒子添加盒子阴影，但效果只是想给盒子内的透明图片添加阴影时使用。效果如下：</p><p>代码如下：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: drop-shadow(10px 10px 10px orange);</span></span></code></pre></div><p>其原理是把原来的像素点颜色通过算法来计算，计算完后返回新的像素点。</p><h3 id="blur" tabindex="-1">blur <a class="header-anchor" href="#blur" aria-label="Permalink to &quot;blur&quot;">​</a></h3><p>将高斯模糊应用于输入图像。括号内输入像素单位的值，该值表示需要做模糊处理时的参考半径范围，值越大处理的结果越模糊。</p><p>代码如下所示：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: blur(5px);</span></span></code></pre></div><h3 id="hue-rotate" tabindex="-1">hue-rotate <a class="header-anchor" href="#hue-rotate" aria-label="Permalink to &quot;hue-rotate&quot;">​</a></h3><p>应用色相旋转。<code>&lt;angle&gt;</code> 值设定图像会被调整的色环角度值。值为 <code>0deg</code>，则图像无变化。</p><p>代码示例：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: hue-rotate(90deg);</span></span></code></pre></div><h3 id="contrast" tabindex="-1">contrast <a class="header-anchor" href="#contrast" aria-label="Permalink to &quot;contrast&quot;">​</a></h3><p>调整输入图像的对比度。值是 <code>0%</code> 将使图像变灰（即对比度越小）；值是 <code>100%</code>，则无影响；若值超过 <code>100%</code> 将增强对比度。</p><p>代码语法示例：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: contrast(200%);</span></span></code></pre></div><h3 id="grayscale" tabindex="-1">grayscale <a class="header-anchor" href="#grayscale" aria-label="Permalink to &quot;grayscale&quot;">​</a></h3><p>将图像转换为灰度图。值为 <code>100%</code> 则完全转为灰度图像，若为初始值 <code>0%</code> 则图像无变化。值在 <code>0%</code> 到 <code>100%</code> 之间，则是该效果的线性乘数。</p><p>在特殊纪念日里网站变灰就是用了这个属性，代码如下：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: grayscale(1);</span></span></code></pre></div><h2 id="总体效果" tabindex="-1">总体效果 <a class="header-anchor" href="#总体效果" aria-label="Permalink to &quot;总体效果&quot;">​</a></h2>`,30);function r(d,k,o,c,E,g){const s=i("Iframe");return l(),e("div",null,[h,t(s,{url:"https://duyidao.github.io/blogweb/#/detail/css/filter"})])}const b=a(p,[["render",r]]);export{u as __pageData,b as default};
