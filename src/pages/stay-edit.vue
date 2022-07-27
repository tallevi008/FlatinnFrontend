<template>
  <div class="about">
    <h1>This is an stay edit</h1>

    <input type="checkbox" id="toggle" />
    <label>Toggle</label>
    <label>blabla</label>
    <div v-if="this.stayToEdit">
      <pre>
          Name:            <input type="text" v-model="stayToEdit.name" /><br />
          Type:            <input type="text" v-model="stayToEdit.type" /><br />
          Img url:         <input type="text" v-model="stayToEdit.imgUrls[0]" /><br />
          Img:<img :src="stayToEdit.imgUrls[0]" /><br />
          Price:           <input type="number" v-model="stayToEdit.price" /><br />
          Summary:         <textarea type="text" v-model="stayToEdit.summary"></textarea>text<br />
          Capacity:        <input type="number" v-model="stayToEdit.capacity" /><br />
          Amenities:       <input type="text" v-model="stayToEdit.amenities" /><br />
          Host id:         <input type="number" v-model="stayToEdit.host._id" /><br />
          Host fullname:   <input type="text" v-model="stayToEdit.host.fullname" /><br />
          Host imgUrl:     <input type="text" v-model="stayToEdit.host.imgUrl" /><br />
          loc country:     <input type="text" v-model="stayToEdit.loc.country" /><br />
          loc countryCode: <input type="text" v-model="stayToEdit.loc.countryCode" /><br />
          loc address:     <input type="text" v-model="stayToEdit.loc.address" /><br />
          loc lat:         <input type="number" v-model="stayToEdit.loc.lat" /><br />
          loc lng:         <input type="number" v-model="stayToEdit.loc.lng" /><br />
          reviews id:      <input type="text" v-model="stayToEdit.reviews[0].id" /><br />
          reviews txt:     <input type="text" v-model="stayToEdit.reviews[0].txt" /><br />
          reviews rate:    <input type="text" v-model="stayToEdit.reviews[0].rate" /><br />
          reviews id:      <input type="text" v-model="stayToEdit.reviews[0].by._id" /><br />
          reviews fullname:<input type="text" v-model="stayToEdit.reviews[0].by.fullname" /><br />
          reviews imgUrl:  <img :src="stayToEdit.reviews[0].by.imgUrl" /><br />
      </pre>
      <br />
      {{ stayToEdit }}

      <button @click.prevent="update">Update</button>
    </div>
    <div v-else>{{ displayMsg }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stays: null,
      stayToEdit: null,
      displayMsg: "Loading...",
    };
  },
  methods: {
    update() {
      console.log("stay to update=", this.stayToEdit);
      this.$store.dispatch({ type: "update", stayToUpdate: this.stayToEdit });
    },
  },
  async created() {
    this.$store.commit({ type: "setCurrPage", page: "stayEdit" });
    console.log("params=", this.$route.params);

    const { id } = this.$route.params;

    if (id) {
      const foundStay = await this.$store.dispatch({
        type: "getById",
        stayId: id,
      });

      console.log("foundStay main=", foundStay);
      if (foundStay) {
        this.stayToEdit = JSON.parse(JSON.stringify(foundStay));

        console.log("found id=", this.stayToEdit);
      } else {
        console.log("no such id");
        this.displayMsg = "no such id";
      }
    }
  },
};
</script>

<style scoped>
img {
  width: 200px;
  height: 120px;
}
/* #toggle {
  position: absolute;
} */
</style>
