<!-- eslint-disable vue/no-mutating-props -->
<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px" @click:outside="close">
      <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          OVERLINE
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Headline 5
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'ModalTeste',
  props: {
    dialog: {
      type: Boolean,
      required: false,
      default: false,
    },
    propPackage: {
      type: String,
      required: true,
    },
  },
  data(){
    return{
    selectPackage: this.propPackage,

    }
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
});
</script>