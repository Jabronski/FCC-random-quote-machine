(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{16:function(t,e,c){},18:function(t,e,c){},25:function(t,e,c){"use strict";c.r(e);var n=c(2),o=c.n(n),r=c(10),a=c.n(r),s=(c(16),c(4)),i=c(7),u=c.n(i),d=c(11),l=(c(18),c(8)),b=c(9),j=c(1),h="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";var f=function(){var t=function(){var t=Object(d.a)(u.a.mark((function t(e){var c,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return c=t.sent,t.next=5,c.json();case 5:n=t.sent,w(n.quotes);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){t(h)}),[h]);var e=[{quote:"You may be disappointed if you fail, but you are doomed if you don\u2019t try.",author:"Beverly Sills"}],c=Object(n.useState)(e[0].quote),o=Object(s.a)(c,2),r=o[0],a=o[1],i=Object(n.useState)(e[0].author),f=Object(s.a)(i,2),p=f[0],O=f[1],x=Object(n.useState)(null),m=Object(s.a)(x,2),g=m[0],w=m[1],v=Object(n.useState)("#"+Math.floor(16777215*Math.random()).toString(16)),y=Object(s.a)(v,2),q=y[0],k=y[1];return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("header",{className:"App-header",style:{backgroundColor:q},children:Object(j.jsxs)("div",{id:"wrapper",children:[Object(j.jsxs)("div",{id:"quote-box",style:{color:q},children:[Object(j.jsxs)("div",{id:"upper",children:[Object(j.jsxs)("p",{id:"text",children:['"',r,'"']}),Object(j.jsxs)("p",{id:"author",children:["- ",p]})]}),Object(j.jsxs)("div",{id:"lower",children:[Object(j.jsx)("a",{style:{backgroundColor:q},class:"button",id:"tweet-quote",target:"blank_",href:encodeURI('http://www.twitter.com/intent/tweet?text="'.concat(r,'" - ').concat(p)),children:Object(j.jsx)(l.a,{icon:b.b})}),Object(j.jsx)("a",{style:{backgroundColor:q},class:"button",id:"tumblr-quote",target:"blank_",href:encodeURI("https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='\"".concat(r,'" - ').concat(p)),children:Object(j.jsx)(l.a,{icon:b.a})}),Object(j.jsx)("a",{style:{backgroundColor:q},class:"button",id:"new-quote",href:"#",onClick:function(){!function(){var t=Math.floor(Math.random()*g.length);k("#"+Math.floor(16777215*Math.random()).toString(16)),a(g[t].quote),O(g[t].author),console.log(q)}()},children:"New Quote"})]})]}),Object(j.jsx)("div",{id:"footer",children:Object(j.jsx)("p",{id:"footer-text",children:"by Jabronski"})})]})})})},p=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,26)).then((function(e){var c=e.getCLS,n=e.getFID,o=e.getFCP,r=e.getLCP,a=e.getTTFB;c(t),n(t),o(t),r(t),a(t)}))};a.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),p()}},[[25,1,2]]]);
//# sourceMappingURL=main.5e3327e6.chunk.js.map