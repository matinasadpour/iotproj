<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import CardInfo from '@/components/Cards/CardInfo.vue';
import CardOptionsOne from '@/components/Cards/CardOptionsOne.vue';
import CardOptionsTwo from '@/components/Cards/CardOptionsTwo.vue';
import CardBarChart from '@/components/Cards/CardBarChart.vue';
import CardBlood from '@/components/Cards/CardBlood.vue';

const $route = useRoute();

const IMEI = $route.params.IMEI;

const bypass = ref(null);

const content = ref([]);
const alertOpen = ref(false);

const bypassColor = ref('text-blue-800');

let x = null;
let y = null;

onMounted(async () => {
  const res = await fetch(`${apiURL}/api/countdowns?IMEI=${IMEI}`, {
    method: 'GET',
  });
  const json = await res.json();
  let start = json.endDate;
  let stop = json.stop;
  bypass.value = start ? (stop ? true : false) : true;

  if (bypass.value) {
    y = setInterval(async () => {
      bypassColor.value =
        bypassColor.value === 'text-white' ? 'text-blue-800' : 'text-white';
    }, 500);
  }

  x = setInterval(async () => {
    let url = `${apiURL}/api/errors?sort=createdAt:desc`;
    url += `&filters[IMEI][$eq]=${IMEI}`;

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
      },
    });
    const tmp = (await res.json()).data;
    content.value = tmp.filter((e) => !e.attributes.read);
    if (content.value.length) alertOpen.value = true;
  }, reqPeriod);
});

onBeforeUnmount(() => {
  clearInterval(x);
  clearInterval(y);
});

const closeAlert = async () => {
  for (const e of content.value) {
    const res = await fetch(`${apiURL}/api/errors/${e.id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          read: true,
        },
      }),
    });
  }
  alertOpen.value = false;
};
</script>

<template>
  <div>
    <div class="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
      <div
        v-if="alertOpen"
        class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500"
      >
        <span class="text-xl inline-block mr-5 align-middle">
          <i class="fas fa-circle-exclamation mr-1"></i>
        </span>
        <span class="inline-block align-middle mr-8">
          <b class="capitalize">Errors!</b>
        </span>
        <div>
          <ul>
            <li v-for="cnt in content" :id="cnt.id">
              <i>
                * {{ new Date(cnt.attributes.createdAt).toLocaleString() }}:
              </i>
              <p class="inline-block mx-1" v-if="cnt.attributes.d1">ABD!</p>
              <p class="inline-block mx-1" v-if="cnt.attributes.d2">BLD!</p>
              <p class="inline-block mx-1" v-if="cnt.attributes.d3">Heparin!</p>
              <p class="inline-block mx-1" v-if="cnt.attributes.d4">TEMP!</p>
              <p class="inline-block mx-1" v-if="cnt.attributes.a1">VP!</p>
              <p class="inline-block mx-1" v-if="cnt.attributes.a2">AP!</p>
              <p class="inline-block mx-1" v-if="cnt.attributes.a3">TMP!</p>
              <p class="inline-block mx-1" v-if="cnt.attributes.a4">
                Conductivity!
              </p>
            </li>
          </ul>
        </div>
        <button
          class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
          v-on:click="closeAlert()"
        >
          <span>×</span>
        </button>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
        <card-info class="h-full" :IMEI="IMEI" />
      </div>
      <div class="w-full xl:w-6/12 px-4">
        <card-options-one :IMEI="IMEI" :bypass="bypass" />
      </div>
    </div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
        <card-bar-chart :IMEI="IMEI" />
      </div>
      <div class="w-full xl:w-3/12 mb-12 xl:mb-0 px-4">
        <card-options-two class="h-full" :IMEI="IMEI" :bypass="bypass" />
      </div>
      <div class="w-full xl:w-3/12 mb-12 xl:mb-0 px-4">
        <card-blood :IMEI="IMEI" />
      </div>
    </div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full">
        <div
          :class="{ 'bg-green-400': !bypass, 'bg-red-400': bypass }"
          class="text-center p-3"
        >
          <h1 class="text-2xl mb-2">Reset Boards</h1>
          <h6 class="text-lg uppercase" :class="bypassColor">bypass</h6>
        </div>
      </div>
    </div>
  </div>
</template>
