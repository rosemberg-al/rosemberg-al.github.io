(this["webpackJsonpexercise-john"]=this["webpackJsonpexercise-john"]||[]).push([[0],{118:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(26),i=n.n(a),s=n(13),o=n(168),r=n(166),l=n(161),j=n(165),b=n(170),d=n(76),u=n.n(d),h=n(171),x=n(169),m=n(74),p=n.n(m),O=n(2);var f=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)("USD"),d=Object(s.a)(i,2),m=d[0],f=(d[1],function(){p.a.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((function(e){console.log("value",e.data.bpi),a(e.data.bpi)}))});return Object(c.useEffect)((function(){f(),setInterval(f,3e4)}),[]),Object(O.jsxs)(x.a,{component:"main",maxWidth:"xs",children:[Object(O.jsx)(l.a,{}),Object(O.jsxs)(b.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(O.jsx)(o.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(O.jsx)(u.a,{})}),Object(O.jsx)(h.a,{component:"h1",variant:"h5",children:"BTC -> USD"}),Object(O.jsx)(h.a,{component:"h1",variant:"h5",children:"Current Value"}),Object(O.jsxs)(b.a,{component:"form",noValidate:!0,sx:{mt:1},children:[Object(O.jsx)(j.a,{margin:"normal",fullWidth:!0,id:"cotation",disabled:!0,value:null!==n?n[m].rate:"0.0000"}),Object(O.jsx)(r.a,{type:"button",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},onClick:f,children:"Refresh"})]})]})]})};i.a.render(Object(O.jsx)(f,{}),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.9a931705.chunk.js.map