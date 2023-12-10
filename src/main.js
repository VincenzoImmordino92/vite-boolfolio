import { createApp } from 'vue'
//importiamo il nostro router all'interno del main.js
import { router } from './router'
import './style.scss'
import App from './App.vue'

//prima del montaggio utilizziamo il metodo use che ha la funzione di innestare le nostre router sull'app

createApp(App).use(router).mount('#app')
