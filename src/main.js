import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import store from './vuex/main'

Vue.use(Vuex);
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
