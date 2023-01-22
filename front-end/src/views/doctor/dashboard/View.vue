<script setup>
import { useRoute } from 'vue-router';
import CardInfo from '@/components/Cards/CardInfo.vue';
import CardOptionsOne from '@/components/Cards/CardOptionsOne.vue';
import CardOptionsTwo from '@/components/Cards/CardOptionsTwo.vue';
import CardBarChart from '@/components/Cards/CardBarChart.vue';
import CardBlood from '@/components/Cards/CardBlood.vue';

const $route = useRoute();

const IMEI = $route.params.IMEI;
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
  </div>
</template>
