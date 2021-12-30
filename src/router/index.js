import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/Layout.vue'
import login from "../views/Login";
import home2 from "../views/home2";

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect:"login",
    children:[
      {
        path:"home",
        name:'home',
        component:() => import("@/views/Home"),
      },
      {
        path:"home2",
        name: "home2",
        component:() => import("../views/home2"),
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component:() => import("../views/Login"),
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
