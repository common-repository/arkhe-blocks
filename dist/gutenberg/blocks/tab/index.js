(()=>{var e={1991:(e,t)=>{var a;!function(){"use strict";var l=function(){function e(){}function t(e,t){for(var a=t.length,l=0;l<a;++l)r(e,t[l])}e.prototype=Object.create(null);var a={}.hasOwnProperty,l=/\s+/;function r(e,r){if(r){var n=typeof r;"string"===n?function(e,t){for(var a=t.split(l),r=a.length,n=0;n<r;++n)e[a[n]]=!0}(e,r):Array.isArray(r)?t(e,r):"object"===n?function(e,t){if(t.toString===Object.prototype.toString||t.toString.toString().includes("[native code]"))for(var l in t)a.call(t,l)&&(e[l]=!!t[l]);else e[t.toString()]=!0}(e,r):"number"===n&&function(e,t){e[t]=!0}(e,r)}}return function(){for(var a=arguments.length,l=Array(a),r=0;r<a;r++)l[r]=arguments[r];var n=new e;t(n,l);var s=[];for(var o in n)n[o]&&s.push(o);return s.join(" ")}}();e.exports?(l.default=l,e.exports=l):void 0===(a=function(){return l}.apply(t,[]))||(e.exports=a)}()},4184:(e,t)=>{var a;!function(){"use strict";var l={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var n=typeof a;if("string"===n||"number"===n)e.push(a);else if(Array.isArray(a)){if(a.length){var s=r.apply(null,a);s&&e.push(s)}}else if("object"===n){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var o in a)l.call(a,o)&&a[o]&&e.push(o)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()}},t={};function a(l){var r=t[l];if(void 0!==r)return r.exports;var n=t[l]={exports:{}};return e[l](n,n.exports,a),n.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.React,t=window.wp.i18n,l=window.wp.data,r=window.wp.blocks,n=window.wp.blockEditor,s=window.wp.element,o="function"==typeof n.useInnerBlocksProps?n.useInnerBlocksProps:n.__experimentalUseInnerBlocksProps,c=JSON.parse('{"u2":"arkhe-blocks/tab","be":{"anchor":true,"className":false},"Y4":{"isExample":{"type":"boolean","default":false},"tabId":{"type":"string","default":""},"activeTab":{"type":"number","default":0},"tabWidthPC":{"type":"string","default":"auto"},"tabWidthSP":{"type":"string","default":"auto"},"isScrollPC":{"type":"boolean","default":false},"isScrollSP":{"type":"boolean","default":false},"tabColor":{"type":"string","default":""},"tabAlign":{"type":"string","default":""}}}'),i=(0,e.createElement)("svg",{viewBox:"0 0 56 56"},(0,e.createElement)("path",{d:"M41,17v-6.5c0-0.3-0.2-0.5-0.5-0.5h-37C3.2,10,3,10.2,3,10.5V44c0,0.6,0.4,1,1,1h48c0.6,0,1-0.4,1-1V18c0-0.6-0.4-1-1-1H41z M29,12h10v5H29V12z M17,12h10v5H17V12z M51,43H5V19h10h2h10h2h12h10V43z"})),b={name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}},m={attributes:{isExample:!0,tabWidthPC:"fix"},innerBlocks:[{name:"arkhe-blocks/tab-body",attributes:{id:0},innerBlocks:[b]},{name:"arkhe-blocks/tab-body",attributes:{id:1},innerBlocks:[b]}]};var u=a(4184),d=a.n(u);const p="ark-block-tab",k=[{supports:c.be,attributes:{isExample:{type:"boolean",default:!1},tabId:{type:"string",default:""},activeTab:{type:"number",default:0},tabWidth:{type:"string",default:"auto"},isScrollPC:{type:"boolean",default:!1},isScrollSP:{type:"boolean",default:!1},tabColor:{type:"string",default:""},tabHeaders:{type:"array",default:[(0,t.__)("Tab","arkhe-blocks")+" 1",(0,t.__)("Tab","arkhe-blocks")+" 2"]}},migrate:e=>{const t={...e},a=e.tabWidth||"auto";return t.tabWidthPC=a,t.tabWidthSP=a,t.tabAlign="",t},save:({attributes:t})=>{const{tabId:a,tabHeaders:l,activeTab:r,tabWidth:o,isScrollPC:c,isScrollSP:i}=t,b=n.useBlockProps.save({className:d()(p,{"-scrollable-pc":c,"-scrollable-sp":i})});return(0,e.createElement)("div",{...b},(0,e.createElement)("ul",{role:"tablist",className:"arkb-tabList","data-tab-width":o},l.map(((t,l)=>(0,e.createElement)("li",{key:l,className:"arkb-tabList__item",role:"presentation"},(0,e.createElement)("button",{className:"arkb-tabList__button",role:"tab","aria-selected":r===l?"true":"false","aria-controls":`tab-${a}-${l}`},(0,e.createElement)(s.RawHTML,null,t)))))),(0,e.createElement)("div",{className:"arkb-tabBody"},(0,e.createElement)(n.InnerBlocks.Content,null)))}},{supports:c.be,attributes:{isExample:{type:"boolean",default:!1},tabId:{type:"string",default:""},activeTab:{type:"number",default:0},tabWidth:{type:"string",default:"auto"},isScrollPC:{type:"boolean",default:!1},isScrollSP:{type:"boolean",default:!1},tabColor:{type:"string",default:""},tabHeaders:{type:"array",default:[(0,t.__)("Tab","arkhe-blocks")+" 1",(0,t.__)("Tab","arkhe-blocks")+" 2"]}},save:({attributes:t})=>{const{tabId:a,tabHeaders:l,activeTab:r,tabWidth:o,isScrollPC:c,isScrollSP:i}=t,b=n.useBlockProps.save({className:d()(p,{"-scrollable-pc":c,"-scrollable-sp":i})});return(0,e.createElement)("div",{...b},(0,e.createElement)("ul",{role:"tablist",className:"arkb-tabList","data-tab-width":o},l.map(((t,l)=>(0,e.createElement)("li",{key:l,className:"arkb-tabList__item",role:"presentation"},(0,e.createElement)("button",{className:"arkb-tabList__button",role:"tab","aria-selected":r===l?"true":"false","aria-controls":`tab-${a}-${l}`,"data-onclick":"tabControl"},(0,e.createElement)(s.RawHTML,null,t)))))),(0,e.createElement)("div",{className:"arkb-tabBody"},(0,e.createElement)(n.InnerBlocks.Content,null)))}}],h=window.wp.components,_=!!window.arkbSettings?.pfkey||!1,E=(0,e.createElement)("p",{className:"arkb-proOnlyArea__message"},(0,t.__)("This setting is only available in the PRO version.","arkhe-blocks"),(0,e.createElement)("a",{className:"arkb-proOnlyArea__link",href:"https://arkhe-theme.com/ja/product/arkhe-blocks-pro/",target:"_blank",rel:"noreferrer noopener"},"Go Pro")),f=(0,e.createElement)("p",{className:"arkb-proOnlyArea__message"},(0,t.__)("This area can only be edited in the PRO version.","arkhe-blocks"),(0,e.createElement)("a",{className:"arkb-proOnlyArea__link",href:"https://arkhe-theme.com/ja/product/arkhe-blocks-pro/",target:"_blank",rel:"noreferrer noopener"},"Go Pro")),v=({type:t="",passCheck:a=!1,children:l})=>a?l:(0,e.createElement)(e.Fragment,null,_?l:(0,e.createElement)("div",{className:"arkb-proOnlyArea"},"edit"===t?f:E,(0,e.createElement)("div",{className:"arkb-proOnlyArea__preview"},l))),g=(0,s.forwardRef)((function({icon:e,size:t=24,...a},l){return(0,s.cloneElement)(e,{width:t,height:t,...a,ref:l})})),w=window.wp.primitives,y=(0,e.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(w.Path,{d:"M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"})),C=(0,e.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(w.Path,{d:"M17 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12zm-7.5-.5h4V16h-4v1.5z"})),N=(0,e.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(w.Path,{d:"M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"})),T=({className:t,controlPC:a,controlSP:l,controlTab:r,controlMB:n,isHideTab:s})=>{const o=[{name:"pc",title:(0,e.createElement)(e.Fragment,null,(0,e.createElement)(g,{icon:y}),(0,e.createElement)("span",null,"PC")),className:"__pc"}];r&&o.push({name:"tab",title:(0,e.createElement)(e.Fragment,null,(0,e.createElement)(g,{icon:C}),(0,e.createElement)("span",null,"Tab")),className:"__tab"}),n&&o.push({name:"mb",title:(0,e.createElement)(e.Fragment,null,(0,e.createElement)(g,{icon:N}),(0,e.createElement)("span",null,"Mobile")),className:"__mb"}),l&&o.push({name:"sp",title:(0,e.createElement)(e.Fragment,null,(0,e.createElement)(g,{icon:N}),(0,e.createElement)("span",null,"SP")),className:"__sp"});let c="arkb-tabPanel -device";return t&&(c+=` ${t}`),s&&(c+=" is-hide"),(0,e.createElement)(h.TabPanel,{className:c,activeClass:"is-active",tabs:o,initialTabName:"pc"},(e=>"pc"===e.name?a:"tab"===e.name?r:"mb"===e.name?n:"sp"===e.name?l:void 0))},P=!!window.arkbSettings?.pfkey||!1,S=[{label:(0,t.__)("Fit to text","arkhe-blocks"),value:"auto"},{label:(0,t.__)("Equal width","arkhe-blocks"),value:"equal"}],x=[{value:"left",label:(0,t.__)("Left","arkhe-blocks")},{value:"",label:(0,t.__)("Center","arkhe-blocks")},{value:"right",label:(0,t.__)("Right","arkhe-blocks")}],B=({attributes:a,setAttributes:r,clientId:n})=>{const{tabId:s,activeTab:o,tabHeaders:c,tabWidthPC:i,tabWidthSP:b,isScrollPC:m,isScrollSP:u,tabAlign:d}=a,{getBlockOrder:p}=wp.data.select("core/block-editor"),{updateBlockAttributes:k}=(0,l.useDispatch)("core/block-editor");return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{className:"arkb-helpPanel"},(0,t.__)("The {i}-th tab of this block will be displayed open when the URL contains the following parameters.","arkhe-blocks"),(0,e.createElement)("input",{readOnly:!0,type:"text",value:`?arkb-tab=${s}-{i}`,className:"components-text-control__input arkb-helpInput u-arkb--mt--5"}),(0,e.createElement)("div",{className:"arkb-helpText u-arkb--mt--5"},function(e,...a){const l={NOTE:(0,t.__)("Note: ","arkhe-blocks"),ADD:(0,t.__)("Add %s","arkhe-blocks"),CLOSE:(0,t.__)("Close %s","arkhe-blocks"),OPEN:(0,t.__)("Open %s","arkhe-blocks"),CONF_RESET:(0,t.__)("Do you want to reset %s?","arkhe-blocks"),HAS_ERROR:(0,t.__)("There is an error in %s","arkhe-blocks"),TO_SELECT:(0,t.__)("Select %s","arkhe-blocks"),TO_INPUT:(0,t.__)("Enter %s","arkhe-blocks"),NOT_FOUND:(0,t.__)("%s not found.","arkhe-blocks"),NOT_VALID:(0,t.__)("%s is incorrect.","arkhe-blocks"),NO_DATA:(0,t.__)("Currently, %s is not yet registered.","arkhe-blocks")};switch(!0){case"ADD"===e:case"CLOSE"===e:case"OPEN"===e:case"CONF_RESET"===e:case"HAS_ERROR"===e:case"TO_SELECT"===e:case"TO_INPUT"===e:case"NOT_FOUND"===e:case"NOT_VALID"===e:case"NO_DATA"===e:const r=l[e]||"";return(0,t.sprintf)(r,...a);default:return l[e]||""}}("NOTE")+(0,t.__)("Note that the tab number {i} starts at 0.","arkhe-blocks"))),(0,e.createElement)(h.PanelBody,{title:(0,t.__)("Settings","arkhe-blocks"),initialOpen:!0},(0,e.createElement)(h.BaseControl,null,(0,e.createElement)(h.BaseControl.VisualLabel,null,(0,t.__)("Tab Arrangement","arkhe-blocks")),(0,e.createElement)(h.ButtonGroup,{className:"arkb-btns--boxLayout"},x.map((t=>{const a=t.value;return(0,e.createElement)(h.Button,{key:`align-${a}`,text:t.label,isPrimary:d===a,onClick:()=>{r({tabAlign:a})}})})))),(0,e.createElement)(v,null,(0,e.createElement)(h.TextControl,{label:(0,t.__)("Number of tabs to open first","arkhe-blocks"),type:"number",min:"1",max:c.length,style:{maxWidth:"6em"},value:o+1,help:(0,t.__)("If a URL parameter is specified, it takes precedence.","arkhe-blocks"),onChange:e=>{if(!P)return;const t=parseInt(e||1)-1;r({activeTab:t}),p(n).forEach((e=>{k(e,{activeTab:t})}))}})),(0,e.createElement)(T,{controlPC:(0,e.createElement)(e.Fragment,null,(0,e.createElement)(h.RadioControl,{label:(0,t.__)("Tab width","arkhe-blocks"),selected:i,options:[...S,{label:(0,t.__)("Fixed width","arkhe-blocks")+"(25%)",value:"fix"}],onChange:e=>{r({tabWidthPC:e})}}),(0,e.createElement)(h.ToggleControl,{label:(0,t.__)("Make it scrollable","arkhe-blocks")+"(PC)",checked:m,onChange:e=>{r({isScrollPC:e})}})),controlSP:(0,e.createElement)(e.Fragment,null,(0,e.createElement)(h.RadioControl,{label:(0,t.__)("Tab width","arkhe-blocks"),selected:b,options:[...S,{label:(0,t.__)("Fixed width","arkhe-blocks")+"(50%)",value:"fix"}],onChange:e=>{r({tabWidthSP:e})}}),(0,e.createElement)(h.ToggleControl,{label:(0,t.__)("Make it scrollable","arkhe-blocks")+"(SP)",checked:u,onChange:e=>{r({isScrollSP:e})}}))})))},O=(0,e.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(w.Path,{d:"M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"})),A=(0,e.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(w.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})),H=(0,e.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(w.Path,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"})),L=(0,e.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(w.Path,{d:"M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"})),I=(0,s.memo)((a=>{const{tabHeaders:l,actTab:r,setActTab:s,updateTabsHeader:o,moveUpTab:c,moveDownTab:i,addTab:b,removeTab:m}=a;return(0,e.createElement)(e.Fragment,null,l.map(((a,b)=>(0,e.createElement)("li",{key:b,className:"arkb-tabList__item "+(r===b?"is-active":"")},(0,e.createElement)("button",{role:"tab",className:"arkb-tabList__button","aria-selected":r===b?"true":"false",onClick:()=>{s(b)}},o?(0,e.createElement)(n.RichText,{tagName:"p",placeholder:(0,t.__)("Tab","arkhe-blocks")+"...",value:a,onChange:e=>o(e,b)}):(0,e.createElement)("span",null,a)),(0,e.createElement)("div",{className:"arkb-tab__tooltips"},(0,e.createElement)(h.Tooltip,{text:(0,t.__)("Move tab forward","arkhe-blocks")},(0,e.createElement)("button",{className:"arkb-tabBtn--moveUp","data-active":0===b?"false":"true",onClick:()=>{c(b)}},(0,e.createElement)(g,{icon:O}))),1<l.length&&(0,e.createElement)(h.Tooltip,{text:(0,t.__)("Delete tab","arkhe-blocks")},(0,e.createElement)("button",{className:"arkb-tabBtn--remove",onClick:()=>{m(b)}},(0,e.createElement)(g,{icon:A}))),(0,e.createElement)(h.Tooltip,{text:(0,t.__)("Move tab back","arkhe-blocks")},(0,e.createElement)("button",{className:"arkb-tabBtn--moveDown","data-active":l.length-1===b?"false":"true",onClick:()=>{i(b)}},(0,e.createElement)(g,{icon:H}))))))),(0,e.createElement)("li",{className:"arkb-tabList__item--add"},(0,e.createElement)(h.Tooltip,{text:(0,t.__)("Add tab","arkhe-blocks")},(0,e.createElement)("button",{className:"arkb-tabBtn--add",onClick:()=>{b()}},(0,e.createElement)(g,{icon:L})))))})),z=(0,e.createElement)("svg",{viewBox:"0 0 40 40","aria-hidden":"true",width:"20",height:"20"},(0,e.createElement)("polygon",{points:"38.3,39 36.3,39 36.3,33.5 3.7,33.5 3.7,39 1.7,39 1.7,31.5 38.3,31.5 "}),(0,e.createElement)("g",null,(0,e.createElement)("rect",{x:"19",y:"6",width:"2",height:"18"}),(0,e.createElement)("polygon",{points:"20,1 12,7.1 28,7.1 \t"}),(0,e.createElement)("polygon",{points:"20,28.9 28,22.7 12,22.7 \t"})));function V(e,t){return-1!==e.split(" ").indexOf(t)}var M=a(1991),R=a.n(M);const D=[{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"0",title:"0",mbClass:"u-mt-0"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"0.5rem",title:"0.5rem",mbClass:"u-mt-5"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"1rem",title:"1rem",mbClass:"u-mt-10"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"1.5rem",title:"1.5rem",mbClass:"u-mt-15"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"2rem",title:"2rem",mbClass:"u-mt-20"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"3rem",title:"3rem",mbClass:"u-mt-30"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"4rem",title:"4rem",mbClass:"u-mt-40"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"6rem",title:"6rem",mbClass:"u-mt-60"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"8rem",title:"8rem",mbClass:"u-mt-80"}],W=D.map((e=>e.mbClass)),F=(0,s.memo)((({className:a,setAttributes:l})=>{if(!window.arkbSettings?.isArkhe)return null;const r=a||"";let n;D.forEach((e=>{V(r,e.mbClass)&&(n=e)}));const s=n?n.mbClass:"";return(0,e.createElement)(h.ToolbarGroup,{className:"arkb-toolbar",isCollapsed:!0,icon:n?(0,e.createElement)("span",{className:"arkb-toolbtn--margin"},z,n.size):z,label:(0,t.__)("Margins on the block","arkhe-blocks"),controls:D.map((e=>{const{mbClass:t}=e,a=s===t;return{...e,isActive:a,onClick:()=>{const e=function(e,t,a,l=""){if(V(e,t))return e;let r;if(a){const n={};a.map((e=>{n[e]=!1})),l&&(n[l]=!1),r=R()(e,n),t&&(r=R()(r,l,t))}else t&&(r=R()(e,t));return r}(r,a?"":t,W);l({className:e})}}}))})})),j="ark-block-tab",$="arkhe-blocks/tab-body";function G(e,t,a){if(t===a||t>e.length-1||a>e.length-1)return e;const l=e[t],r=e.slice(t+1);return e.splice(t),Array.prototype.push.apply(e,r),e.splice(a,0,l),e}(0,r.registerBlockType)(c.u2,{title:(0,t.__)("Tab","arkhe-blocks"),description:(0,t.__)("Create tab content.","arkhe-blocks"),icon:i,example:m,styles:[{name:"default",label:(0,t.__)("Default","arkhe-blocks"),isDefault:!0},{name:"box",label:(0,t._x)("Box","style","arkhe-blocks")}],attributes:{...c.Y4,tabHeaders:{type:"array",default:[(0,t.__)("Tab","arkhe-blocks")+" 1",(0,t.__)("Tab","arkhe-blocks")+" 2"]}},edit:({attributes:a,setAttributes:c,clientId:i})=>{const{isExample:b,tabId:m,tabHeaders:u,activeTab:p,tabWidthPC:k,tabWidthSP:h,isScrollPC:_,isScrollSP:E,tabAlign:f}=a,v=(0,s.useRef)(),[g,w]=(0,s.useState)(p),y=m||i.substring(0,i.indexOf("-"));(0,s.useEffect)((()=>{m||c({tabId:y})}),[m,y]);const{getBlockOrder:C}=wp.data.select("core/block-editor");(0,s.useEffect)((()=>{if(b)return;const{ownerDocument:e}=v.current;if(e.querySelectorAll(`.ark-block-tab[data-tabid="${m}"]`).length>1){const e=i.substring(0,i.indexOf("-"));c({tabId:e||""}),C(i).forEach((t=>{P(t,{tabId:e})}))}}),[i]);const{removeBlocks:N,insertBlocks:T,updateBlockAttributes:P,moveBlocksUp:S,moveBlocksDown:x}=(0,l.useDispatch)("core/block-editor"),O=(0,s.useCallback)((()=>{const e=C(i);for(let t=0;t<e.length;t++)P(e[t],{bodyId:t})}),[i]),A=(0,s.useCallback)(((e,t)=>{const a=u.map(((a,l)=>(t===l&&(a=e),a)));c({tabHeaders:a})}),[u]),H=(0,s.useCallback)((e=>{if(0===e)return;const t=C(i)[e],a=G(u,e,e-1);c({tabHeaders:[...a]}),S([t],i),w(g-1),O()}),[i,u,g,O]),L=(0,s.useCallback)((e=>{const t=C(i),a=t[e];if(t.length-1===e)return;const l=G(u,e,e+1);c({tabHeaders:[...l]}),x([a],i),w(g+1),O()}),[i,u,g,O]),z=(0,s.useCallback)((()=>{const e=(0,r.createBlock)($,{tabId:m,activeTab:p});T(e,u.length,i),c({tabHeaders:[...u,(0,t.__)("Tab","arkhe-blocks")]}),O(),w(u.length)}),[i,m,p,u,O]),V=(0,s.useCallback)((e=>{const t=u.filter(((t,a)=>a!==e));c({tabHeaders:t});const a=C(i);N(a[e],!1),w(0!==e?g-1:0),O()}),[i,m,u,O]),M=(0,n.useBlockProps)({ref:v,className:d()(j,"ark-has-guide",{"-scrollable-pc":_,"-scrollable-sp":E}),"data-tabid":m,"data-is-example":b?"1":null}),R=o({className:"arkb-tabBody"},{allowedBlocks:[$],templateLock:!1,template:[[$,{bodyId:0,tabId:y}],[$,{bodyId:1,tabId:y}]]});return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.BlockControls,null,(0,e.createElement)(F,{className:a.className,setAttributes:c})),(0,e.createElement)(n.InspectorControls,null,(0,e.createElement)(B,{attributes:a,setAttributes:c,clientId:i})),(0,e.createElement)("div",{...M},(0,e.createElement)("ul",{role:"tablist",className:"arkb-tabList","data-tab-w-pc":k,"data-tab-w-sp":h,"data-justify":f||null},(0,e.createElement)(I,{tabHeaders:u,actTab:g,setActTab:w,updateTabsHeader:A,moveUpTab:H,moveDownTab:L,addTab:z,removeTab:V})),(0,e.createElement)("div",{...R})),!b&&(0,e.createElement)("style",null,`[data-block="${i}"] > .arkb-tabBody > [data-type="${$}"]:nth-child(${g+1}){ display:block; }`))},save:({attributes:t})=>{const{tabId:a,tabHeaders:l,activeTab:r,tabWidthPC:o,tabWidthSP:c,isScrollPC:i,isScrollSP:b,tabAlign:m}=t,u=n.useBlockProps.save({className:d()(j,{"-scrollable-pc":i,"-scrollable-sp":b})});return(0,e.createElement)("div",{...u},(0,e.createElement)("ul",{role:"tablist",className:"arkb-tabList","data-tab-w-pc":o,"data-tab-w-sp":c,"data-justify":m||null},l.map(((t,l)=>(0,e.createElement)("li",{key:l,className:"arkb-tabList__item",role:"presentation"},(0,e.createElement)("button",{className:"arkb-tabList__button",role:"tab","aria-selected":r===l?"true":"false","aria-controls":`tab-${a}-${l}`},(0,e.createElement)(s.RawHTML,null,t)))))),(0,e.createElement)("div",{className:"arkb-tabBody"},(0,e.createElement)(n.InnerBlocks.Content,null)))},deprecated:k})})()})();