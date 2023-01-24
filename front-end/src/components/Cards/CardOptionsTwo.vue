<script setup>
import { ref } from 'vue';
import CardLineChart from '@/components/Cards/CardLineChart.vue';

const probs = defineProps(['IMEI']);

const IMEI = ref(probs.IMEI);

const viewModal = ref(false);
const heparinModal = ref(false);
const chartModal = ref(false);

const viewToggleModal = () => {
  viewModal.value = !viewModal.value;
};
const heparinToggleModal = () => {
  heparinModal.value = !heparinModal.value;
};
const chartToggleModal = () => {
  chartModal.value = !chartModal.value;
};
</script>

<template>
  <div>
    <div
      class="relative h-full grid grid-cols-2 gap-6 justify-items-center items-center min-w-0 break-words bg-white w-full p-4 shadow-lg rounded text-4xl"
    >
      <div>
        <button><i class="fa-solid fa-faucet-drip"></i></button>
      </div>
      <div>
        <button @click="viewToggleModal()">
          <i class="fa-solid fa-eye"></i>
        </button>
        <div
          v-if="viewModal"
          class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
        >
          <div class="relative w-auto my-6 mx-auto max-w-3xl">
            <!--content-->
            <div
              class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
            >
              <!--header-->
              <div
                class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"
              >
                <h3 class="text-3xl font-semibold">OverView</h3>
                <button
                  class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  v-on:click="viewToggleModal()"
                >
                  <span
                    class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
                  >
                    ×
                  </span>
                </button>
              </div>
              <!--body-->
              <div class="relative p-6 flex-auto">
                <table
                  class="items-center w-full bg-transparent border-collapse"
                >
                  <tr>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      Temperature
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      24.7
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      [C]
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      Conductivity
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      0.0
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      [mS/cm]
                    </td>
                  </tr>
                  <tr class="text-violet-400 border-b-2">
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      Bicarbonate
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      0
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      [mS/cm]
                    </td>
                  </tr>
                  <tr class="border-b-2">
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      Blood Treated
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      0
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      ml
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      Flow
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      0
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      ml/min
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      PDC
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      0
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      mmHg
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      PDD
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      0
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      mmHg
                    </td>
                  </tr>
                </table>
              </div>
              <!--footer-->
              <div
                class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"
              >
                <button
                  class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  v-on:click="viewToggleModal()"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="viewModal"
          class="opacity-25 fixed inset-0 z-40 bg-black"
        ></div>
      </div>
      <div>
        <button @click="heparinToggleModal()">
          <i class="fa-solid fa-syringe"></i>
        </button>
        <div
          v-if="heparinModal"
          class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
        >
          <div class="relative w-auto my-6 mx-auto max-w-3xl">
            <!--content-->
            <div
              class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
            >
              <!--header-->
              <div
                class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"
              >
                <h3 class="text-3xl font-semibold">Heparin</h3>
                <button
                  class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  v-on:click="heparinToggleModal()"
                >
                  <span
                    class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
                  >
                    ×
                  </span>
                </button>
              </div>
              <!--body-->
              <div class="relative p-6 flex-auto">
                <form>
                  <div class="mb-1">
                    <label
                      class="text-blueGray-600 text-xs font-bold mt-4"
                      htmlFor="blood"
                    >
                      Heparin Stop Time
                    </label>
                    <input
                      type="text"
                      value="1:00"
                      class="mx-1 border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                      style="max-width: 5rem"
                    />
                    <label
                      class="text-blueGray-600 text-xs font-bold mt-4"
                      htmlFor="blood"
                    >
                      [h:min]
                    </label>
                  </div>
                  <div class="mb-1">
                    <label
                      class="text-blueGray-600 text-xs font-bold mt-4"
                      htmlFor="blood"
                    >
                      Heparin Bolus Volume
                    </label>
                    <input
                      type="number"
                      value="1"
                      class="mx-1 border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                      style="max-width: 5rem"
                    />
                    <label
                      class="text-blueGray-600 text-xs font-bold mt-4"
                      htmlFor="blood"
                    >
                      [ml]
                    </label>
                  </div>
                  <div class="mb-1">
                    <label
                      class="text-blueGray-600 text-xs font-bold mt-4"
                      htmlFor="blood"
                    >
                      Heparin Rate
                    </label>
                    <input
                      type="number"
                      value="3"
                      class="mx-1 border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                      style="max-width: 5rem"
                    />
                    <label class="text-blueGray-600 text-xs font-bold mt-4">
                      [ml/h]
                    </label>
                  </div>
                  <div class="mb-1">
                    <label
                      class="text-blueGray-600 text-xs font-bold mt-4"
                      for="check"
                    >
                      <input
                        type="checkbox"
                        class="mx-1 border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                        style="max-width: 5rem"
                        id="check"
                      />
                      Treatment Without Heparin
                    </label>
                  </div>
                  <div class="mb-1">
                    <label
                      class="text-blueGray-600 text-xs font-bold mt-4"
                      htmlFor="blood"
                    >
                      Syringe Type
                    </label>
                    <select
                      class="mx-1 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-40 ease-linear transition-all duration-150"
                    >
                      <option>SType</option>
                    </select>
                  </div>
                  <div class="mb-1">
                    <label
                      class="text-blueGray-600 text-xs font-bold mt-4"
                      htmlFor="blood"
                    >
                      Syringe Size
                    </label>
                    <select
                      class="mx-1 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-40 ease-linear transition-all duration-150"
                    >
                      <option>Syringe_S</option>
                    </select>
                    <label
                      class="text-blueGray-600 text-xs font-bold mt-4"
                      htmlFor="blood"
                    >
                      [CC]
                    </label>
                  </div>
                </form>
                <div class="flex justify-center mt-6">
                  <button
                    class="bg-indigo-500 text-white active:bg-indigo-600 text-lg font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    @click="chartToggleModal()"
                  >
                    <i class="fa-solid fa-chart-line"></i>
                  </button>
                  <div
                    v-if="chartModal"
                    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-70 outline-none focus:outline-none justify-center items-center flex"
                  >
                    <div class="relative w-full my-6 mx-auto max-w-6xl">
                      <!--content-->
                      <div
                        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
                      >
                        <!--header-->
                        <div
                          class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"
                        >
                          <button
                            class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            v-on:click="chartToggleModal()"
                          >
                            <span
                              class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
                            >
                              ×
                            </span>
                          </button>
                        </div>
                        <!--body-->
                        <card-line-chart :IMEI="IMEI" />
                        <!--footer-->
                        <div
                          class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"
                        >
                          <button
                            class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            v-on:click="chartToggleModal()"
                          >
                            Close
                          </button>
                          <button
                            class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            v-on:click="chartToggleModal()"
                          >
                            OK
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="chartModal"
                    class="opacity-25 fixed inset-0 z-60 bg-black"
                  ></div>
                </div>
              </div>
              <!--footer-->
              <div
                class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"
              >
                <button
                  class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  v-on:click="heparinToggleModal()"
                >
                  Close
                </button>
                <button
                  class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  v-on:click="heparinToggleModal()"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="heparinModal"
          class="opacity-25 fixed inset-0 z-40 bg-black"
        ></div>
      </div>
      <div>
        <button><i class="fa-solid fa-vials"></i></button>
      </div>
      <div>
        <button><i class="fa-solid fa-filter"></i></button>
      </div>
      <div>
        <button><i class="fa-solid fa-jug-detergent"></i></button>
      </div>
    </div>
  </div>
</template>
