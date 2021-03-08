<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo/camronservice.png"
          transition="scale-transition"
          width="200"
          height="100"
          max-height="100"
          max-width="200"
        />
      </div>
      <v-spacer></v-spacer>
      <div class="d-none d-sm-none d-md-flex">
        <router-link
          :to="i.link"
          v-for="(i, n) in linksAndRoutes"
          :key="n"
          style="text-decoration: none; color: inherit;"
        >
          <v-btn small text tile>
            <span>{{ i.text }}</span>
          </v-btn></router-link
        >

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text small v-bind="attrs" v-on="on"
              ><v-icon> mdi-translate</v-icon>
              <v-icon small>mdi-chevron-down</v-icon></v-btn
            >
          </template>
          <v-list>
            <v-list-item>
              <v-btn elevation="0" text>
                <v-list-item-title class="text-button font-weight-bold"
                  >English</v-list-item-title
                >
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div class="d-xl-none d-md-none">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn fab v-bind="attrs" v-on="on" text>
              <v-icon> mdi-menu </v-icon>
            </v-btn>
          </template>
          <v-list class="d-xl-none d-md-none">
            <router-link
              v-for="(i, n) in linksAndRoutes"
              :key="n"
              :to="i.link"
              style="text-decoration: none; color: inherit;"
            >
              <v-list-item>
                <v-btn elevation="0" text>
                  <v-list-item-title class="text-button font-weight-bold">{{
                    i.text
                  }}</v-list-item-title>
                </v-btn>
              </v-list-item>
            </router-link>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
export default {
  name: "App",
  data: () => ({
    home: "contact",
    linksAndRoutes: [
      { link: "/", text: "home" },
      { link: "/executive-air-charter", text: "executive air charter" },
      { link: "/float-plane-services", text: "float plane services" },
      { link: "/home-security", text: "home security" },
      { link: "/our-photo-gallery", text: "our photo gallery" },
      { link: "/request-a-quote", text: "request a quote" },
      { link: "/scenic-flights", text: "scenic flights" },
      { link: "/track", text: "track" },
    ],
    languaes: ["English", "japanese"],
  }),
  methods: {
    toLowerCase(input) {
      return input.toLowerCase();
    },
  },
  components: {
    Footer,
  },
  metaInfo() {
    return {
      title: "camronservice.com",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "robots", content: "index, follow" },

        {
          name: "description",
          content: `At Cameron Air, our top priorities are your safety and comfort during your time with us. Our fleet of aircraft are designed to provide fast, comfortable and safe travel options to our passengers. Our all-weather aircraft are fully equipped to go where you want, when you want.

`,
        },
      ],
    };
  },
};
</script>
<style lang="scss">
html,
body,
.v-application {
  font-family: "Poppins" !important;
}
//added all typography helper classes because of css specificity override
//https://vuetifyjs.com/en/styles/typography#typography
.v-application {
  .text-h1,
  .text-h2,
  .text-h3,
  .text-h4,
  .text-h5,
  .text-h6,
  .text-subtitle-1,
  .text-subtitle-2,
  .text-body-1 .text-body-2 .text-button .text-caption .text-overline {
    font-family: "Poppins" !important;
  }
}
</style>
