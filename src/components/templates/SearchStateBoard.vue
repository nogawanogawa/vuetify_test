<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="card">
        <v-toolbar color="primary">
          <v-toolbar-title class="bar">検索</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-layout>
          <v-flex xs6 offset-sm3>
            <v-select
              v-model="select"
              :items="items"
              :error-messages="selectErrors"
              label="Category"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
          </v-flex>
        </v-layout>

        <v-layout>
          <v-flex xs6 offset-sm3>
            <v-text-field v-model="firstname" label="Product"></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout>
          <v-flex xs6 offset-sm5>
            <div>
              <v-btn small color="primary" @click.stop="flaskAction">Search</v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  data: () => ({
    items: ["stage_1", "stage_2", "stage_3", "stage_4"]
  }),
  methods: {
    ...mapActions(["coindeskAction", "flaskAction"])
  },
  computed: {
    ...mapState(["flask_res"]),
    ...mapGetters(["time", "updated", "updatedISO", "updateduk"])
  }
};
</script> 

<style>
.bar {
  color: #fff;
}

.content {
  text-align: right;
}
.card {
  margin: 10px;
  padding-bottom: 10px;
}
</style>
