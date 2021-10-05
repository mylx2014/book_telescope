import Vue from "vue";
import index from './index'
import '/public/src/css/base.css'
import {
    Input,Button,Divider,
    Carousel,CarouselItem,Card
} from "element-ui";

Vue.config.productionTip = false

Vue.use(Input)
Vue.use(Button)
Vue.use(Divider)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Card)

new Vue({
    render: h => h(index),
}).$mount('#app')