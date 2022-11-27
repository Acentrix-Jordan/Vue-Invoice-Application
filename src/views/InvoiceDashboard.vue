<template>
  <main class="">
    <div
      class="flex justify-between items-center w-fill max-w-4xl mx-auto pt-16 mb-36"
    >
      <div>
        <h1>Invoices</h1>
        <p class="body1 text-secondaryLight">No invoices</p>
      </div>
      <div class="flex">
        <select name="" id="" placeholder="Filter by status" class="mr-8">
          <option value="">Filter by status</option>
          <option value="">X</option>
          <option value="">Y</option>
          <option value="">Z</option>
        </select>
        <button class="btn-brand">
          <font-awesome-icon icon="fa-solid fa-circle-plus mr-8" />
          New Invoice
        </button>
      </div>
    </div>
    <div class="max-w-[242px] mx-auto text-center my-auto">
      <img
        src="../assets/No Invoices Image.png"
        alt="No invoices infographic"
        width="241"
        height="200"
        class="mb-16"
      />
      <h2 class="mb-5">There is nothing here</h2>
      <p class="body1 text-secondaryLight dark:text-secondaryLightest">
        Create an invoice by clicking the <br />
        <strong>New Invoice</strong> button and get started!
      </p>
    </div>
  </main>
</template>
<script setup>
import { ref } from "vue";
const invoices = ref(false);
</script>
