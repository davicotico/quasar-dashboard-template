import { Dialog } from 'quasar';
import { Notify } from 'quasar';

function showSuccessNotification(message: string) {
  showNotification(message, 'positive');
}
function showErrorNotification(message: string) {
  showNotification(message, 'negative');
}
function showInfoNotification(message: string) {
  showNotification(message, 'info');
}

function showWarningNotification(message: string) {
  showNotification(message, 'warning');
}

function showNotification(message: string, type: string = 'info') {
  Notify.create({
    type,
    message,
    position: 'top',
    progress: true,
  });
}

function showMessageDialog(message: string) {
  return Dialog.create({
    title: 'Aviso',
    ok: {
      label: 'Aceptar',
      color: 'primary',
    },
    message,
  });
}

function showConfirmDialog(message: string) {
  return Dialog.create({
    title: 'Confirmar',
    ok: {
      label: 'Aceptar',
      color: 'primary',
    },
    cancel: {
      label: 'Cancelar',
      color: 'primary',
      flat: true,
    },
    message,
    persistent: true,
    style: {
      accentColor: 'primary',
    },
  });
}

export {
  showSuccessNotification,
  showWarningNotification,
  showErrorNotification,
  showInfoNotification,
  showNotification,
  showMessageDialog,
  showConfirmDialog,
};
