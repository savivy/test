// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import http from './http'
import './style/base.styl'
import './utils/fontsize.js'
import './assets/font/iconfont.css'

Vue.config.productionTip = false
Vue.prototype.$http=http
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
