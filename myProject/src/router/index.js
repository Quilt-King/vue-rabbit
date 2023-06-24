import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/category/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children:[
        {
          path:'',
          name:"home",
          component: Home
        },
        {
          path:'category',
          name:"分类",
          component: Category
        }
      ]
    },{
      path:'/login',
      name:"登录",
      component:Login
    }
  ]
})

export default router
