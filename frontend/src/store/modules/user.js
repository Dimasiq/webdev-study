/* eslint no-underscore-dangle: 0 */
import axios from 'axios';

export default {
  actions: {
    async registration(ctx, data) {
      try {
        const res = await axios.post('http://localhost:3000/user', data,
          {
            withCredentials: true,
          });
        if (res.status !== 200) {
          return {
            success: false,
            error: 'Server connection error',
          };
        }
        if (res.data.error) {
          return {
            success: false,
            error: 'Registration error!',
          };
        }
        return {
          success: true,
          res: res.data,
        };
      } catch (err) {
        return false;
      }
    },
    async fetchAuth(ctx, data) {
      if (localStorage.userData) {
        ctx.commit('userLogin', JSON.parse(localStorage.getItem('userData')));
        return JSON.parse(localStorage.userData);
      }
      try {
        const res = await axios.post('http://localhost:3000/login', data,
          {
            withCredentials: true,
          });
        if (res.status !== 200) {
          return {
            success: false,
            error: 'Server connection error',
          };
        }
        if (!res.data.username) {
          return {
            success: false,
            error: 'Authentication error!',
          };
        }
        ctx.commit('userLogin', res.data);
        return {
          success: true,
          userData: res.data,
        };
      } catch (err) {
        return false;
      }
    },
    async updateUser(ctx, data) {
      const res = await axios.put('http://localhost:3000/user', data, { withCredentials: true });
      if (res.status !== 200) {
        return {
          success: false,
          res: res.data,
        };
      }
      ctx.commit('updateUser', data);
      return {
        success: true,
        data: res.data,
      };
    },
    async logoutAuth(ctx) {
      await axios.get('http://localhost:3000/logout', { withCredentials: true });
      ctx.commit('userLogout', {});
    },
    async fetchUserTickets(ctx, data) {
      const res = await axios.post('http://localhost:3000/my_tickets', data, { withCredentials: true });
      if (res.status !== 200) {
        return {
          success: false,
          res: res.data,
        };
      }
      ctx.commit('updateUserTickets', res.data);
      return {
        success: true,
        data: res.data,
      };
    },
  },
  mutations: {
    userLogin(state, payload) {
      state.user = payload;
      localStorage.setItem('userData', JSON.stringify(state.user));
    },
    userLogout(state) {
      state.user = {};
      localStorage.removeItem('userData');
    },
    updateUser(state, payload) {
      state.user.tickets = payload.tickets;
      localStorage.setItem('userData', JSON.stringify(state.user));
    },
    updateUserTickets(state, payload) {
      state.userTickets = payload.map((el) => {
        const temp = state.user.tickets.find((elem) => elem._id === el._id);
        if (temp.quantity) {
          const item = el;
          item.quantity = temp.quantity;
          return item;
        }
        return el;
      });
    },
  },
  state: {
    user: {},
    userTickets: [],
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getUserTickets(state) {
      return state.userTickets;
    },
  },
};
