// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import routes from './router'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/assets/css/main.scss'
import Mock from './mock'
Vue.use(Router)
Vue.use(MintUI)
// Mock.bootstrap()
Vue.config.productionTip = false
Vue.prototype.$catchError = (err) => {
  if(err.code === 'ECONNABORTED') {
    MintUI.Toast('服务器响应超时')
    return;
  }
  if(!err.data) {
    MintUI.Toast('服务器响应错误')
    return;
  }
  if(err.data.code) {
    MintUI.Toast(err.data.message)
  } else {
    MintUI.Toast('请求失败请重试')
  }
}
const router = new Router({
	routes
})
axios.interceptors.request.use(config => {
  return config;
}, error => { 
  return Promise.reject(error)
})
axios.interceptors.response.use(res => {
  if (res.data.code === '0000') {
    router.push('/login')
    // return Promise.reject(res)
  } 
  return res;
}, err => {
  return Promise.reject(err)
})
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
