import { ref } from "vue";
import { defineStore } from "pinia";

export const useAppConfigStore = defineStore("appConfig", () => {
  let darkMode = ref(false);

  function toggleDarkMode() {
    darkMode.value = !darkMode.value;
  }

  return { darkMode, toggleDarkMode };
});
