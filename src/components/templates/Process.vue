<template>
  <v-container fluid grid-list-lg pa-2>
    <v-layout>
      <v-flex xs12>
        <v-card class="white--text">
          <v-toolbar flat="true" color="blue" height="40px">
            <v-toolbar-title class="bar">工程</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-title primary-title>
            <div class="processArea">
              <draggable
                class="process"
                :options="{animation:400, handle:'.stage'}"
                v-model="array"
              >
                <Stage
                  class="stage"
                  v-for="task in tasks"
                  v-bind:key="task"
                  v-bind:title="task.stage.title"
                  v-bind:detail="task.stage.detail"
                ></Stage>
              </draggable>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Stage from "@/components/organisms/Stage.vue";
import Draggable from "vuedraggable";

export default {
  name: "Process",
  components: {
    Stage,
    Draggable
  },
  data() {
    return {
      tasks: this.$store.state.tasks
    };
  }
};
</script>

<style>
.process {
  padding: 0 0px;
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
  overflow-x: scroll;
}
.stage {
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 30px;
  cursor: move;
}
</style>
