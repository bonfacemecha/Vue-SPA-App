require('./bootstrap');

 window.Vue = require('vue').default;
 
//  import router from './router';
 import App from './layouts/App.vue';
 import Vue from 'vue'
 import Swal from 'sweetalert2'
 import store from './store'
 import BookingSwiper from 'swiper';
//  import 'swiper/css/swiper.min.css';
//  import 'swiper/js/swiper.min.js';
 import numeral from 'numeral'
 import { Form, HasError, AlertError } from 'vform'
 import VueRouter from 'vue-router';
 import VeeValidate from 'vee-validate';

import Home from './pages/Home.vue';
import About from './pages/About.vue';

// Vue.use(VeeValidate, { inject: false });
Vue.use(VueRouter);
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
window.BookingSwiper = BookingSwiper;
window.Form = Form;
// Vue.component(HasError.name, HasError);
// Vue.component(AlertError.name, AlertError);

//Sweet alert
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

window.Toast = Toast;
 
//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

//filters
Vue.filter('upText', function(text) {
    text = String(text).toLowerCase();
    return text.charAt(0).toUpperCase() + text.slice(1);
});

Vue.filter('formatNumber', function(n) {
    return String(n).replace(/(.)(?=(\d{3})+$)/g, '$1,');
});

Vue.filter('formatCurrency', function(n) {
    var number = numeral(n);
    var string = number.format('0,0.00');
    return string;
});

Vue.filter('getPercentage', function(n) {
    n *= 100;
    return parseFloat(n.toFixed(2));
});

//Capitalise filter
Vue.filter('capitalise', function(phrase) {
    return phrase
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
});

//Directives
Vue.directive('formatValue', {
    bind: function(el, binding, vnode) {
        var number = numeral(el.value);
        el.value = number.format('0,0.00');
        el.style.color = 'red'
    }
})


const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: About
        },
    ]
});

const app = new Vue({
     router, store,
     el: '#app',
     render: h => h(App)
 });