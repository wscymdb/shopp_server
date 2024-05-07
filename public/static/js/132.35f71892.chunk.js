"use strict";(self.webpackChunkapp_web=self.webpackChunkapp_web||[]).push([[132],{2569:(e,t,a)=>{a.r(t),a.d(t,{addLabel:()=>d,deleteImgByName:()=>c,deleteLabelById:()=>r,editProduct:()=>s,getLabelList:()=>n,getProductById:()=>i,uploadProductBanner:()=>o});var l=a(167);const n=e=>l.aA.request({method:"get",url:"/label",data:e}),r=e=>l.aA.request({method:"delete",url:"/label/".concat(e)}),i=e=>l.aA.request({method:"get",url:"/label/".concat(e)}),d=e=>l.aA.request({method:"post",url:"/label/",data:e}),s=e=>l.aA.request({method:"put",url:"/label/update",data:e}),o=e=>l.m7.request({method:"post",url:"/upload/product_banner",data:e}),c=e=>l.aA.request({method:"post",url:"/upload/deleteStaticImg",data:e})},775:(e,t,a)=>{a.r(t),a.d(t,{addProduct:()=>i,deleteImgByName:()=>c,deleteProductById:()=>o,editProduct:()=>d,getProductById:()=>r,getProductList:()=>n,uploadProductBanner:()=>s});var l=a(167);const n=e=>l.aA.request({method:"post",url:"/product/list",data:e}),r=e=>l.aA.request({method:"get",url:"/product/list/".concat(e)}),i=e=>l.aA.request({method:"post",url:"/product/create",data:e}),d=e=>l.aA.request({method:"put",url:"/product/update",data:e}),s=e=>l.m7.request({method:"post",url:"/upload/product_banner",data:e}),o=e=>l.aA.request({method:"delete",url:"/product/delete/".concat(e)}),c=e=>l.aA.request({method:"post",url:"/upload/deleteStaticImg",data:e})},3262:(e,t,a)=>{function l(){let{extraHeight:e,id:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"undefined"==typeof e&&(e=74);let a=null;a=t?document.getElementById(t)?document.getElementById(t).getElementsByClassName("ant-table-thead")[0]:null:document.getElementsByClassName("ant-table-thead")[0];let l=0;return a&&(l=a.getBoundingClientRect().bottom),"calc(100vh - ".concat(l+e,"px)")}a.d(t,{W:()=>l})},9132:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var l,n=a(2791),r=a(168),i=a(3517);const d=i.ZP.div(l||(l=(0,r.Z)(["\n  height: 100%;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  overflow: hidden;\n  .basic {\n    padding: 16px;\n    background-color: #fff;\n    border-radius: 8px;\n  }\n  .query {\n    margin-bottom: 10px;\n  }\n  .table {\n    flex: 1;\n    overflow: hidden;\n    .actions {\n      margin-bottom: 15px;\n    }\n  }\n"])));var s=a(2648),o=a(8526),c=a(8737),u=a(2641),m=a(2495),p=a(775),h=a(7892),g=a.n(h),x=a(1431),b=a(952),f=a(8531),y=a(1773),j=a(1082),v=a(184);const Z=function(){let{handleDelete:e=(()=>{}),handleEdit:t=(()=>{})}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{title:"\u6807\u9898",dataIndex:"title",align:"center",key:"title"},{title:"\u526f\u6807\u9898",dataIndex:"subtitle",align:"center",key:"subtitle",ellipsis:!0,render:(e,t)=>(0,v.jsx)(x.Z,{placement:"topLeft",title:e,children:e})},{title:"\u6807\u7b7e",dataIndex:"name",align:"center",key:"name",render:e=>(0,v.jsx)(b.Z,{color:"success",children:e})},{title:"\u8fd0\u8d39(\u5143)",dataIndex:"freight",align:"center",key:"freight"},{title:"\u5f53\u524d\u4ef7\u683c(\u5143)",dataIndex:"current_price",align:"center",key:"current_price"},{title:"\u4e4b\u524d\u4ef7\u683c(\u5143)",dataIndex:"previous_price",align:"center",key:"previous_price"},{title:"\u5546\u54c1banner\u56fe\u7247",dataIndex:"banner_path",align:"center",key:"banner_path",render:e=>e?(0,v.jsx)(f.Z.PreviewGroup,{items:e.split(","),children:(0,v.jsx)(f.Z,{src:e.split(",")[0]})}):""},{title:"\u5546\u54c1\u8be6\u60c5\u56fe\u7247",dataIndex:"detail_path",align:"center",key:"detail_path",render:e=>e?(0,v.jsx)(f.Z.PreviewGroup,{items:e.split(","),children:(0,v.jsx)(f.Z,{src:e.split(",")[0]})}):""},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"createAt",align:"center",key:"createAt",width:220,render:(e,t,a)=>g()(e).format("YYYY-MM-DD HH:mm:ss")},{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"updateAt",align:"center",key:"updateAt",width:220,render:(e,t,a)=>g()(e).format("YYYY-MM-DD HH:mm:ss")},{title:"\u64cd\u4f5c",key:"action",fixed:"right",render:(a,l)=>(0,v.jsxs)(y.Z,{size:"small",children:[(0,v.jsx)(u.ZP,{type:"link",onClick:()=>t(l),children:"\u7f16\u8f91"}),(0,v.jsx)(j.Z,{title:"\u5220\u9664",description:"\u6b64\u64cd\u4f5c\u5c06\u4f1a\u6c38\u4e45\u5220\u9664",onConfirm:t=>(t=>{e(t)})(l),okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",children:(0,v.jsx)(u.ZP,{type:"link",children:"\u5220\u9664"})})]})}]};var w,I=a(8138),P=a(8597),k=a(5535);const q=i.ZP.div(w||(w=(0,r.Z)([""])));var C=a(9286),_=a(1994);const B=e=>{const{setPath:t,onChange:a,imgList:l}=e,[r,i]=(0,n.useState)(!1),[d,s]=(0,n.useState)(""),[o,c]=(0,n.useState)(""),[u,m]=(0,n.useState)([]);(0,n.useEffect)((()=>{l&&m(l)}),[l]);const p=(0,v.jsxs)("div",{children:[(0,v.jsx)(C.Z,{}),(0,v.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(_.Z,{listType:"picture-card",fileList:u,onPreview:async e=>{e.url||e.preview||(e.preview=await(e=>new Promise(((t,a)=>{const l=new FileReader;l.readAsDataURL(e),l.onload=()=>t(l.result),l.onerror=e=>a(e)})))(e.originFileObj)),s(e.url||e.preview),i(!0),c(e.name||e.url.substring(e.url.lastIndexOf("/")+1))},onChange:e=>{let{file:l,fileList:n}=e;console.log(n,"change"),t(n),a(n),m(n)},onRemove:async e=>{},beforeUpload:()=>!1,children:u.length>=8?null:p}),(0,v.jsx)(I.Z,{open:r,title:o,footer:null,onCancel:()=>i(!1),children:(0,v.jsx)("img",{alt:"example",style:{width:"100%"},src:d})})]})};var S=a(2569);const A=(0,n.memo)((e=>{const{title:t,type:a,editId:l,dialogClose:r,dialogConfrim:i}=e,[d]=o.Z.useForm(),[s,u]=(0,n.useState)([]),[m,h]=(0,n.useState)([]),[g,x]=(0,n.useState)([]),[b,f]=(0,n.useState)([]),[y,j]=(0,n.useState)([]),Z=async e=>{const t=new FormData;e.forEach((e=>{t.append("img",e.originFileObj)}));const{data:a}=await p.uploadProductBanner(t);return a},w=async(e,t)=>{let a=[];if(e.length){let t=e.filter((e=>!e.url)),l=e.filter((e=>e.url));if(t.length){a=(await Z(t)).map((e=>({url:e})))}a=[...a,...l]}else a=t;return a.map((e=>e.url))},C=e=>e?e.map((e=>({url:e}))):[];return(0,n.useEffect)((()=>{(async()=>{const{code:e,data:t}=await(0,S.getLabelList)();0===e&&j([...t])})(),(async()=>{if("edit"===a&&l){const{code:a,data:n}=await p.getProductById(l);var e,t;0===a&&(d.setFieldsValue({...n}),x(C(null===n||void 0===n||null===(e=n.banner_path)||void 0===e?void 0:e.split(","))),f(C(null===n||void 0===n||null===(t=n.detail_path)||void 0===t?void 0:t.split(","))))}})()}),[]),(0,v.jsx)(q,{children:(0,v.jsx)(I.Z,{title:t,open:!0,onCancel:r,onOk:()=>d.submit(),children:(0,v.jsxs)(o.Z,{autoComplete:"off",form:d,labelCol:{span:6},onFinish:async e=>{if(console.log(e,"fromdata"),"add"===a){const t=await Z(s),a=await Z(m),l={...e,banner_path:t.join(","),detail_path:a.join(",")};i(l,"add")}else{let t=await w(s,g),a=await w(m,b);const n={...e,id:l,banner_path:t.join(","),detail_path:a.join(",")};i(n,"edit")}},children:[(0,v.jsx)(o.Z.Item,{label:"\u6807\u9898",name:"title",validateTrigger:"onBlur",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5fc5\u586b\u9879"}],children:(0,v.jsx)(c.Z,{placeholder:"\u8bf7\u8f93\u5165"})}),(0,v.jsx)(o.Z.Item,{label:"\u526f\u6807\u9898",name:"subtitle",validateTrigger:"onBlur",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5fc5\u586b\u9879"}],children:(0,v.jsx)(c.Z,{placeholder:"\u8bf7\u8f93\u5165"})}),(0,v.jsx)(o.Z.Item,{label:"\u8fd0\u8d39",name:"freight",validateTrigger:"onBlur",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5fc5\u586b\u9879"}],children:(0,v.jsx)(P.Z,{min:0,style:{width:"100%"},prefix:"\uffe5"})}),(0,v.jsx)(o.Z.Item,{label:"\u5f53\u524d\u4ef7\u683c",name:"current_price",validateTrigger:"onBlur",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5fc5\u586b\u9879"}],children:(0,v.jsx)(P.Z,{min:0,style:{width:"100%"},prefix:"\uffe5"})}),(0,v.jsx)(o.Z.Item,{label:"\u4e4b\u524d\u4ef7\u683c",name:"previous_price",validateTrigger:"onBlur",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5fc5\u586b\u9879"}],children:(0,v.jsx)(P.Z,{min:0,style:{width:"100%"},prefix:"\uffe5"})}),(0,v.jsx)(o.Z.Item,{label:"\u6240\u5c5e\u5206\u7c7b",name:"label_id",validateTrigger:"onBlur",rules:[{required:!0,message:"\u8bf7\u9009\u62e9"}],children:(0,v.jsx)(k.Z,{fieldNames:{label:"name",value:"id"},placeholder:"\u8bf7\u9009\u62e9",options:y})}),(0,v.jsx)(o.Z.Item,{rules:[{required:!0,message:"\u5fc5\u586b\u9879"}],label:"\u5546\u54c1banner\u56fe",name:"banner_path",children:(0,v.jsx)(B,{setPath:u,imgList:g})}),(0,v.jsx)(o.Z.Item,{rules:[{required:!0,message:"\u5fc5\u586b\u9879"}],label:"\u5546\u54c1\u8be6\u60c5\u56fe",name:"detail_path",children:(0,v.jsx)(B,{setPath:h,imgList:b})})]})})})}));A.defaultProps={title:"\u65b0\u589e"};const L=A;var F=a(3262);const{RangePicker:T}=s.default,E=(0,n.memo)((()=>{const[e,t]=(0,n.useState)([]),[a]=o.Z.useForm(),[l,r]=(0,n.useState)(!1),[i,s]=(0,n.useState)(0),[h,g]=(0,n.useState)(!1),[x,b]=(0,n.useState)(0),f=(0,n.useRef)({page:1,row:10}),[y,j]=(0,n.useState)("add"),[w,I]=(0,n.useState)(0),P=async e=>{try{g(!0);const a=e?{...f.current,...e}:{...f.current},{data:l,total:n}=await(0,p.getProductList)(a);g(!1);const r=l.map((e=>(e.key=e.id,e)));s(n),t(r)}catch(a){console.log(a)}};(0,n.useEffect)((()=>{P();const e=(0,F.W)();b(e)}),[]);const k=(0,n.useCallback)((async(e,t)=>{console.log(e);const a="add"===t?"addProduct":"editProduct",{code:l}=await p[a](e);0===l&&(window.$msg.success("\u6dfb\u52a0\u6210\u529f\uff5e"),P(),r(!1))}),[]),q={total:i,showTotal:e=>"\u5171 ".concat(e," \u9875"),onChange:(e,t)=>{f.current={page:e,row:t},P()}};return(0,v.jsxs)(d,{children:[(0,v.jsx)("div",{className:"query basic",children:(0,v.jsxs)(o.Z,{autoComplete:"off",form:a,layout:"inline",children:[(0,v.jsx)(o.Z.Item,{label:"\u6807\u9898",name:"name",children:(0,v.jsx)(c.Z,{placeholder:"\u8bf7\u8f93\u5165\u5546\u54c1\u6807\u9898"})}),(0,v.jsxs)(o.Z.Item,{children:[(0,v.jsx)(u.ZP,{type:"primary",style:{marginRight:"10px"},onClick:()=>{const{name:e}=a.getFieldValue();P({title:e})},children:"\u67e5\u8be2"}),(0,v.jsx)(u.ZP,{onClick:()=>{a.resetFields(),P()},children:"\u91cd\u7f6e"})]})]})}),(0,v.jsxs)("div",{className:"table basic",children:[(0,v.jsx)("div",{className:"actions",children:(0,v.jsx)(u.ZP,{type:"primary",onClick:()=>{j("add"),r(!0)},children:"\u65b0\u589e"})}),(0,v.jsx)(m.Z,{bordered:!0,columns:Z({handleDelete:async e=>{let{id:t}=e;const{code:a}=await p.deleteProductById(t);0===a&&(window.$msg.success("\u64cd\u4f5c\u6210\u529f\uff5e"),P())},handleEdit:e=>{let{id:t}=e;I(t),j("edit"),r(!0)}}),dataSource:e,pagination:q,scroll:{y:x,x:1600},loading:h})]}),l&&(0,v.jsx)(L,{dialogClose:e=>{r(!1)},dialogConfrim:k,type:y,editId:w})]})}))}}]);
//# sourceMappingURL=132.35f71892.chunk.js.map