<template>
  <section class="explore-btns">
    <button
      @click="TogglePrice"
      class="explore-btn"
      :class="{ clicked: priceActive }"
    >
      Price
    </button>
    <button
      @click="ToggleType"
      class="explore-btn"
      :class="{ clicked: typeActive }"
    >
      Type of place
    </button>
    <button
      @click="ToggleWifi"
      class="explore-btn"
      :class="{ clicked: wifiActive }"
    >
      Wifi
    </button>
    <button
      @click="ToggleTv"
      class="explore-btn"
      :class="{ clicked: tvActive }"
    >
      TV
    </button>
    <button
      @click="ToggleKitchen"
      class="explore-btn"
      :class="{ clicked: kitchenActive }"
    >
      Kitchen
    </button>
    <button
      @click="ToggleAc"
      class="explore-btn"
      :class="{ clicked: acActive }"
    >
      AC
    </button>
    <button
      @click="ToggleSmoking"
      class="explore-btn"
      :class="{ clicked: smokingActive }"
    >
      Smoking Allowed
    </button>
    <button
      @click="TogglePets"
      class="explore-btn"
      :class="{ clicked: petsActive }"
    >
      Pets Allowed
    </button>
  </section>
</template>

<script>
export default {
  props: [],
  emits: [],
  data() {
    return {
      priceActive: false,
      typeActive: false,
      wifiActive: false,
      tvActive: false,
      kitchenActive: false,
      acActive: false,
      smokingActive: false,
      petsActive: false,
    };
  },
  created() {},
  methods: {
    TogglePrice() {
      this.priceActive = !this.priceActive;
    },
    ToggleType() {
      this.typeActive = !this.typeActive;
    },
    ToggleWifi() {
      this.wifiActive = !this.wifiActive;
    },
    ToggleTv() {
      this.tvActive = !this.tvActive;
    },
    ToggleKitchen() {
      this.kitchenActive = !this.kitchenActive;
    },
    ToggleAc() {
      this.acActive = !this.acActive;
    },
    ToggleSmoking() {
      this.smokingActive = !this.smokingActive;
    },
    TogglePets() {
      this.petsActive = !this.petsActive;
    },
  },
  computed: {},
};
</script>

<style></style>
