(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[183],{4184:function(e,n){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var s=a.apply(null,r);s&&e.push(s)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)t.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0!==(r=(function(){return a}).apply(n,[]))&&(e.exports=r)}()},2913:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category",function(){return r(8712)}])},909:function(e,n){"use strict";n.Z={src:"/_next/static/media/header.8d53fe0d.png",height:800,width:1800,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAABlBMVEVubm6goKDLy9yYAAAAAnRSTlMJCd6NztUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAaSURBVHicY2BgYGBgBBOMIAwiwSIgGowZGQAA7AANEkqBFQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},7198:function(e,n,r){"use strict";var t=r(5893),a=r(6219),i=r.n(a),s=r(909),c=r(1664),l=r.n(c);n.Z=e=>{var n,r;let{category:a,showNotes:c}=e,o={backgroundPosition:"center",background:"url(".concat(s.Z.src,") ").concat(null!==(r=a.color)&&void 0!==r?r:"var(--header-color)"),backgroundSize:"600px",height:"125px",textAlign:"center",borderRadius:"15px 15px 0 0",marginBottom:"30px"};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"".concat(i().card),style:c?{}:{height:"300px"},children:[(0,t.jsx)("div",{style:o,children:a.avatar?(0,t.jsx)("img",{className:i().image,src:"/images/".concat(a.avatar)}):(0,t.jsx)(t.Fragment,{})}),(0,t.jsxs)("div",{className:"".concat(i().card_content," around center"),children:[(0,t.jsx)("h4",{children:a.label}),(0,t.jsx)("p",{children:a.description}),c?(0,t.jsx)("ul",{children:null===(n=a.notes)||void 0===n?void 0:n.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(l(),{className:"link",href:"/note/".concat(e.title.replaceAll(" ","_")),children:e.title})}))}):(0,t.jsx)(t.Fragment,{})]})]})})}},9266:function(e,n,r){"use strict";var t=r(5893),a=r(1857),i=r.n(a),s=r(1664),c=r.n(s),l=r(682),o=r(5256),d=r.n(o);n.Z=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"jsx-9816238a097d8b2c "+(d().navbar||""),children:(0,t.jsx)(l.Z,{className:"nav",children:(0,t.jsxs)("ul",{className:"jsx-9816238a097d8b2c",children:[(0,t.jsxs)("li",{className:"jsx-9816238a097d8b2c",children:[" ",(0,t.jsx)(c(),{className:d().navLink,href:"/",children:"صفحه ی اصلی"})," "]}),(0,t.jsxs)("li",{className:"jsx-9816238a097d8b2c",children:[" ",(0,t.jsx)(c(),{className:d().navLink,href:"/category",children:"دسته بندی ها"})," "]}),(0,t.jsxs)("li",{className:"jsx-9816238a097d8b2c",children:[" ",(0,t.jsx)(c(),{className:d().navLink,href:"#",children:"درباره ما"})," "]})]})})}),(0,t.jsx)(i(),{id:"9816238a097d8b2c",children:"li.jsx-9816238a097d8b2c{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex}"})]})},8712:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return d}});var t=r(5893),a=r(682),i=r(4051),s=r(9266),c=r(7198),l=r(1664),o=r.n(l),d=!0;n.default=e=>{let{list:n}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Z,{}),(0,t.jsxs)(a.Z,{children:[(0,t.jsx)("h1",{className:"around center",children:"تاپیک ها"}),(0,t.jsx)("h4",{className:"around center",children:"تقسیم بندی محتوای سایت"}),(0,t.jsx)("div",{children:(0,t.jsx)(i.Z,{style:{justifyContent:"center"},children:n.map(e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"col-md-6 col-sm-12 col-lg-6",children:(0,t.jsx)(o(),{className:"link",href:"/category/".concat(e.label.replaceAll(" ","_")),children:(0,t.jsx)(c.Z,{category:e})})})}))})})]})]})}},6219:function(e){e.exports={card:"category_card___5fn2",image:"category_image__80jhs",card_link:"category_card_link__u1acB",card_content:"category_card_content__puyqm"}},5256:function(e){e.exports={navbar:"navbar_navbar__jP4A8",navLink:"navbar_navLink__lrkv8"}},682:function(e,n,r){"use strict";var t=r(4184),a=r.n(t),i=r(7294),s=r(6792),c=r(5893);let l=i.forwardRef(({bsPrefix:e,fluid:n,as:r="div",className:t,...i},l)=>{let o=(0,s.vE)(e,"container"),d="string"==typeof n?`-${n}`:"-fluid";return(0,c.jsx)(r,{ref:l,...i,className:a()(t,n?`${o}${d}`:o)})});l.displayName="Container",l.defaultProps={fluid:!1},n.Z=l},4051:function(e,n,r){"use strict";var t=r(4184),a=r.n(t),i=r(7294),s=r(6792),c=r(5893);let l=i.forwardRef(({bsPrefix:e,className:n,as:r="div",...t},i)=>{let l=(0,s.vE)(e,"row"),o=(0,s.pi)(),d=(0,s.zG)(),u=`${l}-cols`,x=[];return o.forEach(e=>{let n;let r=t[e];delete t[e],null!=r&&"object"==typeof r?{cols:n}=r:n=r;let a=e!==d?`-${e}`:"";null!=n&&x.push(`${u}${a}-${n}`)}),(0,c.jsx)(r,{ref:i,...t,className:a()(n,l,...x)})});l.displayName="Row",n.Z=l},6792:function(e,n,r){"use strict";r.d(n,{pi:function(){return l},vE:function(){return c},zG:function(){return o}});var t=r(7294);r(5893);let a=t.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:i,Provider:s}=a;function c(e,n){let{prefixes:r}=(0,t.useContext)(a);return e||r[n]||n}function l(){let{breakpoints:e}=(0,t.useContext)(a);return e}function o(){let{minBreakpoint:e}=(0,t.useContext)(a);return e}}},function(e){e.O(0,[664,857,774,888,179],function(){return e(e.s=2913)}),_N_E=e.O()}]);