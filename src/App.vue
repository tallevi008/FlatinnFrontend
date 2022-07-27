<template>
  <div>
    <app-header />
    <router-view></router-view>
    <app-footer />
  </div>
</template>

<script>
import appHeader from './components/app-header.vue';
import appFooter from './components/app-footer.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'App',
  data() {
    return {};
  },
  async created() {
    // this.$store.dispatch({ type: 'loadStays' });
    const loadedStays = await this.$store.dispatch({ type: 'loadStays' });
    console.log('loaded stays=', loadedStays);
  },
  computed: {},
  methods: {},
  components: {
    appHeader,
    appFooter,
  },
};
</script>

<style></style>
