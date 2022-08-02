<template>
  <search @buscar="BuscaRepo"></search>
  <div v-if="isText">
    <p>Busco o repositorio do git</p>
  </div>

  <div v-else>
  <h3>Repositorios</h3>
  <repositorios v-for="(repositorio, index) in repositorios" :key="index" :repositorio="repositorio"></repositorios>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import api from "@/services/api";
import IRepositorio from "../interface/IRepositorio"
import Search from "@/components/Search.vue";
import Repositorios from "../components/Repositorios.vue";

export default defineComponent({
  name: "HomeView",

  components: { Search, Repositorios },
  data() {
    return {
      repositorios: [] as IRepositorio[],
      isText: true,
    };
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    verificar(): boolean{let isText = true
      if(this.repositorios){
        isText = false
      }
      return isText
    }
  },
  methods: {
    BuscaRepo(payload: string) {
      api.get(payload).then((response) => {
        this.repositorios = response.data.items;
        console.log(this.repositorios)
        this.isText = false
        
      });
    },
  },
});
</script>
<style scoped>

</style>
