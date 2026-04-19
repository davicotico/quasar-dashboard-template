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
<open-layers id="myMap" height="400px" :coordinate="{ lon, lat }" :zoom="18" />
`;
onMounted(() => {});
</script>
<template>
  <q-layout>
    <q-page-container>
      <q-page class="q-pa-md">
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6">
            <open-layers id="map" :coordinate="{ lon, lat }" :zoom="18" />
          </div>
          <div class="col-12 col-md-6">
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
