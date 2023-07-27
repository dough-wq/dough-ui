import { createApp } from "vue"
import App from './app.vue'
import DIcon from "../packages/components/icon"
import '@dough-ui/theme-chalk/src/index.scss'

const app = createApp(App);
app.use(DIcon)

app.mount('#app')
