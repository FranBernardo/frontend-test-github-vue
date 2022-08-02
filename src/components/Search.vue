<template>
  <v-container>
    <v-row cols="12" class="container">
      <v-text-field
        v-model="repositorio"
        :rules="rules"
        hide-details="auto"
        placeholder="Search"
        required
      ></v-text-field>
      <v-btn @click="teste" color="blue-grey" class="ma-3 btn"  justify="center">Search <v-icon> mdi-magnify</v-icon></v-btn>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Search",
    data(){
        return{
            repositorio: "",
            isText: true,
            rules: [
                function (value: string) {
                return !!value || "Required.";
                },
            ],
        }
    }, 
    
    methods: {
        teste() {
            this.$emit("buscar", this.repositorio)
            this.repositorio = "";
        }
    }
})
</script>
<style scoped>
.container{
width: 400px;
display: flex;
right: 0;
float: right;

}
.btn{
  color: white !important;
}
</style>