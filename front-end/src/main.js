import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

// styles

import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/assets/styles/tailwind.css';

// mouting point for the whole app

import App from '@/App.vue';

// layouts

import Auth from '@/layouts/Auth.vue';
import Admin from '@/layouts/Admin.vue';
import Doctor from '@/layouts/Doctor.vue';

// views for Admin layout

import AdminDashboard from '@/views/admin/Dashboard.vue';

// views for Docotor layout

import DoctorDashboard from '@/views/doctor/Dashboard.vue';
import DoctorError from '@/views/doctor/Error.vue';

import DoctorView from '@/views/doctor/dashboard/View.vue';
import DoctorBarChart from '@/views/doctor/dashboard/BarChart.vue';
import DoctorTable from '@/views/doctor/dashboard/Table.vue';
import DoctorLineChart from '@/views/doctor/dashboard/LineChart.vue';
import DoctorSetting from '@/views/doctor/dashboard/Setting.vue';

// views for Auth layout

import Login from '@/views/auth/Login.vue';
import Register from '@/views/auth/Register.vue';

// routes

const routes = [
  {
    path: '/',
    redirect: '/auth/login',
  },
  {
    path: '/auth',
    redirect: '/auth/login',
    component: Auth,
    children: [
      {
        path: '/auth/login',
        component: Login,
      },
      {
        path: '/auth/register',
        component: Register,
      },
    ],
  },
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    component: Admin,
    children: [
      {
        path: '/admin/dashboard',
        component: AdminDashboard,
      },
    ],
  },
  {
    path: '/doctor',
    redirect: '/doctor/dashboard',
    component: Doctor,
    children: [
      {
        path: '/doctor/dashboard',
        component: DoctorDashboard,
      },
      {
        path: '/doctor/error',
        component: DoctorError,
      },
      {
        path: '/doctor/view/:IMEI',
        component: DoctorView,
      },
      {
        path: '/doctor/barchart/:IMEI',
        component: DoctorBarChart,
      },
      {
        path: '/doctor/table/:IMEI',
        component: DoctorTable,
      },
      {
        path: '/doctor/linechart/:IMEI',
        component: DoctorLineChart,
      },
      {
        path: '/doctor/setting/:IMEI',
        component: DoctorSetting,
      },
    ],
  },

  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
