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

import Dashboard from '@/views/admin/Dashboard.vue';
import Settings from '@/views/admin/Settings.vue';

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
        component: Dashboard,
      },
      {
        path: '/admin/settings',
        component: Settings,
      },
    ],
  },
  {
    path: '/doctor',
    redirect: '/doctor/dashboard',
    component: Admin,
    children: [
      {
        path: '/doctor/dashboard',
        component: Dashboard,
      },
      {
        path: '/doctor/settings',
        component: Settings,
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
