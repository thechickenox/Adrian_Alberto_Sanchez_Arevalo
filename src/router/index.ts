import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
import HomeView from '../views/HomeView.vue'
=======

import FormLogin from '../components/Forms/FormLogin.vue';
import RegirterForm from '../components/Forms/RegirterForm.vue';
import DdSuarios from '../components/Forms/DdSuarios.vue';


>>>>>>> origin/ExamenU1

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
<<<<<<< HEAD
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
=======
    { path: '/',
      name: 'FormLogin',
      component: FormLogin 
    },
    { path: '/Register',
    name: 'RegirterForm',
    component: RegirterForm 
    },
    { path: '/DB',
    name: 'DdSuarios',
    component: DdSuarios 
    },
   
>>>>>>> origin/ExamenU1
  ]
})

export default router
