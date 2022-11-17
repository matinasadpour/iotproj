<script setup>
import { useRoute } from 'vue-router';
import CardDataTable from '@/components/Cards/CardDataTable.vue';

const $route = useRoute();

const IMEI = $route.params.IMEI;
</script>

<template>
  <div>
    <card-data-table :IMEI="IMEI" />
  </div>
</template>
