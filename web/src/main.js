import { createApp } from 'vue'
import register from './common/register.vue'
import router from './router'
import store from './store'

createApp(register).use(store).use(router).mount('#app')
