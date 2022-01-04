import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: 'https://huan-portafolio.netlify.app/',
    name: 'Home',
    component: Home
  },
  {
    path: 'huan-portafolio.netlify.app/portafolio',
    name: 'Portafolio',
    component: () => import('../views/Portafolio.vue')
  },
  {
    path: 'huan-portafolio.netlify.app/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: 'huan-portafolio.netlify.app/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: 'huan-portafolio.netlify.app/skills',
    name: 'Skills',
    component: () => import('../views/Skills.vue')
  },
  {
    path: 'huan-portafolio.netlify.app/prueba',
    name: 'Prueba',
    component: () => import('../views/Prueba.vue')
  },
  { path: 'huan-portafolio.netlify.app/:pathMatch(.*)*', 
    component:() => import('../views/404.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    window.scrollTo(0,0);
  }
})

export default router
