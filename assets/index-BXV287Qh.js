import{Q as de,R as G,T as ue,U as Oe,r as C,V as Ne,G as He,W as Le,X as Ee,Y as fe,i as M,g as Z,Z as ve,D as he,K as k,$ as be,q as me,a0 as We,N as $,a1 as ge,a2 as Q,a3 as z,a4 as N,O as ye,a5 as De,d as m,s as A,m as we,P as H,k as p,a6 as Y,L as Me,E as ee,h as Ze,a7 as Ue,M as Ve,a8 as Fe,v as D,a9 as ie,y as J,B as je,aa as Ke,ab as oe,ac as Xe,ad as Ye,x as qe,ae as Ge,af as Qe,ag as Je,ah as pe,S as et,ai as tt,aj as nt,ak as at,al as lt,am as it,z as ot,an as se,ao as st}from"./index-Cdb3aC86.js";import{u as xe}from"./use-id-DjaWcCQU.js";import{a as rt,r as ct}from"./use-route-ljktPiFv.js";function dt(e,a,o){let l,r=0;const t=e.scrollLeft,s=o===0?1:Math.round(o*1e3/16);function c(){de(l)}function v(){e.scrollLeft+=(a-t)/s,++r<s&&(l=G(v))}return v(),c}function ut(e,a,o,l){let r,t=ue(e);const s=t<a,c=o===0?1:Math.round(o*1e3/16),v=(a-t)/c;function g(){de(r)}function w(){t+=v,(s&&t>a||!s&&t<a)&&(t=a),Oe(e,t),s&&t<a||!s&&t>a?r=G(w):l&&(r=G(l))}return w(),g}function ft(){const e=C([]),a=[];return Ne(()=>{e.value=[]}),[e,l=>(a[l]||(a[l]=r=>{e.value[l]=r}),a[l])]}function Te(e,a){if(!He||!window.IntersectionObserver)return;const o=new IntersectionObserver(t=>{a(t[0].intersectionRatio>0)},{root:document.body}),l=()=>{e.value&&o.observe(e.value)},r=()=>{e.value&&o.unobserve(e.value)};Le(r),Ee(r),fe(l)}const[vt,ht]=M("sticky"),bt={zIndex:A,position:we("top"),container:Object,offsetTop:H(0),offsetBottom:H(0)};var mt=Z({name:vt,props:bt,emits:["scroll","change"],setup(e,{emit:a,slots:o}){const l=C(),r=ve(l),t=he({fixed:!1,width:0,height:0,transform:0}),s=C(!1),c=k(()=>be(e.position==="top"?e.offsetTop:e.offsetBottom)),v=k(()=>{if(s.value)return;const{fixed:f,height:S,width:u}=t;if(f)return{width:`${u}px`,height:`${S}px`}}),g=k(()=>{if(!t.fixed||s.value)return;const f=me(We(e.zIndex),{width:`${t.width}px`,height:`${t.height}px`,[e.position]:`${c.value}px`});return t.transform&&(f.transform=`translate3d(0, ${t.transform}px, 0)`),f}),w=f=>a("scroll",{scrollTop:f,isFixed:t.fixed}),I=()=>{if(!l.value||Q(l))return;const{container:f,position:S}=e,u=N(l),T=ue(window);if(t.width=u.width,t.height=u.height,S==="top")if(f){const d=N(f),B=d.bottom-c.value-t.height;t.fixed=c.value>u.top&&d.bottom>0,t.transform=B<0?B:0}else t.fixed=c.value>u.top;else{const{clientHeight:d}=document.documentElement;if(f){const B=N(f),b=d-B.top-c.value-t.height;t.fixed=d-c.value<u.bottom&&d>B.top,t.transform=b<0?-b:0}else t.fixed=d-c.value<u.bottom}w(T)};return $(()=>t.fixed,f=>a("change",f)),ge("scroll",I,{target:r,passive:!0}),Te(l,I),$([ye,De],()=>{!l.value||Q(l)||!t.fixed||(s.value=!0,z(()=>{const f=N(l);t.width=f.width,t.height=f.height,s.value=!1}))}),()=>{var f;return m("div",{ref:l,style:v.value},[m("div",{class:ht({fixed:t.fixed&&!s.value}),style:g.value},[(f=o.default)==null?void 0:f.call(o)])])}}});const gt=p(mt),[yt,re]=M("tabs");var wt=Z({name:yt,props:{count:Y(Number),inited:Boolean,animated:Boolean,duration:Y(A),swipeable:Boolean,lazyRender:Boolean,currentIndex:Y(Number)},emits:["change"],setup(e,{emit:a,slots:o}){const l=C(),r=c=>a("change",c),t=()=>{var c;const v=(c=o.default)==null?void 0:c.call(o);return e.animated||e.swipeable?m(Ze,{ref:l,loop:!1,class:re("track"),duration:+e.duration*1e3,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:r},{default:()=>[v]}):v},s=c=>{const v=l.value;v&&v.state.active!==c&&v.swipeTo(c,{immediate:!e.inited})};return $(()=>e.currentIndex,s),Me(()=>{s(e.currentIndex)}),ee({swipeRef:l}),()=>m("div",{class:re("content",{animated:e.animated||e.swipeable})},[t()])}});const[Se,X]=M("tabs"),xt={type:we("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:H(0),duration:H(.3),animated:Boolean,ellipsis:D,swipeable:Boolean,scrollspy:Boolean,offsetTop:H(0),background:String,lazyRender:D,showHeader:D,lineWidth:A,lineHeight:A,beforeChange:Function,swipeThreshold:H(5),titleActiveColor:String,titleInactiveColor:String},Ce=Symbol(Se);var Tt=Z({name:Se,props:xt,emits:["change","scroll","rendered","clickTab","update:active"],setup(e,{emit:a,slots:o}){let l,r,t,s,c;const v=C(),g=C(),w=C(),I=C(),f=xe(),S=ve(v),[u,T]=ft(),{children:d,linkChildren:B}=Ue(Ce),b=he({inited:!1,position:"",lineStyle:{},currentIndex:-1}),L=k(()=>d.length>+e.swipeThreshold||!e.ellipsis||e.shrink),U=k(()=>({borderColor:e.color,background:e.background})),E=(n,i)=>{var h;return(h=n.name)!=null?h:i},V=k(()=>{const n=d[b.currentIndex];if(n)return E(n,b.currentIndex)}),O=k(()=>be(e.offsetTop)),te=k(()=>e.sticky?O.value+l:0),W=n=>{const i=g.value,h=u.value;if(!L.value||!i||!h||!h[b.currentIndex])return;const x=h[b.currentIndex].$el,y=x.offsetLeft-(i.offsetWidth-x.offsetWidth)/2;s&&s(),s=dt(i,y,n?0:+e.duration)},_=()=>{const n=b.inited;z(()=>{const i=u.value;if(!i||!i[b.currentIndex]||e.type!=="line"||Q(v.value))return;const h=i[b.currentIndex].$el,{lineWidth:x,lineHeight:y}=e,R=h.offsetLeft+h.offsetWidth/2,P={width:ie(x),backgroundColor:e.color,transform:`translateX(${R}px) translateX(-50%)`};if(n&&(P.transitionDuration=`${e.duration}s`),J(y)){const K=ie(y);P.height=K,P.borderRadius=K}b.lineStyle=P})},Re=n=>{const i=n<b.currentIndex?-1:1;for(;n>=0&&n<d.length;){if(!d[n].disabled)return n;n+=i}},F=(n,i)=>{const h=Re(n);if(!J(h))return;const x=d[h],y=E(x,h),R=b.currentIndex!==null;b.currentIndex!==h&&(b.currentIndex=h,i||W(),_()),y!==e.active&&(a("update:active",y),R&&a("change",y,x.title)),t&&!e.scrollspy&&Ke(Math.ceil(oe(v.value)-O.value))},j=(n,i)=>{const h=d.find((y,R)=>E(y,R)===n),x=h?d.indexOf(h):0;F(x,i)},ne=(n=!1)=>{if(e.scrollspy){const i=d[b.currentIndex].$el;if(i&&S.value){const h=oe(i,S.value)-te.value;r=!0,c&&c(),c=ut(S.value,h,n?0:+e.duration,()=>{r=!1})}}},ke=(n,i,h)=>{const{title:x,disabled:y}=d[i],R=E(d[i],i);y||(Xe(e.beforeChange,{args:[R],done:()=>{F(i),ne()}}),rt(n)),a("clickTab",{name:R,title:x,event:h,disabled:y})},Ie=n=>{t=n.isFixed,a("scroll",n)},Be=n=>{z(()=>{j(n),ne(!0)})},$e=()=>{for(let n=0;n<d.length;n++){const{top:i}=N(d[n].$el);if(i>te.value)return n===0?0:n-1}return d.length-1},_e=()=>{if(e.scrollspy&&!r){const n=$e();F(n)}},Pe=()=>{if(e.type==="line"&&d.length)return m("div",{class:X("line"),style:b.lineStyle},null)},ae=()=>{var n,i,h;const{type:x,border:y,sticky:R}=e,P=[m("div",{ref:R?void 0:w,class:[X("wrap"),{[je]:x==="line"&&y}]},[m("div",{ref:g,role:"tablist",class:X("nav",[x,{shrink:e.shrink,complete:L.value}]),style:U.value,"aria-orientation":"horizontal"},[(n=o["nav-left"])==null?void 0:n.call(o),d.map(K=>K.renderTitle(ke)),Pe(),(i=o["nav-right"])==null?void 0:i.call(o)])]),(h=o["nav-bottom"])==null?void 0:h.call(o)];return R?m("div",{ref:w},[P]):P},le=()=>{_(),z(()=>{var n,i;W(!0),(i=(n=I.value)==null?void 0:n.swipeRef.value)==null||i.resize()})};$(()=>[e.color,e.duration,e.lineWidth,e.lineHeight],_),$(ye,le),$(()=>e.active,n=>{n!==V.value&&j(n)}),$(()=>d.length,()=>{b.inited&&(j(e.active),_(),z(()=>{W(!0)}))});const ze=()=>{j(e.active,!0),z(()=>{b.inited=!0,w.value&&(l=N(w.value).height),W(!0)})},Ae=(n,i)=>a("rendered",n,i);return ee({resize:le,scrollTo:Be}),Ve(_),Fe(_),fe(ze),Te(v,_),ge("scroll",_e,{target:S,passive:!0}),B({id:f,props:e,setLine:_,scrollable:L,onRendered:Ae,currentName:V,setTitleRefs:T,scrollIntoView:W}),()=>m("div",{ref:v,class:X([e.type])},[e.showHeader?e.sticky?m(gt,{container:v.value,offsetTop:O.value,onScroll:Ie},{default:()=>[ae()]}):ae():null,m(wt,{ref:I,count:d.length,inited:b.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:b.currentIndex,onChange:F},{default:()=>{var n;return[(n=o.default)==null?void 0:n.call(o)]}})])}});const St=Symbol(),[Ct,ce]=M("tab"),Rt=Z({name:Ct,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:A,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:D},setup(e,{slots:a}){const o=k(()=>{const r={},{type:t,color:s,disabled:c,isActive:v,activeColor:g,inactiveColor:w}=e;s&&t==="card"&&(r.borderColor=s,c||(v?r.backgroundColor=s:r.color=s));const f=v?g:w;return f&&(r.color=f),r}),l=()=>{const r=m("span",{class:ce("text",{ellipsis:!e.scrollable})},[a.title?a.title():e.title]);return e.dot||J(e.badge)&&e.badge!==""?m(Ye,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},{default:()=>[r]}):r};return()=>m("div",{id:e.id,role:"tab",class:[ce([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:o.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls},[l()])}}),[kt,q]=M("tab"),It=me({},ct,{dot:Boolean,name:A,badge:A,title:String,disabled:Boolean,titleClass:qe,titleStyle:[String,Object],showZeroBadge:D});var Bt=Z({name:kt,props:It,setup(e,{slots:a}){const o=xe(),l=C(!1),r=st(),{parent:t,index:s}=Ge(Ce);if(!t)return;const c=()=>{var u;return(u=e.name)!=null?u:s.value},v=()=>{l.value=!0,t.props.lazyRender&&z(()=>{t.onRendered(c(),e.title)})},g=k(()=>{const u=c()===t.currentName.value;return u&&!l.value&&v(),u}),w=C(""),I=C("");Qe(()=>{const{titleClass:u,titleStyle:T}=e;w.value=u?at(u):"",I.value=T&&typeof T!="string"?lt(it(T)):T});const f=u=>m(Rt,ot({key:o,id:`${t.id}-${s.value}`,ref:t.setTitleRefs(s.value),style:I.value,class:w.value,isActive:g.value,controls:o,scrollable:t.scrollable.value,activeColor:t.props.titleActiveColor,inactiveColor:t.props.titleInactiveColor,onClick:T=>u(r.proxy,s.value,T)},se(t.props,["type","color","shrink"]),se(e,["dot","badge","title","disabled","showZeroBadge"])),{title:a.title}),S=C(!g.value);return $(g,u=>{u?S.value=!1:Je(()=>{S.value=!0})}),$(()=>e.title,()=>{t.setLine(),t.scrollIntoView()}),pe(St,g),ee({id:o,renderTitle:f}),()=>{var u;const T=`${t.id}-${s.value}`,{animated:d,swipeable:B,scrollspy:b,lazyRender:L}=t.props;if(!a.default&&!d)return;const U=b||g.value;if(d||B)return m(et,{id:o,role:"tabpanel",class:q("panel-wrapper",{inactive:S.value}),tabindex:g.value?0:-1,"aria-hidden":!g.value,"aria-labelledby":T},{default:()=>{var O;return[m("div",{class:q("panel")},[(O=a.default)==null?void 0:O.call(a)])]}});const V=l.value||b||!L?(u=a.default)==null?void 0:u.call(a):null;return tt(m("div",{id:o,role:"tabpanel",class:q("panel"),tabindex:U?0:-1,"aria-labelledby":T},[V]),[[nt,U]])}}});const zt=p(Bt),At=p(Tt);export{At as T,zt as a};
