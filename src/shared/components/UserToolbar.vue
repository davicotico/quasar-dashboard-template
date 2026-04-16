<script setup lang="ts">
import { useRouter } from 'vue-router';

defineProps({
  usuario: String,
});
const router = useRouter();

async function logout() {
  await router.push({ name: 'login' });
}
</script>
<template>
  <q-btn label="Usuario" flat stretch>
    <q-menu>
      <div class="row no-wrap q-pa-md">
        <div class="column">
          <div class="text-h6 q-mb-md">Settings</div>
          <!--  <q-toggle v-model="mobileData" label="Use Mobile Data" />
                  <q-toggle v-model="bluetooth" label="Bluetooth" /> -->
        </div>
        <q-separator vertical inset class="q-mx-lg" />
        <div class="column items-center">
          <q-avatar size="72px">
            <img src="https://avatars.githubusercontent.com/u/7417328?v=4&s=72" />
          </q-avatar>
          <div class="text-subtitle1 q-mt-md q-mb-xs">davicotico</div>
          <q-btn @click="logout()" color="primary" label="Logout" push size="sm" v-close-popup />
        </div>
      </div>
    </q-menu>
  </q-btn>
</template>
