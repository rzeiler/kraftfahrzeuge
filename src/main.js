import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { auth } from "./firebase";
import update from "./mixins/update";
import "./assets/scss/app.scss";
import "@mdi/font/scss/materialdesignicons.scss";
import SiteNav from "@/components/SiteNav";
import "./registerServiceWorker";

Vue.component("SiteNav", SiteNav);

 

import {
  Navbar,
  Input,
  Button,
  Field,
  Icon,
  Tabs,
  Carousel,
  Progress,
  Image,
  Dropdown,
  Dialog,
  Toast,
  Notification,
  Snackbar,
  Numberinput,
  Datepicker,
  Upload,
  Loading
} from "buefy";

 

Vue.use(Navbar);
Vue.use(Input);
Vue.use(Button);
Vue.use(Field);
Vue.use(Icon);
Vue.use(Tabs);
Vue.use(Carousel);
Vue.use(Progress);
Vue.use(Image);
Vue.use(Dropdown);
Vue.use(Dialog);
Vue.use(Toast);
Vue.use(Notification);
Vue.use(Snackbar);
Vue.use(Numberinput);
Vue.use(Datepicker);
Vue.use(Upload);
Vue.use(Loading);


Vue.config.productionTip = false;
 
 
 
let app;
auth.onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      mixins: [update],
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }

  if (user) {
    store.dispatch("fetchUserProfile", user);
  }
});
