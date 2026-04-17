<script setup lang="ts">
import { type EssentialLinkProps } from 'src/shared/types/sidebar.type';
import SidebarMenuItem from './SidebarMenuItem.vue';

const simpleMenu: EssentialLinkProps[] = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: '/login',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: '/login',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: '/login',
  },
];
console.log(simpleMenu);
</script>
<template>
  <q-list>
    <q-item-label header>Menu principal</q-item-label>
    <sidebar-menu-item
      v-for="link in simpleMenu"
      :key="link.title"
      v-bind="link"
    ></sidebar-menu-item>
    <q-expansion-item
      expand-separator
      icon="settings"
      label="Configuración"
      caption="Preferencias y ajustes"
      :content-inset-level="0.3"
    >
      <q-item clickable v-ripple to="/config/perfil">
        <q-item-section avatar>
          <q-icon name="person" />
        </q-item-section>
        <q-item-section>Perfil</q-item-section>
      </q-item>
      <q-item clickable v-ripple to="/config/seguridad">
        <q-item-section avatar>
          <q-icon name="lock" />
        </q-item-section>
        <q-item-section>Seguridad</q-item-section>
      </q-item>
    </q-expansion-item>

    <q-expansion-item icon="folder" label="Documentos" :content-inset-level="0.3">
      <q-expansion-item icon="description" label="Informes" dense-toggle :content-inset-level="0">
        <q-item clickable v-ripple to="/informes/ventas">
          <q-item-section>Ventas 2025</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/informes/gastos">
          <q-item-section>Gastos mensuales</q-item-section>
        </q-item>
      </q-expansion-item>
      <q-item clickable v-ripple to="/documentos/recibos">
        <q-item-section avatar>
          <q-icon name="receipt"></q-icon>
        </q-item-section>
        <q-item-section>Recibos</q-item-section>
      </q-item>
    </q-expansion-item>
  </q-list>
</template>
