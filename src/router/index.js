import { createRouter, createWebHistory } from 'vue-router'

import Pancake from '../layout/Pancake.vue'
import Blank from '../layout/Blank.vue'
import Home from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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