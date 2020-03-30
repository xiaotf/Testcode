// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//使用element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//使用axios
import axios from 'axios';
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

//loadding
import Loadding from '@/components/Loadding/Loadding';
Vue.component('Loadding', Loadding)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})