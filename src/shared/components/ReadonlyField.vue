<script setup>
defineProps({
  label: String,
  value: String,
});
</script>
<template>
  <q-field borderless :label="label" stack-label>
    <template v-slot:control>
      <div class="self-center full-width no-outline">
        {{ value }}
      </div>
    </template>
  </q-field>
</template>
