<template>
  <q-item clickable :to="href">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ text }}</q-item-label>
      <q-item-label caption>{{ tooltip }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { type MenuItem } from './sidebar.type';

withDefaults(defineProps<MenuItem>(), {
  tooltip: '',
  href: '/',
  icon: '',
});
</script>
