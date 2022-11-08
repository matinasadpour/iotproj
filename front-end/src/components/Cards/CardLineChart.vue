<script setup>
import { nextTick } from 'vue';
import Chart from 'chart.js';

nextTick(async () => {
  let now = new Date(new Date().setHours(0, 0, 0, 0));
  let temp = [];
  let hum = [];
  for (let i = 0; i < 31; i++) {
    let tmp = new Date();
    tmp.setDate(now.getDate() - i);
    let str = `${('0' + tmp.getFullYear()).slice(-4)}-${(
      '0' +
      (tmp.getMonth() + 1)
    ).slice(-2)}-${('0' + tmp.getDate()).slice(-2)}`;
    let res = await fetch(
      `http://api.iotproj.ir/api/datas?filters[createdAt][$contains]=${str}&filters[IMEI][$eqi]=${sessionStorage.getItem(
        'IMEI'
      )}&pagination[pageSize]=100`,
      {
        type: 'GET',
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
        },
      }
    );
    let content = await res.json();
    if (content.data.length) {
      let sum1 = 0;
      let sum2 = 0;
      for (let j = 0; j < content.data.length; j++) {
        sum1 += content.data[j].attributes.temp;
        sum2 += content.data[j].attributes.hum;
      }
      temp.push({ x: str, y: sum1 / content.data.length });
      hum.push({ x: str, y: sum2 / content.data.length });
    } else {
      temp.push({ x: str, y: 0 });
      hum.push({ x: str, y: 0 });
    }
  }

  // let start = new Date(),
  //   end = new Date();
  // start.setDate(start.getDate() - 29); // set to 'now' minus 7 days.
  // start.setHours(0, 0, 0, 0); // set to midnight.

  var config = {
    type: 'line',
    data: {
      datasets: [
        {
          label: 'Temperature',
          data: temp,
          borderColor: '#4c51bf',
          backgroundColor: '#4c51bf',
          fill: false,
        },
        {
          label: 'Humidity',
          data: hum,
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
