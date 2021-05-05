<template>
  <button type="button" class="btn" :disabled="disable">
    <span class="material-icons" :class="name">{{ name }}</span>
  </button>
</template>

<script>
export default {
  props: {
    name: {
      default: "done",
      type: String,
      required: true
    },
    disable: {
      default: false,
      type: Boolean,
      required: false
    }
  }
};
</script>

 

