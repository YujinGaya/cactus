import { createRouter, createWebHistory } from 'vue-router';
import AccountBook from '@/views/AccountBook.vue';

const routes = [
  {
    path: '/',
    name: 'AccountBook',
    component: AccountBook,
  },
  {
    path: '/help',
    name: 'Help',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Help.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
