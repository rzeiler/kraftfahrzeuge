<template>
  <div id="app">
    <transition :duration="800" name="slide">
      <router-view />
    </transition>


<div v-if="updateExists">
  Eine neue Version ist verfügbar!
 call refreshApp()
</div>


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
import update from "./mixins/update";
export default {
  components: {},
  computed: {
    ...mapState(["userProfile", "error"])
  },
  mixins: [update],
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

#app {
  width: 100%;
  height: 100%;
  
  

}


</style>