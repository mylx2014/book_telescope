import Vue from 'vue'
import Login from './login'
import {Input,Button,Row,Divider,Card,Tabs,TabPane,Form,FormItem,Link} from 'element-ui'
import '/public/src/css/base.css'

Vue.config.productionTip = false

Vue.use(Row)
Vue.use(Input)
Vue.use(Button)
Vue.use(Divider)
Vue.use(Card)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Link)

new Vue({
  render: h => h(Login),
}).$mount('#app')
