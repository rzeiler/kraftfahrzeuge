import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase'
import './assets/scss/app.scss'

// You can specify which plugins you need
import { Tooltip, Toast, Popover } from 'bootstrap';

Vue.config.productionTip = false

let app
auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      Tooltip, 
      Toast, 
      Popover,
      render: h => h(App)
    }).$mount('#app')
  }

  if (user) {
    store.dispatch('fetchUserProfile', user)
  }
})
