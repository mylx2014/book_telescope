import Vue from "vue";
import book_woman from "./book_woman";
import '/public/src/css/base.css'
import {
    Input,Button,Divider,DropdownMenu,DropdownItem,Dropdown,
        Card,
        Table,TableColumn
} from 'element-ui'

Vue.config.productionTip = false

Vue.use(Input)
Vue.use(Button)
Vue.use(Divider)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

Vue.use(Card)

Vue.use(Table)
Vue.use(TableColumn)

new Vue({
    el:'#app',
    render:h=>h(book_woman)
})