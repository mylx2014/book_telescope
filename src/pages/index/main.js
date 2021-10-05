import Vue from "vue";
import index from './index'
import '/public/src/css/base.css'
import {Input,Button,Divider} from "element-ui";

Vue.config.productionTip = false

Vue.use(Input)
Vue.use(Button)
Vue.use(Divider)

new Vue({
    render: h => h(index),
}).$mount('#app')