import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import '@/assets/css/global.css'
import 'element-plus/dist/index.css'
import  'dayjs/locale/zh-cn'
import locale from 'element-plus/es/locale/lang/zh-cn'
import axios from "axios";
// 引入css的全局设置



createApp(App).use(store).use(router).use(ElementPlus,{locale,size:'small'}).mount('#app')
