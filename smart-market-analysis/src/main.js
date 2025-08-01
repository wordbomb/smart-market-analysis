import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';  // 引入 Element Plus 全局样式


const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app');