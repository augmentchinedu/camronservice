(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-083b388f"],{"53a4":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-6"},[a("h1",{staticClass:"text-uppercase font-weight-black text-center"},[t._v("Track")]),a("v-row",[a("v-col",{staticClass:"mx-auto",attrs:{cols:"12",md:"10"}},[a("v-card",{staticClass:"overflow-hidden",attrs:{color:"primary",dark:""}},[a("v-toolbar",{staticClass:"transparent",attrs:{flat:"",text:""}},[a("v-toolbar-title",{staticClass:"font-weight-light"},[t._v(" Enter the Consignment No. ")])],1),a("v-card-text",[a("v-text-field",{attrs:{color:"white",placeholder:"Enter Tracking Number"}})],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"success"},on:{click:t.save}},[t._v(" Track result ")])],1),a("v-snackbar",{attrs:{timeout:2e3,absolute:"",bottom:"",left:""},model:{value:t.hasSaved,callback:function(e){t.hasSaved=e},expression:"hasSaved"}},[t._v(" Your profile has been updated ")])],1)],1)],1)],1)},s=[],n=(a("b0c0"),{data:function(){return{hasSaved:!1,isEditing:null,model:null,states:[{name:"Florida",abbr:"FL",id:1},{name:"Georgia",abbr:"GA",id:2},{name:"Nebraska",abbr:"NE",id:3},{name:"California",abbr:"CA",id:4},{name:"New York",abbr:"NY",id:5}]}},methods:{customFilter:function(t,e){var a=t.name.toLowerCase(),i=t.abbr.toLowerCase(),s=e.toLowerCase();return a.indexOf(s)>-1||i.indexOf(s)>-1},save:function(){this.isEditing=!this.isEditing,this.hasSaved=!0}}}),o=n,r=a("2877"),c=a("6544"),l=a.n(c),d=a("8336"),u=a("b0af"),h=a("99d9"),v=a("62ad"),b=a("ce7e"),m=a("0fd9"),p=a("ade3"),f=(a("a9e3"),a("caad"),a("ca71"),a("8dd9")),g=a("a9ad"),k=a("7560"),C=a("f2e7"),w=a("fe6c"),T=a("58df"),x=a("80d2"),O=a("d9bd"),j=Object(T["a"])(f["a"],g["a"],C["a"],Object(w["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:k["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,a=t.bottom,i=t.footer,s=t.insetFooter,n=t.left,o=t.right,r=t.top;return{paddingBottom:Object(x["d"])(a+i+s),paddingLeft:this.app?Object(x["d"])(n):void 0,paddingRight:this.app?Object(x["d"])(o):void 0,paddingTop:Object(x["d"])(e+r)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(O["e"])("auto-height",this),0==this.timeout&&Object(O["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(x["j"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(p["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(x["j"])(this)])},genWrapper:function(){var t=this,e=this.hasBackground?this.setBackgroundColor:this.setTextColor,a=e(this.color,{staticClass:"v-snack__wrapper",class:f["a"].options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}],on:{mouseenter:function(){return window.clearTimeout(t.activeTimeout)},mouseleave:this.setTimeout}});return this.$createElement("div",a,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),_=a("2fa4"),B=a("8654"),V=a("71d9"),y=Object(x["e"])("v-toolbar__title"),A=Object(x["e"])("v-toolbar__items"),E=(V["a"],Object(r["a"])(o,i,s,!1,null,null,null));e["default"]=E.exports;l()(E,{VBtn:d["a"],VCard:u["a"],VCardActions:h["a"],VCardText:h["b"],VCol:v["a"],VDivider:b["a"],VRow:m["a"],VSnackbar:j,VSpacer:_["a"],VTextField:B["a"],VToolbar:V["a"],VToolbarTitle:y})},"8ce9":function(t,e,a){},ca71:function(t,e,a){},ce7e:function(t,e,a){"use strict";var i=a("5530"),s=(a("8ce9"),a("7560"));e["a"]=s["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(i["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(i["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-083b388f.e3d3f091.js.map