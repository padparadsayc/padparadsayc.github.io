import{_ as r,C as n,o as s,c as o,H as f,w as l,k as e,a}from"./chunks/framework.a4b4067c.js";const L=JSON.parse('{"title":"ffmpeg","titleTemplate":"x-cmd package | ffmpeg 是用于处理音频、视频、字幕和相关元数据等多媒体内容的库和工具的集合","description":"x-cmd package ffmpeg | ffmpeg 是用于处理音频、视频、字幕和相关元数据等多媒体内容的库和工具的集合","frontmatter":{"name":"ffmpeg","titleTemplate":"x-cmd package | ffmpeg 是用于处理音频、视频、字幕和相关元数据等多媒体内容的库和工具的集合","head":[["meta",{"name":"og:title","content":"ffmpeg | x-cmd package"}],["meta",{"name":"og:description","content":"ffmpeg 是用于处理音频、视频、字幕和相关元数据等多媒体内容的库和工具的集合"}],["meta",{"name":"description","content":"x-cmd package ffmpeg | ffmpeg 是用于处理音频、视频、字幕和相关元数据等多媒体内容的库和工具的集合"}]],"links":[{"type":"1min","text":"ffmpeg","link":"/1min/ffmpeg"},{"type":"mod","text":"`x env` => 文档","link":"/mod/env"}],"homepage":"https://github.com/FFmpeg/FFmpeg","license":"MIT","version":{"stable":"v6.0"},"support":["linux/arm64","darwin/arm64","linux/x64","darwin/x64","win/x64"],"source":{"repack-official":["https://github.com/x-cmd-build/ffmpeg/releases","https://gitcode.net/x-cmd-build/ffmpeg/-/releases"]},"aside":false,"outline":false,"x-term-speg":"pkg/ffmpeg.cn","x-term-name":"ffmpeg","x-term-desc":"ffmpeg 是用于处理音频、视频、字幕和相关元数据等多媒体内容的库和工具的集合","x-term-size":"large"},"headers":[],"relativePath":"pkg/ffmpeg.md","filePath":"pkg/ffmpeg.md"}'),p={name:"pkg/ffmpeg.md"},m=e("h1",{id:"ffmpeg",tabindex:"-1"},[a("ffmpeg "),e("a",{class:"header-anchor",href:"#ffmpeg","aria-label":'Permalink to "ffmpeg"'},"​")],-1),i=e("p",{class:"x-desc"},"ffmpeg 是用于处理音频、视频、字幕和相关元数据等多媒体内容的库和工具的集合",-1),c=e("h2",{id:"简介",tabindex:"-1"},[a("简介 "),e("a",{class:"header-anchor",href:"#简介","aria-label":'Permalink to "简介"'},"​")],-1),g=e("p",null,"ffmpeg 是音视频处理领域中常用的开源转换工具。以强大的功能、广泛的格式支持和丰富的参数调节在处理音视频格式的任务中得到了广泛的使用。",-1),d=e("p",null,"FFmpeg 是由 Fabrice Bellard 于 2000 年发起的开源多媒体框架，使用 C 语言编写。",-1),h=e("ul",null,[e("li",null,'"FF" 代表"fast forward"，意为高效处理，而 "mpeg" 的则是指 MPEG 组织 (负责制定影音压缩及传输标准的国际标准化组织)。'),e("li",null,[a("FFmpeg 不仅提供一系列音视频处理库，还以此为基础提供了命令行工具 "),e("code",null,"ffmpeg"),a("。")])],-1),u=e("h2",{id:"首次用户快速实验指南",tabindex:"-1"},[a("首次用户快速实验指南 "),e("a",{class:"header-anchor",href:"#首次用户快速实验指南","aria-label":'Permalink to "首次用户快速实验指南"'},"​")],-1),_=e("ol",null,[e("li",null,"本文的 demo 展现了如何通过 x-cmd 快速使用 ffmpeg 命令将 mp4 格式视频转为 avi 格式，和从视频中提取音频。"),e("li",null,[a("x-cmd 提供了 "),e("strong",null,[e("a",{href:"/1min/ffmpeg"},"ffmpeg 1分钟教程")]),a("，配合 x-cmd，马上体验。")])],-1),k=e("h2",{id:"功能特点",tabindex:"-1"},[a("功能特点 "),e("a",{class:"header-anchor",href:"#功能特点","aria-label":'Permalink to "功能特点"'},"​")],-1),x=e("ol",null,[e("li",null,[e("strong",null,"卓越的处理功能"),a("：ffmpeg 提供强大的音视频处理功能，包括但不限于编码、解码、转码、多输出支持、剪辑、创建流媒体、添加音效和字幕等任务。")]),e("li",null,[e("strong",null,"广泛的格式支持"),a("：ffmpeg 支持几乎所有"),e("a",{href:"https://ffmpeg.org/ffmpeg-formats.html",target:"_blank",rel:"noreferrer"},"音频和视频格式"),a("。包括常见的 MP4、AVI、MOV、WMV、MKV、FLV、WebM、OGG、TS、M2TS、H.264、H.265、AAC、MP3等，这使得它能够满足各种音视频处理需求。")]),e("li",null,[e("strong",null,"丰富的参数调节"),a("：ffmpeg 提供了丰富的"),e("a",{href:"https://ffmpeg.org/ffmpeg.html#Options",target:"_blank",rel:"noreferrer"},"参数调节"),a("，可用于调整视频帧率、编码质量、音量等，以满足不同的音视频处理要求。")])],-1),b=e("h2",{id:"类似工具与竞品",tabindex:"-1"},[a("类似工具与竞品 "),e("a",{class:"header-anchor",href:"#类似工具与竞品","aria-label":'Permalink to "类似工具与竞品"'},"​")],-1),F=e("ul",null,[e("li",null,[e("a",{href:"https://handbrake.fr/",target:"_blank",rel:"noreferrer"},"HandBrake"),a(" 是一个采用 GPLv2 协议发布的开源音视频转码器 "),e("ul",null,[e("li",null,"相比 FFMPEG，HandBrake 提供了图形界面，可用于 Linux, Mac, Windows。"),e("li",null,[e("a",{href:"https://helpmanual.io/man1/HandBrakeCLI/",target:"_blank",rel:"noreferrer"},"HandBrakeCLI"),a(" 则是其命令行版本，感兴趣的读者可以进一步了解。这是官方提供的 "),e("a",{href:"https://handbrake.fr/docs/en/latest/cli/command-line-reference.html",target:"_blank",rel:"noreferrer"},"CLI 使用文档")])])])],-1),y=e("h2",{id:"进一步探索",tabindex:"-1"},[a("进一步探索 "),e("a",{class:"header-anchor",href:"#进一步探索","aria-label":'Permalink to "进一步探索"'},"​")],-1),C=e("ul",null,[e("li",null,[e("a",{href:"https://github.com/FFmpeg/FFmpeg",target:"_blank",rel:"noreferrer"},"GitHub: ffmpeg")]),e("li",null,[e("a",{href:"https://ffmpeg.org/ffmpeg.html",target:"_blank",rel:"noreferrer"},"文档：ffmpeg")]),e("li",null,[e("a",{href:"https://trac.ffmpeg.org/#Miscellaneous",target:"_blank",rel:"noreferrer"},"wiki：ffmpeg 常见使用案例")]),e("li",null,[e("a",{href:"https://ffmpeg-api.com/learn/ffmpeg/guide",target:"_blank",rel:"noreferrer"},"FFmpeg: A Comprehensive Guide")]),e("li",null,[e("a",{href:"https://www.makeuseof.com/ffmpeg-commands-linux/",target:"_blank",rel:"noreferrer"},"How to Use FFmpeg Commands")]),e("li",null,[e("a",{href:"https://itsfoss.com/ffmpeg/",target:"_blank",rel:"noreferrer"},"The Complete Guide for Using ffmpeg in Linux")])],-1),E=e("div",{class:"language-sh vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"x"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"env"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"use"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"ffmpeg")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"x"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"env"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"use"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"ffmpeg")])])])],-1);function v(P,w,B,M,H,G){const t=n("PackagePage");return s(),o("div",null,[f(t,null,{default:l(()=>[m,i]),abstract:l(()=>[c,g,d,h,u,_,k,x,b,F,y,C]),install:l(()=>[E]),_:1})])}const T=r(p,[["render",v]]);export{L as __pageData,T as default};
