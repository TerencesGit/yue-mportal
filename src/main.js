// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import routes from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/assets/css/main.scss'
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);
Vue.use(Router)
Vue.use(MintUI)

const router = new Router({
	routes
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
