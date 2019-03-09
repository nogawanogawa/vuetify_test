<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile @click="click_1(); click_2()">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="click_1(); click_2()">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-form>
        <v-container>
          <v-layout align-start justify-end row>
            <v-flex xs4 sm6 md3>
              <v-text-field label="Search"></v-text-field>
            </v-flex>
            <v-btn outline small fab color="indigo">
              <v-icon>search</v-icon>
            </v-btn>
          </v-layout>
        </v-container>
      </v-form>
      <Process/>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import Process from "@/components/templates/Process.vue";

export default {
  name: "app",
  data: () => ({
    drawer: null
  }),
  components: {
    Process
  },
  props: {
    source: String
  }
};
</script>