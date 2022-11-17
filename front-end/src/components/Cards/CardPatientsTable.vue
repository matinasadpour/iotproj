<script setup>
import { ref, nextTick } from 'vue';

const content = ref(null);

nextTick(async () => {
  let res = await fetch(`${apiURL}/api/patients`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
    },
  });
  content.value = await res.json();
});
</script>

<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">My Patients</h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table
        class="items-center w-full bg-transparent border-collapse text-center"
      >
        <thead>
          <tr>
            <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold"
            >
              IMEI
            </th>
            <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold"
            >
              First Name
            </th>
            <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold"
            >
              Last Name
            </th>
            <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold"
            ></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cnt in content" v-bind:key="cnt.id">
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              {{ cnt.IMEI }}
            </th>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              {{ cnt.firstname }}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              {{ cnt.lastname }}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
            >
              <RouterLink
                :to="{
                  path: `/doctor/barchart/${cnt.IMEI}`,
                }"
                class="text-lg p-1 mr-3"
              >
                <i class="fas fa-chart-column"></i>
              </RouterLink>
              <RouterLink
                :to="{
                  path: `/doctor/table/${cnt.IMEI}`,
                }"
                class="text-lg p-1 mr-3"
              >
                <i class="fas fa-table-list"></i>
              </RouterLink>
              <RouterLink
                :to="{
                  path: `/doctor/linechart/${cnt.IMEI}`,
                }"
                class="text-lg p-1 mr-3"
              >
                <i class="fas fa-line-chart"></i>
              </RouterLink>
              <RouterLink
                :to="{
                  path: `/doctor/setting/${cnt.IMEI}`,
                }"
                class="text-lg p-1 mr-3"
              >
                <i class="fas fa-gear"></i>
              </RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
