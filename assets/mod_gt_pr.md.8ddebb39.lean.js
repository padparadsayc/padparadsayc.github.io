import{_ as r,C as o,o as c,c as d,H as t,w as i,k as s,a,Q as l}from"./chunks/framework.a4b4067c.js";const P=JSON.parse('{"title":"x gt pr","description":"x gt pr | x-cmd module | Pull Request 管理","frontmatter":{"head":[["meta",{"name":"og:title","content":"x gt pr | x-cmd"}],["meta",{"name":"og:description","content":"Pull Request 管理"}],["meta",{"name":"description","content":"x gt pr | x-cmd module | Pull Request 管理"}]]},"headers":[],"relativePath":"mod/gt/pr.md","filePath":"mod/gt/pr.md"}'),y={name:"mod/gt/pr.md"},g=s("h1",{id:"x-gt-pr",tabindex:"-1"},[a("x gt pr "),s("a",{class:"header-anchor",href:"#x-gt-pr","aria-label":'Permalink to "x gt pr"'},"​")],-1),h=s("p",{class:"x-desc"},"Pull Request 管理",-1),E=l("",12),u=l("",10),F=l("",7),b=l("",9),C=l("",47),v=l("",91),x=s("h2",{id:"相关链接",tabindex:"-1"},[a("相关链接 "),s("a",{class:"header-anchor",href:"#相关链接","aria-label":'Permalink to "相关链接"'},"​")],-1),m=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[a("在交互式终端中（如 zsh, bash ...），可以使用 "),s("kbd",null,"Tab"),a(" 获取补全信息")]),s("p",null,[a("运行 "),s("code",null,"CMD SUBCOMMAND --help"),a(" 可以获取命令的更多信息")])],-1);function _(B,k,f,S,A,q){const p=o("AdsContent"),e=o("DocsGroupTable"),n=o("DocsLinkCard");return c(),d("div",null,[g,h,t(p),E,t(e,{header:'["名称, 名称简写","默认值","描述"]',group:'{"Required":{"active":true,"data":[{"name":"<code>--repo</code>, <code>-r</code> ^lt;owner/repo^gt;","default":"","desc":"^lt;所属空间地址^gt;/^lt;仓库地址^gt;"},{"name":"<code>--assignees</code> ^lt;userlist(separator ,)^gt;","default":"","desc":"审查员用户名列表"},{"name":"<code>--testers</code> ^lt;userlist(separator ,)^gt;","default":"","desc":"测试员用户名列表"}]},"Optional":{"active":true,"data":[{"name":"<code>--assignees_number</code> ^lt;num^gt;","default":"<code>\\"1\\"</code> ","desc":"审查员数量"},{"name":"<code>--testers_number</code> ^lt;num^gt;","default":"<code>\\"1\\"</code> ","desc":"测试员数量"}]},"$NotGroup":{"active":true,"data":[]}}'}),u,t(e,{header:'["名称, 名称简写","默认值","描述"]',group:'{"Required":{"active":true,"data":[{"name":"<code>--repo</code>, <code>-r</code> ^lt;owner/repo^gt;","default":"","desc":"^lt;所属空间地址^gt;/^lt;仓库地址^gt;"}]},"Optional":{"active":true,"data":[{"name":"<code>--state</code> ^lt;open,merged,closed,all^gt;","default":"<code>\\"open\\"</code> ","desc":"pr 状态"},{"name":"<code>--head</code> ^lt;branch^gt;","default":"","desc":"源分支"},{"name":"<code>--base</code> ^lt;branch^gt;","default":"","desc":"提交目标分支的名称"},{"name":"<code>--since</code> ^lt;ISO 8601^gt;","default":"","desc":"起始的更新时间"},{"name":"<code>--sort</code> ^lt;created,updated...^gt;","default":"<code>\\"created\\"</code> ","desc":"排序方式"},{"name":"<code>--direction</code> ^lt;desc,asc^gt;","default":"<code>\\"desc\\"</code> ","desc":"排序方向"},{"name":"<code>--milestone_number</code> ^lt;id^gt;","default":"","desc":"里程碑序号(id)"},{"name":"<code>--labels</code> ^lt;labels(separator ,)^gt;","default":"","desc":"标签过滤"},{"name":"<code>--page</code> ^lt;num^gt;","default":"<code>\\"1\\"</code> ","desc":"目标页码"},{"name":"<code>--per_page</code> ^lt;num^gt;","default":"<code>\\"30\\"</code> ","desc":"每页数据量"}]},"$NotGroup":{"active":true,"data":[]}}'}),F,t(e,{header:'["名称, 名称简写","默认值","描述"]',group:'{"Required":{"active":true,"data":[{"name":"<code>--repo</code>, <code>-r</code> ^lt;owner/repo^gt;","default":"","desc":"^lt;所属空间地址^gt;/^lt;仓库地址^gt;"},{"name":"<code>--title</code> ^lt;title^gt;","default":"","desc":"pull request 标题"},{"name":"<code>--head</code> ^lt;branch^gt;","default":"","desc":"源分支"},{"name":"<code>--base</code> ^lt;branch^gt;","default":"","desc":"提交目标分支的名称"}]},"Optional":{"active":true,"data":[{"name":"<code>--body</code> ^lt;content^gt;","default":"","desc":"pull request 内容"},{"name":"<code>--milestone_number</code> ^lt;id^gt;","default":"","desc":"里程碑序号(id)"},{"name":"<code>--labels</code> ^lt;labels(separator ,)^gt;","default":"","desc":"标签"},{"name":"<code>--issue</code> ^lt;issue_id^gt;","default":"","desc":"关联 issue 编号"},{"name":"<code>--assignees</code> ^lt;userlist(separator ,)^gt;","default":"","desc":"审查员用户名列表"},{"name":"<code>--testers</code> ^lt;userlist(separator ,)^gt;","default":"","desc":"测试员用户名列表"},{"name":"<code>--assignees_number</code> ^lt;num^gt;","default":"","desc":"审查员数量"},{"name":"<code>--testers_number</code> ^lt;num^gt;","default":"","desc":"测试员数量"}]},"$NotGroup":{"active":true,"data":[]}}'}),b,t(e,{header:'["名称, 名称简写","默认值","描述"]',group:'{"Required":{"active":true,"data":[{"name":"<code>--repo</code>, <code>-r</code> ^lt;owner/repo^gt;","default":"","desc":"^lt;所属空间地址^gt;/^lt;仓库地址^gt;"}]},"Optional":{"active":true,"data":[{"name":"<code>--state</code> ^lt;open,closed^gt;","default":"","desc":"pull request 状态"},{"name":"<code>--title</code> ^lt;title^gt;","default":"","desc":"pull request 标题"},{"name":"<code>--body</code> ^lt;content^gt;","default":"","desc":"pull request 内容"},{"name":"<code>--milestone_number</code> ^lt;id^gt;","default":"","desc":"里程碑序号(id)"},{"name":"<code>--labels</code> ^lt;labels(separator ,)^gt;","default":"","desc":"标签"},{"name":"<code>--assignees_number</code> ^lt;num^gt;","default":"","desc":"审查员数量"},{"name":"<code>--testers_number</code> ^lt;num^gt;","default":"","desc":"测试员数量"}]},"$NotGroup":{"active":true,"data":[]}}'}),C,t(e,{header:'["名称, 名称简写","默认值","描述"]',group:'{"Required":{"active":true,"data":[{"name":"<code>--repo</code>, <code>-r</code> ^lt;owner/repo^gt;","default":"","desc":"^lt;所属空间地址^gt;/^lt;仓库地址^gt;"}]},"Optional":{"active":true,"data":[{"name":"<code>--merge_method</code> ^lt;merge,squash,rebase^gt;","default":"<code>\\"merge\\"</code> ","desc":"合并方式"},{"name":"<code>--title</code> ^lt;merge_title^gt;","default":"","desc":"合并标题"},{"name":"<code>--description</code> ^lt;desc^gt;","default":"","desc":"合并描述"}]},"$NotGroup":{"active":true,"data":[]}}'}),v,t(n,null,{default:i(()=>[x]),_:1}),m])}const O=r(y,[["render",_]]);export{P as __pageData,O as default};
