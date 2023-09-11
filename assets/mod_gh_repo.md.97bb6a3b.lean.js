import{_ as r,C as e,o as c,c as d,H as o,w as y,k as s,a,Q as t}from"./chunks/framework.a4b4067c.js";const q=JSON.parse('{"title":"x gh repo","description":"x gh repo | x-cmd module | 仓库管理","frontmatter":{"head":[["meta",{"name":"og:title","content":"x gh repo | x-cmd"}],["meta",{"name":"og:description","content":"仓库管理"}],["meta",{"name":"description","content":"x gh repo | x-cmd module | 仓库管理"}]]},"headers":[],"relativePath":"mod/gh/repo.md","filePath":"mod/gh/repo.md"}'),i={name:"mod/gh/repo.md"},h=s("h1",{id:"x-gh-repo",tabindex:"-1"},[a("x gh repo "),s("a",{class:"header-anchor",href:"#x-gh-repo","aria-label":'Permalink to "x gh repo"'},"​")],-1),E=s("p",{class:"x-desc"},"仓库管理",-1),g=t("",6),F=t("",56),u=t("",14),b=t("",32),C=t("",66),v=s("h2",{id:"相关链接",tabindex:"-1"},[a("相关链接 "),s("a",{class:"header-anchor",href:"#相关链接","aria-label":'Permalink to "相关链接"'},"​")],-1),m=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[a("在交互式终端中（如 zsh, bash ...），可以使用 "),s("kbd",null,"Tab"),a(" 获取补全信息")]),s("p",null,[a("运行 "),s("code",null,"CMD SUBCOMMAND --help"),a(" 可以获取命令的更多信息")])],-1);function x(B,k,_,A,f,w){const p=e("AdsContent"),l=e("DocsGroupTable"),n=e("DocsLinkCard");return c(),d("div",null,[h,E,o(p),g,o(l,{header:'["名称","描述"]',group:'{"Main":{"active":true,"data":[{"name":"<a href=\\"#x-gh-repo-app\\">x gh repo --app</a>","desc":"交互式表格显示所属地址仓库"},{"name":"<a href=\\"#x-gh-repo-browse\\">x gh repo browse</a>","desc":"使用浏览器打开仓库"},{"name":"<a href=\\"#x-gh-repo-ls\\">x gh repo ls</a>","desc":"罗列仓库"},{"name":"<a href=\\"#x-gh-repo-info\\">x gh repo info</a>","desc":"显示仓库信息"},{"name":"<a href=\\"#x-gh-repo-create\\">x gh repo create</a>","desc":"创建仓库"},{"name":"<a href=\\"#x-gh-repo-edit\\">x gh repo edit</a>","desc":"修改仓库信息"},{"name":"<a href=\\"#x-gh-repo-rename\\">x gh repo rename</a>","desc":"重命名仓库"},{"name":"<a href=\\"#x-gh-repo-rm\\">x gh repo rm</a>","desc":"删除仓库"},{"name":"<a href=\\"#x-gh-repo-cl\\">x gh repo cl</a>","desc":"克隆 GitHub 仓库"},{"name":"<a href=\\"#x-gh-repo-fork\\">x gh repo fork</a>","desc":"复刻 GitHub 仓库"},{"name":"<a href=\\"#x-gh-repo-download\\">x gh repo download</a>","desc":"下载 GitHub 仓库源码快照"},{"name":"<a href=\\"#x-gh-repo-apply\\">x gh repo apply</a>","desc":"通过声明配置管理仓库"},{"name":"<a href=\\"#x-gh-repo-tag\\">x gh repo tag</a>","desc":"罗列仓库标签列表"},{"name":"<a href=\\"#x-gh-repo-team\\">x gh repo team</a>","desc":"罗列仓库的团队列表"},{"name":"<a href=\\"#x-gh-repo-export\\">x gh repo export</a>","desc":"输出仓库的db数据"}]},"Management":{"active":true,"data":[{"name":"<a href=\\"/mod/gh/repo-collaborator.html\\">x gh repo collaborator</a>","desc":"仓库成员管理"},{"name":"<a href=\\"/mod/gh/repo-file.html\\">x gh repo file</a>","desc":"仓库文件管理"},{"name":"<a href=\\"/mod/gh/repo-pr.html\\">x gh repo pr</a>","desc":"仓库 pull request 管理"},{"name":"<a href=\\"/mod/gh/repo-hook.html\\">x gh repo hook</a>","desc":"仓库钩子管理"},{"name":"<a href=\\"/mod/gh/repo-branch.html\\">x gh repo branch</a>","desc":"仓库分支管理"},{"name":"<a href=\\"/mod/gh/repo-release.html\\">x gh repo release</a>","desc":"仓库发布管理"},{"name":"<a href=\\"/mod/gh/repo-label.html\\">x gh repo label</a>","desc":"仓库 issue 标签管理"},{"name":"<a href=\\"/mod/gh/repo-topic.html\\">x gh repo topic</a>","desc":"仓库的主题分类管理"}]},"$NotGroup":{"active":true,"data":[]}}'}),F,o(l,{header:'["名称, 名称简写","默认值","描述"]',group:'{"Optional":{"active":true,"data":[{"name":"<code>--access</code> ^lt;private,public^gt;","default":"<code>\\"private\\"</code> ","desc":"仓库访问权"},{"name":"<code>--homepage</code> ^lt;url^gt;","default":"","desc":"仓库主页"},{"name":"<code>--description</code> ^lt;desc^gt;","default":"","desc":"仓库描述"},{"name":"<code>--team_id</code> ^lt;team_id^gt;","default":"","desc":"团队 ID"},{"name":"<code>--gitignore_template</code> ^lt;name^gt;","default":"","desc":"Git Ignore 模版"},{"name":"<code>--license_template</code>","default":"","desc":"License 模版"}]},"$NotGroup":{"active":true,"data":[]}}'}),u,o(l,{header:'["名称, 名称简写","默认值","描述"]',group:'{"Optional":{"active":true,"data":[{"name":"<code>--name</code> ^lt;rename^gt;","default":"","desc":"仓库重命名"},{"name":"<code>--access</code> ^lt;private,public^gt;","default":"","desc":"仓库访问权限"},{"name":"<code>--default_branch</code> ^lt;branch_name^gt;","default":"","desc":"仓库默认分支"},{"name":"<code>--team_id</code> ^lt;team_id^gt;","default":"","desc":"团队 ID"},{"name":"<code>--homepage</code> ^lt;url^gt;","default":"","desc":"仓库主页"},{"name":"<code>--description</code> ^lt;desc^gt;","default":"","desc":"仓库描述"},{"name":"<code>--scanning</code> ^lt;enable|disable^gt;","default":"","desc":"启用或禁用此存储库的密钥扫描"},{"name":"<code>--advanced_security</code> ^lt;enable|disable^gt;","default":"","desc":"为此存储库启用或禁用 GitHub 高级安全性"},{"name":"<code>--scanning_push_protection</code> ^lt;enable|disable^gt;","default":"","desc":"为此存储库启用或禁用密钥推送扫描保护"}]},"$NotGroup":{"active":true,"data":[]}}'}),b,o(l,{header:'["名称, 名称简写","默认值","描述"]',group:'{"Optional":{"active":true,"data":[{"name":"<code>--org</code> ^lt;org_path^gt;","default":"","desc":"复制仓库到组织"},{"name":"<code>--name</code> ^lt;name^gt;","default":"","desc":"仓库重命名"}]},"$NotGroup":{"active":true,"data":[]}}'}),C,o(n,null,{default:y(()=>[v]),_:1}),m])}const S=r(i,[["render",x]]);export{q as __pageData,S as default};
