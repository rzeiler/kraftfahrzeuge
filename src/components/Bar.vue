<template>
  <div class="line">
    <div class="value" :style="{ width: width }"></div>
  </div>
</template>

<script>
export default {
  props: {
    width: null
  }
};
</script>
<style lang="scss" scoped>
@mixin border_radius {
  border-radius: 10px;
  display: block;
}

.line {
  border: 1px solid rgba(255, 0, 0, 0.6); ;
  margin-top: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  @include border_radius;
  .value {
    @include border_radius;
    background-color: rgba(255, 0, 0, 0.8);
    height: 10px;
    width: 0px;
  }
}
</style>
 


 

