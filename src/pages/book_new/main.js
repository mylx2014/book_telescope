import Vue from "vue";
import book_new from "./book_new"
import '/public/src/css/base.css'
import {
    Input,Button,Divider,
        Card,
        Table,TableColumn
} from 'element-ui'

Vue.config.productionTip = false

Vue.use(Input)
Vue.use(Button)
Vue.use(Divider)

Vue.use(Card)

Vue.use(Table)
Vue.use(TableColumn)

new Vue({
    el:'#app',
    render:h=>h(book_new)
})