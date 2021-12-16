import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ResumeInfo from '../components/ResumeInfo.vue'
import CryptoLogo from '../components/CryptoLogo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: ResumeInfo
  },
  {
    path: '/crypto',
    name: 'crypto',
    component: CryptoLogo
    // props: {
    //   height: 150,
    //   width: 150
    // }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
