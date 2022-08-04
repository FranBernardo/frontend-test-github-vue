import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from 'vue'

interface Estado {
  urlCommits: string
}
export const key: InjectionKey<Store<Estado>> = Symbol()
export const store = createStore<Estado>({
  state: {
    urlCommits: ''
  },
  getters: {
  },
  mutations: {
    'COMMITS'(state, urls: string){
      state.urlCommits = urls
      
    }
  },
  actions: {
  },
  modules: {
  }
})

export function useStore(): Store<Estado>{
  return vuexUseStore(key)
}
