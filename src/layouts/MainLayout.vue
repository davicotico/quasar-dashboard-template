<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { MenuItem } from 'src/shared/components/sidebar/sidebar.type';
import UserToolbar from 'src/shared/components/UserToolbar.vue';
import SidebarMenu from 'src/shared/components/sidebar/SidebarMenu.vue';
import SidebarBottom from 'src/shared/components/sidebar/SidebarBottom.vue';
import { useDarkMode } from 'src/shared/composables/useDarkMode';

const { isDark, toggle } = useDarkMode();

const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const menuItems = ref<MenuItem[]>([
  {
    text: 'Forms',
    href: '/forms',
    icon: 'edit',
    tooltip: 'Form components',
    children: [],
  },
  {
    text: 'Sidebar Menu',
    href: '/sidebar',
    icon: 'menu',
    tooltip: 'Sidebar menu elements',
    children: [],
  },
  {
    text: 'Contact List',
    href: '/contact-list',
    icon: 'person',
    tooltip: 'Active Directory',
    children: [],
  },
  {
    text: 'Dialogs',
    href: '/dialogs-notifications',
    icon: 'chat',
    tooltip: 'How to use',
    children: [],
  },
  {
    text: 'Menu Editor',
    href: '/menu-editor',
    icon: 'menu',
    tooltip: 'How to use',
    children: [],
  },
  {
    text: 'OpenStreetMap',
    href: '/open-layers',
    icon: 'map',
    tooltip: 'Maps with Open Layers',
    children: [],
  },
  {
    text: 'Documents',
    href: '/documents',
    icon: 'folder',
    tooltip: 'Browse your documents',
    children: [
      {
        text: 'Reports',
        href: '/documents/reports',
        icon: 'description',
        tooltip: 'View all reports',
        children: [
          {
            text: 'Sales 2026',
            href: '/reports/sales',
            icon: 'bar_chart',
            tooltip: 'Sales reports for 2025',
            children: [],
          },
          {
            text: 'Monthly Expenses',
            href: '/reports/expenses',
            icon: 'pie_chart',
            tooltip: 'Monthly expense reports',
            children: [],
          },
        ],
      },
      {
        text: 'Receipts',
        href: '/documents/receipts',
        icon: 'receipt',
        tooltip: 'View all receipts',
        children: [],
      },
    ],
  },
  {
    text: 'Configuration',
    href: '/config',
    icon: 'settings',
    tooltip: 'Preferences and settings',
    children: [
      {
        text: 'Profile',
        href: '/config/profile',
        icon: 'person',
        tooltip: 'Manage your profile',
        children: [],
      },
      {
        text: 'Security',
        href: '/config/security',
        icon: 'lock',
        tooltip: 'Security settings',
        children: [],
      },
    ],
  },
  {
    text: 'Login',
    href: '/login',
    icon: 'lock',
    tooltip: 'Go to login page',
    children: [],
  },
]);

onMounted(() => {});
</script>
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title> Quasar App </q-toolbar-title>
        <q-btn flat round @click="toggle()" :icon="isDark ? 'dark_mode' : 'light_mode'" />
        <div>
          <q-separator dark vertical />
          <user-toolbar></user-toolbar>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <sidebar-menu :menu-items="menuItems" />
      <sidebar-bottom></sidebar-bottom>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
