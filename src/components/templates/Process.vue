<template>
  <div class="process">
    <Stage/>
    <Stage/>
    <Stage/>
    <Stage/>
    <Stage/>
    <Stage/>
  </div>
</template>

<script>
import Stage from "@/components/organisms/Stage.vue";

export default {
  name: "Process",
  components: {
    Stage
  },
  data() {
    return {};
  }
};
</script>

<style>
.process {
  padding: 0 0px;
  margin-left: 30px;
  display: flex;
  overflow-x: scroll;
}
</style>
