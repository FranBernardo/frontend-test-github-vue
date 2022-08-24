<template>
  <v-container>
    <v-row cols="12" class="container">
      <v-text-field
        v-model="repositorio"
        :rules="rules"
        hide-details="auto"
        data-test="zipCodeText"
        placeholder="Search"
        id="texto"
        required
      ></v-text-field>
      <v-btn @click="teste" color="blue-grey" class="ma-3 btn" data-test="saveButton" justify="center"
        >Search <v-icon> mdi-magnify</v-icon></v-btn
      >
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",
  data() {
    return {
      repositorio: "vue",
      isText: true,
      rules: [
        function (value: string) {
          return !!value || "Required.";
        },
      ],
    };
  },
  methods: {
    teste(): void {
      this.$emit("buscar", this.repositorio);
    },
  },
})
</script>
<style scoped>
.container {
  width: 400px;
  display: flex;
  right: 0;
  float: right;
  color: #000;
  background: #fbf5f3 !important;
}
.btn {
  color: white !important;
}
</style>