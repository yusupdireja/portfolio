import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import { BiInstagram, LaFacebookSquare, BiWhatsapp } from 'oh-vue-icons/icons'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaFlag, RiZhihuFill } from 'oh-vue-icons/icons'
import { FaGamepad } from 'oh-vue-icons/icons' // FontAwesome
import { RiFolderMusicFill } from 'oh-vue-icons/icons' // Remix Icons
import { AiOverleaf } from 'oh-vue-icons/icons' // Ant Design
import { SiGatsby } from 'oh-vue-icons/icons' // Simple Icons
import { WiDaySunnyOvercast } from 'oh-vue-icons/icons' // Weather Icons

const app = createApp(App)

addIcons(FaGamepad, RiFolderMusicFill, AiOverleaf, SiGatsby, WiDaySunnyOvercast)
app.component('v-icon', OhVueIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
