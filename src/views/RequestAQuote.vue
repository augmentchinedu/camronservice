<template>
  <v-container grid-list-xs class="my-12">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
        outlined
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
        outlined
      ></v-text-field>
      <v-text-field label="Phone" required outlined></v-text-field>

      <v-text-field label="Company" required outlined></v-text-field>
      <v-text-field label="From" required outlined></v-text-field>
      <v-text-field label="Destination" required outlined></v-text-field>
      <v-text-field
        label="Departure Date (DD/MM/YY)"
        required
        outlined
      ></v-text-field>
      <v-text-field
        label="Departure Time (00:00)"
        required
        outlined
      ></v-text-field>
      <v-text-field label="Passengers" required outlined></v-text-field>
      <div>
        <h1>Luggage</h1>
        <v-radio-group v-model="Luggage">
          <v-radio label="Light (1 suitcase/passenger)"></v-radio>
          <v-radio label="Heavy (Skis, Golf bags, etc)"></v-radio>
        </v-radio-group>
      </div>
      <div>
        <h1>Travel</h1>
        <v-radio-group v-model="Travel">
          <v-radio label="One-Way"></v-radio>
          <v-radio label="Round Trip"></v-radio>
          <v-radio label="Multi-City"></v-radio>
        </v-radio-group>
      </div>
      <v-text-field
        label="Return Date (DD/MM/YY)"
        required
        outlined
      ></v-text-field>

      <v-text-field
        label="Return Time (00:00)"
        required
        outlined
      ></v-text-field>
      <v-textarea row="4" label="Comments" required outlined></v-textarea>
      <h6>Please Specify Extra Luggage</h6>

      <v-btn
        color="primary"
        @click="resetValidation"
        elevation="1"
        tile
        class="mt-4"
        >Submit</v-btn
      >
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    Luggage: 1,
    Travel: 2,
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
