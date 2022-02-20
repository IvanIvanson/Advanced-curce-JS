import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/Home.vue'
import Home from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Body',
    component: Home,
    
  },
  
  {
    path: '/about',
    name: 'Home',
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: 
    () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    About
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
