<script setup>
import { useRoute } from 'vue-router';
import CardBarChart from '@/components/Cards/CardBarChart.vue';

const $route = useRoute();

const IMEI = $route.params.IMEI;
</script>

<template>
  <div>
    <card-bar-chart :IMEI="IMEI" />
  </div>
</template>
