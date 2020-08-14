import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import './assets/scss/app.scss'
import Store from './store'
import coverLetterStore from './store/coverLetterStore'

Vue.config.productionTip = false

new Vue({
  router,
  provide: {
    store: new Store(coverLetterStore)
  },
  render: h => h(App)
}).$mount('#app')
