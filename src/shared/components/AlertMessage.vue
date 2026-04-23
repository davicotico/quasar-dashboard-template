<script setup lang="ts">
type Props = {
  type: 'success' | 'error';
  title?: string;
  message: string;
};
defineProps<Props>();
</script>
<template>
  <q-card flat bordered class="bg-green-11 q-my-sm">
    <q-card-section>
      <div class="text-h6 text-green-9">{{ title }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none text-green-9">
      {{ message }}
    </q-card-section>
  </q-card>
</template>
