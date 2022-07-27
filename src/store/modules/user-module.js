// import { userService } from '../../services/user-service-local.js';
import { userService } from '../../services/user.service.mongo';
import { utilService } from '../../services/util.service.js';
export default {
  state: {
    loggedInUser: utilService.loadFromSessionStorage('loggedInUser') || null,
  },
  getters: {
    // Tal
    getLoggedUser(state) {
      // console.log('logged in user from store=', state.loggedInUser)
      if (!state.loggedInUser) return false;
      return state.loggedInUser;
    },
  },
  mutations: {
    // Tal
    setLoggedinUser(state, { user }) {
      state.loggedInUser = user;
    },
    loadLoggedInUser(state) {
      // state.loggedInUser = userService.getLoggedInUser();
    },
  },
  actions: {
    // Tal
    async login({ commit }, { userCred }) {
      try {
        const user = await userService.login(userCred);
        commit({ type: 'setLoggedinUser', user });
        return user;
      } catch (err) {
        console.log('userStore: Error in login', err);
        throw err;
      }
    },
    // Tal
    async logout({ commit }) {
      try {
        await userService.logout();
        commit({ type: 'setLoggedinUser', user: null });
        console.log('logout>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
      } catch (err) {
        console.log('userStore: Error in logout', err);
        throw err;
      }
    },
    // Tal
    async signup({ commit }, { userCred }) {
      try {
        const user = await userService.signup(userCred);
        commit({ type: 'setLoggedinUser', user });
        return user;
      } catch (err) {
        console.log('userStore: Error in signup', err);
        throw err;
      }
    },
  },
};
