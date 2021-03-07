<template>
  <div>
    <!-- slider -->
    <div id="home">
      <v-carousel
        :continuous="true"
        :cycle="true"
        hide-delimiter-background
        delimiter-icon="mdi-minus"
      >
        <v-carousel-item
          v-for="(item, i) in data.slider"
          :key="i"
          :src="item.imgUrl"
        >
          <v-row class="fill-height ml-10 mt-16" align="center">
            <div>
              <div
                class="text-h5 text-sm-h4 text-md-h3 text-xl-h2 black--text font-weight-black"
              >
                {{ item.title }}
              </div>
              <br />
              <div
                class="black--text font-weight-medium text-h6 text-sm-h5 text-md-h4 text-xl-h3"
              >
                {{ item.caption }} 
              </div>
            </div>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </div>
    <!-- about  -->

    <div class="container my-16" id="about">
      <v-row>
        <v-col cols="12" md="7" class="">
          <h1 class="text-uppercase text-h5 special-heading font-weight-bold" :style="cssProps">
            {{ data.about.left.title }}
          </h1>

          <div class="font-weight-medium">
            {{ data.about.left.paragraph }}
          </div>
        </v-col>
        <v-col cols="12" md="5">
          <v-carousel
            cycle
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            height="350"
          >
            <v-carousel-item
              v-for="(slide, i) in data.about.right"
              :key="i"
              :src="slide.imgUrl"
            >
              <v-row class="fill-height mt-16 ml-16" align="center">
                <div>
                  <div class="text-h5">{{ slide.title }}</div>
                  <div class="text-subtitle-1">{{ slide.caption }}</div>
                </div>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </div>
    <div class="my-16">
      <!-- mission top-->
      <v-row no-gutters>
        <v-col cols="12" md="6">
          <v-img :src="data.mission.top.imgUrl" max-height="450" alt=""></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <div class="pa-16">
            <h1 class="special-heading text-uppercase font-weight-bold" :style="cssProps">
              {{ data.mission.top.title }}
            </h1>
            {{ data.mission.top.paragraph }}
          </div>
        </v-col>
      </v-row>
      <!-- mission bottom  -->
      <v-row no-gutters class="mt-0">
        <v-col cols="12" md="6">
          <div class="pa-16">
            <h1 class="special-heading text-uppercase font-weight-bold" :style="cssProps">
              {{ data.mission.bottom.title }}
            </h1>
            {{ data.mission.bottom.paragraph }}
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            :src="data.mission.bottom.imgUrl"
            max-height="450"
            alt=""
          ></v-img>
        </v-col>
      </v-row>
    </div>
    <!-- expertise -->
    <v-container class="my-16" id="expertise">
      <!-- expertise heading -->
      <v-row>
        <v-col cols="12">
          <h1 class="text-uppercase font-weight-bold special-heading mt-3" :style="cssProps">
            {{ data.headings.expertise }}
          </h1>
        </v-col>
      </v-row>
      <!-- expertise content  -->
      <v-row>
        <v-col
          cols="12"
          md="4"
          v-for="(expertise, i) in data.expertise"
          :key="i"
        >
          <v-card elevation="0" tile>
            <v-img
              :src="expertise.imgUrl"
              height="200"
              class="grey darken-4"
            ></v-img>
            <span class="font-weight-bold d-block my-2 text-h6">
              {{ expertise.title }}
            </span>
            <p>
              {{ expertise.text }}
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- projects  -->
    <v-container class="my-16" id="projects">
      <!-- projects heading -->
      <v-row>
        <v-col
          cols="12"
          class="d-flex align-center justify-center justify-md-start"
        >
          <h1 class="text-uppercase font-weight-bold special-heading" :style="cssProps">
            {{ data.headings.projects }}
          </h1>
        </v-col>
      </v-row>
      <!-- projects content  -->
      <v-row dense>
        <v-col
          v-for="(projects, i) in data.projects"
          :key="i"
          class="d-flex child-flex mx-auto"
          cols="10"
          md="4"
        >
          <v-img
            :src="projects.imgUrl"
            :lazy-src="projects.imgUrl"
            height="300"
            class="grey lighten-2"
          >
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

    <!-- team  -->
    <v-container grid-list-xs class="my-16" id="team"  v-if="data.team.length !== 0">
      <v-row>
        <!-- team headings -->
        <v-col cols="12" md="4">
          <h1 class="text-uppercase special-heading" :style="cssProps">{{data.headings.team}}</h1>
        </v-col>
        <v-col cols="12" md="8">
          <TeamCarousel />
        </v-col>
      </v-row>
    </v-container>
    <!-- vision  -->
    <v-row class="my-16">
      <v-col cols="12" class="grey lighten-2">
        <div class="d-flex pa-6 justify-center align-center">
          <h2 class="mb-0 mr-8 text-h6 text-sm-h5 font-weight-bold">
            {{ data.quote.title }}
          </h2>
          <router-link :to="data.quote.buttonLink" tag="button">
            <v-btn color="success" elevation="0" outlined small class="ml-md-8"
              >{{ data.quote.buttonText }}→
            </v-btn></router-link
          >
        </div>
      </v-col>
    </v-row>
    <v-container class="my-16">
      <v-row>
        <v-col cols="12">
          <h1 class="text-uppercase">{{ data.vision.title }}</h1>
        </v-col>
        <v-col cols="12">
          <p class="text-md-h6 font-weight-medium">
            {{ data.vision.paragraph }}
          </p>
        </v-col>
      </v-row>
    </v-container>
    <!-- contact  -->
    <v-container class="my-16" id="contact">
      <v-row>
        <v-col cols="12" md="6"
          ><v-form ref="form" lazy-validation>
            <v-text-field
              prepend-inner-icon="mdi-account"
              placeholder="Your Name"
              outlined
              required
            ></v-text-field>

            <v-text-field
              placeholder="Your Email"
              prepend-inner-icon="mdi-email-outline"
              outlined
              required
            ></v-text-field>

            <v-textarea
              :rules="[(v) => !!v || 'You must agree to continue!']"
              rows="4"
              placeholder="Your Message"
              prepend-inner-icon="mdi-chat"
              outlined
              required
            ></v-textarea>

            <v-btn color="primary" elevation="0" tile> send now </v-btn>
          </v-form></v-col
        >
        <v-col cols="12" md="5" class="ml-md-4">
          <h3 class="heading-cont">Contact Information</h3>
          <address>
            <span class="d-block mb-1">
              <strong class="text-uppercase text-subtitle-2">address</strong>:
              {{ data.contact.address }}</span
            >
            <span class="d-block mb-3">
              <strong class="text-uppercase text-subtitle-2">phone</strong>:
              {{ data.contact.phone }}</span
            >
            <span class="d-block mb-3">
              <strong class="text-uppercase text-subtitle-2">email</strong>:
              {{ data.contact.email }}</span
            >
          </address>
        </v-col>
      </v-row>
    </v-container>

    <!-- footer  -->

    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card
          elevation="0"
          class="primary d-flex py-6 px-4 justify-space-between"
          light
        >
          <div class="text-uppercase">
            <v-btn text class="mx-2"> Home </v-btn>

            <v-btn class="mx-2">Contact</v-btn>
          </div>

          <div class="d-flex">
            <v-img
              v-for="(flag, i) in data.languages"
              :key="i"
              :src="`../assets/flags/${flag.toLowerCase()}.svg`"
              class="mr-3"
              width="40"
              height="40"
              @click="changeLang(flag)"
            ></v-img>
          </div>
        </v-card>

        <v-card-text class="white--text text-center py-md-4">
          <p class="text-uppercase font-weight-medium text-subtitle-2">
            {{ new Date().getFullYear() }} © {{ data.companyName }}, All Right
            Reserved
          </p>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
