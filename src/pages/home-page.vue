<template>
  <div class="main-container">
    <!--  <div class="filter-cont">
      <stay-filter v-if="getFilterShown"></stay-filter>
    </div> -->
    <div class="filter-cont-in-home-page" v-show="isFilterUp">
      <stay-filter></stay-filter>
    </div>
    <div class="con-sentence">
      <div class="sentence">
        <span>Let your curiosity do the booking</span>
        <span class="sentence-dot">.</span>
      </div>
    </div>
  </div>

  <div class="destenations">
    <div class="destnations-main-title">Popular Destinations</div>
    <div class="dest-grid">
      <div class="dest-img-con">
        <img
          @click="setfilterParams"
          class="dest-img"
          src="../assets/img/dest/Hong.Kong.jpg"
        />
        <div class="dest-title">Hong-Kong</div>
      </div>
      <div class="dest-img-con">
        <img
          @click="setfilterParams"
          class="dest-img"
          src="../assets/img/dest/Barcelona.jpg"
        />
        <div class="dest-title">Barcelona</div>
      </div>
      <div class="dest-img-con">
        <img
          @click="setfilterParams"
          class="dest-img"
          src="../assets/img/dest/New.York.jpg"
        />
        <div class="dest-title">New york</div>
      </div>
      <div class="dest-img-con">
        <img
          @click="setfilterParams"
          class="dest-img"
          src="../assets/img/dest/Sydney.jpg"
        />
        <div class="dest-title">Sydney</div>
      </div>
    </div>
    <div class="dest-grid">
      <div class="dest-img-con">
        <img
          @click="goToExploreCategories"
          class="dest-img"
          src="../assets/img/category/butiqe.jpg"
        />
        <div class="dest-title">Boutique</div>
      </div>
      <div class="dest-img-con">
        <img
          @click="goToExploreCategories"
          class="dest-img"
          src="../assets/img/category/flat.jpg"
        />
        <div class="dest-title">Flat</div>
      </div>
      <div class="dest-img-con">
        <img
          @click="goToExploreCategories"
          class="dest-img"
          src="../assets/img/category/hotel.jpg"
        />
        <div class="dest-title">Hotel</div>
      </div>
      <div class="dest-img-con">
        <img
          @click="goToExploreCategories"
          class="dest-img"
          src="../assets/img/category/garden1.jpg"
        />
        <div class="dest-title">Garden</div>
      </div>
    </div>
  </div>
  <div class="host-container">
    <div class="host-title-container">
      <label class="host-title">Questions about hosting?</label>
    </div>
    <br />
    <button class="host-btn">Learn more</button>
    <!-- <div class="filter-cont"></div> -->
  </div>
</template>

<script>
import stayFilter from '../components/stay-filter.vue';
export default {
  props: [],
  emits: [],

  created() {
    console.log('set page to homepage!!!!!');
    this.$store.commit({ type: 'setCurrPage', page: 'homePage' });
    this.$store.commit({ type: 'setWantToSearch', isWantToSearch: false });
  },
  components: {
    stayFilter,
  },
  data() {
    return {
      var1: 'bla',
    };
  },

  loggedInUser() {
    let loggedUser = this.$store.getters.getLoggedUser;

    console.log('logged in user11111 ======', loggedUser);
    if (!loggedUser) {
      console.log('no logged in user !!!!!!');
      return false;
    }
    console.log('logged in user22222 ======', loggedUser);
    return loggedUser;
  },
  methods: {
    // Tal
    setfilterParams(imgSrc) {
      const regex = /[^/\\]+(?:jpg|jpeg|gif|png)/gi;
      var filename = imgSrc.target.src.match(regex).join('');
      console.log('filename', filename);
      const idx = filename.lastIndexOf('.');
      var cityName = filename.substring(0, idx);
      console.log('cityName', cityName.replace(/\./g, ' '));

      this.$router.push(`/stay?address=${cityName.replace(/\./g, ' ')}`);
    },
    // Tal
    // When we put real room type we can change.
    goToExploreCategories() {
      this.$router.push(`/stay`);
    },
    checkUser() {
      console.log('check user =====', this.$store.getters.getLoggedUser);
    },
    test1000() {
      console.log('current page======', this.$store.getters.getCurrPage);
    },
  },
  computed: {
    isFilterUp() {
      console.log(
        'homepage this.$store.getters.isFilterUp =',
        this.$store.getters.isFilterUp
      );
      return this.$store.getters.isFilterUp;
    },
    getCom() {
      return 'blabla';
    },
    getLoggedUser() {
      return this.$store.getters.getLoggedUser;
    },
  },
};
</script>

<style scoped></style>
