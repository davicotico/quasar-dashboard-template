<template>
  <template v-for="item in items" :key="item.text">
    <q-expansion-item
      v-if="item.children && item.children.length > 0"
      expand-separator
      :icon="item.icon"
      :label="item.text"
      :caption="item.tooltip"
      :content-inset-level="getContentInsetLevel(level)"
      default-closed
    >
      <sidebar-menu-item :items="item.children" :level="level + 1" />
    </q-expansion-item>
    <q-item v-else clickable :to="item.href">
      <q-item-section v-if="item.icon" avatar>
        <q-icon :name="item.icon" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ item.text }}</q-item-label>
        <q-item-label v-if="item.tooltip" caption>{{ item.tooltip }}</q-item-label>
      </q-item-section>
    </q-item>
  </template>
</template>

<script setup lang="ts">
import { type MenuItem } from './sidebar.type';

type Props = {
  items: MenuItem[];
  level?: number;
};

withDefaults(defineProps<Props>(), {
  level: 0,
});

const getContentInsetLevel = (level: number): number => {
  if (level === 0) {
    return 0.3;
  }
  return 0;
};
</script>
