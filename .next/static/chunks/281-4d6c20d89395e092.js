(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[281],{2350:function(){},909:function(e,t){"use strict";t.Z={src:"/_next/static/media/header.8d53fe0d.png",height:800,width:1800,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAABlBMVEVubm6goKDLy9yYAAAAAnRSTlMJCd6NztUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAaSURBVHicY2BgYGBgBBOMIAwiwSIgGowZGQAA7AANEkqBFQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},7198:function(e,t,n){"use strict";var i=n(5893),r=n(6219),s=n.n(r),o=n(909),a=n(1664),c=n.n(a);t.Z=e=>{var t,n;let{category:r,showNotes:a}=e,l={backgroundPosition:"center",background:"url(".concat(o.Z.src,") ").concat(null!==(n=r.color)&&void 0!==n?n:"var(--header-color)"),backgroundSize:"600px",height:"125px",textAlign:"center",borderRadius:"15px 15px 0 0",marginBottom:"30px"};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"".concat(s().card),style:a?{}:{height:"300px"},children:[(0,i.jsx)("div",{style:l,children:(0,i.jsx)("img",{className:s().image,src:"/images/".concat(r.avatar)})}),(0,i.jsxs)("div",{className:"".concat(s().card_content," around center"),children:[(0,i.jsx)("h4",{children:r.label}),(0,i.jsx)("p",{children:r.description}),a?(0,i.jsx)("ul",{children:null===(t=r.notes)||void 0===t?void 0:t.map(e=>(0,i.jsx)("li",{children:(0,i.jsx)(c(),{className:"link",href:"/note/".concat(e.title.replaceAll(" ","_")),children:e.title})}))}):(0,i.jsx)(i.Fragment,{})]})]})})}},9266:function(e,t,n){"use strict";var i=n(5893),r=n(1857),s=n.n(r),o=n(1664),a=n.n(o),c=n(682),l=n(5256),u=n.n(l);t.Z=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"jsx-9816238a097d8b2c "+(u().navbar||""),children:(0,i.jsx)(c.Z,{className:"nav",children:(0,i.jsxs)("ul",{className:"jsx-9816238a097d8b2c",children:[(0,i.jsxs)("li",{className:"jsx-9816238a097d8b2c",children:[" ",(0,i.jsx)(a(),{className:u().navLink,href:"/",children:"صفحه ی اصلی"})," "]}),(0,i.jsxs)("li",{className:"jsx-9816238a097d8b2c",children:[" ",(0,i.jsx)(a(),{className:u().navLink,href:"/category",children:"دسته بندی ها"})," "]}),(0,i.jsxs)("li",{className:"jsx-9816238a097d8b2c",children:[" ",(0,i.jsx)(a(),{className:u().navLink,href:"#",children:"درباره ما"})," "]})]})})}),(0,i.jsx)(s(),{id:"9816238a097d8b2c",children:"li.jsx-9816238a097d8b2c{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex}"})]})},2470:function(e,t,n){var i=n(3454);n(2350);var r=n(7294),s=r&&"object"==typeof r&&"default"in r?r:{default:r};function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=void 0!==i&&i.env&&!0,c=function(e){return"[object String]"===Object.prototype.toString.call(e)},l=function(){function e(e){var t=void 0===e?{}:e,n=t.name,i=void 0===n?"stylesheet":n,r=t.optimizeForSpeed,s=void 0===r?a:r;u(c(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",u("boolean"==typeof s,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=s,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var o=document.querySelector('meta[property="csp-nonce"]');this._nonce=o?o.getAttribute("content"):null}var t,n=e.prototype;return n.setOptimizeForSpeed=function(e){u("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},n.isOptimizeForSpeed=function(){return this._optimizeForSpeed},n.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(a||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},n.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},n.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},n.insertRule=function(e,t){if(u(c(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(i){return a||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},n.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){a||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];u(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},n.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},n.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},n.cssRules=function(){var e=this;return this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},n.makeStyleTag=function(e,t,n){t&&u(c(t),"makeStyleTag accepts only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var r=document.head||document.getElementsByTagName("head")[0];return n?r.insertBefore(i,n):r.appendChild(i),i},o(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),t&&o(e,t),e}();function u(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var h=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},d={};function f(e,t){if(!t)return"jsx-"+e;var n=String(t),i=e+n;return d[i]||(d[i]="jsx-"+h(e+"-"+n)),d[i]}function _(e,t){var n=e+t;return d[n]||(d[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),d[n]}var p=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,i=void 0===n?null:n,r=t.optimizeForSpeed,s=void 0!==r&&r;this._sheet=i||new l({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),i&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),i=n.styleId,r=n.rules;if(i in this._instancesCounts){this._instancesCounts[i]+=1;return}var s=r.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[i]=s,this._instancesCounts[i]=1},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var i=this._fromServer&&this._fromServer[n];i?(i.parentNode.removeChild(i),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))},t.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],i=e[1];return s.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:i}})})},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,i=e.id;if(n){var r=f(i,n);return{styleId:r,rules:Array.isArray(t)?t.map(function(e){return _(r,e)}):[_(r,t)]}}return{styleId:f(i),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),m=r.createContext(null);m.displayName="StyleSheetContext";var v=s.default.useInsertionEffect||s.default.useLayoutEffect,g=new p;function y(e){var t=g||r.useContext(m);return t&&v(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}y.dynamic=function(e){return e.map(function(e){return f(e[0],e[1])}).join(" ")},t.style=y},1857:function(e,t,n){"use strict";e.exports=n(2470).style},6219:function(e){e.exports={card:"category_card___5fn2",image:"category_image__80jhs",card_link:"category_card_link__u1acB",card_content:"category_card_content__puyqm"}},5256:function(e){e.exports={navbar:"navbar_navbar__jP4A8",navLink:"navbar_navLink__lrkv8"}}}]);