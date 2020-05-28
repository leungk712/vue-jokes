import Vue from "vue";

const state = {
  jokes: []
};

const actions = {
  getJokes: ({ commit }) => {
    return new Promise((resolve, reject) => {
      Vue.axios
        .get("https://official-joke-api.appspot.com/jokes/ten")
        .then(resp => {
          commit("setJokes", resp.data);
          resolve(resp);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};

const mutations = {
  setJokes: (state, jokes) => {
    state.jokes = jokes;
  }
};

const getters = {
  retrieveJokes: state => state.jokes
};

export default {
  state,
  actions,
  mutations,
  getters
};
