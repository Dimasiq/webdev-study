import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import tickets from './modules/tickets';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    tickets,
  },
});
