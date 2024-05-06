import{_ as i,c as s,o as a,a2 as e}from"./chunks/framework.BdMTL_bU.js";const g=JSON.parse('{"title":"项目","description":"","frontmatter":{"0":"t","1":"i","2":"t","3":"l","4":"e","5":" ","6":"音","7":"果","8":"云","9":"音"},"headers":[],"relativePath":"project/lingsi/music/index.md","filePath":"project/lingsi/music/index.md","lastUpdated":1691244019000}'),l={name:"project/lingsi/music/index.md"},t=e(`<h1 id="项目" tabindex="-1">项目 <a class="header-anchor" href="#项目" aria-label="Permalink to &quot;项目&quot;">​</a></h1><p>该项目名称为音果云音。目前已上架百度助手，各端下载地址为：</p><ul><li>安卓-百度助手：<a href="https://mobile.baidu.com/item?pid=5000028289&amp;source=appbaidu" target="_blank" rel="noreferrer">音果云音</a></li><li>h5版： <a href="https://app.yinguokongjian.com/h5" target="_blank" rel="noreferrer">音果云音</a></li><li>IOS AppStore：<a href="https://apps.apple.com/cn/app/%E9%9F%B3%E6%9E%9C%E4%BA%91%E9%9F%B3/id6445878897" target="_blank" rel="noreferrer">音果云音</a></li></ul><h2 id="技术栈" tabindex="-1">技术栈 <a class="header-anchor" href="#技术栈" aria-label="Permalink to &quot;技术栈&quot;">​</a></h2><ul><li><code>uni-app</code> 框架</li><li><code>vue3</code> + <code>pinia</code></li><li><code>uview</code> 组件库</li><li><code>luch-request</code> 请求接口</li></ul><p>Bug数记录</p><p><a href="https://imgse.com/i/pCC6ufx" target="_blank" rel="noreferrer"><img src="https://s1.ax1x.com/2023/06/05/pCC6ufx.png" alt="pCC6ufx.png"></a></p><h2 id="主要模块" tabindex="-1">主要模块 <a class="header-anchor" href="#主要模块" aria-label="Permalink to &quot;主要模块&quot;">​</a></h2><ol><li><p>登录</p><p>允许用户通过手机号验证码、手机号密码、微信授权三种方式登录；登录前需同意用户协议。</p></li><li><p><code>tabBar</code>页（首页、商城、合作、我的）</p></li><li><p>我要测试</p><p>允许用户本人填写，也可帮他人填写，帮助他人填写需要填入对方手机、年龄、性别、体重（均必填），本人填写则直接获取本地存储的数据（需判断用户是否已填写自己的信息，未填写则弹出提示并跳转）。</p><p>选择考卷后答题，每份试卷对应一种类别，每一份试卷对应多种分数模版，最后根据所得的分数显示对应的模版结果。</p></li><li><p>分享</p></li><li><p>推广中心</p><p>用户分享推广商品的链接，其他用户复制后购买，双方建立上下级关系，上级可获取相应的佣金。</p></li><li><p>终端操作</p></li><li><p>售后</p><p>工具类商品允许申请售后，确认收货与取消订单。</p><p>只有在待付款状态下允许取消订单。</p><p>只有在待收货状态下允许确认收货。</p><p>售后只有在待发货、待收货、已完成、售后四种状态下发起。若该商品的支付方式为钵币支付，也不允许发起售后。</p></li><li><p>其余功能······</p></li></ol><h2 id="遇到的问题" tabindex="-1">遇到的问题 <a class="header-anchor" href="#遇到的问题" aria-label="Permalink to &quot;遇到的问题&quot;">​</a></h2><h3 id="苹果上架" tabindex="-1">苹果上架 <a class="header-anchor" href="#苹果上架" aria-label="Permalink to &quot;苹果上架&quot;">​</a></h3><p>该项目有佣金推广模块与虚拟商品购买模块，导致苹果商城上架不成功，经过讨论决定苹果手机上把这些模块隐藏。判断用户使用的设备是否为苹果代码如下：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> is_iOS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (uni.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getSystemInfoSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().platform </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ios&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">       return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">       return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="富文本图片不显示" tabindex="-1">富文本图片不显示 <a class="header-anchor" href="#富文本图片不显示" aria-label="Permalink to &quot;富文本图片不显示&quot;">​</a></h3><p>在移动端调试的时候图片能够显示，在手机端运行时发现图片无法显示，但是点击后能够预览，也有宽高占位。百度一阵有人给出了解答：因为图片宽度大于手机屏幕的宽度，导致获取渲染图片时其宽度为 <code>null</code> 。</p><p>解决方案： 通过正则表达式匹配图片标签，为其加上 <code>max-width: 100%</code> （注意不要破坏原来的样式）</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">changeImgWidth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(html) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">html) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newContent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> html</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">&lt;img style=&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(html)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     newContent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> html.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">&lt;img style=&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;img style=&quot;max-width: 100%; height: auto;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">&lt;img</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(html)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     newContent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> html.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">&lt;img</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">gi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;img style=&quot;max-width:100%; height: auto;&quot;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newContent</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="页面跳转失败" tabindex="-1">页面跳转失败 <a class="header-anchor" href="#页面跳转失败" aria-label="Permalink to &quot;页面跳转失败&quot;">​</a></h3><p>场景如下：</p><ul><li>刚进页面调用接口请求，由于没有携带 <code>token</code> 返回 401 未登录，判断到状态后跳转到登录页。</li><li>获取用户的粘贴板，根据链接信息跳到对应的商品页</li></ul><p>出现的问题：</p><ul><li>虽然请求发送了，也收到没有登录的提示了，但是没有跳转到登录页，重新再调一次接口后才自动跳转，并且报错</li><li>不跳转对应的商品页，并且报错</li></ul><p>报错信息如下所示：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Waiting to navigate to xxx, do not operate continuously xxx</span></span></code></pre></div><p>百度之后找到这个问答帖子：<a href="https://ask.dcloud.net.cn/question/145830" target="_blank" rel="noreferrer">这是啥意思？为什么不跳呢</a> ，答案大意就是页面还没渲染好，准备跳到起始页（即 <code>pages.json</code> 的第一个页面），然后触发事件，又要跳到设置的对应页面，因此报错。</p><p>解决方法：</p><p>加一个延迟器，延迟执行跳转的操作即可。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    uni.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">navigateTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/pages/login/Login&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="项目亮点" tabindex="-1">项目亮点 <a class="header-anchor" href="#项目亮点" aria-label="Permalink to &quot;项目亮点&quot;">​</a></h2><h3 id="音频播放" tabindex="-1">音频播放 <a class="header-anchor" href="#音频播放" aria-label="Permalink to &quot;音频播放&quot;">​</a></h3><p>使用 <code>uni.createInnerAudioContext()</code> 音频组件控制播放音频。</p><ol><li>通过 <code>src</code> 字段添加链接；设置 <code>startTime</code> 开始使用</li><li>通过循环的方式动态次数循环播放音频</li><li>通过 <code>play()</code> 事件播放音频，<code>pause()</code> 事件暂停音频，<code>stop()</code> 事件停止音频， <code>seek()</code> 事件切换音频当前播放位置， <code>onEnded()</code> 监听音频停止时间， <code>onTimeUpdate()</code> 动态获取音频当前播放位置。</li><li>根据使用者是否听音频来动态增加减少当前音频在听人数，通过暂定、停止、结束事件调用后端接口传递记录当前使用者听该音频的时长。</li></ol><h3 id="画布绘制" tabindex="-1">画布绘制 <a class="header-anchor" href="#画布绘制" aria-label="Permalink to &quot;画布绘制&quot;">​</a></h3><p>使用 <code>canvas</code> 画布绘制海报并生成图片保存到手机相册。</p><ol><li>通过 <code>canvas</code> 标签以及 <code>uni.createCanvasContext</code> 方法生成海报。</li><li>通过 <code>uni.canvasToTempFilePath</code> 方法把画布转为图片。</li><li>通过 <code>uni.saveImageToPhotosAlbum</code> 方法把图片保存到手机相册中。</li></ol><h3 id="蓝牙功能" tabindex="-1">蓝牙功能 <a class="header-anchor" href="#蓝牙功能" aria-label="Permalink to &quot;蓝牙功能&quot;">​</a></h3><p>使用 <code>uniapp</code> 内置 <code>API</code> 实现蓝牙搜索与低功耗蓝牙连接读写功能；使用 <code>uniapp</code> 内置 <code>API</code> 实现扫一扫功能。详细信息请见《操作页》内容。</p><h3 id="支付" tabindex="-1">支付 <a class="header-anchor" href="#支付" aria-label="Permalink to &quot;支付&quot;">​</a></h3><p>通过 <code>uni.requestPayment</code> 方法实现支付功能</p><ol><li>调用后端接口创建订单获取订单编号，成功后即可调用后端支付接口获取对应sdk</li><li>使用 <code>uni.requestPayment</code> 方法调起支付，其中，属性 <code>provider</code> 为支付服务提供商。如支付宝支付参数为 <code>alipay</code>，微信支付为 <code>wxpay</code> ，<code>orderInfo</code> 传入第一步获取到的订单编号</li></ol><h3 id="剪切板" tabindex="-1">剪切板 <a class="header-anchor" href="#剪切板" aria-label="Permalink to &quot;剪切板&quot;">​</a></h3><p>动态设置用户剪切板内容，实现商品链接的保存分享</p><ol><li>通过 <code>uni.setClipboardData</code> 设置系统剪贴板的内容，其中，<code>data</code> 属性的参数为要设置的内容。</li><li>通过 <code>uni.getClipboardData</code>获取系统剪贴板的内容。</li></ol><h3 id="检查更新" tabindex="-1">检查更新 <a class="header-anchor" href="#检查更新" aria-label="Permalink to &quot;检查更新&quot;">​</a></h3><p>获取当前 <code>app</code> 的版本号，调用接口获取服务器最新版本号，如果当前并非最新版本号，则更新下载最新版本。详情请见： <a href="/blog/project/lingsi/music/APP/update.html">更新</a></p>`,45),n=[t];function h(p,k,d,r,o,c){return a(),s("div",null,n)}const u=i(l,[["render",h]]);export{g as __pageData,u as default};
