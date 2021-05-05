<template>
  <div class="card-backdrop">
    <div class="card">
      <div class="card-head">
        <m-icon name="close" v-on:click.native="onClose" />
      </div>
      <div class="card-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: null
  },
  methods: {
    onClose() {}
  }
};
</script>

<style lang="scss" scoped>
.card-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  color: #6e6f80;
  width: 80vw;
  max-width: 300px;
  height: auto;
  margin: auto;
  background-color: #31324d;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  > * {
    padding: 10px;
  }

  .card-head {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #3e3f61;
    text-align: right;
    line-height: 10px;
    .close {
      margin: 0 0 -3px 0;
    }
  }
}
</style>



