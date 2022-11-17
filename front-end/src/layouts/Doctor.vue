<script setup>
import DoctorNavbar from '@/components/Navbars/DoctorNavbar.vue';
import DoctorSidebar from '@/components/Sidebar/DoctorSidebar.vue';
import HeaderStats from '@/components/Headers/HeaderStats.vue';
</script>

<template>
  <div>
    <doctor-sidebar />
    <div class="relative md:ml-64 bg-blueGray-100">
      <doctor-navbar />
      <header-stats />
      <div class="px-4 md:px-10 mx-auto w-full -m-24 pb-4">
        <router-view />
      </div>
    </div>
  </div>
</template>
