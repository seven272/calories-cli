import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/Index.vue'

const routes = [
  {
    path: '/',
    alias: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About.vue')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('@/pages/Info.vue')
  },
  {
    path: '/:404page(.*)',
    name: '404',
    component: () => import('@/pages/Page404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
