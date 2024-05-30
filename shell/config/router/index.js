import Routes from '@shell/config/router/routes';
import { createRouter, createWebHistory } from 'vue-router';

// TODO: #9539: Add import of this router to app
export const routerOptions = {
  history: {
    ...createWebHistory(),
    // Note: router base comes from the ROUTER_BASE env var
    base: process.env.routerBase || '/'
  },
  routes:   Routes,
};

export function extendRouter(config) {
  const base = (config._app && config._app.basePath) || routerOptions.base;
  const router = createRouter({ ...routerOptions, base });

  return router;
}