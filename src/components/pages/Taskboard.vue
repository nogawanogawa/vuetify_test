<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app>
      <SideBar/>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <SearchStateBoard/>
      <v-divider></v-divider>調理工程
      <Process/>
      <v-divider></v-divider>
      <br>
      <Result/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Process from "@/components/templates/Process.vue";
import SideBar from "@/components/organisms/SideBar.vue";
//import Cytoscape from "@/components/atoms/Cytoscape.vue";
//import Tensorboard from "@/components/atoms/Tensorboard.vue";
import Result from "@/components/organisms/Result.vue";
import Footer from "@/components/organisms/Footer.vue";
import SearchStateBoard from "@/components/templates/SearchStateBoard.vue";

export default {
  data() {
    return {
      drawer: null
    };
  },
  name: "Taskboard",
  components: {
    Process,
    SideBar,
    Result,
    Footer,
    SearchStateBoard
  },
  props: {
    source: String
  }
};
</script>
<style>
</style>
