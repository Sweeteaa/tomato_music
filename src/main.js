import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/css/common.css"
import { Icon, Carousel, CarouselItem } from 'element-ui';
import { Search, NavBar, Button, Cell, List, Toast, Form, Field, CellGroup } from 'vant';

// element&vant
Vue.config.productionTip = false
Vue.use(Search)
Vue.use(Icon)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(NavBar)
Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(Toast)
Vue.use(Form)
Vue.use(Field)
Vue.use(CellGroup)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')