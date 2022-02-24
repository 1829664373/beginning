import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI  from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './css/commonality.css'

Axios.defaults.baseURL = 'http://localhost:8000/'//http://localhost:8000/
Axios.interceptors.request.use(config =>{
  config.headers.Authorization = window.sessionStorage.getItem('token')

  return config
})
Vue.config.productionTip = false

Vue.prototype.$http = Axios
Vue.use(ElementUI);
Vue.use(VueAxios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
