<script setup></script>

<template>
  <div
    class="relative flex h-full justify-items-center items-center min-w-0 break-words bg-white w-full p-4 shadow-lg rounded text-4xl"
  >
    <div class="border-2 p-2 rounded-lg text-base">
      <h6 class="text-blueGray-700 font-bold">Blood Pump Setting:</h6>
      <form>
        <div class="mb-4">
          <label
            class="block text-blueGray-600 text-xs font-bold mt-4"
            htmlFor="blood"
          >
            Blood Flow:
          </label>
          <input
            name="blood"
            value="250"
            type="number"
            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          />
        </div>
        <div>
          <label
            class="block text-blueGray-600 text-xs font-bold mt-4"
            htmlFor="size"
          >
            Blood Pump Segment Size:
          </label>
          <select
            name="size"
            type="option"
            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          >
            <option>6 mil</option>
          </select>
        </div>
      </form>
    </div>
  </div>
</template>
