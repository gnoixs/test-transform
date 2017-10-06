import * as types from './mutation_types'

const mutations = {
  [types.TOGGLE_MENU](state){
    state.showMenu = !state.showMenu;
  }
}

export default mutations
