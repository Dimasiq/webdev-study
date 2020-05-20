/* eslint no-underscore-dangle: 0 */
import axios from 'axios';

export default {
  actions: {
    async fetchTickets(ctx) {
      try {
        const res = await axios.get('http://localhost:3000/tickets');
        if (res.status !== 200) {
          return {
            success: false,
            error: 'Server connection error!',
          };
        }
        this.loading = false;
        ctx.commit('updateTickets', res.data);
        return {
          success: true,
          data: res.data,
        };
      } catch (e) {
        return {
          success: false,
          error: e,
        };
      }
    },
  },
  mutations: {
    updateTickets(state, payload) {
      state.tickets = payload;
    },
  },
  state: {
    tickets: [],
  },
  getters: {
    getTickets(state) {
      return state.tickets;
    },
  },
};
