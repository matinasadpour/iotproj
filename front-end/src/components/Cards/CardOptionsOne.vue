<script setup>
import { ref } from 'vue';

const limitsModal = ref(false);

const limitsToggleModal = () => {
  limitsModal.value = !limitsModal.value;
};
</script>

<template>
  <div
    class="relative h-full grid grid-cols-2 gap-6 justify-items-center items-center min-w-0 break-words bg-white w-full p-4 shadow-lg rounded text-4xl"
  >
    <div>
      <button><i class="fa-solid fa-check"></i></button>
    </div>
    <div>
      <button><i class="fa-solid fa-wrench"></i></button>
    </div>
    <div>
      <button @click="limitsToggleModal()">
        <i class="fa-solid fa-arrow-down-up-across-line"></i>
      </button>
      <div
        v-if="limitsModal"
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
              <h3 class="text-3xl font-semibold">Limits</h3>
              <button
                class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                v-on:click="limitsToggleModal()"
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
                    Arterial Pressure Limits
                  </label>
                  <input
                    name="blood"
                    value="-80"
                    type="number"
                    class="mx-1 border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    style="max-width: 5rem"
                  />
                  <label
                    class="text-blueGray-600 text-xs font-bold mt-4"
                    htmlFor="blood"
                  >
                    ---
                  </label>
                  <input
                    name="blood"
                    value="100"
                    type="number"
                    class="mx-1 border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    style="max-width: 5rem"
                  />
                  <label
                    class="text-blueGray-600 text-xs font-bold mt-4"
                    htmlFor="blood"
                  >
                    [mmHg]
                  </label>
                </div>
                <div class="mb-1">
                  <label
                    class="text-blueGray-600 text-xs font-bold mt-4"
                    htmlFor="blood"
                  >
                    Venous Pressure Limits
                  </label>
                  <input
                    name="blood"
                    value="-80"
                    type="number"
                    class="mx-1 border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    style="max-width: 5rem"
                  />
                  <label
                    class="text-blueGray-600 text-xs font-bold mt-4"
                    htmlFor="blood"
                  >
                    ---
                  </label>
                  <input
                    name="blood"
                    value="-80"
                    type="number"
                    class="mx-1 border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    style="max-width: 5rem"
                  />
                  <label
                    class="text-blueGray-600 text-xs font-bold mt-4"
                    htmlFor="blood"
                  >
                    [mmHg]
                  </label>
                </div>
                <div class="mb-1">
                  <label
                    class="text-blueGray-600 text-xs font-bold mt-4"
                    htmlFor="blood"
                  >
                    TMP Low/High Limits
                  </label>
                  <input
                    name="blood"
                    value="-100"
                    type="number"
                    class="mx-1 border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    style="max-width: 5rem"
                  />
                  <label
                    class="text-blueGray-600 text-xs font-bold mt-4"
                    htmlFor="blood"
                  >
                    ---
                  </label>
                  <input
                    name="blood"
                    value="600"
                    type="number"
                    class="mx-1 border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    style="max-width: 5rem"
                  />
                  <label
                    class="text-blueGray-600 text-xs font-bold mt-4"
                    htmlFor="blood"
                  >
                  </label>
                </div>
                <div class="mb-1">
                  <label
                    class="text-blueGray-600 text-xs font-bold mt-4"
                    htmlFor="blood"
                  >
                    Temperature Limits
                  </label>
                  <input
                    name="blood"
                    value="-2"
                    type="number"
                    class="mx-1 border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    style="max-width: 5rem"
                  />
                  <label
                    class="text-blueGray-600 text-xs font-bold mt-4"
                    htmlFor="blood"
                  >
                    ---
                  </label>
                  <input
                    name="blood"
                    value="2"
                    type="number"
                    class="mx-1 border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    style="max-width: 5rem"
                  />
                  <label
                    class="text-blueGray-600 text-xs font-bold mt-4"
                    htmlFor="blood"
                  >
                    [C]
                  </label>
                </div>
                <div class="mb-1">
                  <label
                    class="text-blueGray-600 text-xs font-bold mt-4"
                    htmlFor="blood"
                  >
                    Final Conductivity Limits
                  </label>
                  <input
                    name="blood"
                    value="-0.7"
                    type="number"
                    class="mx-1 border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    style="max-width: 5rem"
                  />
                  <label
                    class="text-blueGray-600 text-xs font-bold mt-4"
                    htmlFor="blood"
                  >
                    ---
                  </label>
                  <input
                    name="blood"
                    value="0.7"
                    type="number"
                    class="mx-1 border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    style="max-width: 5rem"
                  />
                  <label
                    class="text-blueGray-600 text-xs font-bold mt-4"
                    htmlFor="blood"
                  >
                    [mS/cm]
                  </label>
                </div>
                <div class="mb-1">
                  <label
                    class="text-blueGray-600 text-xs font-bold mt-4"
                    htmlFor="blood"
                  >
                    Bicarbonate Limits
                  </label>
                  <input
                    name="blood"
                    value="-1"
                    type="number"
                    class="mx-1 border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    style="max-width: 5rem"
                  />
                  <label
                    class="text-blueGray-600 text-xs font-bold mt-4"
                    htmlFor="blood"
                  >
                    ---
                  </label>
                  <input
                    name="blood"
                    value="1"
                    type="number"
                    class="mx-1 border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    style="max-width: 5rem"
                  />
                  <label
                    class="text-blueGray-600 text-xs font-bold mt-4"
                    htmlFor="blood"
                  >
                    [mS/cm]
                  </label>
                </div>
                <div class="mb-1">
                  <label
                    class="text-blueGray-600 text-xs font-bold mt-4"
                    htmlFor="blood"
                  >
                    Dialysale Flow Limits
                  </label>
                  <input
                    name="blood"
                    value="-50"
                    type="number"
                    class="mx-1 border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    style="max-width: 5rem"
                  />
                  <label
                    class="text-blueGray-600 text-xs font-bold mt-4"
                    htmlFor="blood"
                  >
                    ---
                  </label>
                  <input
                    name="blood"
                    value="50"
                    type="number"
                    class="mx-1 border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    style="max-width: 5rem"
                  />
                  <label
                    class="text-blueGray-600 text-xs font-bold mt-4"
                    htmlFor="blood"
                  >
                    [ml/min]
                  </label>
                </div>
              </form>
            </div>
            <!--footer-->
            <div
              class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"
            >
              <button
                class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                v-on:click="limitsToggleModal()"
              >
                Close
              </button>
              <button
                class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                v-on:click="limitsToggleModal()"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="limitsModal"
        class="opacity-25 fixed inset-0 z-40 bg-black"
      ></div>
    </div>
    <div>
      <button><i class="fa-solid fa-hand"></i></button>
    </div>
  </div>
</template>
