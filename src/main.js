import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import cookie from "./util/cookie";

// library
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// el-element 언어 설정
import Lang from 'element-ui/lib/locale/lang/ko'
import Locale from 'element-ui/lib/locale'

Locale.use(Lang)

Vue.use(ElementUI)

Vue.config.productionTip = false;
Vue.prototype.$cookie = cookie

new Vue({
  router,
  store,
  cookie,
  render: h => h(App)
}).$mount("#app");
