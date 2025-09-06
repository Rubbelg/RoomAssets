import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { initPrimeVue } from './core/plugins/PrimeVue.ts';

const app = createApp(App);

function mountApp() {
  initPrimeVue(app);
  app.mount('#app');
}

mountApp();
