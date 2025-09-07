import './style.css';
import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import { initPinia } from '@/core/plugins/pinia.ts';
import { initRouter } from '@/core/plugins/router.ts';
import { initPrimeVue } from './core/plugins/PrimeVue.ts';

const app = createApp(App);

async function mountApp() {
  initPrimeVue(app);
  initPinia(app, router);
  initRouter(app, router);
  await router.isReady();
  app.mount('#app');
}

await mountApp();
