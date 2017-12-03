import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state ={
  scr:1,
  cd:5
}
const  mutations={//方法
  json:function(){
    console.log(state)
    state.scr+=1
  },
  cdd:function(){
    state.cd+=1
  },
  ccd(){
    state.cd-=1
  }
}
const getters ={//发送数据
  scr(state){
    return state.scr
  },
  cd(state){
    return state.cd
  }
}
const actions ={//发送方法
  aa({commit}){
      commit('json')
  },
  jiajia({commit}){
    commit("cdd")
  },
  jianjian({commit}){
    commit("ccd")
  }
}
export default new Vuex.Store({
  state,getters,actions,mutations
})
