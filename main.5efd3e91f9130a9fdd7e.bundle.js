(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1256:function(e,n,t){"use strict";t.r(n);var o=t(52),r=t(1),s=t(426),c=t.n(s),i=t(427);o.addons.setConfig({theme:Object(r.create)({brandTitle:"storybook-addon-designs",brandImage:c.a,brandUrl:i.homepage})})},1260:function(e,n){},1261:function(e,n){},1262:function(e,n){},1263:function(e,n){},1305:function(e,n,t){"use strict";t.r(n);var o,r,s,c,i,a,l,u,b,f,d,j,p,m,O,g=t(52),x=t.n(g),h=t(1),v="STORYBOOK_ADDON_DESIGNS",y=v+"/panel",w={UpdateConfig:v+"/update_config"},k=t(0),C=t(79),S=t(7),P=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},F=function(e){var n=e.config,t=e.defer,o=void 0!==t&&t,r=Object(k.useState)(o?void 0:n.url),s=r[0],c=r[1],i=Object(k.useState)(!1),a=i[0],l=i[1];return Object(k.useEffect)((function(){if(o){var e=requestAnimationFrame((function(){c(n.url)}));return function(){return cancelAnimationFrame(e)}}}),[o,n.url]),Object(k.useEffect)((function(){l(!1)}),[s]),Object(h.jsx)("div",{css:I},!a&&Object(h.jsx)(S.Placeholder,{css:A},"Loading..."),Object(h.jsx)("iframe",{css:D,src:s,allowFullScreen:n.allowFullscreen,onLoad:function(){return l(!0)}}))},I=Object(h.css)(o||(o=P(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  overflow: hidden;\n"],["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  overflow: hidden;\n"]))),A=Object(h.css)(r||(r=P(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  transform: translate(-50%, -50%);\n"],["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  transform: translate(-50%, -50%);\n"]))),D=Object(h.css)(s||(s=P(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n\n  z-index: 1;\n"],["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n\n  z-index: 1;\n"]))),L=function(e){var n=e.config,t=Object(k.useMemo)((function(){return function(e){return/https:\/\/([w.-]+.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/.test(e)}(n.url)?{url:"https://www.figma.com/embed?embed_host="+(n.embedHost||location.hostname)+"&url="+n.url,allowFullscreen:n.allowFullscreen}:(console.warn("[storybook-addon-designs] The URL you specified is not valid Figma URL.\nThe addon fallbacks to normal iframe mode.For more detail, please check <https://www.figma.com/developers/embed>."),n)}),[n.url,n.allowFullscreen,n.embedHost]);return Object(h.jsx)(F,{defer:!0,config:t})},E=function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var o=Array(e),r=0;for(n=0;n<t;n++)for(var s=arguments[n],c=0,i=s.length;c<i;c++,r++)o[r]=s[c];return o},M=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},T=function(){return(T=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)},z=function(e){var n=e.children,t=e.className,o=e.style,r=e.defaultValue,s=e.value,c=e.onChange,i=Object(k.useState)([0,0]),a=i[0],l=i[1];Object(k.useEffect)((function(){l(r||(s||[0,0]))}),[r]);var u=function(e,n){var t=Object(k.useState)([0,0]),o=(t[0],t[1]),r=Object(k.useState)(!1),s=r[0],c=r[1],i=Object(k.useCallback)((function(e){0===e.button&&(o([e.screenX,e.screenY]),c(!0))}),[c,o]),a=Object(k.useCallback)((function(e){var n=e.touches[0];o([n.screenX,n.screenY]),c(!0)}),[c,o]),l=Object(k.useCallback)((function(n){s&&o((function(t){return e([n[0]-t[0],n[1]-t[1]]),n}))}),E([o,s],n)),u=Object(k.useCallback)((function(e){var n=e.screenX,t=e.screenY;l([n,t])}),[l]),b=Object(k.useCallback)((function(e){var n=e.touches[0],t=n.screenX,o=n.screenY;l([t,o])}),E([o,s],n)),f=Object(k.useCallback)((function(){o([0,0]),c(!1)}),[c,o]);return{onMouseDown:i,onMouseMove:u,onMouseUp:f,onMouseLeave:f,onTouchStart:a,onTouchMove:b,onTouchCancel:f,onTouchEnd:f}}((function(e){c&&c(e),l((function(n){return[n[0]+e[0],n[1]+e[1]]}))}),[l,c]),b=Object(k.useMemo)((function(){var e=s||a;return{transform:"translate("+e[0]+"px, "+e[1]+"px)"}}),[s,a]);return Object(h.jsx)("div",T({css:N,className:t,style:o},u),Object(h.jsx)("div",{css:Z,style:b},n))},N=Object(h.css)(c||(c=M(["\n  position: relative;\n  overflow: hidden;\n\n  &:active {\n    cursor: move;\n  }\n"],["\n  position: relative;\n  overflow: hidden;\n\n  &:active {\n    cursor: move;\n  }\n"]))),Z=Object(h.css)(i||(i=M(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"],["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"]))),B=function(e){var n=e.onZoomIn,t=e.onZoomOut,o=e.onReset;return Object(h.jsx)(k.Fragment,null,Object(h.jsx)(S.IconButton,{onClick:n},Object(h.jsx)(S.Icons,{icon:"zoom"})),Object(h.jsx)(S.IconButton,{onClick:t},Object(h.jsx)(S.Icons,{icon:"zoomout"})),Object(h.jsx)(S.IconButton,{onClick:o},Object(h.jsx)(S.Icons,{icon:"zoomreset"})))},R=function(e,n){var t=Object(k.useState)(1),o=t[0],r=t[1];return Object(k.useEffect)((function(){r(e)}),n),{scale:o,zoomIn:Object(k.useCallback)((function(){r((function(e){return e+.1}))}),[r]),zoomOut:Object(k.useCallback)((function(){r((function(e){return Math.max(e-.1,.1)}))}),[r]),resetZoom:Object(k.useCallback)((function(){r(1)}),[r])}},_=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},U=function(e){var n=e.config,t=R(n.scale||1,[n.scale]),o=Object(k.useMemo)((function(){return{transform:"scale("+t.scale+")"}}),[t.scale]);return Object(h.jsx)("div",{css:Y},Object(h.jsx)(S.FlexBar,{border:!0},Object(h.jsx)(k.Fragment,{key:"left"},Object(h.jsx)("p",null,Object(h.jsx)("b",null,"Image")),Object(h.jsx)(S.Separator,null),Object(h.jsx)(B,{onReset:t.resetZoom,onZoomIn:t.zoomIn,onZoomOut:t.zoomOut}))),Object(h.jsx)(z,{css:H,defaultValue:n.offset},Object(h.jsx)("img",{css:J,src:n.url,style:o})))},Y=Object(h.css)(a||(a=_(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n"],["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n"]))),H=Object(h.css)(l||(l=_(["\n  flex-grow: 1;\n"],["\n  flex-grow: 1;\n"]))),J=Object(h.css)(u||(u=_(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n\n  pointer-events: none;\n  border-radius: 1px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);\n"],["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n\n  pointer-events: none;\n  border-radius: 1px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);\n"]))),X=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},G=function(e){var n,t,o,r=e.config;return Object(h.jsx)("div",{css:K},Object(h.jsx)(S.Link,{cancel:!1,href:r.url,target:null!==(n=r.target)&&void 0!==n?n:"_blank",rel:null!==(t=r.rel)&&void 0!==t?t:"noopener",withArrow:null===(o=r.showArrow)||void 0===o||o},r.label||r.url))},K=Object(h.css)(b||(b=X(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"],["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),V=t(272),q=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},W=Object(h.jsx)(S.Placeholder,null,"Loading PDF..."),$=function(e){var n=e.config,t=function(e){void 0===e&&(e=1);var n=Object(k.useState)(1),t=n[0],o=n[1],r=Object(k.useState)(1),s=r[0],c=r[1],i=Object(k.useCallback)((function(n){c(n),o(n>0?e:0)}),[e,c,o]),a=Object(k.useCallback)((function(e){o(e>s?s:e<=0?1:e)}),[s,o]);Object(k.useEffect)((function(){a(e)}),[e]);var l=t<=1,u=t>=s,b=Object(k.useCallback)((function(){u||o((function(e){return e+1}))}),[u,o]),f=Object(k.useCallback)((function(){l||o((function(e){return e-1}))}),[l,o]);return{current:t,total:s,isFirst:l,isLast:u,next:b,prev:f,jump:a,init:i}}(n.page),o=Object(k.useCallback)((function(e){t.init(e.numPages)}),[t.init]),r=R(n.scale||1,[n.scale]),s=r.scale,c=r.zoomIn,i=r.zoomOut,a=r.resetZoom;return Object(h.jsx)("div",{css:Q},Object(h.jsx)(S.FlexBar,{border:!0},Object(h.jsx)(k.Fragment,{key:"left"},Object(h.jsx)("p",null,Object(h.jsx)("b",null,"PDF")),Object(h.jsx)(S.Separator,null),Object(h.jsx)(B,{onReset:a,onZoomIn:c,onZoomOut:i}),Object(h.jsx)(S.Separator,null),Object(h.jsx)(S.IconButton,{css:ee,onClick:t.prev,disabled:t.isFirst},Object(h.jsx)(S.Icons,{icon:"arrowleft"})),Object(h.jsx)("div",{css:oe},t.current," / ",t.total),Object(h.jsx)(S.IconButton,{css:ee,onClick:t.next,disabled:t.isLast},Object(h.jsx)(S.Icons,{icon:"arrowright"})))),Object(h.jsx)(z,{css:ne,defaultValue:n.offset},Object(h.jsx)(V.Document,{file:n.url,loading:W,onLoadSuccess:o},Object(h.jsx)(V.Page,{css:te,loading:W,pageNumber:t.current,scale:s}))))},Q=Object(h.css)(f||(f=q(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n"],["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n"]))),ee=function(e){return Object(h.css)(d||(d=q(["\n  &[disabled] {\n    color: ",";\n    cursor: not-allowed;\n  }\n"],["\n  &[disabled] {\n    color: ",";\n    cursor: not-allowed;\n  }\n"])),e.color.medium)},ne=Object(h.css)(j||(j=q(["\n  flex-grow: 1;\n"],["\n  flex-grow: 1;\n"]))),te=Object(h.css)(p||(p=q(["\n  position: absolute !important;\n  top: 50%;\n  left: 50%;\n  display: inline-block;\n\n  border-radius: 1px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);\n\n  transform: translate(-50%, -50%);\n"],["\n  position: absolute !important;\n  top: 50%;\n  left: 50%;\n  display: inline-block;\n\n  border-radius: 1px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);\n\n  transform: translate(-50%, -50%);\n"]))),oe=Object(h.css)(m||(m=q(["\n  display: flex;\n  align-items: center;\n"],["\n  display: flex;\n  align-items: center;\n"]))),re=function(e){var n=e.tabs,t=Object(k.useState)(n[0].id),o=t[0],r=t[1];return Object(k.useEffect)((function(){r(n[0].id)}),[n]),Object(h.jsx)(S.Tabs,{absolute:!0,selected:o,actions:{onSelect:r}},n.map((function(e){return Object(h.jsx)("div",{key:e.id,id:e.id,title:e.name},e.offscreen||o===e.id?e.content:null)})))},se=function(){return(se=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)},ce=function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var o=Array(e),r=0;for(n=0;n<t;n++)for(var s=arguments[n],c=0,i=s.length;c<i;c++,r++)o[r]=s[c];return o},ie=function(e){var n=e.config;if(!n||"length"in n&&0===n.length)return Object(h.jsx)(S.Placeholder,null,Object(h.jsx)(k.Fragment,null,"No designs found"),Object(h.jsx)(k.Fragment,null,"Learn how to"," ",Object(h.jsx)(S.Link,{href:"https://github.com/pocka/storybook-addon-designs#usage",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"display design preview for the story")));var t=ce(n instanceof Array?n:[n]).map((function(e,n){var t,o={id:JSON.stringify(e),name:e.name||e.type.toUpperCase(),offscreen:null===(t=e.offscreen)||void 0===t||t};switch(e.type){case"iframe":return se(se({},o),{content:Object(h.jsx)(F,{config:e})});case"figma":return se(se({},o),{content:Object(h.jsx)(L,{config:e}),offscreen:!1});case"pdf":return se(se({},o),{content:Object(h.jsx)($,{config:e})});case"image":return se(se({},o),{content:Object(h.jsx)(U,{config:e})});case"link":return se(se({},o),{content:Object(h.jsx)(G,{config:e})})}return se(se({},o),{content:Object(h.jsx)(S.Placeholder,null,Object(h.jsx)(k.Fragment,null,"Invalid config type"),Object(h.jsx)(k.Fragment,null,"Config type you set is not supported. Please choose one from"," ",Object(h.jsx)(S.Link,{href:"https://github.com/pocka/storybook-addon-designs#available-types",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"available config types")))})}));return 1===t.length?Object(h.jsx)("div",null,t[0].content):Object(h.jsx)(re,{tabs:t})},ae=function(e){var n=e.active,t=e.api,o=e.channel,r=Object(k.useState)(),s=r[0],c=r[1],i=Object(k.useState)(),a=i[0],l=i[1];return Object(k.useEffect)((function(){var e=function(e){l(e);var n=t.getParameters(e,"design");c((function(e){return n!==e?n:e}))};return o.on(w.UpdateConfig,c),o.on(C.STORY_CHANGED,e),function(){o.removeListener(w.UpdateConfig,c),o.removeListener(C.STORY_CHANGED,e)}}),[]),n?Object(h.jsx)(ie,{key:a,config:s}):null};O="panel",x.a.register(v,(function(e){var n=function(n){var t=n.active,o=n.key;return Object(h.jsx)(ae,{key:o,channel:x.a.getChannel(),api:e,active:t})};"tab"===O?x.a.add(y,{title:"Design",render:n,type:g.types.TAB,paramKey:"design",route:function(e){return"/design/"+e.storyId},match:function(e){return"design"===e.viewMode}}):x.a.addPanel(y,{title:"Design",paramKey:"design",render:n})}))},426:function(e,n,t){e.exports=t.p+"static/media/logo-with-text.39ee7ff9.svg"},427:function(e){e.exports=JSON.parse('{"name":"storybook-addon-designs","version":"5.4.5","description":"Storybook addon for embedding your design preview in addon panel","main":"cjs/index.js","module":"esm/index.js","types":"esm/index.d.ts","repository":"git@github.com:pocka/storybook-addon-designs.git","homepage":"https://github.com/pocka/storybook-addon-designs","author":"pocka <pockawoooh@gmail.com>","license":"MIT","files":["esm","cjs","blocks.js","register.js","register-tab.js","preset.js"],"devDependencies":{"@storybook/addon-docs":"^5.3.19","@storybook/addons":"^5.3.19","@storybook/client-api":"^5.3.19","@storybook/components":"^5.3.19","@storybook/core-events":"^5.3.19","@storybook/theming":"^5.3.19","@types/pdfjs-dist":"^2.0.0","@types/react":"^16.8.8","@types/webpack-env":"^1.13.9","react":"^16.8.4","typescript":"^3.7.0"},"peerDependencies":{"@storybook/addons":"^5.0.0 || ^6.0.0","@storybook/components":"^5.0.0 || ^6.0.0","@storybook/theming":"^5.0.0 || ^6.0.0","react":">=16.8.0"},"scripts":{"dev":"tsc --watch --preserveWatchOutput","build":"yarn build:esm && yarn build:cjs","build:esm":"tsc","build:cjs":"tsc --module commonjs --outDir cjs","test":"echo \'No tests\' && exit 0","clean":"rm -r esm cjs","prepublishOnly":"cp ../../README.md ./ && yarn build"},"dependencies":{"react-pdf":"^4.0.5"},"publishConfig":{"tag":"latest"}}')},429:function(e,n,t){t(430),t(573),t(1256),t(1305),t(1296),e.exports=t(1298)},492:function(e,n){}},[[429,1,2]]]);