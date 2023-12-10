import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(vue3GoogleLogin, {
    clientId: '284818353632-2mej8vga59ahovi9r601m8mdbca6b5tt.apps.googleusercontent.com'
  })

app.use(createPinia())
app.use(router)

app.mount('#app')
