import type { App } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

function initPrimeVue(app: App<Element>) {
  app.use(PrimeVue, {
    ripple: true,
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: '.dark'
      }
    }
  });
}

export { initPrimeVue };
