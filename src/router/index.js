import { createRouter, createWebHistory } from 'vue-router'

import Pancake from '../layout/Pancake.vue'
import Blank from '../layout/Blank.vue'
import Home from '../views/home.vue'
import Amps from '../views/amps.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: Pancake
    }
  },
  {
    path: '/amps',
    name: 'Amps',
    component: Amps,
    meta: {
      layout: Pancake
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router