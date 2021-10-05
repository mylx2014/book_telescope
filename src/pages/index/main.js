import Vue from "vue";
import index from './index'
import '/public/src/css/base.css'

Vue.config.productionTip = false

new Vue({
    render: h => h(index),
}).$mount('#app')