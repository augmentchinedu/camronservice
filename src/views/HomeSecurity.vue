<template>
  <div>
    <div class="ma-6">
      <v-row>
        <v-col cols="12" md=""
          ><h1 class="text-uppercase text-h2  font-weight-black ml-6">on the move ?</h1></v-col
        >
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-img
            src="https://camronservice.world/n58cc9djl3c5/1WMB9YdBzasBU0Ce4csoQP/802e0bbb559e900c8735dd21dd367457/moves-program-Banners.jpg"
          >
            <v-row class="fill-height ma-0" align="center" justify="start">
              <v-col cols="12" md="7" class="ml-3 mt-2">
                <h1 class="my-1 text-h3 font-weight-black text-center">
                  DON’T FORGET TO TAKE US WITH YOU
                </h1>
                <p class="my-3 text-center">
                  Let us handle the security for your new home. We’ll upgrade
                  your system and keep providing the professional monitoring
                  that you trust.
                </p>
                <div class="text-center mx-auto">
                  <v-btn class="my-1 mx-auto" elevation="1"
                    >request a quote now</v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </v-img>
          <v-img
            src="https://camronservice.world/n58cc9djl3c5/4FSrwd8xMAVvUj1oR6e2rN/fa1438b35b61fa946b8bac58b6969aac/lifestyle-couple-lounging-in-living-room-2880.jpg"
          >
            <v-row class="fill-height ma-0" align="center" justify="end">
              <v-col cols="12" md="6">
                <h1 class="text-h3 font-weight-black text-center">
                  RISK-FREE FOR 30 DAYS
                </h1>
                <p class="text-center mt-3">
                  You’ll get a system that’s a perfect fit for your needs. But
                  if you are not totally satisfied in the first 30 days, you can
                  cancel your service with no termination fee – no questions
                  asked.
                </p>
              </v-col>
            </v-row>
          </v-img></v-col
        >
        <v-col cols="12" class="my-2">
          <h1 class="my-8 text-center">Browse our suite of solutions</h1>

          <v-row>
            <v-col cols="12" md="4" v-for="(i, n) in browse" :key="n">
              <v-card class="" height="490">
                <v-img height="250" :src="i.image"></v-img>

                <h3 class="text-center my-3">{{ i.title }}</h3>

                <v-card-text class="pa-6">
                  <div class="text-center">{{ i.text }}</div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="px-auto">
        <v-col cols="12" class="text-center">
          <router-link
            to="/request-a-quote"
            style="text-decoration: none; color: inherit;"
            ><v-btn color="success">REQUEST A QUOTE NOW</v-btn></router-link
          >
        </v-col>
      </v-row>
    </div>
    <Contact />
  </div>
</template>
<script>
import Contact from "../components/Contact.vue";
export default {
  data() {
    return {
      browse: [
        {
          image:
            "https://camronservice.world/documents/402813/402855/private-individual-storage.jpg/private-individual-storage.jpg?t=1587765148874",
          title: "Private Client Storage",
          text:
            "Our vaulting facilities are built to provide you with state‑of‑the‑art precious metals storage services, including primary dedicated pick‑and‑pack and storage operations around the world.",
        },
        {
          image:
            "https://camronservice.world/documents/402813/0/Trucks%20420.png/Trucks%20420.png?t=1594730464157",
          title: "Secure Logistics",
          text:
            "Let camronservice be your sole provider of secure logistics, managing the pick‑up, transit and delivery of your valuables.",
        },
        {
          image:
            "https://camronservice.world/documents/402813/0/exhibition%20420.png/exhibition%20420.png?t=1594730957331",
          title: "Trade Show Services",
          text:
            "Our trade show services manage every level of the supply chain for diamonds, jewelry.",
        },
        {
          image:
            "https://camronservice.world/documents/402813/402855/secure-long-haul-transportation.jpg/secure-long-haul-transportation.jpg?t=1587765199134",
          title: "Secure Long Haul Transportation",
          text:
            "High‑value transportation of valuable assets across countries and borders.",
        },
        {
          image:
            "https://camronservice.world/documents/402813/0/Warehouse%20420.png/Warehouse%20420.png?t=1594731357332",
          title: "Distribution Solutions",
          text:
            "Secure and efficient, our distribution solutions are designed to support your supply chain strategy.",
        },
        {
          image:
            "https://camronservice.world/documents/402813/0/CEIV%20Transport%20420.png/CEIV%20Transport%20420.png?t=1594731541432",
          title: "CEIV Pharma‑Certified Transport",
          text:
            "End‑to‑end temperature control and security for life science products, via air, sea, and road.",
        },
        {
          image:
            "https://camronservice.world/documents/402813/0/customs%20clear%20250.png/customs%20clear%20250.png?t=1594732057845",
          title: "Customs Clearance",
          text:
            "Let our global network of customs experts help to reduce delays in your shipments.",
        },
        {
          image:
            "https://camronservice.world/documents/402813/0/Bonded%20Warehouse%20420.png/Bonded%20Warehouse%20420.png?t=1594732320404",
          title: "Secure Vaults and Bonded Warehouses",
          text:
            "Our high‑security warehousing protects your products around the clock.",
        },
        {
          image:
            "https://camronservice.world/documents/402813/0/Inventory%20420.png/Inventory%20420.png?t=1594732520073",
          title: "Inventory Management",
          text:
            "With Camron’s inventory management, you stay informed with complete visibility and control.",
        },
        {
          image:
            "https://camronservice.world/documents/402813/402849/Bank%20Notes.jpg/Bank%20Notes.jpg?t=1588206049976",
          title: "Cash Processing",
          text:
            "Camron’s is the trusted partner to central banks, wholesale, and retail banks for global multi-currency processing.",
        },
      ],
    };
  },
  components: {
    Contact,
  },
};
</script>

<style></style>
