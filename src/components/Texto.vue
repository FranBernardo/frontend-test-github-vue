<template>
  <div class="container-texto">
    <h1>{{ titulo }}</h1>
    <h2>{{ texto }}</h2>
    
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Texto",
  props: {
    titulo: {
      type: String,
      required: false,
    },
    texto: {
      type: String,
      required: true,
    },
  },
});
</script>
<style scoped>
h2 {
  color: aliceblue;
}
.btn{
    background: #8daa9d;
    color: aliceblue;
    top: 41px;
}
h1 {
  color: aliceblue;
  margin: 20px;
}
.container-texto {
  width: 500px;
  margin: auto;
  text-align: center;
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  width: 1202px;
  height: 259px;
  text-transform: uppercase;
}
.links{
  text-decoration: none;

}
</style>