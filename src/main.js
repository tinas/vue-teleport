import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Info from './assets/info.svg'
import Success from './assets/success.svg'
import Warning from './assets/warning.svg'
import Error from './assets/error.svg'
import X from './assets/x.svg'

const app = createApp(App)

app.component('info', Info)
app.component('success', Success)
app.component('warning', Warning)
app.component('error', Error)
app.component('x', X)

app.mount('#app')
