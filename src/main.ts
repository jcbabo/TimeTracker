import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import '@fortawesome/fontawesome-free/css/all.css'
import store from './store'

createApp(App).use(store).mount('#app')
