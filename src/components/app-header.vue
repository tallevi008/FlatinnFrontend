<template>
  <section class="app-header-con">
    <div class="app-header" :class="{ details: headerShort }">
      <router-link to="/" class="logo-con">
        <img class="logo-img" src="../assets/logo.svg" alt="img-logo" />
        <div class="logo-txt">Flat-Inn</div>
      </router-link>

      <div v-if="smallFilterStatus">
        <div class="small-filter-div">
          <button class="small-filter-button" @click="openFilter">
            <div class="small-filter-button-txt-div">
              <h4 class="small-filter-button-txt">Start your search</h4>
            </div>
            <div class="small-filter-button-div">
              <img
                class="small-filter-button-img"
                src="../assets/magnifying.svg"
                alt="small-filter-button-img"
              />
            </div>
          </button>
        </div>
      </div>
      <div v-show="bigFilterStatus">
        <stay-filter></stay-filter>
      </div>
      <div class="main-nav">
        <div class="main-nav-links">
          <router-link class="menu-link" to="/stay" @click="close">
            Explore</router-link
          >
          <router-link class="menu-link main-nav-host" to="/" @click="close"
            >Become a host</router-link
          >
        </div>
        <div class="menu">
          <div class="img-globe-div">
            <img class="img-globe" src="../assets/globe.svg" alt="img-globe" />
          </div>
          <button class="menu-btn" @click="toggleModal">
            <img
              src="../assets/hamburger.svg"
              alt="img-hamburger"
              class="hamburger"
            />
            <img
              class="user-img"
              src="../assets/user-home.svg"
              alt="img-user-home"
            />
          </button>
          <div
            v-if="isOpen"
            class="menu-btn-modal"
            :class="{ modal: modalShort }"
          >
            <router-link
              @click="toggleModal"
              class="menu-modal-link"
              to="/signup"
              >{{ getLoggedInUser ? 'Log out' : 'Log in' }}</router-link
            >
            <router-link
              v-if="getLoggedInUser.isHost"
              @click="toggleModal"
              class="menu-modal-link"
              to="/dashboard"
              >Backoffice</router-link
            >
            <router-link
              @click="toggleModal"
              class="menu-modal-link"
              :to="`/user/${loggedInUser._id}`"
              >Account</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <!-- <stay-filter /> -->
  </section>
</template>

<script>
import stayFilter from '../components/stay-filter.vue';

export default {
  data() {
    return {
      isOpen: false,
      currPage: null,
      loggedInUser: this.$store.getters.getLoggedUser,
      bigFilterStatus: false,
      smallFilterStatus: true,
    };
  },
  created() {
    window.addEventListener('scroll', this.checkScroll);
    this.updateFiltersStatus();
  },
  components: {
    stayFilter,
  },
  methods: {
    close() {
      if (this.isOpen) this.isOpen = false;
      else return;
    },
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
    openFilter() {
      this.$store.commit({ type: 'setFilterUp', isFilterUp: true });
      this.$store.commit({ type: 'setWantToSearch', isWantToSearch: true });
    },
    checkScroll() {
      let scrolled = window.pageYOffset;
      this.updateFiltersStatus();
      if (scrolled > 40) {
        // console.log('filter stop!!!!!');
        this.$store.commit({ type: 'setFilterUp', isFilterUp: false });
      }
      if (scrolled < 40) {
        // console.log('filter open!!!!!');
        this.$store.commit({ type: 'setFilterUp', isFilterUp: true });
      }
    },
    updateFiltersStatus() {
      let currPage = this.$store.getters.getCurrPage;
      let isFilterUp = this.$store.getters.isFilterUp;

      if (currPage === 'homePage') {
        console.log('this is home page!!!!!!!');
        this.bigFilterStatus = false;
        if (isFilterUp === false) this.smallFilterStatus = true;
        if (isFilterUp === true) this.smallFilterStatus = false;
      }
      if (currPage === 'stayApp') {
        console.log('this is stay app page!!!!!!!');
        this.bigFilterStatus = false;
        this.smallFilterStatus = true;
      }
      if (currPage === 'loginSignup') {
        this.bigFilterStatus = false;
        this.smallFilterStatus = false;
      }
      if (currPage === 'dashboard') {
        this.bigFilterStatus = false;
        this.smallFilterStatus = false;
      }
    },
  },
  computed: {
    headerShort() {
      if (this.currPage === 'stayDetails' || this.currPage === 'userDetails')
        return true;
      else return false;
    },
    modalShort() {
      if (this.currPage === 'stayDetails' || this.currPage === 'userDetails')
        return true;
      else return false;
    },
    hideFilter() {
      if (this.currPage === 'dashboard') return true;
      else return false;
    },
    headerStyle() {
      let answer = this.$store.getters.isFilterUp;
      if (!answer) return 'background-color:#222';
      if (answer) return 'background-color:white';
      // else return 'opacity:0.1;';
      // else return 'background-color:blue;';
      // background-color: rgba(255, 255, 255, 0.5);
      else return 'background-color: rgba(255, 255, 255, 0.5);';
    },
    isFilterUp() {
      return this.$store.getters.isFilterUp;
    },
    isStayDetails() {
      let loc = window.location.href;
      let strToSearch = '/stay/';
    },

    getShowSmallButton() {
      console.log('show small button');

      console.log('this.isFilterUp ===', this.isFilterUp);

      if (this.$store.getters.getWantToSearch === true) {
        console.log('is search on ================!!!!');
        return false;
      }
      if (this.currPage === 'stayDetails') {
        return true;
      }
      if (!this.isFilterUp) return true;
      return false;
    },
    getShowFilter1() {
      let currPage = this.$store.getters.getCurrPage;
      if (currPage === 'homePage') {
        console.log(
          'this page is homepage!!!! not show filter!!!!============'
        );
        return false;
      }
      if (currPage === 'stayApp') {
        return false;
      }
      if (this.$store.getters.getWantToSearch) return true;
      console.log('show filter');
      console.log('this.isFilterUp ===', this.isFilterUp);
      if (this.currPage === 'stayDetails') {
        return false;
      }
      if (!this.isFilterUp) return false;
      return true;
    },
    getLoggedInUser() {
      return this.$store.getters.getLoggedUser;
    },
  },
  watch: {
    '$store.getters.getCurrPage': {
      handler() {
        this.currPage = this.$store.getters.getCurrPage;
        //bla
        this.updateFiltersStatus();
      },
    },
  },
};
</script>
