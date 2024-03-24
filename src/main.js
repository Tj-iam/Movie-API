import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Navbar from './components/icons/navbar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import Secondbat from './components/icons/secondbat.vue'

createApp(App).mount('#app')
  .component('Navbar', Navbar)
  .component('SecondBat',Secondbat)
  

