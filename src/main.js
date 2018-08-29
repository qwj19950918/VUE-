// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/store'
import Axios from 'axios'
import VueTouch from 'vue-touch'
Vue.use(VueTouch,{name:'v-touch'});
Vue.use(Vuex,Axios);
Vue.config.productionTip = false;
Vue.prototype.$http=Axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
