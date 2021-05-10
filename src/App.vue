<template>
  <div id="app">
    <transition :duration="800" name="slide">
      <router-view />
    </transition>
        <b-loading :is-full-page="true" v-model="loading" :can-cancel="true"></b-loading>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {},
  computed: {
    ...mapState(["userProfile", "error","loading"])
  },
  methods: {
    close() {
      this.$store.commit("setError", "");
    }
  },
  created() {
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === "setError") {
        this.$buefy.snackbar.open({
          message: state.error.msg,
          type: "is-danger",
          duration: 10000,
          actionText: "Ok",
          position: "is-bottom",
          indefinite: true
        });
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  }
};
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  position: absolute;
}

#app {
  width: 100%;
  height: 100%;
}
</style>