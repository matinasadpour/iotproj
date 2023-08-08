<script setup>
import { computed } from 'vue';

const probs = defineProps(['bypass']);

const bypass = computed(() => probs.bypass);
</script>

<template>
  <div
    class="relative h-full gap-6 grid content-center items-center min-w-0 break-words bg-white w-full p-4 shadow-lg rounded text-l"
  >
    <div>
      <p>
        <i
          class="fa-solid fa-circle"
          :class="{ 'text-green-500': !bypass, 'text-red-500': bypass }"
        ></i>
        Clamp
      </p>
    </div>
    <div>
      <p>
        <i
          class="fa-solid fa-circle"
          :class="{ 'text-green-500': !bypass, 'text-red-500': bypass }"
        ></i>
        Utrafiltration Pump
      </p>
    </div>
    <div>
      <p>
        <i
          class="fa-solid fa-circle"
          :class="{ 'text-green-500': !bypass, 'text-red-500': bypass }"
        ></i>
        Blood Pump
      </p>
    </div>
  </div>
</template>
