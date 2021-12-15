import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ResumeInfo from '../components/ResumeInfo.vue'

const About = { template: '<div>About</div>' }

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: ResumeInfo
  },
  {
    path: '/crypto',
    name: 'crypto',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
