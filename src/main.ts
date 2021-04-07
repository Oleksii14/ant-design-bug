import { createApp } from 'vue'
import App from './App.vue'
import { Select } from 'ant-design-vue';

const app = createApp(App)
app.component(Select.name, Select)
app.component(Select.Option.name, Select.Option)

app.mount('#app')
