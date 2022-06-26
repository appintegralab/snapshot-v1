import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar, Notify } from 'quasar'
import quasarLang from 'quasar/lang/pt-BR'

// Import Tailwind css
import './index.css'
// Import Quasar css
import 'quasar/src/css/index.sass'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app
    .use(pinia)
    .use(Quasar, {
        plugins: { Notify }, 
        lang: quasarLang,
    })

app.mount('#app')
