import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  noty  from  'vuejs-noty'
// import wys  from 'vu'
Vue.use(noty)
import "vuejs-noty/dist/vuejs-noty.css"
const authData   =  localStorage.getItem('auth')
Vue.config.productionTip = false

new Vue({
  data: {
     auth: authData ? JSON.parse(authData) : {}
  },
  render: h => h(App),
  router,
}).$mount('#app')
