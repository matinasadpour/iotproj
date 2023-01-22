<script setup>
import AdminNavbar from '@/components/Navbars/AdminNavbar.vue';
import AdminSidebar from '@/components/Sidebar/AdminSidebar.vue';
import HeaderTime from '@/components/Headers/HeaderTime.vue';
</script>

<template>
  <div>
    <admin-sidebar />
    <div class="relative md:ml-64 bg-blueGray-100">
      <admin-navbar />
      <header-time />
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
      </div>
    </div>
  </div>
</template>
