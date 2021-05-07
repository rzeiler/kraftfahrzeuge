<template>
  <b-navbar>
    <template #start>
      <slot name="start"></slot>
    </template>
    <template #end>
      <slot name="end"></slot>
    </template>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    // menu() {
    //   this.showMenu = !this.showMenu;
    //   document.body.style.overflow = this.showMenu ? "hidden" : "unset";
    // },
  }
};
</script>
 <style lang="scss">
</style>
