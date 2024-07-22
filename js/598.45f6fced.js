"use strict";(self["webpackChunksubweb"]=self["webpackChunksubweb"]||[]).push([[598],{598:function(e,t,a){a.r(t),a.d(t,{default:function(){return O}});var n=a(6768);function s(e,t,a,s,l,o){const r=(0,n.g2)("nav-bar"),i=(0,n.g2)("router-view"),d=(0,n.g2)("footer-bar");return(0,n.uX)(),(0,n.CE)("html",{lang:"en",class:"light-style layout-navbar-fixed layout-wide",dir:"ltr","data-theme":"theme-default","data-assets-path":"assets/","data-template":"front-pages",onWheel:t[0]||(t[0]=(...e)=>o.setNavActive&&o.setNavActive(...e))},[(0,n.Lk)("body",null,[(0,n.bF)(r),(0,n.bF)(i),(0,n.bF)(d)])],32)}var l=a(4232);const o={class:"container"},r={class:"navbar navbar-expand-lg landing-navbar px-3 px-md-4"};function i(e,t,a,s,i,d){const c=(0,n.g2)("AppBrand"),v=(0,n.g2)("NavMenu");return(0,n.uX)(),(0,n.CE)("nav",{class:(0,l.C4)(["layout-navbar shadow-none py-0",d.navStyles])},[(0,n.Lk)("div",o,[(0,n.Lk)("div",r,[(0,n.bF)(c),(0,n.bF)(v)])])],2)}const d={class:"navbar-brand app-brand demo d-flex py-0 py-lg-2 me-4"},c=(0,n.Lk)("i",{class:"ti ti-menu-2 ti-sm align-middle"},null,-1),v=[c],u=(0,n.Lk)("span",{class:"app-brand-logo demo"},[(0,n.Lk)("svg",{width:"32",height:"22",viewBox:"0 0 32 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z",fill:"#7367F0"}),(0,n.Lk)("path",{opacity:"0.06","fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z",fill:"#161616"}),(0,n.Lk)("path",{opacity:"0.06","fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z",fill:"#161616"}),(0,n.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z",fill:"#7367F0"})])],-1),p={class:"app-brand-text demo menu-text fw-bold ms-2 ps-1"};function b(e,t,a,s,o,r){const i=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",d,[(0,n.Lk)("button",{class:"navbar-toggler border-0 px-0 me-2",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:t[0]||(t[0]=t=>e.$store.commit("MAIN_LAYOUT_MENU_EXPAND"))},v),(0,n.bF)(i,{to:"/",class:"app-brand-link"},{default:(0,n.k6)((()=>[u,(0,n.Lk)("span",p,(0,l.v_)(o.siteName),1)])),_:1})])}var m={name:"AppBrand",data(){return{siteName:""}},created(){this.siteName="Subconverter Web"}},g=a(1241);const f=(0,g.A)(m,[["render",b]]);var L=f;const h=(0,n.Lk)("i",{class:"ti ti-x ti-sm"},null,-1),k=[h],w={class:"navbar-nav ms-auto"},A=["href","target"];function y(e,t,a,s,o,r){return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",{class:(0,l.C4)(["navbar-collapse landing-nav-menu collapse",{show:e.$store.state.style.main.isCollapsed}]),style:{}},[(0,n.Lk)("button",{class:"navbar-toggler border-0 text-heading position-absolute end-0 top-0 scaleX-n1-rtl",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"true","aria-label":"Toggle navigation",onClick:t[0]||(t[0]=t=>e.$store.commit("MAIN_LAYOUT_MENU_EXPAND"))},k),(0,n.Lk)("ul",w,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(o.navBarItem,(e=>((0,n.uX)(),(0,n.CE)("li",{class:"nav-item",key:e},[(0,n.Lk)("a",{href:e.link,target:e.target,class:"nav-link fw-medium"},(0,l.v_)(e.title),9,A)])))),128))])],2),(0,n.Lk)("div",{class:"landing-menu-overlay d-lg-none",onClick:t[1]||(t[1]=(...e)=>r.collapsedMenu&&r.collapsedMenu(...e))})],64)}var N={name:"NavMenu",data(){return{navBarItem:[]}},created(){this.navBarItem=window.config.menuItem},methods:{collapsedMenu(){this.$store.commit("MAIN_LAYOUT_MENU_EXPAND")}}};const C=(0,g.A)(N,[["render",y]]);var x=C,M={name:"NavBar",components:{AppBrand:L,NavMenu:x},computed:{navStyles(){return[...this.$store.state.style.main.navStyles].join(" ")}}};const _=(0,g.A)(M,[["render",i]]);var E=_;const F={class:"landing-footer bg-body footer-text"},B=(0,n.Fv)('<div class="footer-bottom py-3"><div class="container" style="text-align:center;"><div class="mb-2 mb-md-0"><span class="footer-text">GitHub: </span><span class="footer-text"><a href="https://github.com/stilleshan/subweb" target="_blank" class="fw-medium text-white footer-link">stilleshan/subweb</a></span></div></div></div>',1),I=[B];function X(e,t,a,s,l,o){return(0,n.uX)(),(0,n.CE)("footer",F,I)}var S={name:"FooterBar"};const U=(0,g.A)(S,[["render",X]]);var T=U,Y={components:{NavBar:E,FooterBar:T},name:"MainLayout",methods:{setNavActive(){const e=window.scrollY||window.pageYOffset;this.$store.commit("MAIN_LAYOUT_NAV_ACTIVE",e>0)}},mounted(){window.addEventListener("scroll",this.setNavActive)},beforeUnmount(){window.removeEventListener("scroll",this.setNavActive)}};const $=(0,g.A)(Y,[["render",s],["__scopeId","data-v-58d977e9"]]);var O=$}}]);