import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/outros/:valor',
    name: 'outros',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/OutrosView.vue')
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: () => import('../views/VuexView.vue')
  },
  {
    path: '/composition',
    name: 'composition',
    component: () => import('../views/CompositionView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
