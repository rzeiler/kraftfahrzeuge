<template>
  <div id="app" class="container">
 
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


export default {
  components: {
    
  },
  computed: {
    ...mapState(["userProfile", "error"]),
   
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