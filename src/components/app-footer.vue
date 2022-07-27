<template>
  <section class="app-footer" :class="{ details: footerShort }">
    <div class="app-footer-left-div">
      <p class="app-footer-copyrights">©&nbsp;2022 Flat-Inn, Inc.</p>
      <div class="app-footer-links">
        <span class="app-footer-bullet bullet-first"> · </span>
        <p>Privacy</p>
        <span class="app-footer-bullet"> · </span>
        <p>Terms</p>
        <span class="app-footer-bullet"> · </span>
        <p>Sitemap</p>
      </div>
    </div>
    <div class="footer-right-div">
      <div class="app-footer-currency">
        <img class="img-globe" src="../assets/globe.svg" alt="" />
        <span class="app-footer-currency-span">English(US)</span>
        $<span class="app-footer-currency-span">US</span>
      </div>
      <div class="app-footer-socials">
        <img
          class="app-footer-socials-svg"
          src="../assets/facebook.svg"
          alt=""
        />
        <img
          class="app-footer-socials-svg"
          src="../assets/twitter.svg"
          alt=""
        />
        <img
          class="app-footer-socials-svg"
          src="../assets/instagram.svg"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currPage: null,
    };
  },
  computed: {
    footerShort() {
      if (this.currPage === 'stayDetails' || this.currPage === 'userDetails')
        return true;
      else return false;
    },
  },
  watch: {
    '$store.getters.getCurrPage': {
      handler() {
        this.currPage = this.$store.getters.getCurrPage;
      },
    },
  },
};
</script>
