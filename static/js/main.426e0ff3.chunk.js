(this["webpackJsonpcss-lens"]=this["webpackJsonpcss-lens"]||[]).push([[0],{10:function(e,t,n){e.exports=n.p+"static/media/logo.8dad8028.svg"},13:function(e,t,n){e.exports=n(26)},18:function(e,t,n){},2:function(e,t,n){e.exports={row:"Counter_row__19mGH",value:"Counter_value__tkq6y",button:"Counter_button__3bsXU",textbox:"Counter_textbox__3DsTq",asyncButton:"Counter_asyncButton__15osG Counter_button__3bsXU"}},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),l=(n(18),n(10)),u=n.n(l),s=n(12),i=n(3),m=n(5),p=Object(m.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),d=p.actions,b=d.increment,f=d.decrement,E=d.incrementByAmount,v=function(e){return e.counter.value},_=p.reducer,h=n(2),g=n.n(h);function k(){var e=Object(i.c)(v),t=Object(i.b)(),n=Object(a.useState)("2"),o=Object(s.a)(n,2),c=o[0],l=o[1];return r.a.createElement("div",null,r.a.createElement("div",{className:g.a.row},r.a.createElement("button",{className:g.a.button,"aria-label":"Increment value",onClick:function(){return t(b())}},"+"),r.a.createElement("span",{className:g.a.value},e),r.a.createElement("button",{className:g.a.button,"aria-label":"Decrement value",onClick:function(){return t(f())}},"-")),r.a.createElement("div",{className:g.a.row},r.a.createElement("input",{className:g.a.textbox,"aria-label":"Set increment amount",value:c,onChange:function(e){return l(e.target.value)}}),r.a.createElement("button",{className:g.a.button,onClick:function(){return t(E(Number(c)||0))}},"Add Amount"),r.a.createElement("button",{className:g.a.asyncButton,onClick:function(){return t((e=Number(c)||0,function(t){setTimeout((function(){t(E(e))}),1e3)}));var e}},"Add Async")))}n(25);var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:u.a,className:"App-logo",alt:"logo"}),r.a.createElement(k,null),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.tsx")," and save to reload."),r.a.createElement("span",null,r.a.createElement("span",null,"Learn "),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"React"),r.a.createElement("span",null,", "),r.a.createElement("a",{className:"App-link",href:"https://redux.js.org/",target:"_blank",rel:"noopener noreferrer"},"Redux"),r.a.createElement("span",null,", "),r.a.createElement("a",{className:"App-link",href:"https://redux-toolkit.js.org/",target:"_blank",rel:"noopener noreferrer"},"Redux Toolkit"),",",r.a.createElement("span",null," and "),r.a.createElement("a",{className:"App-link",href:"https://react-redux.js.org/",target:"_blank",rel:"noopener noreferrer"},"React Redux"))))},x=Object(m.a)({reducer:{counter:_}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:x},r.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.426e0ff3.chunk.js.map