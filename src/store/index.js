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
  },
  actions:{
    addAction(context){
      setTimeout(()=>{
        //异步操作，写到action中，由action来提交mutation
        context.commit("addIncrement",{num:5});
      },1000)
    }
  }
});

export default store;
