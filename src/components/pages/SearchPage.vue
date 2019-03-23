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
      <SearchForm/>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import SideBar from "@/components/organisms/SideBar.vue";
import SearchForm from "@/components/templates/SearchForm.vue";
///import Cytoscape from "@/components/atoms/Cytoscape.vue";

export default {
  name: "SearchPage",
  data: () => ({
    drawer: null
  }),
  components: {
    SideBar,
    SearchForm
  },
  props: {
    source: String
  }
};
</script>