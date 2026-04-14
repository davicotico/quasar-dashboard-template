<script lang="ts"></script>
<template>
  <div class="absolute-bottom">
    <q-banner :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
      <template v-slot:avatar>
        <q-icon name="book" color="primary" />
      </template>
      This project is in DEV mode.
      <div>Quasar v{{ $q.version }}</div>
      <template v-slot:action>
        <q-btn flat color="primary" label="Ok" />
      </template>
    </q-banner>
  </div>
</template>
