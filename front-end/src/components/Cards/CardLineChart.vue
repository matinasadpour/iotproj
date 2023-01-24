<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Chart from 'chart.js';

const probs = defineProps(['IMEI']);

const IMEI = ref(probs.IMEI);

const update = async () => {
  const res = await fetch(
    `${apiURL}/api/datas?filters[IMEI][$eq]=${IMEI.value}&sort=createdAt:desc&pagination[start]=0&pagination[limit]=10`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
      },
    }
  );
  const content = (await res.json()).data;
  const labels = content
    .map((e) => new Date(e.attributes.createdAt).toLocaleString())
    .reverse();
  const a = {
    a1: content.map((e) => e.attributes.a1).reverse(),
    a2: content.map((e) => e.attributes.a2).reverse(),
    a3: content.map((e) => e.attributes.a3).reverse(),
    a4: content.map((e) => e.attributes.a4).reverse(),
  };

  window.myLine.data.labels = labels;

  let i = 0;
  for (const e in a) {
    window.myLine.data.datasets[i++].data = a[e];
  }

  window.myLine.update();
};

onMounted(async () => {
  const res = await fetch(
    `${apiURL}/api/datas?filters[IMEI][$eq]=${IMEI.value}&sort=createdAt:desc&pagination[start]=0&pagination[limit]=10`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
      },
    }
  );
  const content = (await res.json()).data;
  const labels = content
    .map((e) => new Date(e.attributes.createdAt).toLocaleString())
    .reverse();
  const a = {
    a1: content.map((e) => e.attributes.a1).reverse(),
    a2: content.map((e) => e.attributes.a2).reverse(),
    a3: content.map((e) => e.attributes.a3).reverse(),
    a4: content.map((e) => e.attributes.a4).reverse(),
  };
  var config = {
    type: 'line',
    data: {
      labels,
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

// nextTick(async () => {
//   let now = new Date(new Date().setHours(0, 0, 0, 0));
//   let a = { a1: [], a2: [], a3: [], a4: [] };
//   for (let i = 0; i < 31; i++) {
//     let tmp = new Date();
//     tmp.setDate(now.getDate() - i);
//     let str = `${('0' + tmp.getFullYear()).slice(-4)}-${(
//       '0' +
//       (tmp.getMonth() + 1)
//     ).slice(-2)}-${('0' + tmp.getDate()).slice(-2)}`;
//     let res = await fetch(
//       `${apiURL}/api/datas?filters[createdAt][$contains]=${str}&filters[IMEI][$eqi]=${IMEI}&pagination[pageSize]=100`,
//       {
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
//         },
//       }
//     );
//     let content = await res.json();
//     if (content.data.length) {
//       let sum = {
//         a1: 0,
//         a2: 0,
//         a3: 0,
//         a4: 0,
//       };
//       for (let j = 0; j < content.data.length; j++) {
//         sum.a1 += +content.data[j].attributes.a1;
//         sum.a2 += +content.data[j].attributes.a2;
//         sum.a3 += +content.data[j].attributes.a3;
//         sum.a4 += +content.data[j].attributes.a4;
//       }
//       a.a1.push({ x: str, y: sum.a1 / content.data.length });
//       a.a2.push({ x: str, y: sum.a2 / content.data.length });
//       a.a3.push({ x: str, y: sum.a3 / content.data.length });
//       a.a4.push({ x: str, y: sum.a4 / content.data.length });
//     } else {
//       a.a1.push({ x: str, y: 0 });
//       a.a2.push({ x: str, y: 0 });
//       a.a3.push({ x: str, y: 0 });
//       a.a4.push({ x: str, y: 0 });
//     }
//   }

//   var config = {
//     type: 'line',
//     data: {
//       datasets: [
//         {
//           label: 'A1',
//           data: a.a1,
//           borderColor: '#4c51bf',
//           backgroundColor: '#4c51bf',
//           fill: false,
//         },
//         {
//           label: 'A2',
//           data: a.a2,
//           borderColor: '#009999',
//           backgroundColor: '#009999',
//           fill: false,
//         },
//         {
//           label: 'A3',
//           data: a.a3,
//           borderColor: '#660066',
//           backgroundColor: '#660066',
//           fill: false,
//         },
//         {
//           label: 'A4',
//           data: a.a4,
//           borderColor: '#fff',
//           backgroundColor: '#fff',
//           fill: false,
//         },
//       ],
//     },
//     options: {
//       maintainAspectRatio: false,
//       responsive: true,
//       legend: {
//         labels: {
//           fontColor: 'white',
//         },
//         align: 'start',
//         position: 'bottom',
//       },
//       tooltips: {
//         mode: 'index',
//         intersect: false,
//       },
//       hover: {
//         mode: 'nearest',
//         intersect: true,
//       },
//       scales: {
//         xAxes: [
//           {
//             type: 'time',
//             time: {
//               unit: 'day',
//             },
//             ticks: {
//               fontColor: 'rgba(255,255,255,.7)',
//             },
//             display: true,
//             gridLines: {
//               display: false,
//               borderDash: [2],
//               borderDashOffset: [2],
//               color: 'rgba(33, 37, 41, 0.3)',
//               zeroLineColor: 'rgba(0, 0, 0, 0)',
//               zeroLineBorderDash: [2],
//               zeroLineBorderDashOffset: [2],
//             },
//           },
//         ],
//         yAxes: [
//           {
//             ticks: {
//               fontColor: 'rgba(255,255,255,.7)',
//               min: 0,
//             },
//             display: true,
//             gridLines: {
//               borderDash: [3],
//               borderDashOffset: [3],
//               drawBorder: false,
//               color: 'rgba(255, 255, 255, 0.15)',
//               zeroLineColor: 'rgba(33, 37, 41, 0)',
//               zeroLineBorderDash: [2],
//               zeroLineBorderDashOffset: [2],
//             },
//           },
//         ],
//       },
//     },
//   };
//   var ctx = document.getElementById('line-chart').getContext('2d');
//   window.myLine = new Chart(ctx, config);
// });

let period = setInterval(update, reqPeriod);
onBeforeUnmount(() => {
  clearInterval(period);
});
</script>

<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded bg-blueGray-700"
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
