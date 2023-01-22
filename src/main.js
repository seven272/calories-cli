import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import layoutsComponents from '@/layouts/index.js'
import UiComponents from '@/components/UI/index.js'

const app = createApp(App)

// регистрирую глобально компоненты хэдер и футер
layoutsComponents.forEach(comp => {
  return app.component(comp.name, comp)
})
// регистрирую глобально компоненты интерфейса
UiComponents.forEach(comp => {
  return app.component(comp.name, comp)
})

app
  .use(store)
  .use(router)
  .mount('#app')
