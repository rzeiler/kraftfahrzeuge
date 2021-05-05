<template>
  <div>
    <div class="nav">
      <div class="title">{{ title }}</div>
      <span style="flex-grow: 1"></span>
      <slot></slot>
      <m-icon name="close" v-on:click.native="close" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "saveable", "removeable"],
  methods: {
    close() {
      this.$emit("close");
    },
    remove() {
      this.$emit("remove");
    }
  }
};
</script>
 <style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  font-size: 140%;
  * {
    padding: 10px;
  }
  .title {
    display: flex;
    align-items: center;

    &::after {
      display: block;
      content: "";
      border-right: 1px solid #6610f2;
      margin-left: 5px;
      height: 40px;
    }
  }
}
</style>
