(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"76bb":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"section"},[s("div",{staticClass:"card is-clearfix columns"},[t._m(0),s("div",{staticClass:"card-content column is-two-thirds"},[s("div",{staticClass:"card-content__title"},[s("h2",{staticClass:"title is-4"},[t._v(" "+t._s(t.product.title)+" "),s("button",{directives:[{name:"show",rawName:"v-show",value:t.product.isFavourite,expression:"product.isFavourite"}],staticClass:"button is-small",attrs:{title:t.removeFromFavouriteLabel},on:{click:function(a){return t.removeFromFavourite(t.product.id)}}},[t._m(1)]),s("button",{directives:[{name:"show",rawName:"v-show",value:!t.product.isFavourite,expression:"!product.isFavourite"}],staticClass:"button is-small",attrs:{title:t.addToFavouriteLabel},on:{click:function(a){return t.saveToFavorite(t.product.id)}}},[t._m(2)])])]),t._m(3),1===t.product.rating?s("div",{staticClass:"card-content__ratings"},[s("i",{staticClass:"fa fa-star"})]):2===t.product.rating?s("div",{staticClass:"card-content__ratings"},[s("i",{staticClass:"fa fa-star"}),s("i",{staticClass:"fa fa-star"})]):3===t.product.rating?s("div",{staticClass:"card-content__ratings"},[s("i",{staticClass:"fa fa-star"}),s("i",{staticClass:"fa fa-star"}),s("i",{staticClass:"fa fa-star"})]):4===t.product.rating?s("div",{staticClass:"card-content__ratings"},[s("i",{staticClass:"fa fa-star"}),s("i",{staticClass:"fa fa-star"}),s("i",{staticClass:"fa fa-star"}),s("i",{staticClass:"fa fa-star"})]):5===t.product.rating?s("div",{staticClass:"card-content__ratings"},[s("i",{staticClass:"fa fa-star"}),s("i",{staticClass:"fa fa-star"}),s("i",{staticClass:"fa fa-star"}),s("i",{staticClass:"fa fa-star"}),s("i",{staticClass:"fa fa-star"})]):t._e(),s("div",{staticClass:"card-content__reviews"},[s("div",{staticClass:"is-pulled-left"},[s("p",[s("strong",[t._v(" "+t._s(t.product.reviews>0?t.product.reviews+" Reviews":"No reviews")+" ")])])]),s("div",{staticClass:"select is-rounded is-small is-pulled-right"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:[function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.selected=a.target.multiple?s:s[0]},function(a){return t.onSelectQuantity(t.product.id)}]}},t._l(t.quantityArray,(function(a){return s("option",{key:a.id,domProps:{value:a}},[t._v(t._s(a))])})),0)])]),s("div",{staticClass:"card-content__price is-pulled-left"},[s("span",{staticClass:"title is-3"},[s("strong",[t._v("¥"+t._s(t.product.price))])])]),s("div",{staticClass:"card-content__btn is-pulled-right"},[t.isAddedBtn?t._e():s("button",{staticClass:"button is-primary",on:{click:function(a){return t.addToCart(t.product.id)}}},[t._v(" "+t._s(t.addToCartLabel)+" ")]),t.isAddedBtn?s("button",{staticClass:"button is-text",on:{click:function(a){return t.removeFromCart(t.product.id)}}},[t._v(" "+t._s(t.removeFromCartLabel)+" ")]):t._e()])])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("figure",{staticClass:"card-image is-480x480 column is-one-thirds"},[s("img",{attrs:{src:"https://bulma.io/images/placeholders/480x480.png"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"fa fa-heart"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"far fa-heart"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-content__text"},[s("p",[t._v(" サンプルです。モックです。商品の紹介文をいれます！！！一覧画面の商品紹介よりも詳しい説明データを作ってここに差し込みます。 ")])])}],r={name:"ProductDetailId",validate:function(t){var a=t.params;return/^\d+$/.test(a.id)},data:function(){return{addToCartLabel:"カートに入れる",removeFromCartLabel:"カートから取り出す",addToFavouriteLabel:"お気に入りに登録",removeFromFavouriteLabel:"お気に入りから外す",product:{},selected:1,quantityArray:[]}},computed:{isAddedBtn:function(){return this.product.isAddedBtn}},mounted:function(){this.product=this.$store.getters.getProductById(this.$route.params.id),this.selected=this.product.quantity;for(var t=1;t<=20;t++)this.quantityArray.push(t)},methods:{addToCart:function(t){var a={id:t,status:!0};this.$store.commit("addToCart",t),this.$store.commit("setAddedBtn",a)},removeFromCart:function(t){var a={id:t,status:!1};this.$store.commit("removeFromCart",t),this.$store.commit("setAddedBtn",a)},onSelectQuantity:function(t){var a={id:t,quantity:this.selected};this.$store.commit("quantity",a)},saveToFavorite:function(t){var a=this.$store.state.userInfo.isLoggedIn;a?this.$store.commit("addToFavourite",t):this.$store.commit("showLoginModal",!0)},removeFromFavourite:function(t){this.$store.commit("removeFromFavourite",t)}}},o=r,c=(s("9cf5"),s("2877")),n=Object(c["a"])(o,i,e,!1,null,"302786b6",null);a["default"]=n.exports},"9cf5":function(t,a,s){"use strict";var i=s("d1e9"),e=s.n(i);e.a},d1e9:function(t,a,s){}}]);
//# sourceMappingURL=about.1a3d527f.js.map