import{o as O,a as A,r as _,d as te,p as ne,w as C,u as T,e as se,Q as M,O as oe}from"./index-241ddf22.js";import{i as $,_ as re,j as ce}from"./base-6cbc4ee3.js";import{E as G}from"./aria-60e0cdc6.js";const ae='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',ue=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,ge=e=>Array.from(e.querySelectorAll(ae)).filter(n=>ie(n)&&ue(n)),ie=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},we=function(e,n,...o){let s;n.includes("mouse")||n.includes("click")?s="MouseEvents":n.includes("key")?s="KeyboardEvent":s="HTMLEvents";const c=document.createEvent(s);return c.initEvent(n,...o),e.dispatchEvent(c),e};let E=[];const j=e=>{const n=e;n.key===G.esc&&E.forEach(o=>o(n))},de=e=>{O(()=>{E.length===0&&document.addEventListener("keydown",j),$&&E.push(e)}),A(()=>{E=E.filter(n=>n!==e),E.length===0&&$&&document.removeEventListener("keydown",j)})},g="focus-trap.focus-after-trapped",w="focus-trap.focus-after-released",fe="focus-trap.focusout-prevented",q={cancelable:!0,bubbles:!1},le={cancelable:!0,bubbles:!1},W="focusAfterTrapped",J="focusAfterReleased",ve=Symbol("elFocusTrap"),R=_(),S=_(0),N=_(0);let b=0;const Z=e=>{const n=[],o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>{const c=s.tagName==="INPUT"&&s.type==="hidden";return s.disabled||s.hidden||c?NodeFilter.FILTER_SKIP:s.tabIndex>=0||s===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;o.nextNode();)n.push(o.currentNode);return n},Q=(e,n)=>{for(const o of e)if(!Ee(o,n))return o},Ee=(e,n)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(n&&e===n)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},pe=e=>{const n=Z(e),o=Q(n,e),s=Q(n.reverse(),e);return[o,s]},me=e=>e instanceof HTMLInputElement&&"select"in e,l=(e,n)=>{if(e&&e.focus){const o=document.activeElement;e.focus({preventScroll:!0}),N.value=window.performance.now(),e!==o&&me(e)&&n&&e.select()}};function X(e,n){const o=[...e],s=e.indexOf(n);return s!==-1&&o.splice(s,1),o}const Te=()=>{let e=[];return{push:s=>{const c=e[0];c&&s!==c&&c.pause(),e=X(e,s),e.unshift(s)},remove:s=>{var c,d;e=X(e,s),(d=(c=e[0])==null?void 0:c.resume)==null||d.call(c)}}},be=(e,n=!1)=>{const o=document.activeElement;for(const s of e)if(l(s,n),document.activeElement!==o)return},Y=Te(),Fe=()=>S.value>N.value,F=()=>{R.value="pointer",S.value=window.performance.now()},z=()=>{R.value="keyboard",S.value=window.performance.now()},ye=()=>(O(()=>{b===0&&(document.addEventListener("mousedown",F),document.addEventListener("touchstart",F),document.addEventListener("keydown",z)),b++}),A(()=>{b--,b<=0&&(document.removeEventListener("mousedown",F),document.removeEventListener("touchstart",F),document.removeEventListener("keydown",z))}),{focusReason:R,lastUserFocusTimestamp:S,lastAutomatedFocusTimestamp:N}),y=e=>new CustomEvent(fe,{...le,detail:e}),_e=te({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[W,J,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:n}){const o=_();let s,c;const{focusReason:d}=ye();de(t=>{e.trapped&&!v.paused&&n("release-requested",t)});const v={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},p=t=>{if(!e.loop&&!e.trapped||v.paused)return;const{key:r,altKey:a,ctrlKey:u,metaKey:i,currentTarget:B,shiftKey:H}=t,{loop:V}=e,ee=r===G.tab&&!a&&!u&&!i,m=document.activeElement;if(ee&&m){const h=B,[L,P]=pe(h);if(L&&P){if(!H&&m===P){const f=y({focusReason:d.value});n("focusout-prevented",f),f.defaultPrevented||(t.preventDefault(),V&&l(L,!0))}else if(H&&[L,h].includes(m)){const f=y({focusReason:d.value});n("focusout-prevented",f),f.defaultPrevented||(t.preventDefault(),V&&l(P,!0))}}else if(m===h){const f=y({focusReason:d.value});n("focusout-prevented",f),f.defaultPrevented||t.preventDefault()}}};ne(ve,{focusTrapRef:o,onKeydown:p}),C(()=>e.focusTrapEl,t=>{t&&(o.value=t)},{immediate:!0}),C([o],([t],[r])=>{t&&(t.addEventListener("keydown",p),t.addEventListener("focusin",U),t.addEventListener("focusout",K)),r&&(r.removeEventListener("keydown",p),r.removeEventListener("focusin",U),r.removeEventListener("focusout",K))});const k=t=>{n(W,t)},I=t=>n(J,t),U=t=>{const r=T(o);if(!r)return;const a=t.target,u=t.relatedTarget,i=a&&r.contains(a);e.trapped||u&&r.contains(u)||(s=u),i&&n("focusin",t),!v.paused&&e.trapped&&(i?c=a:l(c,!0))},K=t=>{const r=T(o);if(!(v.paused||!r))if(e.trapped){const a=t.relatedTarget;!ce(a)&&!r.contains(a)&&setTimeout(()=>{if(!v.paused&&e.trapped){const u=y({focusReason:d.value});n("focusout-prevented",u),u.defaultPrevented||l(c,!0)}},0)}else{const a=t.target;a&&r.contains(a)||n("focusout",t)}};async function x(){await M();const t=T(o);if(t){Y.push(v);const r=t.contains(document.activeElement)?s:document.activeElement;if(s=r,!t.contains(r)){const u=new Event(g,q);t.addEventListener(g,k),t.dispatchEvent(u),u.defaultPrevented||M(()=>{let i=e.focusStartEl;oe(i)||(l(i),document.activeElement!==i&&(i="first")),i==="first"&&be(Z(t),!0),(document.activeElement===r||i==="container")&&l(t)})}}}function D(){const t=T(o);if(t){t.removeEventListener(g,k);const r=new CustomEvent(w,{...q,detail:{focusReason:d.value}});t.addEventListener(w,I),t.dispatchEvent(r),!r.defaultPrevented&&(d.value=="keyboard"||!Fe()||t.contains(document.activeElement))&&l(s??document.body),t.removeEventListener(w,I),Y.remove(v)}}return O(()=>{e.trapped&&x(),C(()=>e.trapped,t=>{t?x():D()})}),A(()=>{e.trapped&&D()}),{onKeydown:p}}});function Se(e,n,o,s,c,d){return se(e.$slots,"default",{handleKeydown:e.onKeydown})}var Oe=re(_e,[["render",Se],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);export{Oe as E,ge as o,we as t};
