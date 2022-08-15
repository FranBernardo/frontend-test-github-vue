<template>
  <v-app>
    <v-card class="main overflow-hidden">
      <v-app-bar color=" menu darken-4 accent-4" dark prominent>
        <v-app-bar-nav-icon
          class="btn-side"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title class="mt-5">
          <img
            src="https://fontmeme.com/permalink/220808/95db4661b8685d53c8b192d0aba11914.png"
            alt="fonte-da-netflix"
            border="0"
          />
        </v-toolbar-title>

        <v-spacer></v-spacer>
      </v-app-bar>

      <v-navigation-drawer  style="background: #8DAA9D" v-model="drawer">
        <v-list nav dense class="nav">
          <v-spacer></v-spacer>
          <v-list-item-group active-class="border" v-model="group" class="item-group">
            <v-list-item class="group">
              <router-link to="/" class="links">
                <v-list-item-title>Sobre</v-list-item-title>
              </router-link>
            </v-list-item>

            <v-list-item class="group">
              <router-link to="/Busca" class="links">
                <v-list-item-title> Buscar </v-list-item-title></router-link
              >
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <div class="footer">
        <h3 class="mt-16 text-white ">Fran Bernardo</h3>
        </div>
      </v-navigation-drawer>
      <v-main class="mt-15">
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
  background: #0d1117;
}
.footer{
  text-align: center;
}
.btn-side {
  color: #8daa9d;
}
.menu {
  background: #0d1117;
  color: #fbf5f3;
  height: 13%;
}
.links {
  text-decoration: none;
  color: #0d1117;
  font-size: 50px;
 

}
.item{
  margin-top: 500px;
}

.nav {
  background: #8daa9d !important;
  margin-top: 15px;
}
.group {
  border: 1px solid rgb(204, 199, 199);
  text-align: center;
  background: #D9D9D9;
   margin-top: 30px;
}
</style>
