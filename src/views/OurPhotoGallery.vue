<template>
  <div>
    <v-container grid-list-xs class="my-6">
      <v-row>
        <v-col
          v-for="n in images"
          :key="n"
          class="d-flex child-flex mx-auto"
          cols="12"
          md="4"
        >
          <v-img :src="n" :lazy-src="n" height="250" class="grey lighten-2">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h1 class="text-center">
            OUR EXECUTIVE INTERIORS
          </h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(n, i) in interior"
          :key="i"
          class="d-flex child-flex"
          cols="4"
        >
          <v-img :src="n" :lazy-src="n" aspect-ratio="1" class="grey lighten-2">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
      <Contact />
  </div>
</template>

<script>
import Contact from "../components/Contact.vue";
export default {
  data() {
    return {
      interior: [
        "https://camronservice.world/our-photo-gallery/images/exec2.jpg",
        "https://camronservice.world/our-photo-gallery/images/exec3.jpg",
        "https://camronservice.world/our-photo-gallery/images/exec4.jpg",
      ],
      images: [
        "https://camronservice.world/our-photo-gallery/images/1.jpg",
        "https://camronservice.world/our-photo-gallery/images/2.jpg",
        "https://camronservice.world/our-photo-gallery/images/3.jpg",
        "https://camronservice.world/our-photo-gallery/images/4.jpg",
        "https://camronservice.world/our-photo-gallery/images/5.jpg",
        "https://camronservice.world/our-photo-gallery/images/6.jpg",
        "https://camronservice.world/our-photo-gallery/images/7.jpg",
        "https://camronservice.world/our-photo-gallery/images/8.jpg",
        "https://camronservice.world/our-photo-gallery/images/9.jpg",
        "https://camronservice.world/our-photo-gallery/images/10.jpg",
        "https://camronservice.world/our-photo-gallery/images/11.jpg",
        "https://camronservice.world/our-photo-gallery/images/12.jpg",
        "https://camronservice.world/our-photo-gallery/images/13.jpg",
        "https://camronservice.world/our-photo-gallery/images/14.jpg",
        "https://camronservice.world/our-photo-gallery/images/15.jpg",
        "https://camronservice.world/our-photo-gallery/images/16.jpg",
        "https://camronservice.world/our-photo-gallery/images/17.jpg",
        "https://camronservice.world/our-photo-gallery/images/18.jpg",
        "https://camronservice.world/our-photo-gallery/images/19.jpg",
        "https://camronservice.world/our-photo-gallery/images/20.jpg",
        "https://camronservice.world/our-photo-gallery/images/21.jpg",
        "https://camronservice.world/our-photo-gallery/images/22.jpg",
        "https://camronservice.world/our-photo-gallery/images/23.jpg",
        "https://camronservice.world/our-photo-gallery/images/24.jpg",
        "https://camronservice.world/our-photo-gallery/images/25.jpg",
        "https://camronservice.world/our-photo-gallery/images/26.jpg",
        "https://camronservice.world/our-photo-gallery/images/27.jpg",
        "https://camronservice.world/our-photo-gallery/images/28.jpg",
        "https://camronservice.world/our-photo-gallery/images/29.jpg",
        "https://camronservice.world/our-photo-gallery/images/30.jpg",
        "https://camronservice.world/our-photo-gallery/images/31.jpg",
        "https://camronservice.world/our-photo-gallery/images/32.jpg",
        "https://camronservice.world/our-photo-gallery/images/33.jpg",
        "https://camronservice.world/our-photo-gallery/images/34.jpg",
        "https://camronservice.world/our-photo-gallery/images/35.jpg",
        "https://camronservice.world/our-photo-gallery/images/36.jpg",
        "https://camronservice.world/our-photo-gallery/images/37.jpg",
        "https://camronservice.world/our-photo-gallery/images/38.jpg",
        "https://camronservice.world/our-photo-gallery/images/39.jpg",
      ],
    };
  },
  components: {
    Contact,
  },
};
</script>
