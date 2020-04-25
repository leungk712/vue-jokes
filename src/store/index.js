import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import VueAxios from "vue-axios";
import JokesModule from "@/store/modules/jokes";

Vue.use(Vuex);

Vue.use(VueAxios, Axios);

export default new Vuex.Store({
  modules: {
    jokesModule: JokesModule
  }
});
