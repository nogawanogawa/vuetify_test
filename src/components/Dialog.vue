<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-2" dark v-on="on">Click</v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>メッセージ</v-card-title>

        <v-card-text>ここになんか書くと表示される</v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  data() {
    return {
      dialog: false
    };
  }
};
</script>