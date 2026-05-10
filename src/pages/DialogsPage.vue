<script setup lang="ts">
import {
  showConfirmDialog,
  showErrorNotification,
  showMessageDialog,
  showSuccessNotification,
} from 'src/shared/utils/dialogs';

function mostrarMensaje() {
  showMessageDialog('Esto es un mensaje');
}
function confirmar() {
  const result = showConfirmDialog('Are you sure?');
  result.onOk(() => {
    showSuccessNotification('This is a YES');
  });
  result.onCancel(() => {
    showErrorNotification('Canceled!');
  });
}
</script>
<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col">
        <h3>Dialogs and Notifications</h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <q-btn label="Mostrar mensaje" @click="mostrarMensaje()"></q-btn>
      </div>
      <div class="col">
        <q-btn label="Confirmar" @click="confirmar()"></q-btn>
      </div>
    </div>
  </div>
</template>
