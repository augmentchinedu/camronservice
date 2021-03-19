<template>
  <v-container grid-list-xs class="my-12">
    <v-form
      ref="form"
      action="/assets/send.php"
      method="get"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="name"
        :counter="30"
        :rules="nameRules"
        label="Name"
        required
        outlined
        name="name"
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
        outlined
        name="email"
      ></v-text-field>
      <v-text-field name="phone" label="Phone" required outlined></v-text-field>

      <v-text-field
        name="company"
        label="Company"
        required
        outlined
      ></v-text-field>
      <v-text-field name="from" label="From" required outlined></v-text-field>
      <v-text-field
        name="destination"
        label="Destination"
        required
        outlined
      ></v-text-field>
      <v-text-field
        label="Departure Date (DD/MM/YY)"
        required
        outlined
        name="departureDate"
      ></v-text-field>
      <v-text-field
        label="Departure Time (00:00)"
        required
        outlined
        name="departureTime"
      ></v-text-field>
      <v-text-field
        name="passengers"
        label="Passengers"
        required
        outlined
      ></v-text-field>
      <div>
        <h1>Luggage</h1>
        <v-radio-group v-model="Luggage">
          <v-radio
            name="luggage"
            value="light"
            label="Light (1 suitcase/passenger)"
          ></v-radio>
          <v-radio
            name="luggage"
            value="heavy"
            label="Heavy (Skis, Golf bags, etc)"
          ></v-radio>
        </v-radio-group>
      </div>
      <div>
        <h1>Travel</h1>
        <v-radio-group v-model="Travel">
          <v-radio name="pick" value="one" label="One-Way"></v-radio>
          <v-radio name="pick" value="round" label="Round Trip"></v-radio>
          <v-radio name="pick" value="multi" label="Multi-City"></v-radio>
        </v-radio-group>
      </div>
      <v-text-field
        label="Return Date (DD/MM/YY)"
        required
        outlined
        name="returnDate"
      ></v-text-field>

      <v-text-field
        label="Return Time (00:00)"
        required
        outlined
        name="returnTime"
      ></v-text-field>
      <v-textarea
        name="comments"
        row="4"
        class="mb-n4"
        label="Comments"
        required
        outlined
      ></v-textarea>
      <h6>Please Specify Extra Luggage</h6>

      <v-btn
        color="primary"
        @click="resetValidation"
        elevation="1"
        tile
        type="submit"
        class="mt-4"
        >Submit</v-btn
      >
    </v-form>

  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: true,
    Luggage: 1,
    Travel: 2,
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 30) || "Name must be less than 30 characters",
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
