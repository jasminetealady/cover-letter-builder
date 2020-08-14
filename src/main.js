import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import './assets/scss/app.scss'
import Store from './store'
import coverLetterStore from './store/coverLetterStore'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopy, faUndo, faRedo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCopy, faUndo, faRedo)

Vue.component('Icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  provide: {
    store: new Store(coverLetterStore)
  },
  render: h => h(App)
}).$mount('#app')
