<template>
  <section class="app-main stay-app">
    <stay-list v-if="stays" :stays="stays" @btnsFilter="onBtnFilter" />
  </section>
</template>

<script>
import stayFilter from '../components/stay-filter.vue';
import stayList from '../components/stay-list.vue';
export default {
  data() {
    return {
      stays: null,
    };
  },
  methods: {
    onBtnFilter(exploreFilter) {
      this.$store.dispatch({ type: 'setExploreFilter', exploreFilter });
    },
  },
  computed: {
    stays() {
      return this.$store.getters.getStays;
    },
  },
  components: { stayFilter, stayList },
  created() {
    console.log('STAY APP CREATED!!!===================================');
    this.$store.commit({ type: 'setWantToSearch', isWantToSearch: false });
    this.stays = this.$store.getters.getStays;
    this.$store.commit({ type: 'setCurrPage', page: 'stayApp' });
  },
};
</script>

<style scoped></style>
