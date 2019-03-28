<template>
  <div class="result">
    <SourceTable/>
    <RiskTable/>
  </div>
</template>

<script>
import RiskTable from "@/components/atoms/RiskTable.vue";
import SourceTable from "@/components/atoms/SourceTable.vue";

export default {
  name: "RiskResult",
  components: {
    SourceTable,
    RiskTable
  }
};
</script>

