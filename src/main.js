import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

Vue.filter('formatDate', function(val){
    var date = new Date(val);
    return [date.getDate(), date.getMonth(), date.getFullYear()].join('.');
  }
);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