import TeamCarousel from "../components/TeamCarousel";
export default {
  beforeCreate() {
    this.$store.dispatch("init");
  },
  methods: {
  
    changeLang(lang) {
      this.$store.dispatch("changeLang", lang);
    },
  },
  data() {
    return {
      headingColor: this.$vuetify.theme.themes.light.primary,
    };
  },
  computed: {
    cssProps() {
      return {
        "--heading-color": this.headingColor,
      };
    },
  },
  components: {
    TeamCarousel,
  },
};
</script>

<style scoped>
.heading-cont {
  position: relative;
  font-size: 16pt;
  margin-top: 0px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #777777;
}
.heading-cont::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0px;
  width: 25%;
  height: 3px;
  background: #c8b16f;
}

address span {
  display: block;
  border-bottom: 1px solid #777777;
  padding-bottom: 5px;
  margin-bottom: 5px;
  line-height: 25pt;
}
address span strong {
  font-weight: 600 !important;
  display: inline-block;
  width: 75px;
  position: relative;
  margin-right: 5px;
}

.about-experience {
  line-height: normal;
}
.special-heading::after {
  content: "";
  width: 4rem;
  position: relative;
  display: block;
  padding-bottom: 10px;
  margin-bottom: 30px;
  border-bottom: 0.2rem solid var(--heading-color);
}
</style>
