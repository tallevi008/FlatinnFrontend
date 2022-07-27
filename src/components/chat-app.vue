<script>
export default {
  props: [],
  emits: [],
  data() {
    return {
      var1: "bla",
    };
  },
  created() {
    // console.log("comp1 created")
  },
  methods: {
    doThing() {
      this.var1 = "bla";
      return "blabla";
    },
    storeExample() {
      //action
      //this.$store.dispatch({type:'actionName', id:this.id })
      //mutation
      //this.$store.commit({type:'commitName', id:this.id})
      //getter
      //console.log(the getter)
      //this.$store.getters.getterName
      //get var (better to get only with getters)
      //this.$store.state.varName
    },
  },
  computed: {
    getCom() {
      return "blabla";
    },
  },
};
</script>

<template>
  <div>
    <h1>page 1</h1>
  </div>
</template>

<style></style>
