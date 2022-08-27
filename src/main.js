import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from "@/store"

//Карта

const app = createApp(App)
app.use(store)
app.mount('#app')
