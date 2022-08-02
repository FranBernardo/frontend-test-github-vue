<template>
  <v-container fluid class="mt-15">
    <v-row justify="center">

      <v-expansion-panels popout>
        <v-expansion-panel hide-actions>
          <v-expansion-panel-header>
            <v-row align="center" class="spacer" no-gutters>
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
                <strong v-html="repositorio.name"></strong>
              </v-col>

              <v-col class="text-no-wrap" cols="5" sm="3">
                <strong v-html="repositorio.owner.login"></strong>
              </v-col>

              <v-col
                v-if="repositorio.owner.id"
                class="grey--text text-truncate hidden-sm-and-down"
              >
                &mdash;
                {{ repositorio.name }}
              </v-col>
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text > {{ repositorio.commits_url }}</v-card-text> <v-btn @click.prevent="SeeCommits">commits</v-btn>
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
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Repositorio",
  props: {
    repositorio: {
      type: Object as PropType<IRepositorio>,
      required: true,
    },
  },
  data(){
    return{
      teste: 'teste vuezx'
    }
  },
  setup(){
    const store = useStore();
    return{
      store
    }
  },
  methods: {
    SeeCommits(){
      this.store.commit('COMMITS', this.repositorio.commits_url)
      console.log(this.repositorio.commits_url)
    }
  }
});
</script>