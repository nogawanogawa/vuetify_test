<template>
  <v-list dense>
    <v-list-tile @click="click_1()">
      <v-list-tile-action>
        <v-icon>home</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile @click="click_2()">
      <v-list-tile-action>
        <v-icon>scatter_plot</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>TensorBoard</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  name: "SideBar",
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  },
  methods: {
    click_1() {
      this.$router.push({ path: "/" });
    },
    click_2() {
      window.open("http://localhost:6006/");
    }
  }
};
</script>