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
    <Footer/>
  </v-app>
</template>

<script>
import SideBar from "@/components/organisms/SideBar.vue";
import SearchForm from "@/components/templates/SearchForm.vue";
///import Cytoscape from "@/components/atoms/Cytoscape.vue";
import Footer from "@/components/organisms/Footer.vue";

export default {
  name: "SearchPage",
  data: () => ({
    drawer: null
  }),
  components: {
    SideBar,
    SearchForm,
    Footer
  },
  props: {
    source: String
  }
};
</script>