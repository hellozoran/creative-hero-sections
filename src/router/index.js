import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home.vue'
import Amps from '../views/amps.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/amps',
    name: 'Amps',
    component: Amps
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router