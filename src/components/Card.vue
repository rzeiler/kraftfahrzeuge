<template>
  <div class="card">
    <div></div>
    <div class="card-title">
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
        x1="5%"
        x2="95%"
        :y1="y"
        :y2="y"
        stroke="#ffffff44"
        stroke-width="10"
        stroke-linecap="round"
      />
      <line
        x1="5%"
        :x2="x2"
        :y1="y"
        :y2="y"
        stroke="#ff0000aa"
        stroke-width="10"
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    title: null,
    imageUrl: null,
    mileage: null,
    nextcheck: null
  },
  data() {
    return {
      y: 10
    };
  },
  computed: {
    x2() {
      console.log(this.nextcheck);
      let date = moment(this.nextcheck.toDate());
      let curdate = moment(undefined);
      let diff = date.diff(curdate, "days");
      return `${100 - (diff / 730) * 100 - 5}%`;
    }
  }
};
</script>

 

