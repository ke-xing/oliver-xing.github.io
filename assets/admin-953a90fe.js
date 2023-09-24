import{d as N,c as d,h as p,j as B,e as q,t as x,x as S,l as A,S as M,n as m,u as t,J as U,D as j,E as Z,ac as ae,r as y,o as re,w as le,v as b,k as ie,z as w,_ as ue,F as ce,Y as de,O,a7 as G,i as _,a8 as F,ad as pe}from"./index-241ddf22.js";import{m as me,h as fe,e as ge}from"./index-c7313fb7.js";import{c as J,g as ye,e as $,_ as Y,w as ve,n as he,d as H,i as K,E as P,T as Ce,L as R,q as be,h as Te,N as we}from"./base-6cbc4ee3.js";import{q as Se}from"./el-input-1ef0e24d.js";import{E as Ne}from"./aria-60e0cdc6.js";const V={},ke=J({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),Ee=["textContent"],Be=N({name:"ElBadge"}),Me=N({...Be,props:ke,setup(s,{expose:n}){const e=s,o=ye("badge"),a=d(()=>e.isDot?"":$(e.value)&&$(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return n({content:a}),(l,u)=>(p(),B("div",{class:m(t(o).b())},[q(l.$slots,"default"),x(Z,{name:`${t(o).namespace.value}-zoom-in-center`,persisted:""},{default:S(()=>[A(M("sup",{class:m([t(o).e("content"),t(o).em("content",l.type),t(o).is("fixed",!!l.$slots.default),t(o).is("dot",l.isDot)]),textContent:U(t(a))},null,10,Ee),[[j,!l.hidden&&(t(a)||l.isDot)]])]),_:1},8,["name"])],2))}});var _e=Y(Me,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const $e=ve(_e),Q=["success","info","warning","error"],i=me({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:K?document.body:void 0}),xe=J({customClass:{type:String,default:i.customClass},center:{type:Boolean,default:i.center},dangerouslyUseHTMLString:{type:Boolean,default:i.dangerouslyUseHTMLString},duration:{type:Number,default:i.duration},icon:{type:he,default:i.icon},id:{type:String,default:i.id},message:{type:H([String,Object,Function]),default:i.message},onClose:{type:H(Function),required:!1},showClose:{type:Boolean,default:i.showClose},type:{type:String,values:Q,default:i.type},offset:{type:Number,default:i.offset},zIndex:{type:Number,default:i.zIndex},grouping:{type:Boolean,default:i.grouping},repeatNum:{type:Number,default:i.repeatNum}}),ze={destroy:()=>!0},c=ae([]),Ie=s=>{const n=c.findIndex(a=>a.id===s),e=c[n];let o;return n>0&&(o=c[n-1]),{current:e,prev:o}},Le=s=>{const{prev:n}=Ie(s);return n?n.vm.exposed.bottom.value:0},De=(s,n)=>c.findIndex(o=>o.id===s)>0?20:n,Oe=["id"],Fe=["innerHTML"],He=N({name:"ElMessage"}),Pe=N({...He,props:xe,emits:ze,setup(s,{expose:n}){const e=s,{Close:o}=Ce,{ns:a,zIndex:l}=Se("message"),{currentZIndex:u,nextZIndex:f}=l,g=y(),h=y(!1),C=y(0);let k;const X=d(()=>e.type?e.type==="error"?"danger":e.type:"info"),ee=d(()=>{const r=e.type;return{[a.bm("icon",r)]:r&&R[r]}}),z=d(()=>e.icon||R[e.type]||""),se=d(()=>Le(e.id)),I=d(()=>De(e.id,e.offset)+se.value),ne=d(()=>C.value+I.value),te=d(()=>({top:`${I.value}px`,zIndex:u.value}));function E(){e.duration!==0&&({stop:k}=be(()=>{T()},e.duration))}function L(){k==null||k()}function T(){h.value=!1}function oe({code:r}){r===Ne.esc&&T()}return re(()=>{E(),f(),h.value=!0}),le(()=>e.repeatNum,()=>{L(),E()}),fe(document,"keydown",oe),ge(g,()=>{C.value=g.value.getBoundingClientRect().height}),n({visible:h,bottom:ne,close:T}),(r,D)=>(p(),b(Z,{name:t(a).b("fade"),onBeforeLeave:r.onClose,onAfterLeave:D[0]||(D[0]=je=>r.$emit("destroy")),persisted:""},{default:S(()=>[A(M("div",{id:r.id,ref_key:"messageRef",ref:g,class:m([t(a).b(),{[t(a).m(r.type)]:r.type&&!r.icon},t(a).is("center",r.center),t(a).is("closable",r.showClose),r.customClass]),style:ie(t(te)),role:"alert",onMouseenter:L,onMouseleave:E},[r.repeatNum>1?(p(),b(t($e),{key:0,value:r.repeatNum,type:t(X),class:m(t(a).e("badge"))},null,8,["value","type","class"])):w("v-if",!0),t(z)?(p(),b(t(P),{key:1,class:m([t(a).e("icon"),t(ee)])},{default:S(()=>[(p(),b(ue(t(z))))]),_:1},8,["class"])):w("v-if",!0),q(r.$slots,"default",{},()=>[r.dangerouslyUseHTMLString?(p(),B(ce,{key:1},[w(" Caution here, message could've been compromised, never use user's input as message "),M("p",{class:m(t(a).e("content")),innerHTML:r.message},null,10,Fe)],2112)):(p(),B("p",{key:0,class:m(t(a).e("content"))},U(r.message),3))]),r.showClose?(p(),b(t(P),{key:2,class:m(t(a).e("closeBtn")),onClick:de(T,["stop"])},{default:S(()=>[x(t(o))]),_:1},8,["class","onClick"])):w("v-if",!0)],46,Oe),[[j,h.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Re=Y(Pe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Ve=1;const W=s=>{const n=!s||O(s)||G(s)||_(s)?{message:s}:s,e={...i,...n};if(!e.appendTo)e.appendTo=document.body;else if(O(e.appendTo)){let o=document.querySelector(e.appendTo);Te(o)||(o=document.body),e.appendTo=o}return e},qe=s=>{const n=c.indexOf(s);if(n===-1)return;c.splice(n,1);const{handler:e}=s;e.close()},Ae=({appendTo:s,...n},e)=>{const o=`message_${Ve++}`,a=n.onClose,l=document.createElement("div"),u={...n,id:o,onClose:()=>{a==null||a(),qe(C)},onDestroy:()=>{F(null,l)}},f=x(Re,u,_(u.message)||G(u.message)?{default:_(u.message)?u.message:()=>u.message}:null);f.appContext=e||v._context,F(f,l),s.appendChild(l.firstElementChild);const g=f.component,C={id:o,vnode:f,vm:g,handler:{close:()=>{g.exposed.visible.value=!1}},props:f.component.props};return C},v=(s={},n)=>{if(!K)return{close:()=>{}};if($(V.max)&&c.length>=V.max)return{close:()=>{}};const e=W(s);if(e.grouping&&c.length){const a=c.find(({vnode:l})=>{var u;return((u=l.props)==null?void 0:u.message)===e.message});if(a)return a.props.repeatNum+=1,a.props.type=e.type,a.handler}const o=Ae(e,n);return c.push(o),o.handler};Q.forEach(s=>{v[s]=(n={},e)=>{const o=W(n);return v({...o,type:s},e)}});function Ue(s){for(const n of c)(!s||s===n.props.type)&&n.handler.close()}v.closeAll=Ue;v._context=null;const Qe=we(v,"$message"),We=pe("admin",()=>{const s=y(),n=y(),e=y();return{username:s,password:n,token:e}},{persist:!0});export{Qe as E,We as u};
