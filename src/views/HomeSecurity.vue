<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col cols="10">
        <h1>on the move ?</h1>
        <v-img
          src="https://camronservice.world/n58cc9djl3c5/1WMB9YdBzasBU0Ce4csoQP/802e0bbb559e900c8735dd21dd367457/moves-program-Banners.jpg"
        >
          <h1>DON’T FORGET TO TAKE US WITH YOU</h1>
          <p>
            Let us handle the security for your new home. We’ll upgrade your
            system and keep providing the professional monitoring that you
            trust.
          </p>
          <v-btn>reqeuest a quote now</v-btn>
        </v-img>
        <v-img
          src="https://camronservice.world/n58cc9djl3c5/4FSrwd8xMAVvUj1oR6e2rN/fa1438b35b61fa946b8bac58b6969aac/lifestyle-couple-lounging-in-living-room-2880.jpg"
        >
          <h1>RISK-FREE FOR 30 DAYS</h1>
          <p>
            You’ll get a system that’s a perfect fit for your needs. But if you
            are not totally satisfied in the first 30 days, you can cancel your
            service with no termination fee – no questions asked.
          </p>
        </v-img></v-col
      >
      <v-col cols="12">
        <h1>Browse our suite of solutions</h1>

        <v-row>
          <v-col cols="4" v-for="i in 10" :key="i">
            <v-card class="">
              <v-img
                height="250"
                src="https://camronservice.world/documents/402813/402855/private-individual-storage.jpg/private-individual-storage.jpg?t=1587765148874"
              ></v-img>

              <v-card-title>Private Client Storage</v-card-title>

              <v-card-text>
                <div>
                  Our vaulting facilities are built to provide you with
                  state‑of‑the‑art precious metals storage services, including
                  primary dedicated pick‑and‑pack and storage operations around
                  the world.
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style></style>
