import {  createRouter, createWebHistory } from "vue-router"
import Home from '@/views/Home.vue'

const base = import.meta.env.VITE_BASE_URL || '/';

const routes= [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/overview',
    name: 'Overview',
    redirect: '/overview/centerIntroduction',
    component: () => import('@/views/overview/Index.vue'),
    children: [
      {
        path: 'centerIntroduction',
        name:'CenterIntroduction',
        component: () => import('@/views/overview/CenterIntroduction.vue'),
        meta: {
          // tab
          tabName:0,
        }
      },
      {
        path: 'settleIn',
        name:'SettleIn',
        component:() => import('@/views/overview/SettleIn.vue'),
        meta: {
          // tab
          tabName:1,
        }
      },
      {
        path: 'settleIn/:name',
        name: 'SettleInDetail',
        props:true,
        component:() => import('@/views/overview/SettleInDetail.vue'),
        meta: {
          // tab
          tabName:1,
        }
      },
      {
        path: 'welfareOrganization',
        name: 'WelfareOrganization',
        component:() => import('@/views/overview/WelfareOrganization.vue'),
        meta: {
          // tab
          tabName:2,
        }
      },
      {
        path: 'welfareOrganization/:name',
        name:'WelfareOrganizationDetail',
        props:true,
        component:() => import('@/views/overview/WelfareDetail.vue'),
        meta: {
          // tab
          tabName:2,
        }
      },
      {
        path: 'construction',
        name:'Construction',
        component:() => import('@/views/overview/Construction.vue'),
        meta: {
          // tab
          tabName:3,
        }
      }
    ]
  },
  {
    path: '/floorGuide',
    name: 'FloorGuide',
    component: () => import('@/views/floorGuide/Index.vue'),
    children: [
      
    ]
  },
  {
    path: '/items',
    name: 'Items',
    component: () => import('@/views/items/Index.vue'),
  },
  {
    path: '/items/:name',
    name: 'ItemDetail',
    props:true,
    component: () => import('@/views/items/ItemDetail.vue'),
  },
  {
    path: '/armyHead',
    name: 'ArmyHead',
    component: () => import('@/views/armyHead/Index.vue'),
    children: [
    ]
  },
  {
    path: '/welfare',
    name: 'Welfare',
    component: () => import('@/views/welfare/Index.vue'),
    children: [
    ]
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/news/Index.vue')
  }
]


const router = createRouter({
  history: createWebHistory(base),
  routes
})
export default router 