<template>
  <router-link class="card" :to="to" v-bind:style="background">
    <div></div>
    <div class="card-title">
      <b>{{ title }}</b>
    </div>
    <div class="card-title">
      <b>{{ mileage }}</b> Kilometer
    </div>
    <m-bar :width="width"></m-bar>
  </router-link>
</template>

<script>
import moment from "moment";

export default {
  props: {
    title: null,
    imageUrl: null,
    mileage: null,
    nextcheck: null,
    to: null,
    image: null
  },
  data() {
    return {
      y: 10
    };
  },
  computed: {
    background() {
      const bi = { "background-image": `url('${this.image}')` };
      console.log("background", bi);
      return bi;
    },
    width() {
      let date = moment(this.nextcheck.toDate());
      let curdate = moment(undefined);
      let diff = date.diff(curdate, "days");
      return `${100 - (diff / 730) * 100 - 1}%`;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: block;
  
  background-size: cover;
  background-repeat: no-repeat;
  
  width: 200px;
  height: 200px;
   
  border-radius: 20px;
  transition: all 0.15s ease-in-out;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.8);
  //margin: 5%;
  color: #fff;
  //padding: 5%;
}
</style>



