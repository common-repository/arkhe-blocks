(()=>{var e={1991:(e,t)=>{var r;!function(){"use strict";var a=function(){function e(){}function t(e,t){for(var r=t.length,a=0;a<r;++a)n(e,t[a])}e.prototype=Object.create(null);var r={}.hasOwnProperty,a=/\s+/;function n(e,n){if(n){var l=typeof n;"string"===l?function(e,t){for(var r=t.split(a),n=r.length,l=0;l<n;++l)e[r[l]]=!0}(e,n):Array.isArray(n)?t(e,n):"object"===l?function(e,t){if(t.toString===Object.prototype.toString||t.toString.toString().includes("[native code]"))for(var a in t)r.call(t,a)&&(e[a]=!!t[a]);else e[t.toString()]=!0}(e,n):"number"===l&&function(e,t){e[t]=!0}(e,n)}}return function(){for(var r=arguments.length,a=Array(r),n=0;n<r;n++)a[n]=arguments[n];var l=new e;t(l,a);var o=[];for(var s in l)l[s]&&o.push(s);return o.join(" ")}}();e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var l=t[a]={exports:{}};return e[a](l,l.exports,r),l.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.React,t=window.wp.i18n,a=window.wp.element,n=window.wp.blocks,l=window.wp.blockEditor,o=window.wp.components,s=window.wp.serverSideRender;var c=r.n(s);const i=JSON.parse('{"u2":"arkhe-blocks/blog-card"}'),m=(0,e.createElement)("svg",{viewBox:"0 0 56 56"},(0,e.createElement)("path",{d:"M53.5,44h-51C2.2,44,2,43.8,2,43.5v-31C2,12.2,2.2,12,2.5,12h51c0.3,0,0.5,0.2,0.5,0.5v30.9C54,43.8,53.8,44,53.5,44z M4.5,42h47c0.3,0,0.5-0.2,0.5-0.5v-27c0-0.3-0.2-0.5-0.5-0.5h-47C4.2,14,4,14.2,4,14.5v26.9C4,41.8,4.2,42,4.5,42z"}),(0,e.createElement)("path",{d:"M47.5,34.8h-5c-0.3,0-0.5-0.2-0.5-0.4v-0.8c0-0.2,0.2-0.4,0.5-0.4h5c0.3,0,0.5,0.2,0.5,0.4v0.8C48,34.6,47.8,34.8,47.5,34.8 z"}),(0,e.createElement)("path",{d:"M47.5,22.2h-17c-0.3,0-0.5,0.2-0.5,0.4v1.6c0,0.2,0.2,0.4,0.5,0.4h17c0.3,0,0.5-0.2,0.5-0.4v-1.6 C48,22.4,47.8,22.2,47.5,22.2z"}),(0,e.createElement)("path",{d:"M47.5,22.2h-17c-0.3,0-0.5,0.2-0.5,0.4v1.6c0,0.2,0.2,0.4,0.5,0.4h17c0.3,0,0.5-0.2,0.5-0.4v-1.6 C48,22.4,47.8,22.2,47.5,22.2z"}),(0,e.createElement)("g",null,(0,e.createElement)("path",{d:"M25.5,21H13.9L8,26.9v7.6C8,34.8,8.2,35,8.5,35h17c0.3,0,0.5-0.2,0.5-0.5v-13C26,21.2,25.8,21,25.5,21z"}),(0,e.createElement)("path",{d:"M11.9,21H8.5C8.2,21,8,21.2,8,21.5v3.4L11.9,21z"})),(0,e.createElement)("path",{d:"M47.5,27.2h-17c-0.3,0-0.5,0.2-0.5,0.4v1.6c0,0.2,0.2,0.4,0.5,0.4h17c0.3,0,0.5-0.2,0.5-0.4v-1.6 C48,27.4,47.8,27.2,47.5,27.2z"})),k=(0,e.createElement)("div",{className:"ark-block-blogCard arkb-boxLink"},(0,e.createElement)("div",{className:"arkb-boxLink__inner","data-type":"external"},(0,e.createElement)("div",{className:"arkb-boxLink__figure c-postThumb"},(0,e.createElement)("figure",{className:"c-postThumb__figure"},(0,e.createElement)("img",{src:"https://s.w.org/images/core/5.3/MtBlanc1.jpg",alt:"",className:"c-postThumb__img"}))),(0,e.createElement)("div",{className:"arkb-boxLink__body"},(0,e.createElement)("div",{className:"arkb-boxLink__title"},"Post Title"),(0,e.createElement)("div",{className:"arkb-boxLink__content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit...."),(0,e.createElement)("div",{className:"arkb-boxLink__more"},(0,e.createElement)("span",{className:"arkb-boxLink__more__text"},"Site Name"))))),b=(0,a.forwardRef)((function({icon:e,size:t=24,...r},n){return(0,a.cloneElement)(e,{width:t,height:t,...r,ref:n})})),p=window.wp.primitives,u=(0,e.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(p.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})),h=void 0!==l.LinkControl?l.LinkControl:l.__experimentalLinkControl;function _(e,t){let r=t||"";return e?(-1===r.indexOf("noopener")&&(r+=" noopener"),-1===r.indexOf("noreferrer")&&(r+=" noreferrer")):(r=r.replace("noopener",""),r=r.replace("noreferrer","")),r.trim()}function d(e,...r){const a={NOTE:(0,t.__)("Note: ","arkhe-blocks"),ADD:(0,t.__)("Add %s","arkhe-blocks"),CLOSE:(0,t.__)("Close %s","arkhe-blocks"),OPEN:(0,t.__)("Open %s","arkhe-blocks"),CONF_RESET:(0,t.__)("Do you want to reset %s?","arkhe-blocks"),HAS_ERROR:(0,t.__)("There is an error in %s","arkhe-blocks"),TO_SELECT:(0,t.__)("Select %s","arkhe-blocks"),TO_INPUT:(0,t.__)("Enter %s","arkhe-blocks"),NOT_FOUND:(0,t.__)("%s not found.","arkhe-blocks"),NOT_VALID:(0,t.__)("%s is incorrect.","arkhe-blocks"),NO_DATA:(0,t.__)("Currently, %s is not yet registered.","arkhe-blocks")};switch(!0){case"ADD"===e:case"CLOSE"===e:case"OPEN"===e:case"CONF_RESET"===e:case"HAS_ERROR"===e:case"TO_SELECT"===e:case"TO_INPUT"===e:case"NOT_FOUND"===e:case"NOT_VALID"===e:case"NO_DATA"===e:const n=a[e]||"";return(0,t.sprintf)(n,...r);default:return a[e]||""}}const E=!!window.arkbSettings?.pfkey||!1,v=(0,e.createElement)("p",{className:"arkb-proOnlyArea__message"},(0,t.__)("This setting is only available in the PRO version.","arkhe-blocks"),(0,e.createElement)("a",{className:"arkb-proOnlyArea__link",href:"https://arkhe-theme.com/ja/product/arkhe-blocks-pro/",target:"_blank",rel:"noreferrer noopener"},"Go Pro")),g=(0,e.createElement)("p",{className:"arkb-proOnlyArea__message"},(0,t.__)("This area can only be edited in the PRO version.","arkhe-blocks"),(0,e.createElement)("a",{className:"arkb-proOnlyArea__link",href:"https://arkhe-theme.com/ja/product/arkhe-blocks-pro/",target:"_blank",rel:"noreferrer noopener"},"Go Pro")),C=({type:t="",passCheck:r=!1,children:a})=>r?a:(0,e.createElement)(e.Fragment,null,E?a:(0,e.createElement)("div",{className:"arkb-proOnlyArea"},"edit"===t?g:v,(0,e.createElement)("div",{className:"arkb-proOnlyArea__preview"},a))),w=({attrs:r,setLink:n,removeLink:l,setRel:s,isLinkOpen:c,setIsLinkOpen:i=null,setAriaLabel:m=null,setUseAtag:k=null,isPro:p=!1})=>{const{url:E,rel:v,isNewTab:g,ariaLabel:w,useAtag:f}=r;let N,T;null===i?[N,T]=(0,a.useState)(!1):(N=c,T=i);const O=!!E,x=(0,e.createElement)(e.Fragment,null,(0,e.createElement)(h,{value:{url:E,opensInNewTab:g},onChange:e=>{n({...e,rel:_(e?.opensInNewTab,v)})},onRemove:()=>{l(),T(!1)},forceIsEditingLink:!O,renderControlBottom:()=>(0,e.createElement)("div",{className:"arkb-link-control__bottom"},(0,e.createElement)(o.TextControl,{label:(0,t.__)("Link rel"),value:v||"",onChange:e=>{s(e)}}),m&&(0,e.createElement)(o.TextControl,{label:"aria-label",value:w||"",onChange:e=>{m(e)}}),k&&(0,e.createElement)(o.ToggleControl,{label:(0,t.__)("Make the parent element an <a> tag","arkhe-blocks"),help:d("NOTE")+(0,t.__)("Placing more <a> tags inside the block breaks the display.","arkhe-blocks"),checked:f||!1,onChange:e=>{k(e)}}))}));return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(o.ToolbarGroup,null,(0,e.createElement)(o.ToolbarButton,{name:"link",icon:(0,e.createElement)(b,{icon:u}),title:(0,t.__)("Link"),onClick:()=>{T(!0)},isActive:O})),N&&(0,e.createElement)(o.Popover,{className:"arkb-link-control",position:"bottom center",onClose:()=>T(!1)},p?(0,e.createElement)(C,null,x):x))},f=(0,e.createElement)("svg",{viewBox:"0 0 40 40","aria-hidden":"true",width:"20",height:"20"},(0,e.createElement)("polygon",{points:"38.3,39 36.3,39 36.3,33.5 3.7,33.5 3.7,39 1.7,39 1.7,31.5 38.3,31.5 "}),(0,e.createElement)("g",null,(0,e.createElement)("rect",{x:"19",y:"6",width:"2",height:"18"}),(0,e.createElement)("polygon",{points:"20,1 12,7.1 28,7.1 \t"}),(0,e.createElement)("polygon",{points:"20,28.9 28,22.7 12,22.7 \t"})));function N(e,t){return-1!==e.split(" ").indexOf(t)}var T=r(1991),O=r.n(T);const x=[{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"0",title:"0",mbClass:"u-mt-0"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"0.5rem",title:"0.5rem",mbClass:"u-mt-5"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"1rem",title:"1rem",mbClass:"u-mt-10"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"1.5rem",title:"1.5rem",mbClass:"u-mt-15"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"2rem",title:"2rem",mbClass:"u-mt-20"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"3rem",title:"3rem",mbClass:"u-mt-30"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"4rem",title:"4rem",mbClass:"u-mt-40"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"6rem",title:"6rem",mbClass:"u-mt-60"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"8rem",title:"8rem",mbClass:"u-mt-80"}],y=x.map((e=>e.mbClass)),L=(0,a.memo)((({className:r,setAttributes:a})=>{if(!window.arkbSettings?.isArkhe)return null;const n=r||"";let l;x.forEach((e=>{N(n,e.mbClass)&&(l=e)}));const s=l?l.mbClass:"";return(0,e.createElement)(o.ToolbarGroup,{className:"arkb-toolbar",isCollapsed:!0,icon:l?(0,e.createElement)("span",{className:"arkb-toolbtn--margin"},f,l.size):f,label:(0,t.__)("Margins on the block","arkhe-blocks"),controls:x.map((e=>{const{mbClass:t}=e,r=s===t;return{...e,isActive:r,onClick:()=>{const e=function(e,t,r,a=""){if(N(e,t))return e;let n;if(r){const l={};r.map((e=>{l[e]=!1})),a&&(l[a]=!1),n=O()(e,l),t&&(n=O()(n,a,t))}else t&&(n=O()(e,t));return n}(n,r?"":t,y);a({className:e})}}}))})})),S=!!window.arkbSettings?.pfkey||!1,A="ark-block-blogCard";(0,n.registerBlockType)(i.u2,{title:(0,t.__)("Blog card","arkhe-blocks"),description:(0,t.__)("Create a card-type link for related articles.","arkhe-blocks"),icon:m,example:{attributes:{isPreview:!0}},edit:({attributes:r,setAttributes:n,isSelected:s})=>{const{isPreview:m,useCache:b,linkData:p,isNewTab:u,rel:h,caption:_,customTitle:d,customExcerpt:E,showExerptPC:v,showExerptSP:g,showImage:f}=r;if(m)return k;(0,a.useEffect)((()=>{r.postId?n({postId:void 0,linkData:{id:r.postId,kind:"post-type"}}):r.externalUrl&&n({externalUrl:void 0,linkData:{url:r.externalUrl}})}),[]);const[N,T]=(0,a.useState)(!1),O=p?.id||p?.url;return O||!s||N||T(!0),(0,e.createElement)(e.Fragment,null,(0,e.createElement)(l.BlockControls,{group:"block"},(0,e.createElement)(w,{attrs:{url:p?.url,rel:h,isNewTab:u},setLink:e=>{const{id:t,url:r,kind:a,type:l,opensInNewTab:o}=e;t?n({linkData:{id:t,kind:a,type:l,url:r}}):r&&n({linkData:{url:r}}),void 0!==o&&n({isNewTab:o,rel:e.rel})},removeLink:()=>{n({linkData:void 0,isNewTab:!1,rel:void 0})},setRel:e=>{n({rel:e||void 0})},isLinkOpen:N,setIsLinkOpen:T})),(0,e.createElement)(l.BlockControls,null,(0,e.createElement)(L,{className:r.className,setAttributes:n})),(0,e.createElement)(l.InspectorControls,null,(0,e.createElement)(o.PanelBody,{title:(0,t.__)("Settings","arkhe-blocks"),initialOpen:!0},(0,e.createElement)(o.ToggleControl,{label:(0,t.__)("Use the cache","arkhe-blocks"),help:(0,t.__)("If you want to clear the cache, turn it off only once.","arkhe-blocks"),checked:b,onChange:e=>{n({useCache:e})},className:"arkb-ctrl--mb--s"}),(0,e.createElement)(C,null,(0,e.createElement)(o.ToggleControl,{label:(0,t.__)("Show featured image","arkhe-blocks"),checked:f,onChange:e=>{S&&n({showImage:e})},className:"arkb-ctrl--mb--s"}),(0,e.createElement)(o.ToggleControl,{label:(0,t.__)("Show excerpt","arkhe-blocks")+" (PC)",checked:v,onChange:e=>{S&&n({showExerptPC:e})},className:"arkb-ctrl--mb--s"}),(0,e.createElement)(o.ToggleControl,{label:(0,t.__)("Show excerpt","arkhe-blocks")+" (SP)",checked:g,onChange:e=>{S&&n({showExerptSP:e})}}),(0,e.createElement)(o.TextControl,{label:(0,t.__)("Caption at the bottom right of the card","arkhe-blocks"),value:_||"",onChange:e=>{S&&n({caption:e||void 0})}}),(0,e.createElement)(o.TextControl,{label:(0,t.__)("Overwrite title","arkhe-blocks"),value:d||"",onChange:e=>{S&&n({customTitle:e||void 0})}}),(0,e.createElement)(o.TextareaControl,{label:(0,t.__)("Overwrite excerpt","arkhe-blocks"),value:E||"",onChange:e=>{S&&n({customExcerpt:e||void 0})}})))),(0,e.createElement)("div",{...(0,l.useBlockProps)()},O?(0,e.createElement)(c(),{block:i.u2,attributes:r,className:`${A}__preview`}):(0,e.createElement)("div",{className:`${A}__preview -none ark-block-blogCard`},`※ ${(0,t.__)("Please specify the link.","arkhe-blocks")}`)))},save:()=>null})})()})();