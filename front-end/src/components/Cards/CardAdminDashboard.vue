<script setup>
import { ref, onMounted } from 'vue';

const content = ref({});
const doctors = ref({});
const patient = ref({
  id: 0,
  IMEI: '',
  firstname: '',
  lastname: '',
  doctor: 0,
  pid: '',
});

onMounted(async () => {
  const res = await fetch(`${apiURL}/api/patients?populate=doctor`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
    },
  });
  content.value = (await res.json()).data;
  const res1 = await fetch(
    `${apiURL}/api/users?populate=role&filters[role][name][$eq]=doctor`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
      },
    }
  );
  doctors.value = await res1.json();
});

const change = (event) => {
  if (event.target.value) {
    const temp = content.value.find(
      (e) => e.attributes.IMEI == event.target.value
    );
    patient.value.id = temp.id;
    patient.value.IMEI = temp.attributes.IMEI;
    patient.value.firstname = temp.attributes.firstname;
    patient.value.lastname = temp.attributes.lastname;
    patient.value.pid = temp.attributes.pid;
    if (temp.attributes.doctor.data) {
      patient.value.doctor = temp.attributes.doctor.data.id;
    }
  } else {
    patient.value.id = 0;
    patient.value.IMEI = '';
    patient.value.firstname = '';
    patient.value.lastname = '';
    patient.value.doctor = 0;
    patient.value.pid = '';
  }
};

const changeDoctor = (event) => {
  if (event.target.value) {
    patient.value.doctor = +event.target.value;
  } else {
    patient.value.doctor = 0;
  }
};

const refresh = () => {
  patient.value.id = 0;
  patient.value.IMEI = '';
  patient.value.firstname = '';
  patient.value.lastname = '';
  patient.value.doctor = 0;
  patient.value.pid = '';
};

const save = async () => {
  if (patient.value.id) {
    await fetch(`${apiURL}/api/patients/${patient.value.id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          firstname: patient.value.firstname,
          lastname: patient.value.lastname,
          pid: patient.value.pid,
          doctor: patient.value.doctor ? patient.value.doctor : null,
        },
      }),
    });
  }
};
</script>

<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">
          Edit Patient information
        </h6>
        <button
          class="bg-indigo-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
          @click="refresh"
        >
          <i class="fas fa-refresh"></i>
        </button>
        <button
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
          @click="save"
        >
          Save
        </button>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-3">
      <form>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Select Patient:
              </label>
              <select
                @change="change"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="patient.IMEI"
              >
                <option selected></option>
                <option
                  v-for="cnt of content"
                  :id="cnt.id"
                  :value="cnt.attributes.IMEI"
                >
                  {{
                    cnt.attributes.firstname +
                    ' ' +
                    cnt.attributes.lastname +
                    ' - ' +
                    cnt.attributes.IMEI
                  }}
                </option>
              </select>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                First Name
              </label>
              <input
                v-model="patient.firstname"
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Last Name
              </label>
              <input
                v-model="patient.lastname"
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                ID
              </label>
              <input
                v-model="patient.pid"
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Doctor
              </label>
              <select
                @change="changeDoctor"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="patient.doctor"
              >
                <option selected></option>
                <option v-for="dr of doctors" :id="dr.id" :value="dr.id">
                  {{ dr.username }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
