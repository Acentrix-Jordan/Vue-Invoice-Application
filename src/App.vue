<script setup>
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "./components/Sidebar.vue";
import InvoiceDashboard from "./views/InvoiceDashboard.vue";
</script>

<template>
  <div class="flex bg-gray-100 dark:bg-slate-900 dark:text-white">
    <Sidebar />
    <div class="container mx-auto px-6">
      <InvoiceDashboard />
    </div>
  </div>
</template>
