<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout>
        <v-flex xs12 md6>
          <v-select
            v-model="select"
            :items="items"
            :error-messages="selectErrors"
            label="Item"
            required
            @change="$v.select.$touch()"
            @blur="$v.select.$touch()"
          ></v-select>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex xs12 md6>
          <v-text-field v-model="firstname" label="First name"></v-text-field>
        </v-flex>

        <v-flex xs12 md6>
          <v-text-field v-model="lastname" label="Last name"></v-text-field>
        </v-flex>

        <v-flex xs12 md6>
          <v-text-field v-model="email" label="E-mail"></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout>
        <div>
          <v-btn Normal @click.stop.prevent="search" color="primary">Search</v-btn>
        </div>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    email: ""
  }),
  methods: {
    search() {
      this.$router.push({ path: "Taskboard" });
    }
  }
};
</script>
