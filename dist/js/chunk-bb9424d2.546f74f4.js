(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bb9424d2"],{"34eb":function(t,a,e){"use strict";var s=e("49a5"),n=e.n(s);n.a},"49a5":function(t,a,e){},aa49:function(t,a,e){t.exports=e.p+"img/loggo_white_transparent.dc02fac0.png"},d000:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"navContainer"},[s("b-navbar",{attrs:{toggleable:"md",type:"dark"}},[s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",[s("b-nav-item",{attrs:{to:"/"}},[t._v("Home")]),s("b-nav-item",{attrs:{to:"/about"}},[t._v("About")]),s("b-nav-item-dropdown",{attrs:{text:"Products"}},t._l(t.products,function(a,e){return s("b-dropdown-item",{key:e,attrs:{to:"/products/"+e}},[t._v(t._s(a.title))])}),1),s("b-nav-item",{attrs:{to:"/contact"}},[t._v("Contact")]),t.blogActive?s("b-nav-item",{attrs:{to:"/blog"}},[t._v("Blog")]):t._e()],1)],1)],1),t.home?t._e():s("h1",{class:{smallTitle:t.smallTitle}},[t._v(t._s(t.title||"Missing title"))]),t.home?s("div",{staticClass:"iconContainer"},[s("img",{staticClass:"icon",attrs:{src:e("aa49")}})]):t._e(),t.home?s("h2",[t._v("We Build the Service of the Future")]):t._e()],1)},n=[],o={name:"NavBar",props:["title","home","smallTitle"],data:function(){return{}},computed:{products:function(){return this.$store.state.products},blogActive:function(){return this.$store.state.blogActive}}},r=o,c=(e("34eb"),e("2877")),i=Object(c["a"])(r,s,n,!1,null,"cc13d74e",null);a["a"]=i.exports},e6dc:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"projects"},[e("NavBar",{attrs:{title:t.$options.name}}),e("div",t._l(t.products,function(a,s){return e("div",{key:s,staticClass:"card card-action"},[e("h3",{on:{click:function(a){return t.selectPost(s)}}},[t._v(t._s(a.title))]),e("div",{staticClass:"card-body card-row"},[e("div",{staticClass:"card-column"},[e("p",[t._v(t._s(a.body))])]),e("div",{staticClass:"card-column"},[e("img",{staticClass:"rect-image",attrs:{src:a.headerImage,alt:"Image of product"}})])])])}),0)],1)},n=[],o=e("d000"),r={name:"Products",components:{NavBar:o["a"]},data:function(){return{}},computed:{products:function(){return this.$store.state.products}},mounted:function(){},methods:{}},c=r,i=e("2877"),l=Object(i["a"])(c,s,n,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-bb9424d2.546f74f4.js.map