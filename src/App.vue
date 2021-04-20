<template>
  <div id="app" class="container">
    <SiteNav v-if="showNav"></SiteNav>
    <transition :duration="800" name="slide">
      <router-view />
    </transition>
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
    ...mapState(["userProfile"]),
    showNav() {
      return Object.keys(this.userProfile).length > 1;
    }
  }
};
</script>

<style lang="scss" scoped>
 
.slide-enter-active, .slide-leave-active {
  transition: opacity .5s;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  position: absolute;
  
}

 
.container{
  max-width: 800px;
  padding: 0 20px 0 20px;
  margin: 0 auto 0 auto;
  display: block;
}

</style>