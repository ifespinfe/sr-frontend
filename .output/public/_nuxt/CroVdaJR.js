import{e as u,n as r,r as l,x as k}from"./CRKMsqI1.js";import{p as d}from"./CZgaGouz.js";/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=u("CopyCheckIcon",[["path",{d:"m12 15 2 2 4-4",key:"2c609p"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),b=(n,s)=>{const e=decodeURIComponent(r(n)),t=r(s),a=l(!1),c=()=>{const o=`https://www.facebook.com/sharer/sharer.php?u=${e}`;window.open(o,"_blank","width=600,height=400")},i=`https://x.com/intent/post?url=${e}&feature=shared&text=${t??""}&via=spinrequest`,p=`https://api.whatsapp.com/send?text=${t}%20${e}&feature=shared&type=custom_url&app_absent=0`,h=`mailto:?subject=${t}&body=${e}`;return{shareToFacebook:c,copyLink:async()=>{await navigator.clipboard.writeText(e),a.value=!0,await d(1200),a.value=!1},externalNavigate:o=>k(o,{external:!0,open:{target:"_blank"}}),twitterShareLink:i,whatsappShareLink:p,emailShareLink:h,copied:a}};export{f as C,b as u};
