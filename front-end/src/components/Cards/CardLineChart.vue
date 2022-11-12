<script setup>
import { nextTick, computed } from 'vue';
import Chart from 'chart.js';

const probs = defineProps(['imei']);

const imei = computed(() => probs.imei);

nextTick(async () => {
  let IMEI;
  if (!imei.value) IMEI = sessionStorage.getItem('IMEI');
  else IMEI = imei.value;
  let now = new Date(new Date().setHours(0, 0, 0, 0));
  let a = { a1: [], a2: [], a3: [], a4: [] };
  for (let i = 0; i < 31; i++) {
    let tmp = new Date();
    tmp.setDate(now.getDate() - i);
    let str = `${('0' + tmp.getFullYear()).slice(-4)}-${(
      '0' +
      (tmp.getMonth() + 1)
    ).slice(-2)}-${('0' + tmp.getDate()).slice(-2)}`;
    let res = await fetch(
      `${api}/api/datas?filters[createdAt][$contains]=${str}&filters[IMEI][$eqi]=${IMEI}&pagination[pageSize]=100`,
      {
        type: 'GET',
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
        },
      }
    );
    let content = await res.json();
    if (content.data.length) {
      let sum = {
        a1: 0,
        a2: 0,
        a3: 0,
        a4: 0,
      };
      for (let j = 0; j < content.data.length; j++) {
        sum.a1 += +content.data[j].attributes.a1;
        sum.a2 += +content.data[j].attributes.a2;
        sum.a3 += +content.data[j].attributes.a4;
        sum.a4 += +content.data[j].attributes.a4;
      }
      console.log(sum);
      a.a1.push({ x: str, y: sum.a1 / content.data.length });
      a.a2.push({ x: str, y: sum.a2 / content.data.length });
      a.a3.push({ x: str, y: sum.a3 / content.data.length });
      a.a4.push({ x: str, y: sum.a4 / content.data.length });
    } else {
      a.a1.push({ x: str, y: 0 });
      a.a2.push({ x: str, y: 0 });
      a.a3.push({ x: str, y: 0 });
      a.a4.push({ x: str, y: 0 });
    }
  }
  console.log(a);

  var config = {
    type: 'line',
    data: {
      datasets: [
        {
          label: 'A1',
          data: a.a1,
          borderColor: '#4c51bf',
          backgroundColor: '#4c51bf',
          fill: false,
        },
        {
          label: 'A2',
          data: a.a2,
          borderColor: '#009999',
          backgroundColor: '#009999',
          fill: false,
        },
        {
          label: 'A3',
          data: a.a3,
          borderColor: '#660066',
          backgroundColor: '#660066',
          fill: false,
        },
        {
          label: 'A4',
          data: a.a4,
          borderColor: '#fff',
          backgroundColor: '#fff',
          fill: false,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        labels: {
          fontColor: 'white',
        },
        align: 'start',
        position: 'bottom',
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            type: 'time',
            time: {
              unit: 'day',
            },
            ticks: {
              fontColor: 'rgba(255,255,255,.7)',
            },
            display: true,
            gridLines: {
              display: false,
              borderDash: [2],
              borderDashOffset: [2],
              color: 'rgba(33, 37, 41, 0.3)',
              zeroLineColor: 'rgba(0, 0, 0, 0)',
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              fontColor: 'rgba(255,255,255,.7)',
              min: 0,
            },
            display: true,
            gridLines: {
              borderDash: [3],
              borderDashOffset: [3],
              drawBorder: false,
              color: 'rgba(255, 255, 255, 0.15)',
              zeroLineColor: 'rgba(33, 37, 41, 0)',
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        ],
      },
    },
  };
  var ctx = document.getElementById('line-chart').getContext('2d');
  window.myLine = new Chart(ctx, config);
});
</script>

<template>
  <!-- <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <div class="flex flex-wrap mt-6">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Select User:
              </label>
              <select
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              ></select>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div> -->
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700"
  >
    <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h6 class="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
            Overview
          </h6>
          <h2 class="text-white text-xl font-semibold">Last 30 Days</h2>
        </div>
      </div>
    </div>
    <div class="p-4 flex-auto">
      <!-- Chart -->
      <div class="relative h-350-px">
        <canvas id="line-chart"></canvas>
      </div>
    </div>
  </div>
</template>
