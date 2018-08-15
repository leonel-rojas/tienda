import Vue from 'vue'
import App from './App.vue'

import VueFilterDateFormat from 'vue-filter-date-format'
Vue.use(VueFilterDateFormat)

new Vue({
  el: '#app',
  render: h => h(App)
})
