<script setup>
import { useRoute } from 'vue-router';
import CardSettings from '@/components/Cards/CardSettings.vue';

const $route = useRoute();

const IMEI = $route.params.IMEI;
</script>

<template>
  <div>
    <card-settings :IMEI="IMEI" />
  </div>
</template>
