import{_ as e,C as l,o as c,c as r,H as t,w as d,k as s,a,Q as i}from"./chunks/framework.a4b4067c.js";const _=JSON.parse('{"title":"x zuz","description":"x zuz | x-cmd module | 压缩或解压文件","frontmatter":{"head":[["meta",{"name":"og:title","content":"x zuz | x-cmd"}],["meta",{"name":"og:description","content":"压缩或解压文件"}],["meta",{"name":"description","content":"x zuz | x-cmd module | 压缩或解压文件"}]]},"headers":[],"relativePath":"mod/zuz.md","filePath":"mod/zuz.md"}'),y={name:"mod/zuz.md"},E=s("h1",{id:"x-zuz",tabindex:"-1"},[a("x zuz "),s("a",{class:"header-anchor",href:"#x-zuz","aria-label":'Permalink to "x zuz"'},"​")],-1),h=s("p",{class:"x-desc"},"压缩或解压文件",-1),u=i('<h2 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-label="Permalink to &quot;例子&quot;">​</a></h2><p>将 test 文件夹打包成命名为 test, 格式为.tar.gz</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">zuz</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">z</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test.tar.gz</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">zuz</span><span style="color:#24292E;"> </span><span style="color:#032F62;">z</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test.tar.gz</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span></span></code></pre></div><p>将 test.tar.gz 文件夹解压至当前目录</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">zuz</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">uz</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test.tar.gz</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">zuz</span><span style="color:#24292E;"> </span><span style="color:#032F62;">uz</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test.tar.gz</span></span></code></pre></div><p>将 test.tar.gz 文件夹解压至当前目录后删除 test.tar.gz 原始文件</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">zuz</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">uzr</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test.tar.gz</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">zuz</span><span style="color:#24292E;"> </span><span style="color:#032F62;">uzr</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test.tar.gz</span></span></code></pre></div><p>列出 test.tar.gz 文件内部包含的文件</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">zuz</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test.tar.gz</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">zuz</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test.tar.gz</span></span></code></pre></div><p>将test.tar</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">zuz</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">z</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test.tar.gz</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test.tar</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">zuz</span><span style="color:#24292E;"> </span><span style="color:#032F62;">z</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test.tar.gz</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test.tar</span></span></code></pre></div><p>将test.tar.gz 解压成 test.tar</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">zuz</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">uz</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test.tar.gz</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">zuz</span><span style="color:#24292E;"> </span><span style="color:#032F62;">uz</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test.tar.gz</span></span></code></pre></div><p>将test.txt.gz 解压成 test.txt</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">zuz</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">uz</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test.txt.gz</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">zuz</span><span style="color:#24292E;"> </span><span style="color:#032F62;">uz</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test.txt.gz</span></span></code></pre></div><h2 id="子命令" tabindex="-1">子命令 <a class="header-anchor" href="#子命令" aria-label="Permalink to &quot;子命令&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td><a href="#x-zuz-z">x zuz z</a></td><td>压缩文件</td></tr><tr><td><a href="#x-zuz-uz">x zuz uz</a></td><td>解压压缩文件</td></tr><tr><td><a href="#x-zuz-uzr">x zuz uzr</a></td><td>解压文件然后删除原始文件</td></tr><tr><td><a href="#x-zuz-ls">x zuz ls</a></td><td>列出压缩文件内部包含的文件</td></tr></tbody></table></div><h3 id="x-zuz-z" tabindex="-1">x zuz z <a class="header-anchor" href="#x-zuz-z" aria-label="Permalink to &quot;x zuz z&quot;">​</a></h3><p>压缩文件</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">zuz</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">z</span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;">compress</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#E1E4E8;">n</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">zuz</span><span style="color:#24292E;"> </span><span style="color:#032F62;">z</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">compress</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#24292E;">n</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>压缩后的文件名及文件格式</td></tr><tr><td><code>#n</code></td><td>需要压缩的目标文件或文件夹</td></tr></tbody></table></div><h3 id="x-zuz-uz" tabindex="-1">x zuz uz <a class="header-anchor" href="#x-zuz-uz" aria-label="Permalink to &quot;x zuz uz&quot;">​</a></h3><p>解压压缩文件</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">zuz</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">uz</span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;">decompress</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">zuz</span><span style="color:#24292E;"> </span><span style="color:#032F62;">uz</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">decompress</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>需要解压的压缩包</td></tr></tbody></table></div><h3 id="x-zuz-uzr" tabindex="-1">x zuz uzr <a class="header-anchor" href="#x-zuz-uzr" aria-label="Permalink to &quot;x zuz uzr&quot;">​</a></h3><p>解压文件然后删除原始文件</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">zuz</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">uzr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">zuz</span><span style="color:#24292E;"> </span><span style="color:#032F62;">uzr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>需要解压的压缩包</td></tr></tbody></table></div><h3 id="x-zuz-ls" tabindex="-1">x zuz ls <a class="header-anchor" href="#x-zuz-ls" aria-label="Permalink to &quot;x zuz ls&quot;">​</a></h3><p>列出压缩文件内部包含的文件</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">zuz</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">zuz</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>需要查看的压缩包</td></tr></tbody></table></div><br>',42),z=s("h2",{id:"相关链接",tabindex:"-1"},[a("相关链接 "),s("a",{class:"header-anchor",href:"#相关链接","aria-label":'Permalink to "相关链接"'},"​")],-1),F=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[a("在交互式终端中（如 zsh, bash ...），可以使用 "),s("kbd",null,"Tab"),a(" 获取补全信息")]),s("p",null,[a("运行 "),s("code",null,"CMD SUBCOMMAND --help"),a(" 可以获取命令的更多信息")])],-1);function g(C,b,v,x,k,m){const o=l("Terminal"),n=l("AdsContent"),p=l("DocsLinkCard");return c(),r("div",null,[E,h,t(o,{speg:"mod/zuz",name:"x zuz",desc:"压缩或解压文件",size:"large"}),t(n),u,t(p,null,{default:d(()=>[z]),_:1}),F])}const f=e(y,[["render",g]]);export{_ as __pageData,f as default};
