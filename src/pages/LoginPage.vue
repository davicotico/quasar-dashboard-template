<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const loading = ref(false);
const user = ref('');
const pass = ref('');

function enter() {
  router.push({ name: 'home' });
}

onMounted(() => {});
</script>
<template>
  <q-layout>
    <q-page-container>
      <q-page class="row items-center justify-evenly">
        <div class="full-width" style="max-width: 400px">
          <q-card class="q-pa-none">
            <q-card-section class="bg-grey-4 text-center">
              <q-img
                src="/icons/favicon-128x128.png"
                style="height: 128px; width: 128px"
                class="q-mt-sm"
              ></q-img>
              <h5 class="q-my-md text-center">Login</h5>
            </q-card-section>
            <q-card-section>
              <q-form @submit.prevent="enter()" ref="formRef">
                <q-input
                  v-model="user"
                  label="Username"
                  outlined
                  class="q-mb-md"
                  maxlength="20"
                  autofocus
                >
                  <template v-slot:prepend>
                    <q-icon name="person" />
                  </template>
                </q-input>
                <q-input
                  v-model="pass"
                  label="Password"
                  outlined
                  class="q-mb-md"
                  type="password"
                  maxlength="100"
                >
                  <template v-slot:prepend>
                    <q-icon name="lock" />
                  </template>
                </q-input>

                <div class="row q-gutter-sm">
                  <q-btn
                    label="Enter"
                    class="full-width col-3 q-mb-md"
                    color="primary"
                    type="submit"
                  />
                </div>
              </q-form>
            </q-card-section>
            <q-inner-loading :showing="loading">
              <q-spinner-gears size="50px" color="primary" />
            </q-inner-loading>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
