<script setup>
import { ref, watch, computed, onMounted, onBeforeUnmount } from 'vue';

const probs = defineProps(['IMEI', 'countdown', 'fn', 'ln']);

const IMEI = ref(probs.IMEI);
const countdown = computed(() => probs.countdown);
const fn = ref(probs.fn);
const ln = ref(probs.ln);

const endDate = ref(null);

const hours = ref(null);
const minutes = ref(null);
const seconds = ref(null);

let x = null;

onMounted(async () => {});

watch(countdown, async (newCountdown) => {
  if (newCountdown !== null) {
    let start = newCountdown.endDate;
    let stop = newCountdown.stop;
    if (stop) {
      if (x) {
        clearInterval(x);
      }
      endDate.value = new Date(start).getTime();
      const now = new Date(stop).getTime();
      const distance = endDate.value - now;
      hours.value = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
    } else if (start) {
      endDate.value = new Date(start).getTime();
      if (!x) {
        x = setInterval(async () => {
          const now = new Date().getTime();
          const distance = endDate.value - now;

          if (distance < 0) {
            clearInterval(x);
            endDate.value = null;
            await fetch(
              `${apiURL}/api/countdowns?IMEI=${IMEI.value}&countdown=reset`,
              {
                method: 'POST',
              }
            );
          }

          hours.value = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          minutes.value = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
          );
          seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
        }, 1000);
      }
    }
  }
});

onBeforeUnmount(() => {
  clearInterval(x);
});
</script>

<template>
  <div
    class="relative h-full justify-items-center min-w-0 break-words bg-white w-full p-4 shadow-lg rounded text-4xl"
  >
    <div class="border-2 p-2 border-blue-500 rounded-lg text-base">
      <p>
        Patient: <i>{{ fn + ' ' + ln }}</i>
      </p>
      <p>
        Required Time:
        <i v-if="endDate">{{ hours }}:{{ minutes }}:{{ seconds }}</i>
      </p>
      <p>UF Rate (ml/h):</p>
      <p>UF Goal (ml):</p>
      <p>Water Removed:</p>
    </div>
  </div>
</template>
