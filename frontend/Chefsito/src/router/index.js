import { createRouter, createWebHistory } from 'vue-router'
import HomeSignout from "../views/HomeSignout.vue"


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeSignout
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
