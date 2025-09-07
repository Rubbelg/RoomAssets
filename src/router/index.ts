import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: () => import('@/views/MainView.vue')
    }
  ]
});

export default router;
