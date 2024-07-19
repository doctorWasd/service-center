import { createApp } from 'vue'
import '@/assets/styles/index.css'
import App from './App.vue'
import router from './routes'
import { useFavicon } from '@vueuse/core'
import useVant from './utils/useVant'

useFavicon('@/assets/images/common/LOGO.jpg') 
const app = createApp(App)

useVant(app)
app.use(router)

app.mount('#app')

