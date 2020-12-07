import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacto',
    name: 'Contacto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import ('../views/Post.vue')
  },
  {
    path: '*',
    name: 'NoExiste',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NoExiste.vue')
  },
  {
    path: '/sobremi',
    name: 'Sobremi',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sobremi.vue')

  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
