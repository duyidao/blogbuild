import{_ as s,c as i,o as a,a2 as t}from"./chunks/framework.BdMTL_bU.js";const g=JSON.parse('{"title":"项目","description":"","frontmatter":{"0":"t","1":"i","2":"t","3":"l","4":"e","5":" ","6":"项","7":"目","8":"简","9":"介"},"headers":[],"relativePath":"project/lingsi/sale/index.md","filePath":"project/lingsi/sale/index.md","lastUpdated":1689256824000}'),n={name:"project/lingsi/sale/index.md"},l=t(`<h1 id="项目" tabindex="-1">项目 <a class="header-anchor" href="#项目" aria-label="Permalink to &quot;项目&quot;">​</a></h1><p>该项目为视频分销小程序，主要功能为首页、我的、分类、任务、活动五大模块。后台新增商品，通过商品发布任务，小程序端用户可领取任务和样品去推广。在任务模块上传链接地址提交任务来换取佣金提现。</p><p>2023/7/6</p><p>添加了商城模块，为单独的小程序，技术栈与分销一致。</p><p>现已发布上线，微信小程序搜 “抓猫电商”。</p><h2 id="技术栈" tabindex="-1">技术栈 <a class="header-anchor" href="#技术栈" aria-label="Permalink to &quot;技术栈&quot;">​</a></h2><ol><li><code>vue2</code> + <code>vuex3</code></li><li><code>uniapp</code></li><li><code>uview2.x</code> + <code>uni.$u.http</code> 接口调用</li></ol><h2 id="主要模块" tabindex="-1">主要模块 <a class="header-anchor" href="#主要模块" aria-label="Permalink to &quot;主要模块&quot;">​</a></h2><ul><li><p>商品任务</p><p>商品任务列表点击对应任务进入任务详情页面，可领取任务、申请拿样品、领取素材。</p><p>只有在领取任务后才能申领素材与样品；素材与样品只能申领一次。</p></li><li><p>用户任务</p><p>用户领取了任务后会有一条用户任务，需要在规定时间内完成任务后提交，否则记为超时。当用户申领素材后会有素材链接，复制后在浏览器内打开。</p></li><li><p>我的</p><p>我的模块中主要包含我的地址、个人资料修改、我的申请、抖音授权几大功能。</p></li></ul><h2 id="遇到的问题" tabindex="-1">遇到的问题 <a class="header-anchor" href="#遇到的问题" aria-label="Permalink to &quot;遇到的问题&quot;">​</a></h2><h3 id="视频轮播" tabindex="-1">视频轮播 <a class="header-anchor" href="#视频轮播" aria-label="Permalink to &quot;视频轮播&quot;">​</a></h3><p>在最开始该项目是想做一个 <code>app</code> （后来因为涉及佣金，不给上架，最后改为小程序）。在 <code>app</code> 端想要把视频嵌套到 <code>uview</code> 组件内，最后因为视频层级问题无法实现，采用了其他方案（见<a href="/blog/project/lingsi/sale/video.html">视频轮播</a>）。换成小程序端后问题解决。</p><blockquote><p>注意：</p><p><code>APP</code> 端视频层级过高，导致普通的 <code>view</code> 标签无法覆盖在视频标签之上，即使设置定位，<code>z-index:9999</code> 也不行。如果需要在视频标签上显示内容，则需要在 <code>video</code> 标签内使用 <code>cover-view</code> 或 <code>cover-image</code> 标签。</p></blockquote><h3 id="微信授权获取手机号登录" tabindex="-1">微信授权获取手机号登录 <a class="header-anchor" href="#微信授权获取手机号登录" aria-label="Permalink to &quot;微信授权获取手机号登录&quot;">​</a></h3><p>出现 <code>getPhoneNumber:fail:access denied</code> 。</p><p>因为该账号未认证，官方文档明确表明小程序要完成认证才可使用。具体实现可见 <a href="/blog/project/lingsi/sale/获取手机号.html">微信授权</a> 。</p><h3 id="视频在-ios-无法播放" tabindex="-1">视频在 <code>ios</code> 无法播放 <a class="header-anchor" href="#视频在-ios-无法播放" aria-label="Permalink to &quot;视频在 \`ios\` 无法播放&quot;">​</a></h3><p>视频轮播修改完后发布到体验版，安卓机播放没问题，苹果手机无法播放，于是开始寻查之旅。</p><p>百度“微信小程序ios无法播放视频”，微信开发平台有人专门询问了这个问题，下方回复为：</p><ul><li>播放视频的路径 不能是中文的 不能有空格。后端对返回的文件名称做了处理，因此不是这个原因。</li><li>MP4压缩级别不够。根据 <a href="https://www.cnblogs.com/aleafo/p/7644553.html" target="_blank" rel="noreferrer">该博客</a> 的解释，h264编码（通过某种特定的压缩技术，将某个视频格式的文件转换为另一种视频格式的文件的技术称为视频编码。h264是视频流中其中一种编码标准）的压缩级别问题导致。 因此需要做转码处理。在线文件转换地址：<a href="https://convertio.co/zh/" target="_blank" rel="noreferrer">在线文件转换</a></li></ul><p>苹果手机上运行，依旧无法查看。</p><ul><li><p>看到官方提出“是否能在ios浏览器上观看该视频”，去ios浏览器查看，发现浏览器无法查看，证明是视频文件的问题。经过搜索，找到一条疑似有用的解答，原地址为：<a href="https://blog.csdn.net/u010120886/article/details/79007001" target="_blank" rel="noreferrer">java处理苹果浏览器safari无法播放视频流（Accept-Ranges）</a></p><p>让后端对返回的视频格式做一定的处理（没参与不知道是否为这个问题，不清楚后端做了什么操作），最后效果实现。</p></li></ul><h3 id="过审" tabindex="-1">过审 <a class="header-anchor" href="#过审" aria-label="Permalink to &quot;过审&quot;">​</a></h3><p>小程序审核需要遵循规范，否则无法过审。目前为止分销小程序已经被驳回几次，分别为：</p><ul><li>获取用户信息：要求用户绑定微信号、手机号，让用户输入姓名</li><li>强制登录：小程序的 <code>tabbar</code> 页面需要登录才能使用，强制要求用户登录</li><li>视频类目：小程序如果需要用到视频播放，需要添加视频类目</li><li>授权登录：不能存在存在混淆腾讯官方的元 素，包括但不限于“微信”字样、微信官方logo等。需要将微信号授权登录提示修改为“手机号快捷登录”等</li></ul><h3 id="长按触发点击事件" tabindex="-1">长按触发点击事件 <a class="header-anchor" href="#长按触发点击事件" aria-label="Permalink to &quot;长按触发点击事件&quot;">​</a></h3><p>在投票界面用户需要长按对应作品复制其链接，轻车熟路从 <code>uniapp</code> 文档中找到 <code>longtap</code> 方法，运行测试一下有效果了，但是微信开发工具爆了一个警告：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[Deprecation] &#39;longtap&#39; event is deprecated. Please use &#39;longpress&#39; instead.</span></span></code></pre></div><p>大意是<code>longtap</code> 方法会触发点击事件，可以使用<code>longpress</code> ，这样就不会触发点击事件。</p><h2 id="项目亮点" tabindex="-1">项目亮点 <a class="header-anchor" href="#项目亮点" aria-label="Permalink to &quot;项目亮点&quot;">​</a></h2><h3 id="防抖的实现" tabindex="-1">防抖的实现 <a class="header-anchor" href="#防抖的实现" aria-label="Permalink to &quot;防抖的实现&quot;">​</a></h3><p>部分功能模块（如 <code>tab</code> 栏切换）用户频繁操作时会多次调用接口，增加服务器压力，且请求返回时间不一致导致数据错乱。因此封装一个防抖函数，等待用户切换完毕后再调接口。</p><ul><li><p>函数封装</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 防抖</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> debounce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">delay</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 500</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> timer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (timer) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">			clearTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(timer);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		timer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			fn.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">arguments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}, delay)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p>函数导入</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {debounce} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/utils/utils.js&#39;</span></span></code></pre></div></li><li><p>函数使用</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">debounce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 执行操作</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span></code></pre></div></li></ul><h3 id="扫码跳转页面" tabindex="-1">扫码跳转页面 <a class="header-anchor" href="#扫码跳转页面" aria-label="Permalink to &quot;扫码跳转页面&quot;">​</a></h3><p>通过二维码扫码可跳转到对应的页面，二维码的参数可在 <code>onLoad</code> 的形参中接收获取。</p><p>后端返回的数据格式是通过编码过的，因此需要转码翻译再去获取，解码的方法为 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent" target="_blank" rel="noreferrer">decodeURIComponent</a> 。</p><p>通过二维码扫码跳转的页面包含活动详情页，如果用户未登录，则会跳转到登录页，登录成功后返回的是首页，体验很不友好，因此需要让用户从哪里进的登录页，就回到哪里去。</p><p><code>uniapp</code> 中没有路由的概念，可以通过 <code>getCurrentPages()</code> 方法获取当前的页面栈，为数组对象的形式，第一项为当前的页面，第二项为上一页。<code>route</code> 属性的值是该页面的路由，因此可以获取然后跳转页面。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pages</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getCurrentPages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//获取加载的页面，数组形式，route是页面栈的路由</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> url</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pages[pages.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].route </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;pages/login/Login&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pages[pages.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].route </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pages[pages.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].route; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 上个来登录页的页面，有可能会跳两次登录页，因此判断上一个页面是否为登录页，如果是登录页则再向上上个页面获取</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uni.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">navigateTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	url</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h3 id="字体图标引入" tabindex="-1">字体图标引入 <a class="header-anchor" href="#字体图标引入" aria-label="Permalink to &quot;字体图标引入&quot;">​</a></h3><p>为了减小项目包的体积，部分小图片采取引入字体图标的形式减少图片的存储，减少文件的体积。字体图标引入方式如下：</p><ol><li><p>在 <code>iconfont</code> 阿里巴巴矢量库中选择需要的字体图片，新增一个项目并保存</p><p><a href="https://imgse.com/i/pCSDxD1" target="_blank" rel="noreferrer"><img src="https://s1.ax1x.com/2023/06/02/pCSDxD1.png" alt="pCSDxD1.png"></a></p></li><li><p>下载项目到本地，把其中的 <code>iconfont.css</code> 样式文件拖拽到项目中</p><p><a href="https://imgse.com/i/pCSrXi8" target="_blank" rel="noreferrer"><img src="https://s1.ax1x.com/2023/06/02/pCSrXi8.png" alt="pCSrXi8.png"></a></p></li><li><p>去生成链接并粘贴到 <code>iconfont.css</code> 文件中</p><p><a href="https://imgse.com/i/pCSsVWF" target="_blank" rel="noreferrer"><img src="https://s1.ax1x.com/2023/06/02/pCSsVWF.png" alt="pCSsVWF.png"></a></p></li><li><p>把链接每一个 <code>url</code> 内都添加 <code>https</code> 。修改后的效果如下：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@font-face</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  font-family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;iconfont&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Project id 3839320 */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://at.alicdn.com/t/c/font_3839320_svujarqdy4e.woff2?t=1685685427701&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;woff2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://at.alicdn.com/t/c/font_3839320_svujarqdy4e.woff?t=1685685427701&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;woff&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://at.alicdn.com/t/c/font_3839320_svujarqdy4e.ttf?t=1685685427701&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;truetype&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://at.alicdn.com/t/c/font_3839320_svujarqdy4e.svg?t=1685685427701#iconfont&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;svg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p>使用。为需要使用的标签添加类名。首先需要添加 <code>iconfont</code> 类名，让字体 <code>font-family</code> 为 <code>iconfont</code> （主要看 <code>iconfont.css</code> 文件中设置了啥类名），然后设置对应字体图标类名。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">i</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;icon-douyin iconfont&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#e85751</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">font-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rpx;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><a href="https://imgse.com/i/pCScmQg" target="_blank" rel="noreferrer"><img src="https://s1.ax1x.com/2023/06/02/pCScmQg.png" alt="pCScmQg.png"></a></p></li><li><p>最后在 <code>App.vue</code> 文件中引入</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scss&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/* 注意要写在第一行，同时给style标签加入lang=&quot;scss&quot;属性 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	@import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/static/iconfont.css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	@import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;uview-ui/index.scss&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></li></ol>`,42),e=[l];function h(p,k,r,d,o,E){return a(),i("div",null,e)}const y=s(n,[["render",h]]);export{g as __pageData,y as default};