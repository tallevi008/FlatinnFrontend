import { createRouter, createWebHashHistory } from 'vue-router';
import stayApp from '../pages/stay-app.vue';
import stayDetails from '../pages/stay-details.vue';
import stayEdit from '../pages/stay-edit.vue';
import userDetails from '../pages/user-details.vue';
import loginSignupPage from '../pages/login-signup-page.vue';
import homePage from '../pages/home-page.vue';
import dashboard from '../pages/dashboard.vue';
const router = createRouter({
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage,
    },
    {
      path: '/stay',
      name: 'stayApp',
      component: stayApp,
    },
    {
      path: '/stay/:id',
      name: 'stayDetails',
      component: stayDetails,
    },
    {
      path: '/stay/edit/:id?',
      name: 'stayEdit',
      component: stayEdit,
    },
    {
      path: '/user/:id',
      name: 'userDetails',
      component: userDetails,
    },
    {
      path: '/signup',
      name: 'loginSignupPage',
      component: loginSignupPage,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
    },
  ],
});

export default router;
