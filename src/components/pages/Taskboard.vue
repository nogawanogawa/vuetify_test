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
      調理工程
      <Process/>
      <v-divider></v-divider>ほげほげ
      <br>
      <Tensorboard/>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import Process from "@/components/templates/Process.vue";
import SideBar from "@/components/organisms/SideBar.vue";
//import Cytoscape from "@/components/atoms/Cytoscape.vue";
import Tensorboard from "@/components/atoms/Tensorboard.vue";

export default {
  name: "Taskboard",
  data: () => ({
    drawer: null
  }),
  components: {
    Process,
    SideBar,
    Tensorboard
  },
  props: {
    source: String
  }
};
</script>