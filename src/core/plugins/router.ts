import type { App } from 'vue';
import type { Router } from 'vue-router';

function initRouter(app: App<Element>, router: Router) {
  app.use(router);
}

export { initRouter };
