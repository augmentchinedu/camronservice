<template>
  <div id="home">
    <v-carousel
      :continuous="true"
      :cycle="true"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
    >
      <v-carousel-item v-for="(item, i) in sliderImages" :key="i" :src="item">
        <!-- <v-row class="fill-height ml-10 mt-16" align="center">
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
        </v-row> -->
      </v-carousel-item>
    </v-carousel>
    <div class="container my-16" id="about">
      <v-row>
        <v-col cols="12" md="7" class="">
          <h1
            class="text-uppercase text-h5 special-heading font-weight-bold mb-4"
          >
            Our Aircraft Fleet
          </h1>

          <div class="font-weight-medium">
            <p>
              At Cameron Air, our top priorities are your safety and comfort
              during your time with us. Our fleet of aircraft are designed to
              provide fast, comfortable and safe travel options to our
              passengers. Our all-weather aircraft are fully equipped to go
              where you want, when you want.
            </p>
            <p>
              The luxury of our executive leather interior is sure to impress
              and will allow you and your guests to work as a group, or simply
              sit back and relax. Catering can be arranged, and bar service is
              provided at no additional charge.
            </p>
            <p>
              On this page, you’ll find details on our aircraft fleet. For more
              information Contact: support@camronservice.online
            </p>
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
              v-for="(slide, i) in aboutImages"
              :key="i"
              :src="slide"
            >
              <!-- <v-row class="fill-height mt-16 ml-16" align="center">
                <div>
                  <div class="text-h5">{{ slide.title }}</div>
                  <div class="text-subtitle-1">{{ slide.caption }}</div>
                </div>
              </v-row> -->
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </div>
    <div class="container my-16" id="about">
      <v-row>
        <v-col cols="12" align="center">
          <v-card elevation="0" tile>
            <div class="mb-3">
              <h2 class="red--text lighten-1">CESSNA 208 CARAVAN</h2>
              <ul style="list-style: none">
                <li>9 Passenger Commuter Configuration</li>
                <li>6 Passenger Executive Configuration&nbsp;</li>
                <li>Turbine Powerplant</li>
                <li>Air Conditioning</li>
                <li>Collision Avoidance System</li>
                <li>State-of-the-Art Navigation System</li>
                <li>Autopilot</li>
                <li>202 MPH on Wheels</li>
                <li>173 MPH on Floats</li>
              </ul>
            </div>
            <div class="mb-3">
              <h2 class="red--text lighten-1">PILATUS PC-12NG</h2>

              <ul style="list-style: none">
                <li>6 Passenger Executive Configuration</li>
                <li>Turbine Powerplant</li>
                <li>Pressurized Cabin for High Altitude Comfort</li>
                <li>Air Conditioning</li>
                <li>Collission Avoidance System</li>
                <li>State-of-the-Art Navigation System</li>
                <li>Autopilot</li>
                <li>Online Flight Tracking</li>
                <li>300 MPH Cruising Speed</li>
              </ul>
            </div>
            <div class="mb-3">
              <h2 class="red--text lighten-1">CESSNA 206</h2>
              <ul style="list-style: none">
                <li>4/5 Passenger</li>
                <li>State-of-the-Art Navigation System</li>
                <li>Passenger Intercom System</li>
                <li>160 MPH on Wheels</li>
                <li>140 MPH on Floats</li>
              </ul>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <Contact />
  </div>
</template>

<script>
import Contact from "../components/Contact";

export default {
  data() {
    return {
      sliderImages: [
        "https://camronservice.world/images/1.jpg",
        "https://camronservice.world/images/2.jpg",
        "https://camronservice.world/images/3.png",
      ],
      aboutImages: [
        "https://camronservice.world/images/4.jpg",
        "https://camronservice.world/images/5.jpg",
      ],
    };
  },
  components: {
    Contact,
  },
};
</script>

<style>
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
</style>
