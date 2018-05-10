import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    count: 100
  },
  mutations: {
    addIncrement(state, payload){
      state.count += payload.num;
    },
    decrement(state, payload){
      state.count -= payload.num2;
    }
  }
});

export default store;
