import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Dialog
import 'vant/es/dialog/style';
import 'vant/es/toast/style';
// import dayjs from 'dayjs'

import App from './App.vue'
import router from './router'

import './assets/main.css'
const app = createApp(App)
// app.config.globalProperties.dayjs=dayjs//全局挂载
app.use(createPinia())
app.use(router)
app.mount('#app')
