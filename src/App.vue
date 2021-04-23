<template>
  <div id="app" class="container">
    <SiteNav v-if="showNav"></SiteNav>
    <transition :duration="800" name="slide">
      <router-view />
    </transition>
    <div class="toast" v-if="error">
      <div>
        {{ error }}
      </div>
      <span class="close" @click="close">&#x2715;</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SiteNav from "@/components/SiteNav";

export default {
  components: {
    SiteNav
  },
  computed: {
    ...mapState(["userProfile", "error"]),
    showNav() {
      return Object.keys(this.userProfile).length > 1;
    }
  },
  methods: {
    close() {
       this.$store.commit("setError", "");
    }
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

.container {
  max-width: 800px;
  padding: 0 20px 0 20px;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>