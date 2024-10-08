import { createApp } from 'vue'
import './app/styles/style.scss'
import {createPinia} from "pinia";
import {router} from "./app/router";
import App from "./app";

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
