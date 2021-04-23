<template>
  <router-link class="card" :to="to" v-bind:style="background">
    <div></div>
    <div class="card-title" >
      <b>{{ title }}</b>
    </div>
    <div class="card-title">
      <b>{{ mileage }}</b> Kilometer
    </div>

    <svg
      width="100%"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <line
        x1="1%"
        x2="99%"
        :y1="y"
        :y2="y"
        stroke="#ffffff44"
        stroke-width="10"
        stroke-linecap="round"
      />
      <line
        x1="1%"
        :x2="x2"
        :y1="y"
        :y2="y"
        stroke="#ff0000aa"
        stroke-width="10"
        stroke-linecap="round"
      />
    </svg>
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
      const bi = { 'background-image': `url('${this.image}')` };
      console.log("background",bi);
      return bi;
    },
    x2() {
      let date = moment(this.nextcheck.toDate());
      let curdate = moment(undefined);
      let diff = date.diff(curdate, "days");
      return `${100 - (diff / 730) * 100 - 1}%`;
    }
  }
};
</script>

 

