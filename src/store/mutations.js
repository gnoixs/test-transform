import * as types from './mutation_types'

const mutations = {
  [types.TOGGLE_MENU](state){
    state.showMenu = !state.showMenu;
  },
  [types.CHANGE_HEADER](state, newState){
    state.headerState = newState;
  }
}

export default mutations
