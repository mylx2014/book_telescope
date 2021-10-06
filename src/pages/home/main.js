import Vue from "vue";
import home from "./home";
import '/public/src/css/base.css'
import {
    Input,Button,Divider,Dropdown,DropdownMenu,DropdownItem,
        Avatar,Icon,Card,Dialog,Form,FormItem,Steps,Step,Result,
        Upload,
} from 'element-ui'

Vue.config.productionTip = false

Vue.use(Input)
Vue.use(Button)
Vue.use(Divider)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

Vue.use(Avatar)
Vue.use(Icon)
Vue.use(Card)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Result)
Vue.use(Upload)

new Vue({
    el:'#app',
    render:h=>h(home)
})