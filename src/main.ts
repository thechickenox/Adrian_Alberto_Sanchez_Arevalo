import './assets/main.css'

import { createApp } from 'vue'
<<<<<<< HEAD
=======
import { createPinia } from 'pinia'

>>>>>>> origin/ExamenU1
import App from './App.vue'
import router from './router'

const app = createApp(App)

<<<<<<< HEAD
=======
app.use(createPinia())
>>>>>>> origin/ExamenU1
app.use(router)

app.mount('#app')
