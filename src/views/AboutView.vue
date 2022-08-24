<template>
  <div class="about">
    <!-- <commit v-for="(info, index) in infos"
      :key="index" :info="info"/> -->
      <h1>{{ url }}</h1>
    <!-- <p>{{info}}</p> -->
    <div
     v-for="(currency, index) in infos"
      :key="index"
      class="currency">
      <v-card
      
    class="my-5 "
    max-width="400"
    tile
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{ currency.commit.author.name }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Mensagem: {{ currency.commit.message }}</v-list-item-title>
        <v-list-item-subtitle>{{currency.commit.author.date}}</v-list-item-subtitle>
        <v-list-item-subtitle>{{currency.commit.author.email}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <!-- <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>Three-line item</v-list-item-title>
        <v-list-item-subtitle>
          Secondary line text Lorem ipsum dolor sit amet,
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          consectetur adipiscing elit.
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item> -->
  </v-card>
  </div>
  </div>
</template>
<script lang="ts">
import { store } from "@/store";
import axios from "axios";
import ICommits from '@/interface/ICommits'
import { defineComponent } from "vue";


export default defineComponent({
    name: "AboutView",
    data() {
        return {
            url: "",
            infos: [] as ICommits[],
        };
    },
    mounted() {
        axios
            .get(store.state.urlCommits)
            .then((response) => {
            this.infos = response.data;
        });
    },
    
})
</script>
