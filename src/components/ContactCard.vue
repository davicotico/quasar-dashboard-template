<script setup lang="ts">
import { computed } from 'vue';
import { type Contact } from './models';

const props = defineProps<Contact>();

const avatarLetters = computed(() => {
  return getLetters(props.displayName);
});

function getLetters(fullName: string): string {
  const arr = fullName.split(' ');
  if (!arr[1]) {
    return `${arr[0]?.charAt(0)}`;
  }
  return `${arr[0]?.charAt(0)}${arr[1]?.charAt(0)}`;
}
</script>
<template>
  <q-card class="my-card text-center" flat bordered style="height: 320px">
    <q-card-section class="q-py-sm q-px-sm">
      <q-avatar size="100px" class="q-mb-sm shadow-1" color="primary" text-color="white">{{
        avatarLetters
      }}</q-avatar>
      <div class="text-h6">{{ displayName }}</div>
      <div class="text-subtitle2 text-grey-7">{{ jobTitle }}</div>
      <q-chip size="16px" :ripple="false" color="primary" outline>
        <q-avatar icon="phone" color="primary" text-color="white" />
        Int. {{ phone }}
      </q-chip>
    </q-card-section>
    <q-separator inset />
    <q-card-section class="q-py-xs">
      <div class="text-subtitle2 text-grey">
        {{ mail }}
      </div>
    </q-card-section>
    <q-card-section class="q-pt-none q-px-sm">
      <div class="text-subtitle2">
        {{ office }}
      </div>
    </q-card-section>
    <!-- <q-card-actions align="center">
      <q-btn flat round color="primary" icon="phone" />
      <q-btn flat round color="secondary" icon="email" />
    </q-card-actions> -->
  </q-card>
</template>
