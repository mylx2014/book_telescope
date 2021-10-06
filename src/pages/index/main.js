import Vue from "vue";
import index from './index'
import '/public/src/css/base.css'
import {
    Input,Button,Divider,DropdownItem,DropdownMenu,Dropdown,
    Carousel,CarouselItem,Card
} from "element-ui";

Vue.config.productionTip = false

Vue.use(Input)
Vue.use(Button)
Vue.use(Divider)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Card)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

new Vue({
    render: h => h(index),
}).$mount('#app')