<script setup lang="ts">
import { type MenuItem } from './sidebar.type';
import SidebarMenuItem from './SidebarMenuItem.vue';

defineProps<{
  menuItems: MenuItem[];
}>();
</script>
<template>
  <q-list>
    <q-item-label header>Menu principal</q-item-label>
    <sidebar-menu-item :items="menuItems" :level="0" />
  </q-list>
</template>
