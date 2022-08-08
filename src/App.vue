<template>
  <v-app>
    <v-card class="main overflow-hidden">
      <v-app-bar color=" menu darken-4 accent-4" dark prominent>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>GitBusca</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-app-bar>

      <v-navigation-drawer style="background: #0D1117"
        v-model="drawer"

        
      >
        <v-list nav dense  class="nav">
          <v-list-item-group
            active-class="border"
            v-model="group"
          >
            <v-list-item class="group">
            <router-link to="/" class="links"
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
  height: 100%;
  width: 100vw;
  background:#0D1117 ;
}
.menu {
  background: #0D1117;
  color:#FBF5F3 ;
}
.links {
  text-decoration: none;
   color:#0D1117 ;
   background: #0D1117;
 
}

.nav{
  background: #0D1117 !important;
}
.group {
 border: 1px solid rgb(204, 199, 199);
  text-align: center;
 background: #8DAA9D ;;

}
</style>
