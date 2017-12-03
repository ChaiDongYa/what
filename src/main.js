import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import comfig from './allouter/route.js'
import store from "./allfile/vuex.js"
import one from "./allouter/one.vue"
import two from "./allouter/two.vue"
console.log(store)
Vue.use(Router)
const router = new Router(comfig)
new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
