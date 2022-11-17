<script setup>
import { useRoute } from 'vue-router';
import CardLineChart from '@/components/Cards/CardLineChart.vue';

const $route = useRoute();

const IMEI = $route.params.IMEI;
</script>

<template>
  <div>
    <card-line-chart :IMEI="IMEI" />
  </div>
</template>
