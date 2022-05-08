import Vue from 'vue'
import App from './App.vue'
import * as echarts from "echarts";

Vue.component('ECharts', echarts)
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
