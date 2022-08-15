<template>
  <search @buscar="BuscaRepo"></search>
  <div v-if="isText" class="mt-16">
    <texto :texto="texto"/>
  </div>

  <div v-else>
    <h3>Repositorios</h3>
    <repositorios
      v-for="(repositorio, index) in repositorios"
      :key="index"
      :repositorio="repositorio"
    ></repositorios>

    <v-container>
      <v-row justify="center pages">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-model="page"
              class="my-4"
              :length="totalPage"
              @click="passar"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import api from "@/services/api";
import IRepositorio from "../interface/IRepositorio";
import Search from "@/components/Search.vue";
import Texto from "../components/Texto.vue"
import Repositorios from "../components/Repositorios.vue";

export default defineComponent({
  name: "BuscaView",

  components: { Search, Repositorios, Texto },
  data() {
    return {
      repositorios: [] as IRepositorio[],
      isText: true,
      totalPage: 0,
      offset: 0,
      limit: 5,
      page: 1,
      nomeRepositorio: "",
      texto: "Busco o repositorio do git"
    };
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    verificar(): boolean {
      let isText = true;
      if (this.repositorios) {
        isText = false;
      }
      return isText;
    },
  },

  methods: {
    BuscaRepo(payload: string) {
      this.nomeRepositorio = payload;
      api
        .get(`${payload}&page=${this.page}&per_page=${this.limit}`)
        .then((response) => {
          this.totalPage = response.data.total_count / this.limit;
          console.log(response.data.items)
          this.repositorios = response.data.items;
          this.isText = false;
        });
    },

  passar(){
    if (this.page <= this.totalPage) {
        this.page;
      }else{
        this.page = 1
      }
      this.BuscaRepo(this.nomeRepositorio);

  }
  },
});
</script>
<style scoped>
h1 {
  color: aliceblue;
}
.pages {
  color: #8daa9d;
}
</style>
