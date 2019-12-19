import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Food from '../views/Food.vue'
import VueMeta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(VueMeta)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'main',
        component: Main
      },
      {
        path: '/food',
        name: 'food',
        component: Food
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
