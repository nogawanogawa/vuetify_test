<template>
  <div class="card">
    <v-card color="primary" class="white--text" height="140px">
      <div class="close-button" @click="removeCardFromList">
        <v-icon color="white" small="true">close</v-icon>
      </div>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-3">{{title}}</h3>
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
  top: -5px;
  right: 5px;
  font-size: 22px;
  margin-bottom: 0px;
  cursor: pointer;
}
</style>
