<script setup lang="ts">
import { ref } from 'vue';
import type { MenuItem } from 'src/shared/components/sidebar/sidebar.type';
import UserToolbar from 'src/shared/components/UserToolbar.vue';
import SidebarMenu from 'src/shared/components/sidebar/SidebarMenu.vue';
import SidebarBottom from 'src/shared/components/sidebar/SidebarBottom.vue';
import { useDarkMode } from 'src/shared/composables/useDarkMode';
import { MENU_ITEMS } from 'src/data/menu-items';

const { isDark, toggle } = useDarkMode();

const leftDrawerOpen = ref(false);
const menuItems = ref<MenuItem[]>(MENU_ITEMS);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
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
