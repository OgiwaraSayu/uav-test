import Vue from 'vue'
import App from './App.vue'
import * as echarts from "echarts";
import axios from "axios";
import router from "@/router"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueSocketIO from 'vue-socket.io'
import global from "../config/global";

Vue.use(new VueSocketIO({

  debug: true,

  connection: "localhost:3000",  //

}))
// Vue.prototype.Host = "/socket"; //配置跨域
Vue.prototype.$global = global
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  el: '#app',
  //配置路由
  router,
  render: h => h(App),
}).$mount('#app')
