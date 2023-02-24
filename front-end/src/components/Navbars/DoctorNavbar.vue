<script setup>
import { ref, onBeforeMount, onBeforeUnmount } from 'vue';

const username = sessionStorage.getItem('username');
let time = ref(null);
let interval = null;

onBeforeMount(() => {
  interval = setInterval(() => {
    // Concise way to format time according to system locale.
    // In my case this returns "3:48:00 am"
    time.value = Intl.DateTimeFormat(navigator.language, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
      timeZone: 'Asia/Tehran',
    }).format();
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<template>
  <!-- Navbar -->
  <nav
    class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
  >
    <div
      class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
    >
      <ul class="flex-col md:flex-row list-none items-center hidden md:flex">
        <div>
          <a class="text-blueGray-500 block" href="#"
            ><div class="items-center flex">
              <span
                class="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"
                ><img
                  alt="..."
                  class="w-full rounded-full align-middle border-none shadow-lg"
                  src="/logo.jpg"
                />
              </span>
            </div>
          </a>
        </div>
      </ul>
      <!-- Brand -->
      <a
        class="text-white text-sm uppercase hidden lg:inline-block font-semibold"
        href="javascript:void(0)"
      >
        Hello {{ username }}!
      </a>

      <a class="text-white text-sm hidden lg:inline-block font-semibold">
        {{ time }}
      </a>
    </div>
  </nav>
  <!-- End Navbar -->
</template>
