import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '../../libra-frontend/src/axios'
import './element-ui'
// 开发环境启动Mock;
process.env.NODE_ENV === 'development' && import('@/mock')
// 挂载自定义axios实例在Vue的原型链上，使用时使用this.$axios(...)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
