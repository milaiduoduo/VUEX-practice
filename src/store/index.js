import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    count: 100
  },
  mutations: {
    addIncrement(state){
      state.count += 1;
    },
    decrement(state){
      state.count -= 1;
    }
  }
});

export default store;
