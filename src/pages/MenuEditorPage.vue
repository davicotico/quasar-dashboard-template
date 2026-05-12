<script setup lang="ts">
import { MenuEditor } from '@davicotico/menu-editor';
import '@davicotico/menu-editor/lib/css/styles.css';
import { MENU_ITEMS } from 'src/data/menu-items';
import { type MenuItem } from 'src/shared/components/sidebar/sidebar.type';
import { showConfirmDialog } from 'src/shared/utils/dialogs';
import { onMounted, ref } from 'vue';

let menuEditor: MenuEditor | null = null;
const isEditing = ref(false);
const form = ref<MenuItem>({ text: '', children: [], href: '', icon: '', tooltip: '' });
onMounted(() => {
  menuEditor = new MenuEditor('menu-editor', { maxLevel: 2 });
  menuEditor.onClickEdit((e) => {
    const item = e.item.getDataset();
    form.value.text = item.text;
    form.value.href = item.href;
    form.value.icon = item.icon;
    form.value.tooltip = item.tooltip;
    menuEditor?.edit(e.item);
    isEditing.value = true;
  });
  menuEditor.onClickDelete((e) => {
    const text = e.item.getDataset().text;
    const result = showConfirmDialog(`Desea eliminar el item ${text}?`);
    result.onOk(() => {
      e.item.remove();
    });
  });
  menuEditor.setArray(MENU_ITEMS);
  menuEditor.mount();
});

function addItem() {
  menuEditor?.add({
    text: form.value.text,
    href: form.value.href as string,
    icon: form.value.icon as string,
    tooltip: form.value.tooltip as string,
  });
  isEditing.value = false;
  clearForm();
}
function updateItem() {
  menuEditor?.update({
    text: form.value.text,
    href: form.value.href as string,
    icon: form.value.icon as string,
    tooltip: form.value.tooltip as string,
  });
  isEditing.value = false;
  clearForm();
}
function clearForm() {
  form.value = {
    text: '',
    href: '',
    icon: '',
    tooltip: '',
  };
}
</script>
<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col">
        <h3>Menu Editor</h3>
      </div>
    </div>
    <div class="row q-col-gutter-md">
      <div class="col">
        <div id="menu-editor"></div>
      </div>
      <div class="col">
        <q-card>
          <q-card-section class="column q-col-gutter-md">
            <div class="col">
              <q-input v-model="form.text" label="Text" outlined></q-input>
            </div>
            <div class="col">
              <q-input v-model="form.href" label="To (route)" outlined></q-input>
            </div>
            <div class="col">
              <q-input v-model="form.icon" label="Icon" outlined>
                <template v-slot:append>
                  <q-btn round dense flat :icon="form.icon" />
                </template>
              </q-input>
            </div>
            <div class="col">
              <q-input v-model="form.tooltip" label="Tooltip/Caption" outlined></q-input>
            </div>
          </q-card-section>
          <q-card-actions>
            <q-btn label="Guardar cambios" @click="updateItem()" :disable="!isEditing"></q-btn>
            <q-btn label="Agregar" color="primary" @click="addItem()"></q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>
