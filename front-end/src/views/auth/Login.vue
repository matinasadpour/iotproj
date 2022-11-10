<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const $router = useRouter();

if (sessionStorage.getItem('jwt')) $router.push('/admin/dashboard');

const email = ref('');
const password = ref('');
const invalid = ref(false);

const singin = async () => {
  const res = await fetch('https://www.api.iotproj.ir/api/auth/local', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ identifier: email.value, password: password.value }),
  });
  if (res.status === 400) {
    invalid.value = true;
  } else if (res.status === 200) {
    const content = await res.json();
    sessionStorage.setItem('jwt', content.jwt);
    sessionStorage.setItem('IMEI', content.user.IMEI);
    $router.push('/admin/dashboard');
  }
};
</script>

<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div
          v-if="invalid"
          class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500"
        >
          <span class="inline-block align-middle mr-8">
            <b class="capitalize">Invalid!</b>
          </span>
        </div>
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
        >
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-blueGray-500 text-sm font-bold">Sign in</h6>
            </div>
          </div>
          <div class="flex-auto px-6 lg:px-10 py-6 pt-0">
            <form>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  v-model="email"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  v-model="password"
                  type="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
              </div>

              <div class="text-center mt-6">
                <button
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  @click="singin"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-wrap mt-6 relative">
          <div class="w-1/2">
            <!-- <a href="javascript:void(0)" class="text-blueGray-200">
              <small>Forgot password?</small>
            </a> -->
          </div>
          <div class="w-1/2 text-right">
            <router-link to="/auth/register" class="text-blueGray-200">
              <small>Create new account</small>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
