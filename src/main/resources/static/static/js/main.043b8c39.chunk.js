(this.webpackJsonptw2=this.webpackJsonptw2||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),s=n(24),i=n(26),u=n(57),l=n(35),f=n(32),p=n.n(f),v=n(40),m=n(41),d=n.n(m),g=function(e){return function(){var t=Object(v.a)(p.a.mark((function t(n){var a,r,o,c,s,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.tag,r=[],e.tag&&r.push("tag="+encodeURI(e.tag)),o=e.offset,e.offset||(o=0,console.log("offset is not defined")),console.log(o),r.push("offset="+o),c=r.join("&"),t.next=10,d.a.get("".concat("","/").concat("favos","?").concat(c));case 10:s=t.sent,i=e.renew,n({type:"READ_FAVOS",response:s,tag:a,offset:o,renew:i});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=Object(s.c)({favos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{favos:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"READ_FAVOS":console.log(t);var n=t.response.data;t.renew&&(e.favos=[]);var a=e.favos;console.log(a);for(var r=0,o=n.length;r<o;r++){var c=n[r];c.body=JSON.parse(c.body),a.push(c)}var s=t.offset,i=t.tag;return b({},e,{favos:a,offset:s,tag:i});case"READ_TAGS":var u=t.response.data;return b({},e,{tags:u});default:return e}}}),y=(n(97),n(58)),j=n(59),w=n(64),E=n(60),x=n(65),P=n(63),k=n(134),F=n(136),D=n(140),S=n(141),A=n(131),N=n(36),T=n.n(N),L=Object(A.a)((function(e){return{formControl:{margin:"0 auto",minWidth:"98%",color:"#FFF"}}}));var R={readFavos:g},C=Object(i.b)(null,R)((function(e){var t=L(),n=r.a.useState(""),a=Object(P.a)(n,2),o=a[0],c=a[1];return r.a.createElement("div",{className:t.root},r.a.createElement(k.a,{position:"fixed"},r.a.createElement(F.a,null,r.a.createElement(D.a,{value:o,onChange:function(t){c(t.target.value),window.scrollTo(0,0),e.readFavos({tag:t.target.value,offset:0,renew:!0})},className:t.formControl},r.a.createElement(S.a,{key:"::::NULL::::",value:"::::NULL::::"},"\u672a\u8a2d\u5b9a"),T.a.map(e.tags,(function(e){return r.a.createElement(S.a,{key:e,value:e},e)}))))))})),H=n(137),W=n(138),_=n(139),B=Object(A.a)((function(e){return{card:{marginTop:"1em",maxWidth:"95%",margin:"0 auto"},content:{paddingBottom:"16px !important"}}}));function J(e){var t=B(),n=e.text;return r.a.createElement(H.a,{className:t.card},r.a.createElement(W.a,{className:t.content},r.a.createElement(_.a,{variant:"body2",color:"textSecondary",component:"p"},n)))}function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}Object(A.a)((function(e){return{mm:{marginTop:"40px"}}}));var G=function(e){function t(e){var n;return Object(y.a)(this,t),n=Object(w.a)(this,Object(E.a)(t).call(this,e)),e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{offset:0}),console.log(e.offset),n}return Object(x.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){this.props.readFavos({offset:0}),this.props.readTags();var e=this;window.addEventListener("scroll",(function(t){window.pageYOffset>=Math.max.apply(null,[document.body.clientHeight,document.body.scrollHeight,document.documentElement.scrollHeight,document.documentElement.clientHeight])-1e3&&e.nextFavos()}))}},{key:"nextFavos",value:function(){console.log(this.props),this.props.readFavos({tag:this.props.tag,offset:this.props.favos.offset+10})}},{key:"renderFavos",value:function(){return r.a.createElement(r.a.Fragment,null,T.a.map(this.props.favos.favos,(function(e,t){return r.a.createElement(J,{key:e.id+"-"+t,text:e.txt})})))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C,{title:"A",tags:this.props.favos.tags}),r.a.createElement("div",{style:{marginTop:"80px"}},this.renderFavos()))}}]),t}(r.a.Component),I={readTags:function(){return function(){var e=Object(v.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat("","/").concat("tags"));case 2:n=e.sent,t({type:"READ_TAGS",response:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},readFavos:g},M=Object(i.b)((function(e){return{favos:e.favos}}),I)(G);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=n(61),Y=n(21),$=Object(s.a)(u.a),q=Object(s.d)(h,$);c.a.render(r.a.createElement(i.a,{store:q},r.a.createElement(V.a,null,r.a.createElement(Y.c,null,r.a.createElement(Y.a,{exact:!0,path:"/",component:M}),r.a.createElement(Y.a,{exact:!0,path:"/fav",component:M})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},70:function(e,t,n){e.exports=n(100)},97:function(e,t,n){}},[[70,1,2]]]);
//# sourceMappingURL=main.043b8c39.chunk.js.map