<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="800" height="500">
      <template class="center" v-slot:activator="{ on }">
        <v-btn color="red lighten-2" depressed="true" dark v-on="on">Detail</v-btn>
      </template>
      <v-card class="mx-auto">
        <v-flex xs12>
          <v-toolbar width="40" color="indigo">
            <v-spacer></v-spacer>
            <div class="close-button" @click="dialog = false">
              <v-icon color="white">close</v-icon>
            </div>
          </v-toolbar>
          <div class="textarea">
            <TitleArea/>
            <TextArea/>
          </div>
        </v-flex>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog = false">Update</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import TextArea from "@/components/atoms/TextArea.vue";
import TitleArea from "@/components/atoms/TitleArea.vue";

export default {
  name: "Dialog",
  components: {
    TextArea,
    TitleArea
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>
<style>
.center {
  display: inline-block;
  text-align: center;
}
.close-button {
  position: absolute;
  top: 0px;
  right: 15px;
  font-size: 10px;
  cursor: pointer;
}

.textarea {
  padding: 20px;
}
</style>
