(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[450],{780:(e,n,t)=>{Promise.resolve().then(t.bind(t,3401)),Promise.resolve().then(t.bind(t,8193)),Promise.resolve().then(t.bind(t,8379)),Promise.resolve().then(t.bind(t,5617)),Promise.resolve().then(t.t.bind(t,6628,23))},7481:(e,n,t)=>{"use strict";function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)({}).hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(null,arguments)}t.d(n,{_:()=>a})},3401:(e,n,t)=>{"use strict";t.d(n,{default:()=>c});var a=t(7481),r=t(8173),l=t.n(r),o=t(6046),i=t(2115),s=t(707),c=(0,i.forwardRef)(function(e,n){let{defaultLocale:t,href:r,locale:c,localeCookie:u,onClick:_,prefetch:d,unprefixed:f,...m}=e,h=(0,s.A)(),v=null!=c&&c!==h,p=c||h,b=function(){let[e,n]=(0,i.useState)();return(0,i.useEffect)(()=>{n(window.location.host)},[]),e}(),g=b&&f&&(f.domains[b]===p||!Object.keys(f.domains).includes(b)&&h===t&&!c)?f.pathname:r,x=(0,o.usePathname)();return v&&(d&&console.error("The `prefetch` prop is currently not supported when using the `locale` prop on `Link` to switch the locale.`"),d=!1),i.createElement(l(),(0,a._)({ref:n,href:g,hrefLang:v?c:void 0,onClick:function(e){(function(e,n,t,a){if(!e||!(a!==t&&null!=a)||!n)return;let r=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.pathname;return"/"===e?n:n.replace(e,"")}(n),{name:l,...o}=e;o.path||(o.path=""!==r?r:"/");let i="".concat(l,"=").concat(a,";");for(let[e,n]of Object.entries(o))i+="".concat("maxAge"===e?"max-age":e),"boolean"!=typeof n&&(i+="="+n),i+=";";document.cookie=i})(u,x,h,c),_&&_(e)},prefetch:d},m))})},8193:(e,n,t)=>{"use strict";t.d(n,{default:()=>_});var a=t(7481),r=t(6046),l=t(2115),o=t(707);function i(e){return("object"==typeof e?null==e.host&&null==e.hostname:!/^[a-z]+:/i.test(e))&&!function(e){let n="object"==typeof e?e.pathname:e;return null!=n&&!n.startsWith("/")}(e)}function s(e,n){let t;return"string"==typeof e?t=c(n,e):(t={...e},e.pathname&&(t.pathname=c(n,e.pathname))),t}function c(e,n){let t=e;return/^\/(\?.*)?$/.test(n)&&(n=n.slice(1)),t+=n}t(2818);var u=t(3401);let _=(0,l.forwardRef)(function(e,n){let{href:t,locale:c,localeCookie:_,localePrefixMode:d,prefix:f,...m}=e,h=(0,r.usePathname)(),v=(0,o.A)(),p=c!==v,[b,g]=(0,l.useState)(()=>i(t)&&("never"!==d||p)?s(t,f):t);return(0,l.useEffect)(()=>{h&&g(function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,a=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0;if(!i(e))return e;let l=a===r||a.startsWith("".concat(r,"/"));return(n!==t||l)&&null!=r?s(e,r):e}(t,c,v,h,f))},[v,t,c,h,f]),l.createElement(u.default,(0,a._)({ref:n,href:b,locale:c,localeCookie:_},m))});_.displayName="ClientLink"},707:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var a=t(6046),r=t(985);let l="locale",o=!1;function i(){let e;let n=(0,a.useParams)();try{e=(0,r.useLocale)()}catch(t){if("string"!=typeof(null==n?void 0:n[l]))throw t;o||(console.warn("Deprecation warning: `useLocale` has returned a default from `useParams().locale` since no `NextIntlClientProvider` ancestor was found for the calling component. This behavior will be removed in the next major version. Please ensure all Client Components that use `next-intl` are wrapped in a `NextIntlClientProvider`."),o=!0),e=n[l]}return e}},8379:(e,n,t)=>{"use strict";t.d(n,{default:()=>o});var a=t(7481),r=t(2115),l=t(7878);function o(e){let{locale:n,...t}=e;if(!n)throw Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl.dev/docs/configuration#locale");return r.createElement(l.IntlProvider,(0,a._)({locale:n},t))}},5617:(e,n,t)=>{"use strict";t.d(n,{Navigation:()=>p});var a=t(5155),r=t(8173),l=t.n(r),o=t(6046),i=t(1536),s=t(1735),c=t.n(s),u=t(7266),_=t(2115),d=t(6280),f=t(7381),m=t.n(f);function h(e){let{defaultValue:n}=e,t=(0,o.useRouter)(),[r,l]=(0,_.useTransition)(),i=(0,o.usePathname)();return(0,a.jsxs)("div",{className:m().langContainer,"data-augmented-ui":"bl-clip",children:[(0,a.jsx)(d.Ded,{className:"text-slate-300"}),(0,a.jsxs)("select",{id:m().langSelector,defaultValue:n,disabled:r,onChange:function(e){let n=e.target.value,a=i.replace(/en|fr/,n);l(()=>{t.replace(a)})},children:[(0,a.jsx)("option",{value:"en",children:"En"}),(0,a.jsx)("option",{value:"fr",children:"Fr"})]})]})}function v(e){let{defaultValue:n}=e;return(0,a.jsx)(h,{defaultValue:n})}let p=e=>{let{locale:n}=e,t=(0,o.usePathname)(),r=e=>c().nav_item+(e==t?" "+c().current:""),s=(0,u.useTranslations)("navbar");return(0,a.jsxs)("header",{"data-augmented-ui":!0,id:c().nav_bar_container,children:[(0,a.jsxs)("nav",{className:c().nav_menu,children:[(0,a.jsx)("div",{className:c().nav_brand_container,"data-augmented-ui":!0,children:(0,a.jsx)(l(),{href:"/"+n,children:(0,a.jsx)("button",{className:c().site_brand+(t==="/"+n?" "+c().current:""),children:(0,a.jsx)(i.rQ8,{className:"mr-1"})})})}),(0,a.jsx)(l(),{href:"/"+n+"/musics",children:(0,a.jsx)("button",{className:r("/"+n+"/musics"),"data-augmented-ui":!0,children:s("musics_lbl")})}),(0,a.jsx)(l(),{href:"/"+n+"/devinfos",children:(0,a.jsx)("button",{className:r("/"+n+"/devinfos"),"data-augmented-ui":!0,children:s("devinfos_lbl")})}),(0,a.jsx)(l(),{href:"/"+n+"/contacts",children:(0,a.jsx)("button",{className:r("/"+n+"/contacts"),"data-augmented-ui":!0,children:s("contacts_lbl")})}),(0,a.jsx)(l(),{href:"/"+n+"/legals",children:(0,a.jsx)("button",{className:r("/"+n+"/legals"),"data-augmented-ui":!0,children:s("legals_lbl")})}),(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:c().nav_item+" closer","data-augmented-ui":"br-clip"})})]}),(0,a.jsx)(v,{defaultValue:n})]})}},6628:e=>{e.exports={slow_particle_container:"SlowParticles_slow_particle_container__H4ENv",circle_container:"SlowParticles_circle_container__jGOCx",circle:"SlowParticles_circle__n8B44","fadein-frames":"SlowParticles_fadein-frames__2b_ti","scale-frames":"SlowParticles_scale-frames__T_8Mv","move-frames-1":"SlowParticles_move-frames-1__xoejc","move-frames-2":"SlowParticles_move-frames-2__5qqEl","move-frames-3":"SlowParticles_move-frames-3__UVnAa","move-frames-4":"SlowParticles_move-frames-4__ZgSm2","move-frames-5":"SlowParticles_move-frames-5__1NApb","move-frames-6":"SlowParticles_move-frames-6__a4Ebi","move-frames-7":"SlowParticles_move-frames-7__r7ra_","fade-frames":"SlowParticles_fade-frames__bz3ij"}},7381:e=>{e.exports={langContainer:"localeSwitcher_langContainer__B1QTB",langSelector:"localeSwitcher_langSelector__O3Yg8"}},1735:e=>{e.exports={nav_bar_container:"navigation_nav_bar_container__XQuWm",nav_menu:"navigation_nav_menu__ReevK",nav_item:"navigation_nav_item__ZbduP",current:"navigation_current__sAuBb",closer:"navigation_closer__UwBrH",nav_brand_container:"navigation_nav_brand_container__e9w3V",site_brand:"navigation_site_brand__Cn5_I"}}},e=>{var n=n=>e(e.s=n);e.O(0,[722,711,512,72,173,441,517,358],()=>n(780)),_N_E=e.O()}]);