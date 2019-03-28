<template>
  <div class="flaskResult">
    <v-container fluid grid-list-lg fill-height pa-2>
      <v-layout fill-height>
        <v-flex xs12>
          <v-card color="indigo" class="white--text">
            <v-card-title primary-title>
              <div class="headline">注意点</div>
              <div class="table">
                <v-data-table
                  :headers="$store.state.flask_res.headers"
                  :items="$store.state.flask_res.desserts"
                  :rows-per-page-items="[10,25,{'text':'$vuetify.dataIterator.rowsPerPageAll','value':-1}]"
                  class="elevation-1"
                >
                  <template v-slot:items="props">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.calories }}</td>
                    <td class="text-xs-right">{{ props.item.fat }}</td>
                    <td class="text-xs-right">{{ props.item.carbs }}</td>
                    <td class="text-xs-right">{{ props.item.protein }}</td>
                    <td class="text-xs-right">{{ props.item.iron }}</td>
                  </template>
                </v-data-table>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "RiskTable"
};
</script>

<style>
.flaskResult {
  float: left;
  width: 50%;
}
.table {
  background-color: white;
  width: 100%;
}
</style>
