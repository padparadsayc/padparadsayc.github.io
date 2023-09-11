import{_ as l,C as a,o as n,c as r,H as o,w as c,k as s,a as p,Q as i}from"./chunks/framework.a4b4067c.js";const B=JSON.parse('{"title":"x proxy pip","description":"x proxy pip | x-cmd module | 设置 pip 的镜像源","frontmatter":{"head":[["meta",{"name":"og:title","content":"x proxy pip | x-cmd"}],["meta",{"name":"og:description","content":"设置 pip 的镜像源"}],["meta",{"name":"description","content":"x proxy pip | x-cmd module | 设置 pip 的镜像源"}]]},"headers":[],"relativePath":"mod/proxy/pip.md","filePath":"mod/proxy/pip.md"}'),d={name:"mod/proxy/pip.md"},y=s("h1",{id:"x-proxy-pip",tabindex:"-1"},[p("x proxy pip "),s("a",{class:"header-anchor",href:"#x-proxy-pip","aria-label":'Permalink to "x proxy pip"'},"​")],-1),h=s("p",{class:"x-desc"},"设置 pip 的镜像源",-1),x=i('<h2 id="子命令" tabindex="-1">子命令 <a class="header-anchor" href="#子命令" aria-label="Permalink to &quot;子命令&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td><a href="#x-proxy-pip-url">x proxy pip url</a></td><td>提供镜像源候选项的 url</td></tr><tr><td><a href="#x-proxy-pip-get">x proxy pip get</a></td><td>获取当前的镜像源的 url</td></tr><tr><td><a href="#x-proxy-pip-set">x proxy pip set</a></td><td>设置镜像源，从当前的镜像源中选择一个然后进行设置 (TODO:支持自定义的镜像源)</td></tr><tr><td><a href="#x-proxy-pip-unset">x proxy pip unset</a></td><td>将下载源设置为默认的源。</td></tr></tbody></table></div><h3 id="x-proxy-pip-url" tabindex="-1">x proxy pip url <a class="header-anchor" href="#x-proxy-pip-url" aria-label="Permalink to &quot;x proxy pip url&quot;">​</a></h3><p>提供镜像源候选项的 url</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">url</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">url</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>Mirror name<br><code>tuna</code> | <code>ustc</code> | <code>ali</code> | <code>huazhong</code> | <code>shandong</code>...</td></tr></tbody></table></div><h3 id="x-proxy-pip-get" tabindex="-1">x proxy pip get <a class="header-anchor" href="#x-proxy-pip-get" aria-label="Permalink to &quot;x proxy pip get&quot;">​</a></h3><p>获取当前的镜像源的 url</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span></span></code></pre></div><h3 id="x-proxy-pip-set" tabindex="-1">x proxy pip set <a class="header-anchor" href="#x-proxy-pip-set" aria-label="Permalink to &quot;x proxy pip set&quot;">​</a></h3><p>设置镜像源，从当前的镜像源中选择一个然后进行设置 (TODO:支持自定义的镜像源)</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>Mirror name<br><code>tuna</code> | <code>ustc</code> | <code>ali</code> | <code>huazhong</code> | <code>shandong</code>...</td></tr></tbody></table></div><h3 id="x-proxy-pip-unset" tabindex="-1">x proxy pip unset <a class="header-anchor" href="#x-proxy-pip-unset" aria-label="Permalink to &quot;x proxy pip unset&quot;">​</a></h3><p>将下载源设置为默认的源。</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unset</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unset</span></span></code></pre></div><br>',23),u=s("h2",{id:"相关链接",tabindex:"-1"},[p("相关链接 "),s("a",{class:"header-anchor",href:"#相关链接","aria-label":'Permalink to "相关链接"'},"​")],-1),E=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[p("在交互式终端中（如 zsh, bash ...），可以使用 "),s("kbd",null,"Tab"),p(" 获取补全信息")]),s("p",null,[p("运行 "),s("code",null,"CMD SUBCOMMAND --help"),p(" 可以获取命令的更多信息")])],-1);function g(F,b,m,C,_,v){const t=a("AdsContent"),e=a("DocsLinkCard");return n(),r("div",null,[y,h,o(t),x,o(e,null,{default:c(()=>[u]),_:1}),E])}const f=l(d,[["render",g]]);export{B as __pageData,f as default};
