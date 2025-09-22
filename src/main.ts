// --- DARK MODE INIT (do not remove) ---
const savedTheme = localStorage.getItem('theme')
const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
const initialTheme =
  savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : prefersDark ? 'dark' : 'light'
document.documentElement.dataset.theme = initialTheme
// --- END DARK MODE INIT ---

import './styles/theme.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
