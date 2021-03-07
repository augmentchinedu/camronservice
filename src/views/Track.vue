<template>
  <div>
    <h1 class="text-uppercase font-weight-black text-center">Track</h1>
    <v-row>
      <v-col cols="12" md="10" class="mx-auto">
        <v-card class="overflow-hidden" text>
          <v-toolbar flat text class="transparent">
            <v-toolbar-title class="font-weight-light">
              Enter the Consignment No.
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-text-field
              color="white"
              placeholder="Enter Tracking Number"
            ></v-text-field>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="save">
              Track Result
            </v-btn>
          </v-card-actions>
          <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
            Your profile has been updated
          </v-snackbar>
        </v-card></v-col
      >
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasSaved: false,
      isEditing: null,
      model: null,
      states: [
        { name: "Florida", abbr: "FL", id: 1 },
        { name: "Georgia", abbr: "GA", id: 2 },
        { name: "Nebraska", abbr: "NE", id: 3 },
        { name: "California", abbr: "CA", id: 4 },
        { name: "New York", abbr: "NY", id: 5 },
      ],
    };
  },

  methods: {
    customFilter(item, queryText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
    save() {
      this.isEditing = !this.isEditing;
      this.hasSaved = true;
    },
  },
};
</script>
