import { createRouter,createWebHashHistory } from "vue-router";

const router = createRouter({
  history:createWebHashHistory(),//hash 模式：createWebHashHistory,history模式：createWebHistory
  routes: [
    {
      path: '/',
      redirect: '/loginBot'
    },
    {
      path: '/console',
      name: 'console',
      component: () => import('../pages/ConsolePage.vue')
    },
    {
      path: '/loginBot',
      name: 'loginbot',
      component: () => import('../pages/LoginBotPage.vue')
    },
    {
      path: '/catcat',
      name: 'catcat',
      component: () => import('../pages/CatCatPage.vue')
    }
  ]
})

export default router