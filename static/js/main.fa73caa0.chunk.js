(this.webpackJsonpprofile=this.webpackJsonpprofile||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c);a(13),a(14);function l(e){var t=e.children,a=e.style,n=void 0===a?{}:a,c=e.title,i=void 0===c?"":c,l=e.center,o=void 0!==l&&l;return r.a.createElement("div",{className:"app-chrome",style:n},r.a.createElement("div",{className:"flex flex-row items-center justify-between app-bar pa2"},r.a.createElement("div",{className:"flex flex-row items-center"},r.a.createElement("div",{className:"traffic-light red"}),r.a.createElement("div",{className:"traffic-light yellow"}),r.a.createElement("div",{className:"traffic-light green"})),r.a.createElement("div",{className:"theme-blue window-title"},i),o&&r.a.createElement("div",{className:"flex flex-row items-center vb-hidden"},r.a.createElement("div",{className:"traffic-light red"}),r.a.createElement("div",{className:"traffic-light yellow"}),r.a.createElement("div",{className:"traffic-light green"}))),t)}var o=a(7),s=a(2);function m(e){var t=e.messages,a=void 0===t?[]:t,c=Object(n.useState)(""),i=Object(s.a)(c,2),l=i[0],m=i[1],u=Object(n.useState)([]),f=Object(s.a)(u,2),d=f[0],h=f[1],v=Object(n.useRef)(),p=Object(n.useRef)();function g(e){h((function(t){return[].concat(Object(o.a)(t),[e])})),m("")}var w=Object(n.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(e!==a.length){var t=0,n=a[e];""===n.trim().length&&g(n);var r=setInterval((function(){if(t===n.length)return clearInterval(r),g(n),void setTimeout((function(){w(e+1)}),1e3);m((function(e){return e+n[t]})),t+=1}),40)}else p.current.focus()}),[a]),b="flex flex-row align-center";function E(e){if(!/\[(.+)\]\((.+)\)/.test(e))return e;var t=/(.*)\[(.+)\]\((.+)\)(.*)/.exec(e);return r.a.createElement("span",null,t[1],r.a.createElement("a",{className:"app-text input blue",href:t[3]},t[2]),t[4])}return Object(n.useEffect)((function(){w(0)}),[w]),Object(n.useEffect)((function(){v.current.scrollTop=v.current.scrollHeight}),[d]),r.a.createElement("div",{className:"app-body",ref:v},d&&d.map((function(e,t){return r.a.createElement("div",{key:e+t,className:"".concat(b," mb2")},r.a.createElement("div",{className:"app-text b theme-blue mr2"}," $"),r.a.createElement("div",{className:"app-text"},E(e)))})),r.a.createElement("div",{className:b},r.a.createElement("div",{className:"app-text b theme-blue mr2"}," $"),r.a.createElement("textarea",{className:"app-text input",onKeyDown:function(e){"Enter"===e.key&&(e.stopPropagation(),g(l))},onChange:function(e){m(e.currentTarget.value)},value:E(l),ref:p})))}var u=a(19),f=a(20),d=a(21);function h(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(0),l=Object(s.a)(i,2),o=l[0],m=l[1],h=function(){var e=window.scrollY;o!==e&&(c(e>30),m(e))};Object(n.useEffect)((function(){return window.addEventListener("scroll",h),function(){window.removeEventListener("scroll",h)}}),[]);var v=a?"white":"dark-gray",p=a?"bg-dark-gray":"";return r.a.createElement("nav",{className:"w-100 fixed flex justify-between items-center ".concat(p)},r.a.createElement("div",{className:"flex justify-between items-center"},r.a.createElement("a",{className:"link white-70 hover-white no-underline flex items-center pa3",href:"https://linkedin.com/in/actuallydan"},r.a.createElement(u.a,{className:v}),r.a.createElement("title",null,"linkedin.com/in/actuallydan")),r.a.createElement("a",{className:"link dim ".concat(a?"white":"near-black"," b f6 f5-ns dib mr3"),href:"https://github.com/actuallydan",title:"Home"},"Dan Kral"),r.a.createElement("a",{className:"link dim ".concat(v," f6 f5-ns dn dib-ns"),href:"mailto:dankral01@gmail.com",title:"dankral01@gmail.com"},"Contact")),r.a.createElement("div",{className:"flex justify-between items-center"},r.a.createElement("a",{className:"link hover-white no-underline flex items-center pa3",href:"https://github.com/actuallydan",title:"actuallydan"},r.a.createElement(f.a,{className:v})),r.a.createElement("a",{className:"link hover-white no-underline flex items-center pa3",href:"https://www.linkedin.com/in/actuallydan/",title:"linkedin.com/in/actuallydan"},r.a.createElement(d.a,{className:v}))))}var v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"App pt5"},r.a.createElement(l,{title:"hello.txt",center:!0},r.a.createElement(m,{messages:["Hi there! My name is Dan.","I'm a fullstack web developer who loves React.js","I care too much about cross-platform applications and building a decentralized future","but for now I'm just obsessed with Javascript.","I've built software for a parking company,","a gas station chain,","a pharmaceutical technology company,","my university,","private individuals,","and now I'm teaching others in my free-time at [Trilogy Education Services](https://www.trilogyed.com/)."," ","I'm also on the hunt for a new full-time career move,","feel free to checkout [my portfolio](https://actuallydan.github.io),","or send me an email at dankral01@gmail.com!"," ","\ud83d\udd2d I\u2019m currently building [athar.es](https://github.com/atharesinc/athares)","\ud83d\udcac Ask me about React, GraphQL, economics, and completely hypothetical governments","\ud83d\udceb How to reach me: dankral01@gmail.com","\ud83d\ude04 Pronouns: he/him/his"]})),r.a.createElement("div",{className:"w-100 center mt4"},r.a.createElement("div",{className:"cf ph2-ns"},[{name:"athar.es",href:"https://athar.es",img:"./images/athares-1.png"},{name:"tadu.herokuapp.com",href:"https://tadu.herokuapp.com",img:"./images/tadu-2.png"},{name:"bradysgolfcarts.com",href:"https://bradysgolfcarts.com",img:"./images/brady-carts.png"}].map((function(e){return r.a.createElement("div",{key:e.name,className:"fl w-100 w-50-m w-third-l pa2-ns"},r.a.createElement("div",{className:"pv2 pv4-ns"},r.a.createElement(l,{key:e.name,title:e.name},r.a.createElement("img",{src:e.img,alt:"screenshot of "+e.name}))))}))))))},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(t,e)}))}}()},8:function(e,t,a){e.exports=a(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.fa73caa0.chunk.js.map