<!-- eslint-disable vue/no-mutating-props -->
<template>
  <v-row justify="center">
    
    <!-- <p>{{info}}</p> -->
      <!-- <v-card
      
    class="my-5 "
    max-width="400"
    tile
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{ info.commit.author.name }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Mensagem: {{ info.commit.message }}</v-list-item-title>
        <v-list-item-subtitle>{{info.commit.author.date}}</v-list-item-subtitle>
        <v-list-item-subtitle>{{info.commit.author.email}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
     <Bar :chart-data="chartData" />
  </v-card> -->
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import ICommits from '@/interface/ICommits'
import { Bar } from 'vue-chartjs'
import {  PropType } from "vue";

import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Commit',
    components: {  },
  props: {
   info:{
     type: Object as PropType<ICommits>,
    required: true,
   }
  },
  data(){
    return{
    selectPackage: this.propPackage,
    url : '',
       chartData: {
        labels: [ 'January', 'February', 'March'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20, 12]
          }
        ]
      }

    }
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
});
</script>