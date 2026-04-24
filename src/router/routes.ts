import LoginPage from 'src/pages/LoginPage.vue';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: '/open-layers',
        name: 'open-layers',
        component: () => import('pages/OpenLayersPage.vue'),
      },
      {
        path: '/sidebar',
        name: 'sidebar',
        component: () => import('pages/SidebarPage.vue'),
      },
      {
        path: '/forms',
        name: 'forms',
        component: () => import('pages/FormPage.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
