<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title> Quasar App </q-toolbar-title>
        <q-btn
          flat
          round
          @click="$q.dark.toggle()"
          :icon="$q.dark.isActive ? 'dark_mode' : 'light_mode'"
        />
        <div>
          <q-separator dark vertical />
          <user-toolbar></user-toolbar>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <sidebar-menu />
      <sidebar-bottom></sidebar-bottom>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import UserToolbar from 'src/shared/components/UserToolbar.vue';
import SidebarMenu from 'src/shared/components/sidebar/SidebarMenu.vue';
import SidebarBottom from 'src/shared/components/sidebar/SidebarBottom.vue';

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
onMounted(() => {
  console.log('Desde MainLayout.vue');
});
</script>
