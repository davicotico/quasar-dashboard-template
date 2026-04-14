<script setup lang="ts">
import EssentialLink from "src/components/EssentialLink.vue";
import { type EssentialLinkProps } from "src/shared/types/sidebar.type";

const linksList: EssentialLinkProps[] = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];
</script>
<template>
  <q-list>
    <q-item-label header> Essential Links 123</q-item-label>
    <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
  </q-list>
</template>
