import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    count: 100
  },
  getters: {
    filterCount(state){
      return state.count >= 120 ? 120 : state.count;
    }
  },
  mutations: {
    addIncrement(state, payload){
      state.count += payload.num;
    },
    decrement(state, payload){
      state.count -= payload.num2;
    }
  },
  actions: {
    addAction({commit, dispatch}, payload){
      // console.log('context是什么？', context, 'payload', payload);
      setTimeout(() => {
        // // 异步操作，写到action中，由action来提交mutation
        // context.commit('addIncrement', {num: 5});
        // // 在异步操作里再触发action,且可以带参数
        // context.dispatch('secondAction', {name: '测试用！'});
        commit('addIncrement', {num: payload.num});
        dispatch('secondAction', {name: '测试用！'});
      }, 1000)
    },
    secondAction(context, payload){
      console.log(payload);
    }
  }
});

export default store;
