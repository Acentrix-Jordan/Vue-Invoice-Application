<template>
  <div
    class="z-50 bg-sidebar flex flex-col w-fit h-screen justify-between rounded-r-3xl sticky top-0"
  >
    <div>
      <div class="flex justify-center items-center text-white">
        <img src="../assets/logo.svg" alt="" width="103" height="103" />
      </div>
    </div>
    <div>
      <div class="flex justify-center items-center w-full mb-8">
        <button @click="toggleDark()">
          <font-awesome-icon
            v-if="!isDark"
            icon="fa-solid fa-moon"
            class="text-secondary w-5 h-auto"
          />
          <font-awesome-icon
            v-else
            icon="fa-solid fa-sun"
            class="text-secondary w-5 h-auto"
          />
        </button>
      </div>
      <hr class="bg-secondary w-full h-{1px} mb-8" />
      <div class="mb-8 flex justify-center items-center">
        <router-link to="/">
          <img
            src="../assets/profile-picture.JPG"
            alt="Test"
            class="w-10 h-auto rounded-full"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
