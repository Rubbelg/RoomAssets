import { markRaw } from 'vue';
import type { App } from 'vue';
import { createPinia } from 'pinia';
import type { Router } from 'vue-router';

function initPinia(app: App<Element>, router: Router) {
  const pinia = createPinia();
  app.use(pinia);

  pinia.use(({ store }) => {
    store.$router = markRaw(router);
  });
}

export { initPinia };
