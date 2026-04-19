<script setup lang="ts">
import { onMounted } from 'vue';
import OpenLayers from 'src/shared/components/open-layers/OpenLayers.vue';

const lon: number = -68.13446;
const lat: number = -16.497192;
const code = `
// script setup
const lon: number = -68.13446;
const lat: number = -16.497192;
// template
<open-layers height="400px" :coordinate="{ lon, lat }" />
`;
onMounted(() => {});
</script>
<template>
  <q-layout>
    <q-page-container>
      <q-page class="q-pa-md">
        <div class="row q-gutter-md">
          <div class="col-5 bg-green-2">
            <open-layers :coordinate="{ lon, lat }" />
          </div>
          <div class="col-5">
            <h5 class="q-my-sm">Instalar OpenLayers</h5>
            <code>npm install ol</code>
            <h5 class="q-my-md">How to use</h5>
            <code>
              <pre>
                {{ code }}
              </pre>
            </code>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
