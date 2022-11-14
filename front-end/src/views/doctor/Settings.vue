<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-12/12 px-4">
      <CardSettings />
    </div>
  </div>
</template>
<script>
import CardSettings from '@/components/Cards/CardSettings.vue';
import CardProfile from '@/components/Cards/CardProfile.vue';

export default {
  components: {
    CardSettings,
    CardProfile,
  },
};
</script>
