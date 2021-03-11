import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goods: []
  },
  mutations: {
    SET_PRODUCTS_TO_GOODS: (state, products) => {
      state.goods = products;
    },

  },
  actions: {
    GET_GOODS_FROM_API({
      commit
    },url) {
      return axios(url, {
          method: "GET"
        })
        .then(products => {
          commit("SET_PRODUCTS_TO_GOODS", products.data);
          return products;
        })
        .catch(e => {
          console.log(e);
          return e;
        });
    },

  },
  modules: {},
  getters: {
    API: state => {
      return state.goods;
    },

  }
});