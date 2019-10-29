import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const modules = {
};

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules
});

export default store
