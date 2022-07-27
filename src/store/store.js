import { createStore } from 'vuex'
// import { stayService } from '../services/stays-service-local'
import stayStore from './modules/stay-module'
import userStore from './modules/user-module'
import orderStore from './modules/order-module'

import { stayService } from '../services/stay.service.mongo'
import { userService } from '../services/user.service.mongo'
import { orderService } from '../services/order.service.mongo'

export const store = createStore({
  strict: true,
  state: {
    //golan
    isTransparentMenu: false,
    isFilterUp: true,
    isWantToSearch: false,
  },
  actions: {},
  mutations: {
    //golan
    setTransparent(state, { isTransparentMenu }) {
      state.isTransparentMenu = isTransparentMenu
      console.log('changed isTransparentMenu to ', isTransparentMenu)
    },
    //golan
    setFilterUp(state, { isFilterUp }) {
      state.isFilterUp = isFilterUp
      // console.log('changed isFilterShown to ', isFilterUp)
    },
    setWantToSearch(state, { isWantToSearch }) {
      state.isWantToSearch = isWantToSearch
      // console.log('changed isFilterShown to ', isFilterUp)
    },
  },
  getters: {
    //golan
    getTransparent(state) {
      return state.isTransparentMenu
    },
    //golan
    isFilterUp(state) {
      return state.isFilterUp
    },
    getWantToSearch(state) {
      return state.isWantToSearch
    },
  },
  modules: {
    stayStore,
    userStore,
    orderStore,
  },
})
