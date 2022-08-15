<template>
<div class="container-sobre">
  <Texto :texto="texto" :titulo="titulo"/><router-link to="/Busca" class="links"><v-btn class="btn px-9">Buscar</v-btn> </router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Texto from '@/components/Texto.vue'
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sobre",
 components: { Texto },
  data() {
    return {
        texto: "gitbusca é uma plataforma onde você pode buscar por repositorios e verifciar os commits feito no repositorio com um grafico. se deseja buscar repositoria so clicar aqui.",
        titulo: "Sobre GitBusca",
      
        
    };
  },
});
</script>
<style scoped>
.texto{
    color:aliceblue;
    margin: auto
}
.container-sobre{
  text-align: center;
}
.links{
  text-decoration: none;
}
.btn{
  background: #8DAA9D;
  color: aliceblue;
}
</style>