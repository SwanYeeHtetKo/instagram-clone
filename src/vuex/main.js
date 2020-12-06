import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        profileTabId: 0,
        accountTabId: null
    },
    getters:{
        profileTabId(state){
            return state.profileTabId
        },
        accountTabId(state){
            return state.accountTabId
        }
    },
    actions:{
        takeTabId({commit},data){
            commit('saveInVuexTabId',data)
        },

        takeAccountId({commit},data){
            commit('saveInVuexAccountTabId',data)
        }
    },
    mutations:{
        saveInVuexTabId(state,e){
            state.profileTabId = e.id
        },

        saveInVuexAccountTabId(state,e){
            state.accountTabId = e.id
        }
    }
  })
