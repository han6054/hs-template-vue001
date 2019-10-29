import Vue from 'vue'
import Vuex from "vuex";
import App from './App'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false;


// ES6的polyfill
// require('es6-promise').polyfill()

Vue.prototype.$gopage = function (name, query, isReplace) {
  const rType = isReplace ? 'replace' : 'push'
  router[rType]({
    name,
    query
  })
}
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
