import { ref, watch } from 'vue';
import { useQuasar } from 'quasar';

const STORAGE_KEY = 'user-dark-mode';
let initialized = false;
const isDark = ref<boolean>(false);
let toggle = () => {};

export function useDarkMode() {
  const $q = useQuasar();

  if (!initialized) {
    initialized = true;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) {
      $q.dark.set(JSON.parse(saved));
    }
    isDark.value = $q.dark.isActive;
    watch(
      () => $q.dark.isActive,
      (newVal) => {
        isDark.value = newVal;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newVal));
      },
    );
    toggle = () => {
      $q.dark.toggle();
    };
  }

  return {
    isDark,
    toggle,
  };
}
