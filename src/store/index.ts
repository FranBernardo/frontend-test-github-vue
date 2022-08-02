import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from 'vue'
import ICommits from "@/interface/ICommits";

interface Estado {
  urlCommits: ICommits[]
}
export const key: InjectionKey<Store<Estado>> = Symbol()
export const store = createStore<Estado>({
  state: {
    urlCommits:[]
  },
  getters: {
  },
  mutations: {
    'COMMITS'(state, urls: string){
      const urlCommit = {
        nome: 'Fran',
        url: urls
      } 
      state.urlCommits.push(urlCommit)
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
