import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import waterfall from 'vue-waterfall2'

Vue.config.productionTip = false

Vue.use(waterfall)

//----引入mintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
