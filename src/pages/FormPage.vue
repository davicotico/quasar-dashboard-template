<script setup lang="ts">
import ReadonlyField from 'src/shared/components/ReadonlyField.vue';
import DatePickerInput from 'src/shared/components/DatePickerInput.vue';
import { ref } from 'vue';

const today = ref('21/04//2026');

const CODE = `
//script

const today = ref('21/04//2026');

// template
<date-picker-input v-model="today" label="Date example" />

<readonly-field label="Serie" value="5/2026"></readonly-field>
`;
</script>
<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col">
        <h3>Forms</h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <q-card flat bordered>
          <q-card-section class="row q-col-gutter-md">
            <div class="col-12 col-md-6">
              <date-picker-input v-model="today" label="Date example" />
            </div>
            <div class="col-12 col-md-6">
              <readonly-field label="Serie" value="5/2026"></readonly-field>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h3>How to use</h3>
        <code>
          <pre
            >{{ CODE }}
        </pre
          >
        </code>
      </div>
    </div>
  </div>
</template>
