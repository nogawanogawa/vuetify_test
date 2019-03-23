<template>
  <div class="processArea">
    <draggable class="process" :options="{animation:400, handle:'.stage'}" v-model="array">
      <Stage
        class="stage"
        v-for="task in tasks"
        v-bind:key="task"
        v-bind:title="task.stage.title"
        v-bind:detail="task.stage.detail"
      ></Stage>
    </draggable>
  </div>
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
.processArea {
  margin-bottom: 10px;
}
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
