import Vue from 'vue'
import Login from './login'
import {Input,Button,Row} from 'element-ui'
import '/public/src/css/base.css'

Vue.config.productionTip = false

Vue.use(Row)
Vue.use(Input)
Vue.use(Button)

new Vue({
  render: h => h(Login),
}).$mount('#app')
