import * as types from './mutation_types'

// 显示右侧下拉菜单
export const toggleMenu = function({commit}){
  commit(types.TOGGLE_MENU)
}
