import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/Layout.vue'
import login from "../views/Login";
import home2 from "../views/ProjectPage";

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect:"login",
    children:[
      {
        path:"case",
        name:'case',
        component:() => import("@/views/CasePage"),
      },
      {
        path:"project",
        name: "project",
        component:() => import("../views/ProjectPage"),
      },
      {
        path: "env",
        name: "env",
        component: () => import("../views/EnvPage"),
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
