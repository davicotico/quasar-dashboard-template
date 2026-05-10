<script setup lang="ts">
import { type QTableColumn } from 'quasar';
import { ref } from 'vue';
import ContactCard from '../ContactCard.vue';
import { LISTA_CONTACTOS } from './data';
import { type Contact } from '../models';

const filter = ref('');

const columns: QTableColumn[] = [
  { name: 'displayName', label: 'Display Name', field: 'displayName' },
  { name: 'phone', label: 'Phone', field: 'phone' },
  { name: 'office', label: 'Office', field: 'office' },
  { name: 'mail', label: 'Email', field: 'mail' },
  { name: 'jobTitle', label: 'Job Title', field: 'jobTitle' },
];
function searchContacts(rows: readonly Contact[], terms: string): readonly Contact[] {
  const lowerCaseTerms = (terms || '').toLowerCase();
  if (!lowerCaseTerms) {
    return rows;
  }
  const filteredRows = rows.filter((row) => {
    return (
      row.displayName?.toLowerCase().includes(lowerCaseTerms) ||
      row.mail?.toLowerCase().includes(lowerCaseTerms)
    );
  });
  return filteredRows;
}
</script>
<template>
  <div class="q-pa-md">
    <q-table
      :rows="LISTA_CONTACTOS"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :filter-method="searchContacts"
      grid
      rows-per-page-label="Filas visibles"
      :pagination-label="(start, end, total) => `${start}-${end} de ${total}`"
      :rows-per-page-options="[12, 24, 36]"
      hide-header
    >
      <template v-slot:top>
        <q-input
          dense
          debounce="300"
          v-model="filter"
          placeholder="Buscar por nombres, apellidos o email"
          outlined
          class="full-width"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition">
          <contact-card v-bind="props.row"></contact-card>
        </div>
      </template>
    </q-table>
  </div>
</template>
