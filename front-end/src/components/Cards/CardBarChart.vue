<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Chart from 'chart.js';

const probs = defineProps(['IMEI']);

const IMEI = ref(probs.IMEI);

// const led = ref({});

onMounted(async () => {
  const res = await fetch(
    `${apiURL}/api/datas?filters[IMEI][$eq]=${IMEI.value}&sort=createdAt:desc&pagination[start]=0&pagination[limit]=1`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
      },
    }
  );
  const content = (await res.json()).data[0].attributes;
  let config1 = {
    type: 'bar',
    data: {
      labels: [content.a1],
      datasets: [
        {
          backgroundColor: '#4c51bf',
          borderColor: '#4c51bf',
          data: [content.a1],
          fill: false,
          barThickness: 50,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      title: {
        display: false,
        text: 'Orders Chart',
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true,
      },
      legend: {
        display: false,
        labels: {
          fontColor: 'rgba(0,0,0,.4)',
        },
        align: 'end',
        position: 'bottom',
      },
      scales: {
        xAxes: [
          {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, ticks) {
                return 'VP' + ': ' + value + 'mmHg';
              },
            },
            scaleLabel: {
              display: true,
            },
            gridLines: {
              borderDash: [2],
              borderDashOffset: [2],
              color: 'rgba(33, 37, 41, 0.3)',
              zeroLineColor: 'rgba(33, 37, 41, 0.3)',
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              min: -300,
              max: 50,
            },
            display: true,
            scaleLabel: {
              display: false,
              labelString: 'Value',
            },
            gridLines: {
              borderDash: [2],
              drawBorder: false,
              borderDashOffset: [2],
              color: 'rgba(33, 37, 41, 0.2)',
              zeroLineColor: 'rgba(33, 37, 41, 0.15)',
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        ],
      },
    },
  };
  let ctx1 = document.getElementById('bar-chart1').getContext('2d');
  window.myBar1 = new Chart(ctx1, config1);
  let config2 = {
    type: 'bar',
    data: {
      labels: [content.a2],
      datasets: [
        {
          backgroundColor: '#4c51bf',
          borderColor: '#4c51bf',
          data: [content.a2],
          fill: false,
          barThickness: 50,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      title: {
        display: false,
        text: 'Orders Chart',
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true,
      },
      legend: {
        display: false,
        labels: {
          fontColor: 'rgba(0,0,0,.4)',
        },
        align: 'end',
        position: 'bottom',
      },
      scales: {
        xAxes: [
          {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, ticks) {
                return 'AP' + ': ' + value + 'mmHg';
              },
            },
            scaleLabel: {
              display: true,
            },
            gridLines: {
              borderDash: [2],
              borderDashOffset: [2],
              color: 'rgba(33, 37, 41, 0.3)',
              zeroLineColor: 'rgba(33, 37, 41, 0.3)',
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              min: -300,
              max: 50,
            },
            display: true,
            scaleLabel: {
              display: false,
              labelString: 'Value',
            },
            gridLines: {
              borderDash: [2],
              drawBorder: false,
              borderDashOffset: [2],
              color: 'rgba(33, 37, 41, 0.2)',
              zeroLineColor: 'rgba(33, 37, 41, 0.15)',
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        ],
      },
    },
  };
  let ctx2 = document.getElementById('bar-chart2').getContext('2d');
  window.myBar2 = new Chart(ctx2, config2);
  let config3 = {
    type: 'bar',
    data: {
      labels: [content.a3],
      datasets: [
        {
          backgroundColor: '#4c51bf',
          borderColor: '#4c51bf',
          data: [content.a3],
          fill: false,
          barThickness: 50,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      title: {
        display: false,
        text: 'Orders Chart',
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true,
      },
      legend: {
        display: false,
        labels: {
          fontColor: 'rgba(0,0,0,.4)',
        },
        align: 'end',
        position: 'bottom',
      },
      scales: {
        xAxes: [
          {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, ticks) {
                return 'TMP' + ': ' + value + 'mmHg';
              },
            },
            scaleLabel: {
              display: true,
            },
            gridLines: {
              borderDash: [2],
              borderDashOffset: [2],
              color: 'rgba(33, 37, 41, 0.3)',
              zeroLineColor: 'rgba(33, 37, 41, 0.3)',
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              min: 100,
              max: 150,
            },
            display: true,
            scaleLabel: {
              display: false,
              labelString: 'Value',
            },
            gridLines: {
              borderDash: [2],
              drawBorder: false,
              borderDashOffset: [2],
              color: 'rgba(33, 37, 41, 0.2)',
              zeroLineColor: 'rgba(33, 37, 41, 0.15)',
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        ],
      },
    },
  };
  let ctx3 = document.getElementById('bar-chart3').getContext('2d');
  window.myBar3 = new Chart(ctx3, config3);
  let config4 = {
    type: 'bar',
    data: {
      labels: [content.a4],
      datasets: [
        {
          backgroundColor: '#4c51bf',
          borderColor: '#4c51bf',
          data: [content.a4],
          fill: false,
          barThickness: 50,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      title: {
        display: false,
        text: 'Orders Chart',
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true,
      },
      legend: {
        display: false,
        labels: {
          fontColor: 'rgba(0,0,0,.4)',
        },
        align: 'end',
        position: 'bottom',
      },
      scales: {
        xAxes: [
          {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, ticks) {
                return 'con' + ': ' + value + 'mS/cm';
              },
            },
            scaleLabel: {
              display: true,
            },
            gridLines: {
              borderDash: [2],
              borderDashOffset: [2],
              color: 'rgba(33, 37, 41, 0.3)',
              zeroLineColor: 'rgba(33, 37, 41, 0.3)',
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              min: 13,
              max: 15,
            },
            display: true,
            scaleLabel: {
              display: false,
              labelString: 'Value',
            },
            gridLines: {
              borderDash: [2],
              drawBorder: false,
              borderDashOffset: [2],
              color: 'rgba(33, 37, 41, 0.2)',
              zeroLineColor: 'rgba(33, 37, 41, 0.15)',
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        ],
      },
    },
  };
  let ctx4 = document.getElementById('bar-chart4').getContext('2d');
  window.myBar4 = new Chart(ctx4, config4);

  // const res1 = await fetch(`${apiURL}/api/leds?IMEI=${IMEI.value}`, {
  //   method: 'GET',
  //   headers: {
  //     Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
  //   },
  // });
  // const content1 = await res1.json();
  // led.value.led1 = content1.led1 === 'HIGH';
  // led.value.led2 = content1.led2 === 'HIGH';
  // led.value.led3 = content1.led3 === 'HIGH';
});

const update = async () => {
  const res = await fetch(
    `${apiURL}/api/datas?filters[IMEI][$eq]=${IMEI.value}&sort=createdAt:desc&pagination[start]=0&pagination[limit]=1`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
      },
    }
  );
  const content = (await res.json()).data[0].attributes;
  window.myBar1.data.datasets[0].data[0] = window.myBar1.data.labels[0] =
    content.a1;
  window.myBar2.data.datasets[0].data[0] = window.myBar2.data.labels[0] =
    content.a2;
  window.myBar3.data.datasets[0].data[0] = window.myBar3.data.labels[0] =
    content.a3;
  window.myBar4.data.datasets[0].data[0] = window.myBar4.data.labels[0] =
    content.a4;
  window.myBar1.update();
  window.myBar2.update();
  window.myBar3.update();
  window.myBar4.update();
};

// const checkBox = async (e) => {
//   const res = await fetch(
//     `${apiURL}/api/leds?IMEI=${IMEI.value}&led${e.target.id}=${
//       e.target.checked ? 'HIGH' : 'LOW'
//     }`,
//     {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
//       },
//     }
//   );
// };

let period = setInterval(update, reqPeriod);
onBeforeUnmount(() => {
  clearInterval(period);
});
</script>

<template>
  <div>
    <div class="relative min-w-0 break-words bg-white w-full shadow-lg rounded">
      <!-- <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full max-w-full flex-grow flex-1">
            <h6 class="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
              Last Data
            </h6>
            <h2 class="text-blueGray-700 text-xl font-semibold"></h2>
          </div>
        </div>
      </div> -->
      <div class="mx-auto w-full">
        <div>
          <!-- Card stats -->
          <div class="flex flex-wrap">
            <div class="w-3/12 p-3 flex-auto">
              <div class="relative h-350-px">
                <canvas id="bar-chart1"></canvas>
              </div>
            </div>
            <div class="w-3/12 p-3 flex-auto">
              <div class="relative h-350-px">
                <canvas id="bar-chart2"></canvas>
              </div>
            </div>
            <div class="w-3/12 p-3 flex-auto">
              <div class="relative h-350-px">
                <canvas id="bar-chart3"></canvas>
              </div>
            </div>
            <div class="w-3/12 p-3 flex-auto">
              <div class="relative h-350-px">
                <canvas id="bar-chart4"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white text-center"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 class="font-semibold text-lg text-blueGray-700">LEDs</h3>
          </div>
        </div>
      </div>
      <div class="block w-full overflow-x-auto">
        <table class="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-blueGray-50 text-blueGray-500 border-blueGray-100"
              >
                LED1
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-blueGray-50 text-blueGray-500 border-blueGray-100"
              >
                LED2
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-blueGray-50 text-blueGray-500 border-blueGray-100"
              >
                LED3
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                <input
                  type="checkbox"
                  @change="checkBox"
                  id="1"
                  :checked="led.led1"
                />
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                <input
                  type="checkbox"
                  @change="checkBox"
                  id="2"
                  :checked="led.led2"
                />
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                <input
                  type="checkbox"
                  @change="checkBox"
                  id="3"
                  :checked="led.led3"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> -->
  </div>
</template>
