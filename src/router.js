import Vue from  'vue'
import Router   from 'vue-router'
import Login from './components/auth/login'
import Signup from './components/auth/signup'
import Home from './components/views/home'
import CreateProduct from './components/views/createProduct'
import Product  from './components/views/product'
Vue.use(Router)
const router   = new Router ({
    mode: 'history',
    routes: [{
        path: '/login', component: Login
    }, {
        path: '/signup', component: Signup
    }, {
        path: '/',
        component: Home
    },{
        path: '/product/:id',
        component: Product
    }, {
        path: '/proudct/create',
        component: CreateProduct
    }]
})

export default  router