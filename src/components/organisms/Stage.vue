<template>
  <div class="card">
    <v-card color="indigo" class="white--text" width="250">
      <div class="close-button" @click="removeCardFromList">
        <v-icon color="white">close</v-icon>
      </div>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-1">{{title}}</h3>
          <div>{{ card_text }}</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <Dialog v-bind:title="title" v-bind:detail="detail"></Dialog>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Dialog from "@/components/molecules/Dialog.vue";

export default {
  name: "Stage",
  components: {
    Dialog
  },
  props: ["title", "detail"],
  data() {
    return {
      stage: {
        title: "",
        detail: ""
      }
    };
  }
};
</script>

<style>
.close-button {
  position: absolute;
  top: 6px;
  right: 15px;
  font-size: 22px;
  cursor: pointer;
}
</style>
