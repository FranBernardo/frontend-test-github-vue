<template>
  <v-container fluid class="mt-15">
  <ModalTeste :dialog="openDialog" @close="close" :propPackage="propPackage"/>
    <v-row justify="center">

      <v-expansion-panels>
        <v-expansion-panel >
          <v-expansion-panel-header>
            <v-row align="center" class="spacer" >
              <v-col cols="4" sm="2" md="1">
                <v-avatar size="36px">
                  <img
                    width="500"
                    height="50"
                    alt="Avatar"
                    :src="repositorio.owner.avatar_url"
                  />
                </v-avatar>
              </v-col>

              <v-col class="hidden-xs-only" sm="5" md="3">
                <strong v-html="repositorio.full_name"></strong>
              </v-col>
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text > <span class="text-bold mr-13">{{ repositorio.language }}</span> <span>{{Dataformatada}}</span> </v-card-text> 
            <v-card-text > </v-card-text> 
            <v-btn @click.prevent="bookDialog">commits</v-btn>
              
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>

</template>
<script lang="ts">
import IRepositorio from "@/interface/IRepositorio";
import { useStore } from "@/store";
import {  PropType } from "vue";
import { defineComponent } from "vue"
import moment from 'moment';
import ModalTeste from "./ModalTeste.vue"

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Repositorio",
    components: { ModalTeste},
    props: {
        repositorio: {
            type: Object as PropType<IRepositorio>,
            required: true,
        },
    },
    data() {
        return {
            teste: "teste vuezx",
            dialog: false,
            openDialog: false,
            propPackage: "",
        };
    },
    setup() {
        const store = useStore();
        return {
            store
        };
    },
    computed: {
        Dataformatada() {
            return moment(this.repositorio.pushed_at).format("DD MMMM YYYY");
        }
    },
    methods: {
        SeeCommits() {
            this.store.commit("COMMITS", this.repositorio.commits_url.slice(0, -6));
            this.$router.push("/about");
        },
        bookDialog() {
            this.openDialog = true;
        },
        close() {
      this.openDialog = false;
    },
    },
   
}
);
</script>
<style scoped>
span {
  font-weight: bold;
}
</style>