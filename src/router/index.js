import { createWebHistory,createWebHashHistory, createRouter } from 'vue-router'
import Layout from "@/components/Layout/index.vue";

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/abin-web/tools',
    hidden: true,
    children: [
      {
        path: '/abin-web/home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/abin-web/games',
        component: () => import('@/views/games/index.vue')
      },
      {
        path: '/abin-web/tools',
        component: () => import('@/views/tools/index.vue')
      },
      {
        path: '/abin-web/notes',
        component: () => import('@/views/notes/index.vue')
      },
      {
        path: '/abin-web/relax',
        component: () => import('@/views/relax/index.vue')
      },
      {
        path: '/abin-web/demos',
        component: () => import('@/views/demos/index.vue')
      },
    ],
  },
  {
    path: '/abin-web/links',
    name: 'linkes',
    component: () => import('@/views/links/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/abin-web/tools',
    hidden: true
  }
]

const createRoute = () =>
  createRouter({
    history: createWebHistory(),
    routes: constantRoutes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0 }
      }
    }
  })

const router = createRoute()
export default router
