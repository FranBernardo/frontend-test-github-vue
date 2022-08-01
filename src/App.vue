<template>
  <v-app>
    <v-card class="main overflow-hidden">
      <v-app-bar color="cyan darken-4 accent-4" dark prominent>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>GitBusca</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-app-bar>

      <v-navigation-drawer
        color="cyan darken-4 accent-4"
        v-model="drawer"
        absolute
        bottom
        temporary
      >
        <v-list nav dense>
          <v-list-item-group
            active-class="border"
            v-model="group"
          >
            <v-list-item class="group">
            <router-link to="/home" class="links"
              >
                <v-list-item-title>Home</v-list-item-title>
                </router-link>
              </v-list-item>
            
            <v-list-item class="group">
            <router-link to="/about" class="links"
                  >
              <v-list-item-title>
                Abouts</v-list-item-title
              ></router-link
                >
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <v-nav> </v-nav>
        <router-view />
      </v-main>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
});
</script>
<style scoped>
.main {
  height: 100vh;
  width: 100vw;
}
.links {
  text-decoration: none;
  color: black;
 
}
.group {
 border: 1px solid rgb(204, 199, 199);
  text-align: center;
}
</style>
