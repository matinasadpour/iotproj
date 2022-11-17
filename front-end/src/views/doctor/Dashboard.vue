<script setup>
import { ref, onMounted } from 'vue';
import CardPatientsTable from '@/components/Cards/CardPatientsTable.vue';

const content = ref([]);
const alertOpen = ref(false);

onMounted(async () => {
  const res = await fetch(`${apiURL}/api/users/me?populate=patients`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
    },
  });
  const temp = (await res.json()).patients;
  const patients = temp.map((e) => e.IMEI);
  let url = `${apiURL}/api/errors?sort=createdAt:desc`;

  for (const [i, e] of patients.entries()) {
    url += `&filters[IMEI][$eq][${i}]=${e}`;
  }

  const res1 = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
    },
  });
  const tmp = (await res1.json()).data;
  content.value = tmp.filter((e) => !e.attributes.read);
  if (content.value.length) alertOpen.value = true;
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
    <div class="flex flex-wrap">
      <div class="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
        <div
          v-if="alertOpen"
          class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500"
        >
          <span class="text-xl inline-block mr-5 align-middle">
            <i class="fas fa-circle-exclamation mr-1"></i>
          </span>
          <span class="inline-block align-middle mr-8">
            <b class="capitalize">Error!</b>
          </span>
          <div>
            <ul>
              <li v-for="cnt in content" :id="cnt.id">
                Patient:
                <b class="capitalize"> {{ cnt.attributes.IMEI }} </b> has
                <p class="inline-block mx-1" v-if="cnt.attributes.d1">D1</p>
                <p class="inline-block mx-1" v-if="cnt.attributes.d2">D2</p>
                <p class="inline-block mx-1" v-if="cnt.attributes.d3">D3</p>
                <p class="inline-block mx-1" v-if="cnt.attributes.d4">D4</p>
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
      <div class="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
        <card-patients-table />
      </div>
    </div>
  </div>
</template>
