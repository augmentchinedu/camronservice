<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://vuejs.org/images/logo.png"
          transition="scale-transition"
          width="200"
          height="100"
          max-height="100"
          max-width="50"
        />
      </div>
      <v-spacer></v-spacer>
      <div class="d-none d-sm-none d-md-flex">
        <v-btn v-scroll-to="'#home'" text tile>
          <span class="mr-2">home</span>
        </v-btn>
        <router-link to="/executive-air-charter"
          ><v-btn text tile>
            <span class="mr-2">Executive </span>
          </v-btn>
        </router-link>
        <router-link to="/float-plane-services"
          ><v-btn text tile>
            <span class="mr-2">Float </span>
          </v-btn>
        </router-link>
        
        <router-link to="/home-security"
          ><v-btn text tile>
            <span class="mr-2">Home Security </span>
          </v-btn>
        </router-link>
        <router-link to="/our-photo-gallery"
          ><v-btn text tile>
            <span class="mr-2">Our Photo Gallery</span>
          </v-btn>
        </router-link>
        <router-link to="/request-a-quote"
          ><v-btn text tile>
            <span class="mr-2">Request</span>
            
          </v-btn>
        </router-link>
        <router-link to="/scenic-flights"
          ><v-btn text tile>
            <span class="mr-2">Scenic Flights</span>
            
          </v-btn>
        </router-link>
      </div>
      <div class="d-xl-none d-md-none">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn fab v-bind="attrs" v-on="on" text>
              <v-icon> mdi-menu </v-icon>
            </v-btn>
          </template>
          <v-list class="d-xl-none d-md-none">
            <v-list-item>
              <v-btn elevation="0" text v-scroll-to="'#home'">
                <v-list-item-title class="text-button font-weight-bold"
                  >{{ headings.home }}
                </v-list-item-title>
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn elevation="0" text v-scroll-to="'#about'">
                <v-list-item-title class="text-button font-weight-bold"
                  >{{ headings.about }}
                </v-list-item-title>
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn elevation="0" text v-scroll-to="'#expertise'">
                <v-list-item-title class="text-button font-weight-bold"
                  >{{ headings.expertise }}
                </v-list-item-title>
              </v-btn> </v-list-item
            ><v-list-item>
              <v-btn elevation="0" text v-scroll-to="'#projects'">
                <v-list-item-title class="text-button font-weight-bold"
                  >{{ headings.projects }}
                </v-list-item-title>
              </v-btn>
            </v-list-item>
            <v-list-item v-if="data.team.length !== 0">
              <v-btn elevation="0" text v-scroll-to="'#team'">
                <v-list-item-title class="text-button font-weight-bold"
                  >{{ headings.team }}
                </v-list-item-title>
              </v-btn> </v-list-item
            ><v-list-item>
              <v-btn elevation="0" text v-scroll-to="'#contact'">
                <v-list-item-title class="text-button font-weight-bold"
                  >{{ headings.contact }}
                </v-list-item-title>
              </v-btn>
            </v-list-item>
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
    mobileLinks: [
      { title: "home" },
      { title: "about" },
      { title: "expertise" },
      { title: "projects" },
      { title: "team" },
      { title: "contact" },
    ],
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
      title: this.data.companyName,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "robots", content: "index, follow" },
        {
          name: "description",
          content: `${this.data.meta.description}`,
        },
      ],
      link: [{ rel: "icon", href: this.data.favicon.imgUrl }],
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
