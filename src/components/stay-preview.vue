<template>
  <li class="stay-preview" @click="goToDetails">
    <div class="block">
      <el-carousel
        :autoplay="false"
        :loop="false"
        :trigger="'click'"
        height="262.25px"
      >
        <el-carousel-item
          v-for="(imgUrl, index) in getImgUrl()"
          :key="`img-${index}`"
        >
          <img class="stay-preview-img" :src="imgUrl" alt="stay-preview-img" />
        </el-carousel-item>
        <div class="like-stay">
          <img class="like-stay-img" src="../assets/like.svg" alt="" />
        </div>
      </el-carousel>
    </div>
    <div class="stay-preview-content">
      <div class="stay-preview-content-reviews">
        <img class="img-star" src="../assets/star.svg" alt="" />
        <p class="reviews-rate">{{ getAvarageRate }}&nbsp;</p>
        <p class="reviews-number">({{ stay.numOfReviews }} Reviews)</p>
      </div>
      <div class="stay-preview-details">
        <p>{{ stay.roomType }}</p>
        <span class="stay-preview-details-span">&nbsp;•&nbsp;</span>
        <p>{{ stay.address.city }}, {{ stay.address.country }}</p>
      </div>
      <div class="stay-preview-desc">
        <p>{{ editTxtLength }}</p>
      </div>
      <div class="stay-preview-price">
        <p>
          <span class="stay-preview-price-span">{{
            $filters.currencyUSD(stay.price)
          }}</span>
          / night
        </p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'stay-preview',
  props: {
    stay: Object,
  },
  data() {
    return {};
  },
  created() {},
  components: {},
  methods: {
    goToDetails() {
      this.$router.push(`/stay/${this.stay._id}`);
    },
    // getImgUrl(file) {
    //   const imgUrl = new URL(`../assets/images/${file}`, import.meta.url);
    //   return imgUrl;
    // },
    getImgUrl() {
      // const imgs = this.stay.imgUrls.map((img) => `../assets/gallery/${img}`);
      const imgs = this.stay.imgUrls.map(
        img =>
          `https://res.cloudinary.com/flat-inn/image/upload/v1649107833/assets/gallery/${img}`
      );

      return imgs;
    },
  },
  computed: {
    getAvarageRate() {
      let rate = this.stay.reviewScores.rating;

      let rateDec = rate / 100;

      let finalRate = rateDec * 5;

      return finalRate.toFixed(2);
    },
    editTxtLength() {
      console.log('hello');
      var editedSubject = this.stay.summary.substr(0, 45);
      editedSubject += '..';
      return editedSubject;
    },
  },
};
</script>
