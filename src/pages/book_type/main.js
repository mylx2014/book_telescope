import Vue from "vue";
import book_type from "./book_type";
import '/public/src/css/base.css'
import {
    Input,Button,Divider,
        Table,TableColumn
} from "element-ui";

Vue.config.productionTip = false

Vue.use(Input)
Vue.use(Button)
Vue.use(Divider)
Vue.use(Table)
Vue.use(TableColumn)

new Vue({
    el: '#app',
    render: h => h(book_type)
})