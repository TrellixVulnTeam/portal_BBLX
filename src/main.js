// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import vueSmoothScroll from 'vue-smooth-scroll'
import('../node_modules/vuetify/dist/vuetify.min.css')
import firebase from 'firebase'
import config from './config'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(vueSmoothScroll)

firebase.initializeApp(config.firebase)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
