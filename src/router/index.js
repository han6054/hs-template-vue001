import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: '/salesDepartmentsLink/',
  routes: [
    {
      path: '/testIndex',
      name: 'testIndex',
      component: () => import('pages/index.vue'),
      meta: {
        title: '首页'
      }
    },
  ]
});
router.afterEach(() => {
});
export default router
