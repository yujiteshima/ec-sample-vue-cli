import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: '',
    component: Home,
  },
  {
    path: '/product_detail/:id',
    name: 'product_detail-id',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/produst_detail/_id.vue')
  },
  {
    path: 'user/wishlist',
    name: 'user-wishlist',
    component: () => import('../views/user/wishlist/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.ROOT_BASE, // new!
  routes
})

export default router