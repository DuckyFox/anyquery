import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@App/Styles/style.css'
import '@/Shared/Assets/Fonts/fonts.css'
import App from './App/App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')