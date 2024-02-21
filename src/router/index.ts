import { createRouter, createWebHistory } from 'vue-router'

import FormLogin from '../components/Forms/FormLogin.vue';
import RegirterForm from '../components/Forms/RegirterForm.vue';
import DdSuarios from '../components/Forms/DdSuarios.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
   
  ]
})

export default router
