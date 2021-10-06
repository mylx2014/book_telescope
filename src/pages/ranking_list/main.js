import Vue from "vue";
import ranking_list from "./ranking_list";
import '/public/src/css/base.css'
import {
    Input,Button,Divider,DropdownItem,DropdownMenu,Dropdown,
        Tabs,TabPane,Card,Table,TableColumn,
} from "element-ui";

Vue.config.productionTip = false

Vue.use(Input)
Vue.use(Button)
Vue.use(Divider)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

new Vue({
    el:'#app',
    render:h=>h(ranking_list)
})