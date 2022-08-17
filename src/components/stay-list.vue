<template>
  <div v-if="stays.length === 0">
    <div class="full-body">
      <div class="load-img-con">
        <img src="../assets/img/loading.gif" alt="Loading" />
      </div>
    </div>
  </div>
  <div v-else>
    <h4 v-if="stays.length" class="stay-list-title">
      {{
        $route.query.address
          ? `${stays.length} stays in ${$route.query.address}`
          : 'Explore the world!'
      }}
    </h4>
    <h4 v-else>No match found</h4>

    <br />

    <section class="explore-btns">
      <button
        @click.stop.prevent="togglePrice"
        class="explore-btn"
        :class="{ clicked: isPriceActive }"
      >
        Price
      </button>
      <button
        @click.stop.prevent="toggleType"
        class="explore-btn"
        :class="{ clicked: isTypeActive }"
      >
        Type of place
      </button>
      <button
        @click.stop.prevent="toggleWifi"
        class="explore-btn"
        :class="{ clicked: isWifiActive }"
      >
        Wifi
      </button>
      <button
        @click.stop.prevent="toggleTv"
        class="explore-btn"
        :class="{ clicked: isTvActive }"
      >
        TV
      </button>
      <button
        @click.stop.prevent="toggleKitchen"
        class="explore-btn"
        :class="{ clicked: isKitchenActive }"
      >
        Kitchen
      </button>
      <button
        @click.stop.prevent="toggleAc"
        class="explore-btn"
        :class="{ clicked: isAcActive }"
      >
        AC
      </button>
      <button
        @click.stop.prevent="toggleSmoking"
        class="explore-btn"
        :class="{ clicked: isSmokingAllowedActive }"
      >
        Smoking allowed
      </button>
      <button
        @click.stop.prevent="togglePets"
        class="explore-btn"
        :class="{ clicked: isPetsAllowedActive }"
      >
        Pets allowed
      </button>

      <div v-if="isPriceActive" class="price-modal">
        <h3>Price</h3>
        <div class="range-nput">
          <input
            type="number"
            placeholder="minimum price"
            v-model="priceRange.min"
          />
          <input
            type="number"
            placeholder="maximum price"
            v-model="priceRange.max"
          />
        </div>
        <div class="action-buttons">
          <button class="save-btn" @click.stop.prevent="setPrice">Save</button>
          <button class="clear-btn" @click.stop.prevent="clearPrice">
            Clear
          </button>
        </div>
      </div>
      <div v-if="isTypeActive" class="type-room-modal">
        <div class="room-options">
          <label
            ><input
              type="checkbox"
              value="entire home"
              v-model="exploreBtnsFilter.roomType"
            />
            Entire Home</label
          >
          <label
            ><input
              type="checkbox"
              value="private room"
              v-model="exploreBtnsFilter.roomType"
            />
            Private Room</label
          >
        </div>
        <div class="action-buttons">
          <button class="save-btn" @click.stop.prevent="setRoom">Save</button>
          <button class="clear-btn" @click.stop.prevent="clearRoomType">
            Clear
          </button>
        </div>
      </div>
    </section>
    <ul class="stay-list">
      <stay-preview v-for="stay in stays" :stay="stay" :key="stay._id" />
    </ul>
  </div>
</template>

<script>
import stayPreview from './stay-preview.vue';
import expoloreBtns from './explore-btns.vue';

