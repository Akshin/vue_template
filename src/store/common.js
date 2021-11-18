// import api from "@/api";

import menu from "@/data/settings/menu";
import profile from "@/data/settings/profile";

const state = {
  menu,
  profile,
};

const getters = {};

const actions = {
  init: async () => {
    // await dispatch("getUsers");
  },
};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
