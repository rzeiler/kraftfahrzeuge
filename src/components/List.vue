<template>
  <transition-group :duration="800" name="slide" class="horizontal">
    <div
      v-for="item in data"
      :key="item.id"
      class="card"
      @click="onClick(item.id)"
      :style="background(item)"
    >
      <div></div>
      <div class="card-title">
        <b>{{ item.title }}</b>
      </div>
      <div class="card-title">
        <b>{{ item.mileage }}</b> Kilometer
      </div>
       <span style="flex-grow: 1"></span>
      <m-bar :width="width(item)"></m-bar>
    </div>
  </transition-group>
</template>

<script>
import moment from "moment";

export default {
  props: {
    data: null
  },
  methods: {
    onClick(item) {
      this.$emit("clicked", item);
    },
    background(v) {
      const bi = { "background-image": `url('${v.image}')` };
      return bi;
    },
    width(v) {
      let date = moment(v.nextcheck.toDate());
      let curdate = moment(undefined);
      let diff = date.diff(curdate, "days");
      return `${100 - (diff / 730) * 100 - 1}%`;
    }
  }
};
</script>
 
 <style lang="scss" scoped>
.horizontal {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  @media (min-width: 800px) {
    justify-content: center;
  }

  > * {
    display: block;
    scroll-snap-align: center;
    margin: 30px;
    min-width: 200px;
    min-height: 200px;
    overflow: hidden;
    padding: 10px;

    display: inline-flex;
    flex-direction: column;
    background-size: cover;
    background-repeat: no-repeat;

    border-radius: 0.5rem;
    transition: all 0.15s ease-in-out;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.8);

    color: #fff;

    @media (max-width: 800px) {
      @media (orientation: landscape) {
        min-width: 100px;
        min-height: 100px;
      }
    }

    // @media (orientation: portrait) {
    //   body {
    //     flex-direction: column;
    //   }
    // }

    > * {
      display: block;
    }

    // > *:first-child {
    //   //flex: 1 1 auto !important;
    //   flex-grow: 1;
    // }
  }

  &::before,
  &::after {
    content: "";
    color: #f00;
    width: 100px;
    min-width: 200px;
    display: block;
  }
}
</style>
