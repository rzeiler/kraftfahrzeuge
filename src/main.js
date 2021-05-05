import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { auth } from "./firebase";
import "./assets/scss/app.scss";
import './registerServiceWorker';
 

Vue.config.productionTip = false;
//Vue.component(myInView);

import Icon from '@/components/Icon';
import Tabs from '@/components/Tabs';
import Bar from '@/components/Bar';
import List from '@/components/List';
import Menu from '@/components/Menu';
import SiteHead from '@/components/SiteHead';

Vue.component('m-page-head', SiteHead);
Vue.component('m-menu', Menu);
Vue.component('m-icon', Icon);
Vue.component('m-tabs', Tabs);
Vue.component('m-bar', Bar);
Vue.component('m-list', List);


// Vue.directive("pan", {
//   bind: function(el, binding) {
//     if (typeof binding.value === "function") {
//       const mc = new Hammer(el);
//       mc.get("pan").set({ direction: Hammer.DIRECTION_ALL });
//       mc.on("pan", binding.value);
//     }
//   },
// });

// Vue.directive("tap", {
//   bind: function(el, binding) {
//     if (typeof binding.value === "function") {
//       const mc = new Hammer(el);
//       mc.get("tap").set({ direction: Hammer.DIRECTION_ALL });
//       mc.on("tap", binding.value);
//     }
//   },
// });

let app;
auth.onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }

  if (user) {
    store.dispatch("fetchUserProfile", user);
  }
});
