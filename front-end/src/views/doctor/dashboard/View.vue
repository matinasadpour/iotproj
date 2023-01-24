<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import CardInfo from '@/components/Cards/CardInfo.vue';
import CardOptionsOne from '@/components/Cards/CardOptionsOne.vue';
import CardOptionsTwo from '@/components/Cards/CardOptionsTwo.vue';
import CardBarChart from '@/components/Cards/CardBarChart.vue';
import CardBlood from '@/components/Cards/CardBlood.vue';

const $route = useRoute();

const IMEI = $route.params.IMEI;

const startDate = ref(null);

onMounted(async () => {
  const res = await fetch(`${apiURL}/api/countdowns?IMEI=${IMEI}`, {
    method: 'GET',
  });
  startDate.value = (await res.json()).date;
});
</script>

<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
        <card-info class="h-full" :IMEI="IMEI" />
      </div>
      <div class="w-full xl:w-6/12 px-4">
        <card-options-one :IMEI="IMEI" />
      </div>
    </div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
        <card-bar-chart :IMEI="IMEI" />
      </div>
      <div class="w-full xl:w-3/12 mb-12 xl:mb-0 px-4">
        <card-options-two class="h-full" :IMEI="IMEI" />
      </div>
      <div class="w-full xl:w-3/12 mb-12 xl:mb-0 px-4">
        <card-blood :IMEI="IMEI" />
      </div>
    </div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full">
        <div
          :class="{ 'bg-green-400': startDate, 'bg-red-400': !startDate }"
          class="text-center p-3"
        >
          <h1 class="text-2xl mb-2">Reset Boards</h1>
          <h6 class="text-lg uppercase text-blue-800">bypass</h6>
        </div>
      </div>
    </div>
  </div>
</template>