export default {
  props: {
    stays: {
      type: Array,
      required: true,
    },
  },
  emits: ['btnsFilter'],
  data() {
    return {
      priceRange: { min: 0, max: 100000 },

      isPriceActive: false,
      isTypeActive: false,
      // Amenities
      isWifiActive: false,
      isTvActive: false,
      isKitchenActive: false,
      isAcActive: false,
      isPetsAllowedActive: false,
      isSmokingAllowedActive: false,
      exploreBtnsFilter: {
        amenities: [],
        roomType: [],
        priceRange: {
          min: -Infinity,
          max: Infinity,
        },
      },
    };
  },
  created() {
    // console.log(this.$route.query);
    console.log('LIST CREATED!!!===================================');
    this.getPriceRange();
  },
  components: {
    stayPreview,
    expoloreBtns,
  },
  methods: {
    togglePrice() {
      this.isPriceActive = !this.isPriceActive;
      this.isTypeActive = false;
    },
    toggleType() {
      this.isTypeActive = !this.isTypeActive;
      this.isPriceActive = false;
    },

    toggleWifi() {
      this.isWifiActive = !this.isWifiActive;
      this.setAmenities('Wifi', this.isWifiActive);
    },
    toggleTv() {
      this.isTvActive = !this.isTvActive;
      this.setAmenities('TV', this.isTvActive);
    },
    toggleKitchen() {
      this.isKitchenActive = !this.isKitchenActive;
      this.setAmenities('Kitchen', this.isKitchenActive);
    },
    toggleAc() {
      this.isAcActive = !this.isAcActive;
      this.setAmenities('Air conditioning', this.isAcActive);
    },
    toggleSmoking() {
      this.isSmokingAllowedActive = !this.isSmokingAllowedActive;
      this.setAmenities('Smoking allowed', this.isSmokingAllowedActive);
    },
    togglePets() {
      this.isPetsAllowedActive = !this.isPetsAllowedActive;
      this.setAmenities('Pets allowed', this.isPetsAllowedActive);
    },

    setAmenities(name, btnStatus) {
      if (btnStatus) {
        if (this.exploreBtnsFilter.amenities.includes(name)) return;
        this.exploreBtnsFilter.amenities.push(name);
      } else {
        const idx = this.exploreBtnsFilter.amenities.findIndex(
          amenity => amenity === name
        );
        this.exploreBtnsFilter.amenities.splice(idx, 1);
      }
      this.$emit('btnsFilter', this.exploreBtnsFilter);
    },

    getPriceRange() {
      let allStays = this.$store.getters.getStaysAll;
      const prices = allStays.map(stay => stay.price);
      this.priceRange.min = Math.min(...prices);
      console.log(' priceRange.min', this.priceRange.min);
      this.priceRange.max = Math.max(...prices);
      console.log(' priceRange.max', this.priceRange.max);
    },
    setPrice() {
      this.exploreBtnsFilter.priceRange.max = this.priceRange.max;
      this.exploreBtnsFilter.priceRange.min = this.priceRange.min;
      this.$emit('btnsFilter', this.exploreBtnsFilter);
      this.isPriceActive = false;
    },
    clearPrice() {
      this.exploreBtnsFilter.priceRange.min = -Infinity;
      this.exploreBtnsFilter.priceRange.max = Infinity;
      // this.$emit('btnsFilter', this.exploreBtnsFilter);
      this.getPriceRange();
    },

    setRoom() {
      this.$emit('btnsFilter', this.exploreBtnsFilter);
      this.isTypeActive = false;
    },
    // Like airBnb
    clearRoomType() {
      this.exploreBtnsFilter.roomType = [];
      // this.$emit('btnsFilter', this.exploreBtnsFilter);
    },
  },
  watch: {
    // whenever question changes, this function will run
    stays: function (oldProp, newProp) {
      if (
        this.exploreBtnsFilter.priceRange.max === Infinity &&
        this.exploreBtnsFilter.priceRange.min === -Infinity
      ) {
        console.log('update get price range.........');
        this.getPriceRange();
      }
    },
    // isPriceActive() {
    //   this.arrowSign();
    // },
    // isTypeActive() {
    //   this.arrowSign();
    // },
  },
  computed: {
    //   arrowSign() {
    //     if (this.isPriceActive || this.isTypeActive) {
    //       return hi;
    //     } else !this.isPriceActive || !this.isTypeActive;
    //   },
  },
};
</script>
<style scoped></style>
