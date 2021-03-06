import Vue from "vue";
import Vuex from "vuex";

import core$common from "./common";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    core$common,
  },
});
