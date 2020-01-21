import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.vue'
import ProductList from './components/ProductList.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: ProductList },
    { path: '/products', component: ProductList }
  ]
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

