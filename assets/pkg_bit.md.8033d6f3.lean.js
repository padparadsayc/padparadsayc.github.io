import{_ as a,C as o,o as n,c as s,H as r,w as i,k as t,a as e}from"./chunks/framework.a4b4067c.js";const z=JSON.parse('{"title":"bit","titleTemplate":"x-cmd package | 一个实验性的现代化 git CLI，构建在 git 之上，能提供丰富的 git 命令和选项的相关建议","description":"x-cmd package bit | 一个实验性的现代化 git CLI，构建在 git 之上，能提供丰富的 git 命令和选项的相关建议","frontmatter":{"name":"bit","titleTemplate":"x-cmd package | 一个实验性的现代化 git CLI，构建在 git 之上，能提供丰富的 git 命令和选项的相关建议","head":[["meta",{"name":"og:title","content":"bit | x-cmd package"}],["meta",{"name":"og:description","content":"一个实验性的现代化 git CLI，构建在 git 之上，能提供丰富的 git 命令和选项的相关建议"}],["meta",{"name":"description","content":"x-cmd package bit | 一个实验性的现代化 git CLI，构建在 git 之上，能提供丰富的 git 命令和选项的相关建议"}]],"links":[{"type":"1min","text":"bit","link":"/1min/bit"},{"type":"mod","text":"`x env` => 文档","link":"/mod/env"}],"homepage":"https://github.com/chriswalz/bit","license":"MIT","version":{"stable":"v0.0.1"},"support":["linux/arm64","darwin/arm64","linux/x64","darwin/x64","win/x64"],"source":{"repack-official":["https://github.com/x-cmd-build/bit/releases","https://gitcode.net/x-cmd-build/bit/-/releases"]},"aside":false,"outline":false,"x-term-speg":"pkg/bit.cn","x-term-name":"bit","x-term-desc":"一个实验性的现代化 git CLI，构建在 git 之上，能提供丰富的 git 命令和选项的相关建议","x-term-size":"large"},"headers":[],"relativePath":"pkg/bit.md","filePath":"pkg/bit.md"}'),c={name:"pkg/bit.md"},g=t("h1",{id:"bit",tabindex:"-1"},[e("bit "),t("a",{class:"header-anchor",href:"#bit","aria-label":'Permalink to "bit"'},"​")],-1),d=t("p",{class:"x-desc"},"一个实验性的现代化 git CLI，构建在 git 之上，能提供丰富的 git 命令和选项的相关建议",-1),h=t("h2",{id:"简介",tabindex:"-1"},[e("简介 "),t("a",{class:"header-anchor",href:"#简介","aria-label":'Permalink to "简介"'},"​")],-1),p=t("p",null,"bit，由 Chris Walz 于 2020 年使用 Go 语言开发，提供直观的命令行补全提示和建立在 git 命令之上的封装命令，旨在建立完全兼容 git 命令的现代化 CLI。",-1),b=t("h2",{id:"首次用户快速实验指南",tabindex:"-1"},[e("首次用户快速实验指南 "),t("a",{class:"header-anchor",href:"#首次用户快速实验指南","aria-label":'Permalink to "首次用户快速实验指南"'},"​")],-1),m=t("ol",null,[t("li",null,"本文的 demo 展现了如何通过 x-cmd 快速使用 bit，通过命令行补全提示显示当前仓库的提交记录。"),t("li",null,[e("x-cmd 提供了 "),t("a",{href:"/1min/bit"},"bit 1分钟教程"),e("，配合 x-cmd，快速体验。")])],-1),u=t("h2",{id:"功能特点",tabindex:"-1"},[e("功能特点 "),t("a",{class:"header-anchor",href:"#功能特点","aria-label":'Permalink to "功能特点"'},"​")],-1),_=t("ol",null,[t("li",null,[t("strong",null,"补全提示"),e("：借助于 Go 生态中 "),t("a",{href:"https://github.com/c-bata/go-prompt",target:"_blank",rel:"noreferrer"},"go-prompt"),e(" 交互式补全提示库，实现对于 "),t("code",null,"git"),e(" 命令的命令行补全，以直观的方式管理 git 仓库，但需要终端平台支持。")]),t("li",null,[t("strong",null,"git 命令封装"),e("：对于常见 "),t("code",null,"git"),e(" 命令进行封装，搭配交互模式达到便捷使用的目的。")]),t("li",null,[t("strong",null,"git 命令兼容"),e("：git 命令的完全兼容，以便在你需要的时候可以回退使用 "),t("code",null,"git"),e(" 命令。")])],-1),x=t("h2",{id:"竞品和相关作品",tabindex:"-1"},[e("竞品和相关作品 "),t("a",{class:"header-anchor",href:"#竞品和相关作品","aria-label":'Permalink to "竞品和相关作品"'},"​")],-1),k=t("ul",null,[t("li",null,[t("a",{href:"https://github.com/Byron/gitoxide",target:"_blank",rel:"noreferrer"},"gitoxide"),e(" 是一个使用 rust 实现的 git 库，并在此之上提供了 gix 和 ein 两个命令行工具，以提供 git 流程所需的操作。这个项目仍在活跃开发中，还未发布正式版。")])],-1),f=t("ul",null,[t("li",null,[t("a",{href:"https://github.com/go-git/go-git",target:"_blank",rel:"noreferrer"},"go-git"),e(" 是一个采用 go 库，类似 libgit，旨在为需要 go 生态引入 git 的实现，该实现效率高效率，尤其以其纯内存实现存储库而出名，已广泛应用多个知名的 go 项目（ gitea, pulumi, keybase）。这里是 git 官方提供的一份"),t("a",{href:"https://git-scm.com/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-go-git",target:"_blank",rel:"noreferrer"},"介绍"),e("。该项目提供了一些初级 git 操作的命令行工具，但官方不提供下载，需要自行编译。")]),t("li",null,[t("code",null,"x git"),e(" x-cmd 提供了一系列 git 的增强封装命令，且在默认常见交互式环境 (Zsh, Bash等) 中会开启的 "),t("code",null,"git"),e(" 命令原生补全提示，可查看 "),t("a",{href:"/mod/git"},"git 模块介绍")])],-1),y=t("h2",{id:"进一步探索",tabindex:"-1"},[e("进一步探索 "),t("a",{class:"header-anchor",href:"#进一步探索","aria-label":'Permalink to "进一步探索"'},"​")],-1),C=t("ul",null,[t("li",null,[t("a",{href:"https://github.com/chriswalz/bit",target:"_blank",rel:"noreferrer"},"GitHub: bit")]),t("li",null,[e("中文资源 "),t("ul",null,[t("li",null,[t("a",{href:"https://www.qinglite.cn/doc/3209645ec7fec75c6",target:"_blank",rel:"noreferrer"},"Go 命令行项目推荐：一个现代化的 Git CLI 客户端")])])])],-1),E=t("div",{class:"language-sh vp-adaptive-theme"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"sh"),t("pre",{class:"shiki github-dark vp-code-dark"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"x"),t("span",{style:{color:"#E1E4E8"}}," "),t("span",{style:{color:"#9ECBFF"}},"env"),t("span",{style:{color:"#E1E4E8"}}," "),t("span",{style:{color:"#9ECBFF"}},"use"),t("span",{style:{color:"#E1E4E8"}}," "),t("span",{style:{color:"#9ECBFF"}},"bit")])])]),t("pre",{class:"shiki github-light vp-code-light"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#005CC5"}},"x"),t("span",{style:{color:"#24292E"}}," "),t("span",{style:{color:"#032F62"}},"env"),t("span",{style:{color:"#24292E"}}," "),t("span",{style:{color:"#032F62"}},"use"),t("span",{style:{color:"#24292E"}}," "),t("span",{style:{color:"#032F62"}},"bit")])])])],-1);function v(P,F,w,B,I,L){const l=o("PackagePage");return n(),s("div",null,[r(l,null,{default:i(()=>[g,d]),abstract:i(()=>[h,p,b,m,u,_,x,k,f,y,C]),install:i(()=>[E]),_:1})])}const N=a(c,[["render",v]]);export{z as __pageData,N as default};
