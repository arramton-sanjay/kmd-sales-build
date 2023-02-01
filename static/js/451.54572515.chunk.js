"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[451],{1451:function(e,t,n){n.r(t),n.d(t,{default:function(){return me}});var a=n(2791),i=n(586),r=n(3388),o=n(5529),l=n(1087),s=n(7689),c=n(8935),d=n(7309),u=n(184);function f(){return(0,u.jsx)(c.ZP,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:(0,u.jsx)(l.rU,{to:"/",children:(0,u.jsx)(d.Z,{type:"primary",children:"Back Home"})})})}var p=n(7063),h=n(3433),m=n(1413),x=n(9439),Z=n(2339),j=n(8302),v=n(4260),y=n(7615),g=n(6106),b=n(914),T=n(458),w=n(1717),k=n(9998),C=n(4215),S=n(5671),D=n(3144),I=n(7205),R=function(){function e(){(0,S.Z)(this,e)}return(0,D.Z)(e,null,[{key:"list",value:function(e){return I.Z.get(this.baseURL+"/list",{params:e})}},{key:"detail",value:function(e,t){return I.Z.get(this.baseURL+"/details/"+e,{params:t})}},{key:"save",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return I.Z.post(this.baseURL+"/save",e,{params:t})}},{key:"updateRemarks",value:function(e){return I.Z.post(this.baseURL+"/update-remarks",e)}},{key:"delete",value:function(e){return I.Z.post(this.baseURL+"/delete",{ids:e})}},{key:"saveFromCSVUrl",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return I.Z.post(this.baseURL+"/csv-upload",e,{params:t})}},{key:"checkPrevTransation",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return I.Z.post(this.baseURL+"/check-prev-transation",e,{params:t})}},{key:"listBillReport",value:function(e){return I.Z.get(this.baseURL+"/list-report",{params:e})}},{key:"listLedger",value:function(e){return I.Z.get(this.baseURL+"/list-ledger",{params:e})}}]),e}();R.baseURL="transation";var A=function(){function e(){(0,S.Z)(this,e)}return(0,D.Z)(e,null,[{key:"list",value:function(e){return I.Z.get(this.baseURL+"/list",{params:e})}},{key:"detail",value:function(e,t){return I.Z.get(this.baseURL+"/details/"+e,{params:t})}},{key:"save",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return I.Z.post(this.baseURL+"/save",e,{params:t})}},{key:"delete",value:function(e){return I.Z.post(this.baseURL+"/delete",{ids:e})}}]),e}();A.baseURL="account";var Y=n(4099);function F(e){var t=e.qData,n=e.setQData;return(0,u.jsx)(u.Fragment,{children:t.total>0?(0,u.jsx)(Y.Z,{total:t.total,showTotal:function(){var e=(t.page-1)*t.limit*1+1,n=t.page*t.limit;return(0,u.jsx)(Z.Z,{children:"Showing "+e+" - "+n+" out of "+t.total})},pageSize:t.limit,current:t.page,onChange:function(e,a){t.limit!==a?n((0,m.Z)((0,m.Z)({},t),{},{page:1,limit:a})):n((0,m.Z)((0,m.Z)({},t),{},{page:e}))},showSizeChanger:!0}):null})}var N=n(2426),M=n.n(N),L=n(7027);function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";e&&("success"===t&&L.ZP.success(e),"error"===t&&L.ZP.error(e),"warning"===t&&L.ZP.warning(e))}var E=n(5820),B=n(43),U=n(9389),q=n(2622),O=n(1752),z=n(9286),P=n(7106),H=n(7892),Q=n.n(H);function W(e){var t=e.accountId,n=void 0===t?null:t,i=(0,a.useState)([]),r=(0,x.Z)(i,2),o=r[0],l=r[1],s=(0,a.useState)(!1),c=(0,x.Z)(s,2),f=c[0],p=c[1],h=(0,a.useState)([]),y=(0,x.Z)(h,2),g=y[0],b=y[1],T=(0,a.useState)({page:1,limit:20,accountId:n}),w=(0,x.Z)(T,2),k=w[0],C=w[1],S=(0,a.useRef)(),D=[{title:"#",width:40,render:function(e,t,n){return(0,u.jsx)("b",{children:n+1})}},{title:"Date",dataIndex:"date",render:function(e){return M()(e).format("DD MMM YYYY")}},{title:"Bill Number",dataIndex:"billNumber",width:150},{title:"Debit",dataIndex:"amount",width:150,render:function(e,t){return"debit"===t.transactionType?e.toFixed(2):""}},{title:"Credit",dataIndex:"amount",width:150,render:function(e,t){return"credit"===t.transactionType?e.toFixed(2):""}},{title:"Balance",dataIndex:"previousCreditAmount",width:150,render:function(e,t){var n=(-1*(t.previousCreditAmount-t.previousDebitAmount)).toFixed(2);return n>20?(0,u.jsx)(Z.Z,{color:"red",children:(0,u.jsx)("b",{children:n})}):n<-20?(0,u.jsx)(Z.Z,{color:"blue",children:(0,u.jsx)("b",{children:n})}):(0,u.jsx)(Z.Z,{color:"green",children:(0,u.jsx)("b",{children:n})})}},{title:"Ledger",dataIndex:"accountRecievable",width:150,render:function(e,t){return"debit"===t.transactionType?"Sale":e}},{title:"Action",dataIndex:"_id",width:70,render:function(e,t){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(E.Z,{title:"Are you sure to delete this data?",onConfirm:function(){A(t._id)},okText:"Yes",cancelText:"No",children:[(0,u.jsx)(d.Z,{type:"primary",size:"small",danger:!0,icon:(0,u.jsx)(q.Z,{})}),"\xa0"]}),(0,u.jsx)(d.Z,{type:"primary",size:"small",icon:(0,u.jsx)(O.Z,{}),onClick:function(){S.current.openForm(t._id)}})]})}}].filter((function(e){return!e.hidden}));function I(){p(!0),R.listLedger(k).then((function(e){var t;l(null===(t=e.data)||void 0===t?void 0:t.map((function(e){return(0,m.Z)((0,m.Z)({},e),{},{key:e._id})}))),C((0,m.Z)((0,m.Z)({},k),{},{limit:e.extra.limit,page:e.extra.page,total:e.extra.total}))})).catch((function(e){})).finally((function(){p(!1)}))}var A=function(e){R.delete(e).then((function(e){_(e.message),I(),b([])})).catch((function(e){_(e.message,"error")}))},Y=D.map((function(e){return(0,m.Z)((0,m.Z)({},e),{},{ellipsis:!1})}));Y[0].fixed=!0,Y[Y.length-1].fixed="right";var N={bordered:!0,loading:f,title:function(){return(0,u.jsx)(V,{addNewModalRef:S,selected:g,deleteData:A,qData:k,setQData:C,list:I})},size:"small",showHeader:!0,footer:function(){return(0,u.jsx)(F,{qData:k,setQData:C})},rowSelection:{onChange:function(e){b(e)}},tableLayout:void 0};return(0,a.useEffect)((function(){I()}),[k.page,k.limit]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(j.Z.Title,{level:5,style:{margin:0},children:"List of  Transactions"}),(0,u.jsx)(v.Z,(0,m.Z)((0,m.Z)({},N),{},{pagination:{position:["none"],pageSize:k.limit},columns:Y,dataSource:o.length?o:[],scroll:{y:"calc(100vh - 340px)",x:"calc(100vw - 387px)"}})),(0,u.jsx)(G,{ref:S,list:I,accountId:n})]})}function V(e){var t=e.addNewModalRef,n=e.selected,a=e.deleteData,i=e.qData,r=e.setQData,o=e.list;return(0,u.jsx)(y.Z,{onSubmitCapture:o,className:"search-form",children:(0,u.jsxs)(g.Z,{gutter:[12,2],children:[(0,u.jsx)(b.Z,{span:4,children:(0,u.jsx)(y.Z.Item,{style:{marginBottom:0},children:(0,u.jsx)(w.Z.RangePicker,{format:"DD MMM YYYY",onChange:function(e){r((0,m.Z)((0,m.Z)({},i),{},{startTime:null!==e&&void 0!==e&&e[0]?new Date(null===e||void 0===e?void 0:e[0]):null,endTime:null!==e&&void 0!==e&&e[1]?new Date(null===e||void 0===e?void 0:e[1]):null}))}})})}),(0,u.jsx)(b.Z,{span:3,children:(0,u.jsx)(y.Z.Item,{style:{marginBottom:0},children:(0,u.jsx)(d.Z,{type:"primary",htmlType:"submit",children:"Search"})})}),(0,u.jsxs)(b.Z,{span:10,children:[(0,u.jsx)(y.Z.Item,{style:{marginBottom:0,float:"right"},children:(0,u.jsx)(d.Z,{type:"primary",icon:(0,u.jsx)(z.Z,{}),onClick:function(){t.current.openForm()},children:"Add New"})}),n.length?(0,u.jsx)(E.Z,{title:"Are you sure to delete these selected data?",onConfirm:function(){a(n)},okText:"Yes",cancelText:"No",children:(0,u.jsx)(d.Z,{type:"primary",danger:!0,style:{float:"right"},icon:(0,u.jsx)(q.Z,{}),children:"Delete Selected"})}):null]})]})})}var G=(0,a.forwardRef)((function(e,t){var n=e.list,i=e.accountId,r=(0,a.useState)(!1),o=(0,x.Z)(r,2),l=o[0],s=o[1],c=(0,a.useState)({aspect:1}),f=(0,x.Z)(c,2),p=f[0],h=f[1],Z=(0,a.useState)(!1),j=(0,x.Z)(Z,2),v=j[0],C=j[1],S=function(e){Object.entries(e).forEach((function(e){for(var t=p,n=e[0],a=e[1],i=n.split("."),r=0;r<i.length;r++)r+1===i.length?t[i[r]]=a:("undefined"===typeof t[i[r]]&&(1*parseInt(i[r+1])>=0?t[i[r]]=[]:t[i[r]]={}),t=t[i[r]])})),h((0,m.Z)({},p))};(0,a.useImperativeHandle)(t,(function(){return{openForm:function(e){s(!0),h(e?{_id:e}:{accountId:i,date:new Date})}}}));var D=function(){C(!0),R.save(p).then((function(e){_(e.message),S((0,m.Z)({},e.data)),n(),s(!1)})).catch((function(e){"object"===typeof e.message?_(e.message[Object.keys(e.message)[0]],"error"):_(e.message,"error")})).finally((function(){C(!1)}))};return(0,a.useEffect)((function(){p._id&&(C(!0),R.detail(p._id).then((function(e){console.log(e.data),h(e.data||{})})).catch((function(e){_(e.message,"error")})).finally((function(){C(!1)})))}),[p._id,l]),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(k.Z,{title:(p._id?"Edit":"Add")+" Transaction Data",style:{top:20},open:l,okText:"Save",onOk:D,okButtonProps:{disabled:v},onCancel:function(){s(!1)},maskClosable:!1,width:500,className:"app-modal-body-overflow",footer:[(0,u.jsx)(d.Z,{onClick:function(){s(!1)},children:"Cancel"},"cancel"),(0,u.jsx)(d.Z,{type:"primary",onClick:D,children:"Save"},"save")],children:(0,u.jsx)(B.Z,{spinning:v,indicator:(0,u.jsx)(P.Z,{style:{fontSize:24},spin:!0}),children:(0,u.jsx)(y.Z,{layout:"vertical",children:(0,u.jsxs)(g.Z,{gutter:[0,2],children:[(0,u.jsx)(b.Z,{span:24,children:(0,u.jsx)(y.Z.Item,{label:"Transaction Type",required:!0,children:(0,u.jsxs)(T.Z,{value:p.transactionType,onChange:function(e){S({transactionType:e})},children:[(0,u.jsx)(T.Z.Option,{value:"credit",children:"Bill"}),(0,u.jsx)(T.Z.Option,{value:"debit",children:"Sell"})]})})}),(0,u.jsx)(b.Z,{span:24,children:(0,u.jsx)(y.Z.Item,{label:"Amount",required:!0,children:(0,u.jsx)(U.Z,{placeholder:"Enter Amount",type:"number",min:0,value:p.amount,onChange:function(e){return S({amount:e.target.value})}})})}),(0,u.jsx)(b.Z,{span:24,children:(0,u.jsx)(y.Z.Item,{label:"Bill Number",required:!0,children:(0,u.jsx)(U.Z,{placeholder:"Enter bill number",value:p.billNumber,onChange:function(e){return S({billNumber:e.target.value})}})})}),"credit"===p.transactionType?(0,u.jsx)(b.Z,{span:24,children:(0,u.jsx)(y.Z.Item,{label:"Account Recievable",required:!0,children:(0,u.jsx)(U.Z,{value:p.accountRecievable,onChange:function(e){return S({accountRecievable:e.target.value})}})})}):null,"debit"===p.transactionType?(0,u.jsx)(b.Z,{span:24,children:(0,u.jsx)(y.Z.Item,{label:"Type",required:!0,children:(0,u.jsx)(U.Z,{placeholder:"Enter your type",value:p.type,onChange:function(e){return S({type:e.target.value})}})})}):null,(0,u.jsx)(b.Z,{span:24,children:(0,u.jsx)(y.Z.Item,{label:"Date",required:!0,children:(0,u.jsx)(w.Z,{format:"DD MMM YYYY",onChange:function(e){S({date:new Date(e)})},value:Q()(M()(p.date).format("YYYY-MM-DD"),"YYYY-MM-DD"),className:"w-100"})})})]})})})})})}));function J(e){var t=e.transactionType,n=void 0===t?"credit":t,i=e.dataType,r=(0,a.useState)([]),o=(0,x.Z)(r,2),l=o[0],s=o[1],c=(0,a.useState)(!1),f=(0,x.Z)(c,2),p=f[0],y=f[1],g=(0,a.useState)([]),b=(0,x.Z)(g,2),T=b[0],w=b[1],k=(0,a.useState)({page:1,limit:20,transactionType:n,dataType:i}),S=(0,x.Z)(k,2),D=S[0],I=S[1],Y=(0,a.useRef)(),N=(0,a.useRef)(),L=[{title:"#",width:40,render:function(e,t,n){return(0,u.jsx)("b",{children:n+1})}},{title:"Account Name",dataIndex:"accountDetails",render:function(e){return null===e||void 0===e?void 0:e.name}},{title:"Date",dataIndex:"date",width:150,render:function(e){return M()(e).format("DD MMM YYYY")}},{title:"Bill Number",dataIndex:"billNumber",width:150},{title:"sale"===i?"Sale Amount":"Bill Amount",dataIndex:"amount",width:150,render:function(e){return(0,u.jsx)("b",{children:e.toFixed(2)})}},{title:"sale"===i?"Amount Received":"Sale Amount",dataIndex:"previousCreditTransactions",width:150,render:function(e){return(null===e||void 0===e?void 0:e.reduce((function(e,t){return e+t.amount}),0)).toFixed(2)}},{title:"Difference",dataIndex:"previousCreditTransactions",width:150,render:function(e,t){return(t.amount-(null===e||void 0===e?void 0:e.reduce((function(e,t){return e+t.amount}),0))).toFixed(2)}},{title:"Balance",dataIndex:"balance",width:150,render:function(e,t){var n=-1*e.toFixed(2);return n>20?(0,u.jsx)(Z.Z,{color:"red",children:(0,u.jsx)("b",{children:n})}):n<-20?(0,u.jsx)(Z.Z,{color:"blue",children:(0,u.jsx)("b",{children:n})}):(0,u.jsx)(Z.Z,{color:"green",children:(0,u.jsx)("b",{children:n})})}},{title:"Remorks",dataIndex:"_id",width:300,render:function(e,t){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(j.Z.Paragraph,{style:{marginBottom:"0px"},editable:{tooltip:"Click to edit remarks",onChange:function(e){try{R.updateRemarks({_id:t._id,comment:e}).then((function(n){_("Remarks updated"),s(l.map((function(n){return n._id===t._id?(0,m.Z)((0,m.Z)({},n),{},{comment:e}):n})))}))}catch(n){}}},children:t.comment})})}},{title:"Ledger",dataIndex:"_id",width:80,render:function(e,t){return(0,u.jsx)(d.Z,{type:"primary",size:"small",icon:(0,u.jsx)(C.Z,{}),onClick:function(){N.current.openForm(t.accountId)}})}}].filter((function(e){return!e.hidden}));function E(){y(!0),R.listBillReport(D).then((function(e){var t;s(null===(t=e.data)||void 0===t?void 0:t.map((function(e,t){return(0,m.Z)((0,m.Z)({},e),{},{key:e.accountId+t})}))),I((0,m.Z)((0,m.Z)({},D),{},{limit:e.extra.limit,page:e.extra.page,total:e.extra.total}))})).catch((function(e){})).finally((function(){y(!1)}))}var B=function(e){R.delete(e).then((function(e){_(e.message),E()})).catch((function(e){_(e.message,"error")}))},U=L.map((function(e){return(0,m.Z)((0,m.Z)({},e),{},{ellipsis:!1})}));U[0].fixed=!0,U[U.length-1].fixed="right";var q={bordered:!0,loading:p,size:"small",title:function(){return(0,u.jsx)(K,{addNewModalRef:Y,deleteData:B,qData:D,setQData:I,list:E,accounts:T})},showHeader:!0,footer:function(){return(0,u.jsx)(F,{qData:D,setQData:I})},tableLayout:void 0};return(0,a.useEffect)((function(){E()}),[D.page,D.limit,D.transactionType,D.dataType]),(0,a.useEffect)((function(){I((0,m.Z)((0,m.Z)({},D),{},{transactionType:n,dataType:i}))}),[n,i]),(0,a.useEffect)((function(){A.list({isAll:1,dataType:i}).then((function(e){w(e.data)})).catch((function(e){"object"===typeof e.message?_(e.message[Object.keys(e.message)[0]],"error"):_(e.message,"error")}))}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(j.Z.Title,{level:5,style:{margin:0},children:"List of Transactions"}),(0,u.jsx)(v.Z,(0,m.Z)((0,m.Z)({},q),{},{pagination:{position:["none"],pageSize:D.limit},columns:U,dataSource:l.length?l:[],scroll:{y:"calc(100vh - 340px)",x:"calc(100vw - 387px)"},expandable:{rowExpandable:function(e){return!0},expandedRowRender:function(e){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{style:{display:"flex",flexDirection:"row-reverse"},children:(0,u.jsx)(v.Z,{bordered:!0,pagination:!1,size:"small",dataSource:[].concat((0,h.Z)(e.previousCreditTransactions),[{date:"Total",transactionType:"total",key:"iiii"}]),columns:[{title:"Date",dataIndex:"date",align:"left",width:200,render:function(e){return"Total"!==e?M()(e).format("DD MMM YYYY"):(0,u.jsx)("b",{children:"Total"})}},{title:"Bill",dataIndex:"amount",width:100,align:"right",render:function(t,n){return["credit","debit"].includes(n.transactionType)?t.toFixed(2):"Total"===n.date?(0,u.jsx)("b",{children:(null===(a=e.previousCreditTransactions)||void 0===a?void 0:a.reduce((function(e,t){return e+t.amount}),0)).toFixed(2)}):void 0;var a}},{title:"Account",dataIndex:"accountRecievable",align:"left",width:200,render:function(e){return"sale"===i?e:"Sale"}}]})})})}}})),(0,u.jsx)(X,{ref:Y,list:E,accounts:T}),(0,u.jsx)($,{ref:N})]})}function K(e){e.addNewModalRef;var t=e.qData,n=e.setQData,a=e.list,i=e.accounts;return(0,u.jsx)(y.Z,{onSubmitCapture:a,className:"search-form",children:(0,u.jsxs)(g.Z,{gutter:[12,2],children:[(0,u.jsx)(b.Z,{span:4,children:(0,u.jsx)(y.Z.Item,{style:{marginBottom:0},children:(0,u.jsx)(T.Z,{placeholder:"Choose a account",showSearch:!0,value:t.accountId,onChange:function(e){n((0,m.Z)((0,m.Z)({},t),{},{accountId:e}))},allowClear:!0,optionFilterProp:"children",filterOption:function(e,t){var n;return(null!==(n=null===t||void 0===t?void 0:t.label)&&void 0!==n?n:"").toLowerCase().includes(e.toLowerCase())},options:null===i||void 0===i?void 0:i.map((function(e){return{label:e.name,value:e._id}}))})})}),(0,u.jsx)(b.Z,{span:4,children:(0,u.jsx)(y.Z.Item,{style:{marginBottom:0},children:(0,u.jsx)(w.Z.RangePicker,{format:"DD MMM YYYY",onChange:function(e){n((0,m.Z)((0,m.Z)({},t),{},{startDate:null!==e&&void 0!==e&&e[0]?new Date(null===e||void 0===e?void 0:e[0]):null,endDate:null!==e&&void 0!==e&&e[1]?new Date(null===e||void 0===e?void 0:e[1]):null}))}})})}),(0,u.jsx)(b.Z,{span:3,children:(0,u.jsx)(y.Z.Item,{style:{marginBottom:0},children:(0,u.jsx)(d.Z,{type:"primary",htmlType:"submit",onClick:function(e){console.log("clicked",t)},children:"Search"})})}),(0,u.jsx)(b.Z,{span:10})]})})}var X=(0,a.forwardRef)((function(e,t){var n=(0,a.useState)(!1),i=(0,x.Z)(n,2),r=i[0],o=i[1];return(0,a.useImperativeHandle)(t,(function(){return{openForm:function(e){o(!0)}}})),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(k.Z,{title:"Report Details",style:{top:20},open:r,okText:"Save",onCancel:function(){o(!1)},maskClosable:!1,width:400,className:"app-modal-body-overflow",footer:null})})})),$=(0,a.forwardRef)((function(e,t){var n=(0,a.useState)(!1),i=(0,x.Z)(n,2),r=i[0],o=i[1],l=(0,a.useState)({aspect:1}),s=(0,x.Z)(l,2),c=s[0],d=s[1];return(0,a.useImperativeHandle)(t,(function(){return{openForm:function(e){o(!0),d(e)}}})),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(k.Z,{style:{top:20},open:r,okText:"Save",onCancel:function(){o(!1)},maskClosable:!1,width:1600,destroyOnClose:!0,className:"app-modal-body-overflow",footer:null,children:(0,u.jsx)(W,{accountId:c})})})}));function ee(e){var t=e.dataType,n=void 0===t?"sale":t,i=(0,a.useState)([]),r=(0,x.Z)(i,2),o=r[0],l=r[1],s=(0,a.useState)(!1),c=(0,x.Z)(s,2),f=c[0],p=c[1],h=(0,a.useState)([]),y=(0,x.Z)(h,2),g=y[0],b=y[1],T=(0,a.useState)({page:1,limit:20,dataType:n}),w=(0,x.Z)(T,2),k=w[0],S=w[1],D=(0,a.useRef)(),I=(0,a.useRef)(),R=[{title:"#",width:44,render:function(e,t,n){return(0,u.jsx)("b",{children:n+1})}},{title:"Name",dataIndex:"name"},{title:"Initial Amount",dataIndex:"initialAmount",width:150},{title:"Status",dataIndex:"status",width:80,render:function(e,t){return"opened"===t.status?(0,u.jsx)(Z.Z,{color:"green",children:"Opened"}):(0,u.jsx)(Z.Z,{color:"red",children:"Closed"})}},{title:"Action",dataIndex:"_id",width:110,render:function(e,t){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(E.Z,{title:"Are you sure to delete this Account data?",onConfirm:function(){N(t._id)},okText:"Yes",cancelText:"No",children:[(0,u.jsx)(d.Z,{type:"primary",size:"small",danger:!0,icon:(0,u.jsx)(q.Z,{})}),"\xa0"]}),(0,u.jsx)(d.Z,{type:"primary",size:"small",icon:(0,u.jsx)(O.Z,{}),onClick:function(){D.current.openForm(t._id)},style:{marginRight:"4px"}}),(0,u.jsx)(d.Z,{type:"primary",size:"small",icon:(0,u.jsx)(C.Z,{}),onClick:function(){I.current.openForm(t._id)}})]})}}].filter((function(e){return!e.hidden}));function Y(){p(!0),A.list(k).then((function(e){var t;l(null===(t=e.data)||void 0===t?void 0:t.map((function(e){return(0,m.Z)((0,m.Z)({},e),{},{key:e._id})}))),S((0,m.Z)((0,m.Z)({},k),{},{limit:e.extra.limit,page:e.extra.page,total:e.extra.total}))})).catch((function(e){})).finally((function(){p(!1)}))}var N=function(e){A.delete(e).then((function(e){_(e.message),Y(),b([])})).catch((function(e){_(e.message,"error")}))},M=R.map((function(e){return(0,m.Z)((0,m.Z)({},e),{},{ellipsis:!1})}));M[0].fixed=!0,M[M.length-1].fixed="right";var L={bordered:!0,loading:f,size:"small",title:function(){return(0,u.jsx)(te,{addNewModalRef:D,selected:g,deleteData:N,qData:k,setQData:S,list:Y})},showHeader:!0,footer:function(){return(0,u.jsx)(F,{qData:k,setQData:S})},rowSelection:{onChange:function(e){b(e)}},tableLayout:void 0};return(0,a.useEffect)((function(){Y()}),[k.page,k.limit]),(0,a.useEffect)((function(){S((0,m.Z)((0,m.Z)({},k),{},{dataType:n}))}),[n]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(j.Z.Title,{level:5,style:{margin:0},children:"List of  Accounts"}),(0,u.jsx)(v.Z,(0,m.Z)((0,m.Z)({},L),{},{pagination:{position:["none"],pageSize:k.limit},columns:M,dataSource:o.length?o:[],scroll:{y:"calc(100vh - 340px)",x:"calc(100vw - 387px)"}})),(0,u.jsx)(ne,{ref:D,list:Y,dataType:n}),(0,u.jsx)(ae,{ref:I})]})}function te(e){var t=e.addNewModalRef,n=e.selected,a=e.deleteData,i=e.qData,r=e.setQData,o=e.list;return(0,u.jsx)(y.Z,{onSubmitCapture:o,className:"search-form",children:(0,u.jsxs)(g.Z,{gutter:[12,2],children:[(0,u.jsx)(b.Z,{span:4,children:(0,u.jsx)(y.Z.Item,{style:{marginBottom:0},children:(0,u.jsx)(U.Z,{placeholder:"Search by name",onChange:function(e){r((0,m.Z)((0,m.Z)({},i),{},{key:e.target.value}))}})})}),(0,u.jsx)(b.Z,{span:3,children:(0,u.jsx)(y.Z.Item,{style:{marginBottom:0},children:(0,u.jsx)(d.Z,{type:"primary",htmlType:"submit",children:"Search"})})}),(0,u.jsxs)(b.Z,{span:5,children:[(0,u.jsx)(y.Z.Item,{style:{marginBottom:0,float:"right"},children:(0,u.jsx)(d.Z,{type:"primary",icon:(0,u.jsx)(z.Z,{}),onClick:function(){t.current.openForm()},children:"Add New"})}),n.length?(0,u.jsx)(E.Z,{title:"Are you sure to delete these selected Data?",onConfirm:function(){a(n)},okText:"Yes",cancelText:"No",children:(0,u.jsx)(d.Z,{type:"primary",danger:!0,style:{float:"right"},icon:(0,u.jsx)(q.Z,{}),children:"Delete Selected"})}):null]})]})})}var ne=(0,a.forwardRef)((function(e,t){var n=e.list,i=e.dataType,r=(0,a.useState)(!1),o=(0,x.Z)(r,2),l=o[0],s=o[1],c=(0,a.useState)({aspect:1}),f=(0,x.Z)(c,2),p=f[0],h=f[1],Z=(0,a.useState)(!1),j=(0,x.Z)(Z,2),v=j[0],w=j[1],C=function(e){h((0,m.Z)((0,m.Z)({},p),e))};(0,a.useImperativeHandle)(t,(function(){return{openForm:function(e){s(!0),h(e?{_id:e}:{status:!0})}}}));var S=function(){w(!0),A.save(p,{dataType:i}).then((function(e){_(e.message),C((0,m.Z)({},e.data)),n()})).catch((function(e){"object"===typeof e.message?_(e.message[Object.keys(e.message)[0]],"error"):_(e.message,"error")})).finally((function(){w(!1)}))};return(0,a.useEffect)((function(){p._id&&(w(!0),A.detail(p._id).then((function(e){h(e.data||{})})).catch((function(e){_(e.message,"error")})).finally((function(){w(!1)})))}),[p._id]),(0,a.useEffect)((function(){l||h({_id:null})}),[l]),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(k.Z,{title:(p._id?"Edit":"Add")+" Account Data",style:{top:20},open:l,okText:"Save",onOk:S,okButtonProps:{disabled:v},onCancel:function(){s(!1)},destroyOnClose:!0,maskClosable:!1,width:600,className:"app-modal-body-overflow",footer:[(0,u.jsx)(d.Z,{onClick:function(){s(!1)},children:"Cancel"},"cancel"),(0,u.jsx)(d.Z,{type:"primary",onClick:S,children:"Save"},"save")],children:(0,u.jsx)(B.Z,{spinning:v,indicator:(0,u.jsx)(P.Z,{style:{fontSize:24},spin:!0}),children:(0,u.jsx)(y.Z,{layout:"vertical",children:(0,u.jsxs)(g.Z,{gutter:[0,2],children:[(0,u.jsx)(b.Z,{span:24,children:(0,u.jsx)(y.Z.Item,{label:"Name",required:!0,children:(0,u.jsx)(U.Z,{placeholder:"Enter Name",value:p.name,onChange:function(e){return C({name:e.target.value})}})})}),(0,u.jsx)(b.Z,{span:24,children:(0,u.jsx)(y.Z.Item,{label:"Initial Amount",required:!0,children:(0,u.jsx)(U.Z,{type:"number",defaultValue:0,value:p.initialAmount,onChange:function(e){return C({initialAmount:e.target.value})}})})}),(0,u.jsx)(b.Z,{span:24,children:(0,u.jsx)(y.Z.Item,{label:"Status",required:!0,children:(0,u.jsxs)(T.Z,{value:p.status,onChange:function(e){C({status:e})},children:[(0,u.jsx)(T.Z.Option,{value:"opened",children:"Opened"}),(0,u.jsx)(T.Z.Option,{value:"closed",children:"Closed"})]})})})]})})})})})})),ae=(0,a.forwardRef)((function(e,t){var n=(0,a.useState)(!1),i=(0,x.Z)(n,2),r=i[0],o=i[1],l=(0,a.useState)({aspect:1}),s=(0,x.Z)(l,2),c=s[0],d=s[1];return(0,a.useImperativeHandle)(t,(function(){return{openForm:function(e){o(!0),d(e)}}})),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(k.Z,{style:{top:20},open:r,okText:"Save",onCancel:function(){o(!1)},maskClosable:!1,width:1600,destroyOnClose:!0,className:"app-modal-body-overflow",footer:null,children:(0,u.jsx)(W,{accountId:c})})})})),ie=n(2351),re=n(187),oe=n(4165),le=n(5861),se=n(5518),ce=function(){function e(){(0,S.Z)(this,e)}return(0,D.Z)(e,null,[{key:"get",value:function(e){return I.Z.get("../"+e)}},{key:"save",value:function(e,t){return I.Z.post(this.baseURL+"/save",e,t)}},{key:"remove",value:function(e){return I.Z.post(this.baseURL+"/remove",e)}}]),e}();function de(e){var t=e.fileList,n=e.setFileList,a=e.count,i=void 0===a?1:a,r=e.disabled,o=void 0!==r&&r,l=function(){var e=(0,le.Z)((0,oe.Z)().mark((function e(a){var i,r,o,l,s,c;return(0,oe.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=a.onSuccess,r=a.onError,o=a.file,l=a.onProgress,s=new FormData,c={onUploadProgress:function(e){l({percent:e.loaded/e.total*100})}},s.append("file",o);try{ce.save(s,c).then((function(e){i("Ok"),n([].concat((0,h.Z)(t),[{uid:e.data.uid,url:e.data.url,name:e.data.name}]))}))}catch(d){r({err:d})}case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,u.jsx)(se.Z,{accept:"text/csv",customRequest:l,onChange:function(e){e.file;var t=e.fl;typeof t!==typeof[]&&(t=[]),n(t)},onRemove:function(e){ce.remove({uid:e.uid}).then((function(e){}))},listType:"picture",fileList:t,className:"image-upload-grid",disabled:o,onPreview:function(e){return fetch(e.url,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return e.thumbnail}))},children:(null===t||void 0===t?void 0:t.length)>=i?null:(0,u.jsx)(d.Z,{icon:(0,u.jsx)(ie.Z,{}),type:"dashed",danger:!0,style:{margin:30,width:"134%"},children:"Upload CSV File"})})}function ue(e){var t=e.transactionType,n=void 0===t?"credit":t,i=e.dataType,r=void 0===i?"sale":i,o=(0,a.useState)([]),l=(0,x.Z)(o,2),s=l[0],c=l[1],f=(0,a.useState)(!1),p=(0,x.Z)(f,2),h=p[0],Z=p[1],y=(0,a.useState)([]),g=(0,x.Z)(y,2),b=g[0],T=g[1],w=(0,a.useState)([]),k=(0,x.Z)(w,2),C=k[0],S=k[1],D=(0,a.useState)({page:1,limit:20,transactionType:n,dataType:r}),I=(0,x.Z)(D,2),Y=I[0],N=I[1],L=(0,a.useRef)(),B=(0,a.useRef)(),U=[{title:"Account Name",dataIndex:"accountDetail",render:function(e){return null===e||void 0===e?void 0:e.name}},{title:"Receivable Account",dataIndex:"accountRecievable",width:250,hidden:"debit"===n},{title:"Date",dataIndex:"date",width:150,render:function(e){return M()(e).format("DD MMM YYYY")}},{title:"Amount",dataIndex:"amount",width:150},{title:"Bill Number",dataIndex:"billNumber",width:150},{title:"Action",dataIndex:"_id",width:70,render:function(e,t){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(E.Z,{title:"Are you sure to delete this Account data?",onConfirm:function(){P(t._id)},okText:"Yes",cancelText:"No",children:[(0,u.jsx)(d.Z,{type:"primary",size:"small",danger:!0,icon:(0,u.jsx)(q.Z,{})}),"\xa0"]}),(0,u.jsx)(d.Z,{type:"primary",size:"small",icon:(0,u.jsx)(O.Z,{}),onClick:function(){L.current.openForm(t._id)}})]})}}].filter((function(e){return!e.hidden}));function z(){Z(!0),R.list(Y).then((function(e){var t;c(null===(t=e.data)||void 0===t?void 0:t.map((function(e){return(0,m.Z)((0,m.Z)({},e),{},{key:e._id})}))),N((0,m.Z)((0,m.Z)({},Y),{},{limit:e.extra.limit,page:e.extra.page,total:e.extra.total}))})).catch((function(e){})).finally((function(){Z(!1)}))}var P=function(e){R.delete(e).then((function(e){_(e.message),z(),T([])})).catch((function(e){_(e.message,"error")}))},H=U.map((function(e){return(0,m.Z)((0,m.Z)({},e),{},{ellipsis:!1})}));H[0].fixed=!0,H[H.length-1].fixed="right";var Q={bordered:!0,loading:h,size:"small",title:function(){return(0,u.jsx)(fe,{addNewModalRef:L,uploadCsvModalRef:B,selected:b,deleteData:P,qData:Y,setQData:N,list:z,accounts:C})},showHeader:!0,footer:function(){return(0,u.jsx)(F,{qData:Y,setQData:N})},rowSelection:{onChange:function(e){T(e)}},tableLayout:void 0};return(0,a.useEffect)((function(){z()}),[Y.page,Y.limit,Y.transactionType,Y.dataType]),(0,a.useEffect)((function(){A.list({isAll:1}).then((function(e){S(e.data)})).catch((function(e){"object"===typeof e.message?_(e.message[Object.keys(e.message)[0]],"error"):_(e.message,"error")}))}),[]),(0,a.useEffect)((function(){N((0,m.Z)((0,m.Z)({},Y),{},{transactionType:n,dataType:r}))}),[n,r]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(j.Z.Title,{level:5,style:{margin:0},children:["List of ","debit"===n?"Sale":"Receipt"," Transactions"]}),(0,u.jsx)(v.Z,(0,m.Z)((0,m.Z)({},Q),{},{pagination:{position:["none"],pageSize:Y.limit},columns:H,dataSource:s.length?s:[],scroll:{y:"calc(100vh - 340px)",x:"calc(100vw - 387px)"}})),(0,u.jsx)(pe,{ref:L,list:z,accounts:C,transactionType:n}),(0,u.jsx)(he,{ref:B,transactionType:n,dataType:r,list:z})]})}function fe(e){var t=e.addNewModalRef,n=e.uploadCsvModalRef,i=e.selected,r=e.deleteData,o=e.qData,l=e.setQData,s=e.list,c=e.accounts,f=(0,a.useState)([]),p=(0,x.Z)(f,2),h=p[0],Z=p[1];return(0,a.useEffect)((function(){var e=null===c||void 0===c?void 0:c.map((function(e){return{label:e.name,value:e._id}}));Z(e)}),[c]),(0,u.jsx)(y.Z,{onSubmitCapture:s,className:"search-form",children:(0,u.jsxs)(g.Z,{gutter:[12,2],children:[(0,u.jsx)(b.Z,{span:4,children:(0,u.jsx)(y.Z.Item,{style:{marginBottom:0},children:(0,u.jsx)(T.Z,{showSearch:!0,allowClear:!0,placeholder:"Select an Account",optionFilterProp:"children",onChange:function(e){return t=e,o[n="accountId"]=t,void(void 0===t&&(o[n]="",s()));var t,n},filterOption:function(e,t){var n;return(null!==(n=null===t||void 0===t?void 0:t.label)&&void 0!==n?n:"").toLowerCase().includes(e.toLowerCase())},options:h})})}),(0,u.jsx)(b.Z,{span:4,children:(0,u.jsx)(y.Z.Item,{style:{marginBottom:0},children:(0,u.jsx)(w.Z.RangePicker,{format:"DD MMM YYYY",onChange:function(e){l((0,m.Z)((0,m.Z)({},o),{},{startTime:null!==e&&void 0!==e&&e[0]?new Date(e[0]):null,endTime:null!==e&&void 0!==e&&e[1]?new Date(e[1]):null}))}})})}),(0,u.jsx)(b.Z,{span:3,children:(0,u.jsx)(y.Z.Item,{style:{marginBottom:0},children:(0,u.jsx)(d.Z,{type:"primary",htmlType:"submit",children:"Search"})})}),(0,u.jsxs)(b.Z,{span:10,children:[(0,u.jsx)(y.Z.Item,{style:{marginBottom:0,float:"right"},children:(0,u.jsx)(d.Z,{type:"primary",icon:(0,u.jsx)(z.Z,{}),onClick:function(){t.current.openForm()},children:"Add New"})}),(0,u.jsx)(y.Z.Item,{style:{marginBottom:0,float:"right",marginRight:"1rem"},children:(0,u.jsx)(d.Z,{type:"primary",icon:(0,u.jsx)(ie.Z,{}),onClick:function(){n.current.openForm()},children:"Upload File (CSV)"})}),i.length?(0,u.jsx)(E.Z,{title:"Are you sure to delete these selected Data?",onConfirm:function(){r(i)},okText:"Yes",cancelText:"No",children:(0,u.jsx)(d.Z,{type:"primary",danger:!0,style:{float:"right"},icon:(0,u.jsx)(q.Z,{}),children:"Delete Selected"})}):null]})]})})}ce.baseURL="file";var pe=(0,a.forwardRef)((function(e,t){var n=e.list,i=e.accounts,r=e.transactionType,o=(0,a.useState)(!1),l=(0,x.Z)(o,2),s=l[0],c=l[1],f=(0,a.useState)({aspect:1}),p=(0,x.Z)(f,2),h=p[0],Z=p[1],j=(0,a.useState)(!1),v=(0,x.Z)(j,2),C=v[0],S=v[1],D=function(e){Object.entries(e).forEach((function(e){for(var t=h,n=e[0],a=e[1],i=n.split("."),r=0;r<i.length;r++)r+1===i.length?t[i[r]]=a:("undefined"===typeof t[i[r]]&&(1*parseInt(i[r+1])>=0?t[i[r]]=[]:t[i[r]]={}),t=t[i[r]])})),Z((0,m.Z)({},h))};(0,a.useImperativeHandle)(t,(function(){return{openForm:function(e){c(!0),Z(e?{_id:e}:{transactionType:r})}}}));var I=function(){S(!0),R.save(h).then((function(e){_(e.message),D((0,m.Z)({},e.data)),n()})).catch((function(e){"object"===typeof e.message?_(e.message[Object.keys(e.message)[0]],"error"):_(e.message,"error")})).finally((function(){S(!1)}))};(0,a.useEffect)((function(){h._id&&(S(!0),R.detail(h._id).then((function(e){Z(e.data||{})})).catch((function(e){_(e.message,"error")})).finally((function(){S(!1)})))}),[h._id]),(0,a.useEffect)((function(){s||Z({_id:null})}),[s]);var A=(0,a.useState)([]),Y=(0,x.Z)(A,2),F=Y[0],N=Y[1];return(0,a.useEffect)((function(){var e=null===i||void 0===i?void 0:i.map((function(e){return{label:e.name,value:e._id}}));N(e)}),[i]),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(k.Z,{title:(h._id?"Edit":"Add")+" Transaction Data",style:{top:20},open:s,okText:"Save",onOk:I,okButtonProps:{disabled:C},onCancel:function(){c(!1)},maskClosable:!1,width:500,className:"app-modal-body-overflow",footer:[(0,u.jsx)(d.Z,{onClick:function(){c(!1)},children:"Cancel"},"cancel"),(0,u.jsx)(d.Z,{type:"primary",onClick:I,children:"Save"},"save")],children:(0,u.jsx)(B.Z,{spinning:C,indicator:(0,u.jsx)(P.Z,{style:{fontSize:24},spin:!0}),children:(0,u.jsx)(y.Z,{layout:"vertical",children:(0,u.jsxs)(g.Z,{gutter:[0,2],children:[(0,u.jsx)(b.Z,{span:24,children:(0,u.jsx)(y.Z.Item,{label:"Account Id",required:!0,children:(0,u.jsx)(T.Z,{showSearch:!0,allowClear:!0,placeholder:"Select an Account",optionFilterProp:"children",onChange:function(e){D({accountId:e})},filterOption:function(e,t){var n;return(null!==(n=null===t||void 0===t?void 0:t.label)&&void 0!==n?n:"").toLowerCase().includes(e.toLowerCase())},options:F})})}),(0,u.jsx)(b.Z,{span:24,children:(0,u.jsx)(y.Z.Item,{label:"Amount",required:!0,children:(0,u.jsx)(U.Z,{placeholder:"Enter Amount",type:"number",min:0,value:h.amount,onChange:function(e){return D({amount:e.target.value})}})})}),(0,u.jsx)(b.Z,{span:24,children:(0,u.jsx)(y.Z.Item,{label:"Bill Number",required:!0,children:(0,u.jsx)(U.Z,{placeholder:"Enter bill number",value:h.billNumber,onChange:function(e){return D({billNumber:e.target.value})}})})}),"credit"===h.transactionType?(0,u.jsx)(b.Z,{span:24,children:(0,u.jsx)(y.Z.Item,{label:"Account Recievable",required:!0,children:(0,u.jsx)(U.Z,{value:h.accountRecievable,onChange:function(e){return D({accountRecievable:e.target.value})}})})}):null,"debit"===h.transactionType?(0,u.jsx)(b.Z,{span:24,children:(0,u.jsx)(y.Z.Item,{label:"Type",required:!0,children:(0,u.jsx)(U.Z,{placeholder:"Enter your type",value:h.type,onChange:function(e){return D({type:e.target.value})}})})}):null,(0,u.jsx)(b.Z,{span:24,children:(0,u.jsx)(y.Z.Item,{label:"Date",required:!0,children:(0,u.jsx)(w.Z,{format:"DD MMM YYYY",onChange:function(e){D({date:new Date(e)})},value:Q()(M()(h.date).format("YYYY-MM-DD"),"YYYY-MM-DD"),className:"w-100"})})})]})})})})})})),he=(0,a.forwardRef)((function(e,t){var n=e.list,i=e.transactionType,r=e.dataType,o=(0,a.useState)(!1),l=(0,x.Z)(o,2),s=l[0],c=l[1],f=(0,a.useState)([]),p=(0,x.Z)(f,2),h=p[0],m=p[1],j=(0,a.useState)(!1),v=(0,x.Z)(j,2),y=v[0],g=v[1],b=(0,a.useState)(!1),T=(0,x.Z)(b,2),w=T[0],C=T[1];(0,a.useImperativeHandle)(t,(function(){return{openForm:function(e){c(!0),m([])}}}));(0,a.useEffect)((function(){var e,t;null!==(e=h[0])&&void 0!==e&&e.url&&R.checkPrevTransation({url:null===(t=h[0])||void 0===t?void 0:t.url,transactionType:i},{dataType:r}).then((function(e){var t;(null===(t=e.data.alreadyExistedDataDates)||void 0===t?void 0:t.length)>0?S(e.data.alreadyExistedDataDates):(L.ZP.success(e.message),C(!0))})).catch((function(e){L.ZP.warning(e.message)}))}),[h]);var S=function(e){k.Z.confirm({title:"Records Already exists",icon:(0,u.jsx)(re.Z,{}),content:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{children:"Records will be deleted on these dates "}),e.map((function(e,t){return(0,u.jsx)(Z.Z,{color:"red",children:e},t)}))]}),okText:"Delete Records",okType:"danger",cancelText:"Cancel",onOk:function(){C(!0)},onCancel:function(){}})};return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(k.Z,{title:"Upload File (CSV)",style:{top:20},open:s,okText:"Save",onCancel:function(){c(!1)},maskClosable:!1,width:400,destroyOnClose:!0,className:"app-modal-body-overflow",footer:[(0,u.jsx)(d.Z,{onClick:function(){c(!1)},children:"Cancel"},"cancel"),(0,u.jsx)(d.Z,{type:"primary",onClick:function(){var e,t;null!==(e=h[0])&&void 0!==e&&e.url&&w&&(g(!0),R.saveFromCSVUrl({url:null===(t=h[0])||void 0===t?void 0:t.url,transactionType:i},{dataType:r}).then((function(e){_(e.message),n(),c(!1)})).catch((function(e){"object"===typeof e.message?_(e.message[Object.keys(e.message)[0]],"error"):_(e.message,"error")})).finally((function(){g(!1)})))},disabled:!w||y,children:"Save"},"save")],children:(0,u.jsx)(B.Z,{spinning:y,indicator:(0,u.jsx)(P.Z,{style:{fontSize:24},spin:!0}),children:(0,u.jsx)(de,{fileList:h,setFileList:m,count:1})})})})}));function me(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(i.Z,{style:{minHeight:"100vh"},children:(0,u.jsxs)(i.Z,{className:"site-layout",children:[(0,u.jsx)(i.Z.Header,{style:{padding:0,height:"auto"},children:(0,u.jsx)(r.Z,{theme:"dark",mode:"horizontal",items:[{label:"Bill Report",key:"bill-report/",children:[{label:(0,u.jsx)(l.rU,{to:"bill-report",children:"Bill Report"}),key:"bill-report"},{label:(0,u.jsx)(l.rU,{to:"/bill-report/receipt-transaction",children:"Receipt Transactions"}),key:"/bill-report/receipt-transaction"},{label:(0,u.jsx)(l.rU,{to:"/bill-report/sales-transaction",children:"Sales Transactions"}),key:"/bill-report/sales-transaction"},{label:(0,u.jsx)(l.rU,{to:"bill-report/accounts",children:"Accounts"}),key:"bill-report/accounts"}]},{label:"Sale Report",key:"sale-report/",children:[{label:(0,u.jsx)(l.rU,{to:"sale-report",children:"Sale Report"}),key:"sale-report"},{label:(0,u.jsx)(l.rU,{to:"/sale-report/receipt-transaction",children:"Receipt Transactions"}),key:"/sale-report/receipt-transaction"},{label:(0,u.jsx)(l.rU,{to:"/sale-report/sales-transaction",children:"Sales Transactions"}),key:"/sale-report/sales-transaction"},{label:(0,u.jsx)(l.rU,{to:"sale-report/accounts",children:"Accounts"}),key:"sale-report/accounts"}]},{label:null!==p.Z&&void 0!==p.Z&&p.Z.name?p.Z.name:"You",key:"profile",children:[{key:"Profile",label:"Profile"},{key:"Logout",danger:!0,label:"Logout",onClick:function(){window.localStorage.clear(),window.location.reload()}}]}]})}),(0,u.jsx)(i.Z.Content,{children:(0,u.jsx)(o.Z,{style:{borderRadius:"none"},children:(0,u.jsxs)(s.Z5,{children:[(0,u.jsx)(s.AW,{path:"bill-report/",element:(0,u.jsx)(J,{dataType:"bill"})}),(0,u.jsx)(s.AW,{path:"bill-report/accounts",element:(0,u.jsx)(ee,{dataType:"bill"})}),(0,u.jsx)(s.AW,{path:"bill-report/receipt-transaction",element:(0,u.jsx)(ue,{transactionType:"credit",dataType:"bill"})}),(0,u.jsx)(s.AW,{path:"bill-report/sales-transaction",element:(0,u.jsx)(ue,{transactionType:"debit",dataType:"bill"})}),(0,u.jsx)(s.AW,{path:"sale-report/",element:(0,u.jsx)(J,{dataType:"sale"})}),(0,u.jsx)(s.AW,{path:"sale-report/accounts",element:(0,u.jsx)(ee,{dataType:"sale"})}),(0,u.jsx)(s.AW,{path:"sale-report/receipt-transaction",element:(0,u.jsx)(ue,{transactionType:"credit",dataType:"sale"})}),(0,u.jsx)(s.AW,{path:"sale-report/sales-transaction",element:(0,u.jsx)(ue,{transactionType:"debit",dataType:"sale"})}),(0,u.jsx)(s.AW,{path:"*",element:(0,u.jsx)(f,{})})]})})})]})})})}}}]);
//# sourceMappingURL=451.54572515.chunk.js.map