import Vue from 'vue';
import Router from 'vue-router';
import Counter from '@/components/counter.vue';
Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Counter
    }
  ]
})

export default router;
