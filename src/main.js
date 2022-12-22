import { createApp } from 'vue'
import axios from 'axios'
import router from './router/index'
import App from './App.vue'
import './index.css'

axios.defaults.baseURL = import.meta.env.VITE_API_BASEURL

const app = createApp(App)
app.use(router)
app.provide('$api', axios)
app.mount('#app')