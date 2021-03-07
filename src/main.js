import Vue from "vue";
import App from "./App.vue";
import mixin from "./data/mixin";
import router from "./router";
import translate from "./translation/index";
import VueMeta from "vue-meta";
import store from "./data";
import vuetify from "./plugins/vuetify";
import VueScrollTo from "vue-scrollto";

Vue.config.productionTip = false;

Vue.mixin(mixin);
Vue.use(VueMeta);
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: -60,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});
Vue.directive("translate", {
  inserted: function(el) {
    translate(el.innerHTML).then((data) => (el.innerHTML = data));
  },
});
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
