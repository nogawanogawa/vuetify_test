<template>
  <draggable class="process" v-model="array">
    <Stage class="stage" v-for="(task) in tasks" :key="task"></Stage>
  </draggable>
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
      tasks: [
        "task1",
        "task2",
        "task3",
        "task4",
        "task5",
        "task6",
        "task7",
        "task8"
      ]
    };
  }
};
</script>

<style>
.process {
  padding: 0 0px;
  display: flex;
  overflow-x: scroll;
}
.stage {
  margin-left: 30px;
}
</style>
