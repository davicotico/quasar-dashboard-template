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
      {
        path: '/contact-list',
        name: 'contact.list',
        component: () => import('pages/ContactListPage.vue'),
      },
      {
        path: '/dialogs-notifications',
        name: 'dialogs.notification',
        component: () => import('pages/DialogsPage.vue'),
      },
      {
        path: '/menu-editor',
        name: 'menueditor',
        component: () => import('pages/MenuEditorPage.vue'),
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
