<template>
  <div v-if="showInvoiceForm">
    <div
      class="z-10 w-5/12 min-h-full bg-white absolute top-0 left-20 pl-8 rounded-r-3xl pr-8 max-w-3xl"
    >
      <div
        class="pt-14 pb-20 pl-14 pr-6 overflow-y-scroll max-h-screen relative"
      >
        <h1 class="mb-14">New Invoice</h1>
        <form action="">
          <!-- Bill From -->
          <p class="mb-6 text-brand"><strong>Bill From</strong></p>
          <div class="flex flex-col mb-6">
            <label for="streetAddress">Street Address</label>
            <input id="streetAddress" type="text" />
          </div>
          <div class="columns-3 mb-12">
            <div class="flex flex-col">
              <label for="city">City</label>
              <input type="text" id="city" />
            </div>
            <div class="flex flex-col">
              <label for="postCode">Post Code</label>
              <input type="text" id="postCode" />
            </div>
            <div class="flex flex-col">
              <label for="country">Country</label>
              <input type="text" id="country" />
            </div>
          </div>
          <!-- Bill To -->
          <p class="text-brand mb-6"><strong>Bill To</strong></p>
          <div class="flex flex-col mb-6">
            <label for="clientsName">Client's Name</label>
            <input type="text" id="clientsName" />
          </div>
          <div class="flex flex-col mb-6">
            <label for="clientsEmail">Client's Email</label>
            <input type="text" id="clientsEmail" />
          </div>
          <div class="flex flex-col mb-6">
            <label for="clientsStreetAddress">Street Address</label>
            <input type="text" id="clientsStreetAddress" />
          </div>
          <div class="columns-3 mb-6">
            <div class="flex flex-col">
              <label for="clientCity">City</label>
              <input type="text" id="clientCity" />
            </div>
            <div class="flex flex-col">
              <label for="clientPostCode">Post Code</label>
              <input type="text" id="clientPostCode" />
            </div>
            <div class="flex flex-col">
              <label for="clientCountry">Country</label>
              <input type="text" id="clientCountry" />
            </div>
          </div>
          <div class="columns-2">
            <div class="flex flex-col mb-6">
              <label for="">Invoice Date</label>
              <Datepicker v-model="clientDetails.invoiceDate" />
            </div>
            <div class="flex flex-col">
              <label for="paymentTerms">Payment Terms</label>
              <V-Select :options="paymentTermOptions" />
            </div>
          </div>
          <div class="flex flex-col mb-7">
            <label for="projectDescription">Project Description</label>
            <input type="text" id="projectDescription" />
          </div>
          <h2 class="text-secondary mb-3">Item List</h2>
          <table>
            <tbody>
              <th>
                <tr>
                  <td>Item name</td>
                  <td>Qty.</td>
                  <td>Price</td>
                  <td>Total</td>
                  <td></td>
                </tr>
              </th>
              <tr>
                <td><input type="text" class="w-32" /></td>
                <td><input type="number" class="w-12 mx-4" /></td>
                <td><input type="number" class="w-24" /></td>
                <td><p>1225</p></td>
                <td>Trash</td>
              </tr>
            </tbody>
          </table>
        </form>
        <div
          class="fixed bottom-0 flex justify-between bg-white w-4/12 z-50 py-4"
        >
          <button class="btn-brand pl-4">Discard</button>
          <div class="flex">
            <button class="btn-brand">Save as Draft</button>
            <button class="btn-brand">Save & Send</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute top-0 left-0 w-full h-full bg-black opacity-50"
      @click="showInvoiceForm = !showInvoiceForm"
    ></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const clientDetails = ref({
  invoiceDate: null,
});

const paymentTermOptions = ref([
  "30 Days",
  "15 Days",
  "7 Days",
  "3 Days",
  "Immediate",
]);

const toggleInvoiceForm = () => {};

const showInvoiceForm = ref(true);
</script>
