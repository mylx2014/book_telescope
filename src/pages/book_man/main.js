import Vue from "vue";
import book_man from "./book_man";
import '/public/src/css/base.css'
import {
    Input, Button, Divider,Dropdown,DropdownMenu,DropdownItem,
    Card, Table, TableColumn
} from "element-ui";

Vue.config.productionTip = false

Vue.use(Input)
Vue.use(Button)
Vue.use(Divider)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

new Vue({
    el: '#app',
    render: h => h(book_man)
})
