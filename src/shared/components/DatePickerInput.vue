<script setup lang="ts">
import { onMounted } from 'vue';

type Props = {
  label: string;
};
const props = defineProps<Props>();
const fecha = defineModel<string>();
onMounted(() => {});
</script>
<template>
  <q-input outlined v-model="fecha" :label="props.label">
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-date v-model="fecha" minimal mask="DD/MM/YYYY">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Cerrar" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>
