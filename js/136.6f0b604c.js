"use strict";(self["webpackChunkvue_week6"]=self["webpackChunkvue_week6"]||[]).push([[136],{530:function(t,e,i){function n(t){return{all:t=t||new Map,on:function(e,i){var n=t.get(e);n?n.push(i):t.set(e,[i])},off:function(e,i){var n=t.get(e);n&&(i?n.splice(n.indexOf(i)>>>0,1):t.set(e,[]))},emit:function(e,i){var n=t.get(e);n&&n.slice().map((function(t){t(i)})),(n=t.get("*"))&&n.slice().map((function(t){t(e,i)}))}}}i.d(e,{Z:function(){return s}});const a=n();var s=a},136:function(t,e,i){i.r(e),i.d(e,{default:function(){return D}});var n=i(252),a=i(577),s=i(963);const l={class:"container"},o=(0,n._)("h2",null,"shopping cart list",-1),c={class:"table align-middle"},d=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"圖片"),(0,n._)("th",null,"商品名稱"),(0,n._)("th",null,"價格"),(0,n._)("th")])],-1),r={style:{width:"200px"}},u={key:0,class:"h5"},p={key:1},h={class:"h6"},g={class:"h5"},_={class:"btn-group btn-group-sm"},f=["onClick","disabled"],b={class:"fas fa-spinner fa-pulse"},v=(0,n.Uk)(" 查看更多 "),m=["onClick","disabled"],k={class:"fas fa-spinner fa-pulse"},w=(0,n.Uk)(" 加到購物車 ");function y(t,e,i,y,C,I){return(0,n.wg)(),(0,n.iD)("div",l,[o,(0,n._)("table",c,[d,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(C.products,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.id},[(0,n._)("td",r,[(0,n._)("div",{style:(0,a.j5)([{backgroundImage:`url(${e.imageUrl})`},{height:"100px","background-size":"cover","background-position":"center"}])},null,4)]),(0,n._)("td",null,(0,a.zw)(e.title),1),(0,n._)("td",null,[e.price===e.origin_price?((0,n.wg)(),(0,n.iD)("div",u,(0,a.zw)(e.price)+" 元 ",1)):((0,n.wg)(),(0,n.iD)("div",p,[(0,n._)("del",h,"原價 "+(0,a.zw)(e.origin_price)+" 元",1),(0,n._)("div",g,"現在只要 "+(0,a.zw)(e.price)+" 元",1)]))]),(0,n._)("td",null,[(0,n._)("div",_,[(0,n._)("button",{type:"button",class:"btn btn-outline-secondary",onClick:i=>t.openProductModal(e.id),disabled:C.isLoadingItem===e.id},[(0,n.wy)((0,n._)("i",b,null,512),[[s.F8,C.isLoadingItem===e.id]]),v],8,f),(0,n._)("button",{type:"button",class:"btn btn-outline-danger",onClick:t=>I.addToCart(e.id),disabled:C.isLoadingItem===e.id},[(0,n.wy)((0,n._)("i",k,null,512),[[s.F8,C.isLoadingItem===e.id]]),w],8,m)])])])))),128))])])])}var C=i(530),I={data(){return{cartData:{carts:[]},products:[],isLoadingItem:""}},methods:{getProducts(){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/carolli_apexc/products/all").then((t=>{this.products=t.data.products})).catch((t=>{alert(t.data.message)}))},addToCart(t,e=1){const i={product_id:t,qty:e};this.isLoadingItem=t,this.$http.post("https://vue3-course-api.hexschool.io/v2/api/carolli_apexc/cart",{data:i}).then((t=>{this.isLoadingItem="",C.Z.emit("get-cart")})).catch((t=>{alert(t.data.message)}))}},mounted(){this.getProducts()}},x=i(744);const L=(0,x.Z)(I,[["render",y]]);var D=L}}]);
//# sourceMappingURL=136.6f0b604c.js.map