import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Avue from '@smallwei/avue'
import '@smallwei/avue/lib/index.css';
import App from './App.vue'
const app = createApp(App)
import router from './router'
// 权限路由
import './permission'
import './assets/main.less'
import pinia from './pinia'
// 引入暗黑模式 element-plus 2.2 内置暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'
// 自定义暗黑模式
import '@/styles/element-dark.scss'
// 引入全局组件布局
import PageWrapLayout from '@/components/PageWrapLayout/index.vue'
import print from 'vue3-print-nb'
import axios from './axios/index'
// 全局使用
// 全局ctx(this) 上挂载 $axios
app.config.globalProperties.$api = axios
app.use(print)
app.component('PageWrapLayout', PageWrapLayout)
app.use(ElementPlus)
app.use(pinia)
app.use(Avue)
app.use(router)

app.mount('#app')
