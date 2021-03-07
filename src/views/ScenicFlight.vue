<template>
  <div>
    <v-row>
      <v-img src="https://camronservice.world/scenic-flights/1.jpg"> </v-img>
    </v-row>
    <v-row>
      <v-col cols="10" class="mx-auto">
        <h1>
          Take a 1-hour Toronto/Niagara Scenic or a 20-minute Toronto Scenic
        </h1>
        <p>
          Witness a transformation as the skyline of the city disappears and
          Niagara Falls the world of suburbia passes beneath you. Relax as you
          fly over the Niagara River Whirlpool and the Old Fort George. And at
          the end of your tour, you’ll arrive at the picturesque Billy Bishop
          Toronto City Airport with shoreline and waterfront views in the heart
          of the city.
        </p>
        <p>
          <router-link to="/request-a-quote">Request a quote </router-link> today for more information
          on our scenic tours.
        </p>
      </v-col>
    </v-row>
    <Contact />
  </div>
</template>

<script>
import Contact from "../components/Contact";
export default {
  components: {
    Contact,
  },
};
</script>
