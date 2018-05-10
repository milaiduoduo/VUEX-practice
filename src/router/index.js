import Vue from 'vue';
import Router from 'vue-router';
import Counter from '@/components/counter.vue';
import HelpCounter from '@/components/helpCounter.vue'
Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Counter
    },
    {
      path: '/helperFunction',
      component: HelpCounter
    }
  ]
})

export default router;
