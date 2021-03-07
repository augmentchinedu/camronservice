<template>
  <div>
    <v-row>
      <v-img src="https://camronservice.world/executive-air-charter/1.jpg">
      </v-img>
    </v-row>
    <v-row>
      <v-col cols="10" class="mx-auto">
        <h1>Executive Air Charter Services</h1>
        <p>
          At Cameron Air, we are prepared to provide you with executive air
          charter service for any occasion. From local trips to long range
          charters, we will get you and your passengers where you need to go
          without delay. Whether your private charter is for a small group of
          executives or a large number of associates, we have the flexibility to
          accommodate passenger lists of all sizes.
        </p>
        <ul>
          <li>
            <div>
              Convenience.
              <span
                >With hundreds of destinations serviced to date, we can access
                any airport, big or small.</span
              >
            </div>
          </li>
          <li>
            <div>
              Security.
              <span>
                Travel with family, friends, or associates. You charter the
                aircraft and control the passenger list.</span
              >
            </div>
          </li>

          <li>
            <div>
              Comfort.
              <span
                >Fly first class in our executive leather interior with fully
                reclining and articulating club seats, and couch.</span
              >
            </div>
          </li>
          <li>
            <div>
              Efficiency.
              <span
                >Use executive terminals and avoid the crowded main terminal
                buildings. No early check in, no line ups, no waiting.</span
              >
            </div>
          </li>
          <li>
            <div>
              Flexibility.
              <span
                >If your meeting runs late or you are caught in traffic, your
                flight will not depart until you are on board. Your schedule is
                our schedule.</span
              >
            </div>
          </li>
        <li>
            <div>
            Cost.
            <span
              >Aircraft charter can be more cost effective than flying with an
              airline.</span
            >
          </div>
        </li>
        </ul>
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
