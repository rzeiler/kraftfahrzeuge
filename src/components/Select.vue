<template>
  <div
    class="modal"
    :class="{ show: show }"
    :style="{ display: show ? 'flex' : 'none' }"
  >
    <div class="modal-dialog">
      <div class="list-group">
        <a
          href="#"
          class="list-group-item list-group-item-action active"
          aria-current="true"
        >
          {{ title }}
        </a>
        <button
          type="button"
          v-on:click="select(item.params)"
          v-for="item in items"
          :key="item.id"
          class="list-group-item list-group-item-action"
        >
          {{ item.title }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      default: false,
      type: Boolean,
      required: true
    },
    items: {
      default: null,
      type: Array,
      required: true
    },
    title: {
      default: null,
      type: String,
      required: false
    }
  },
  data() {
    return {
      modal: null
    };
  },
  methods: {
    select(item) {
      this.$emit("select", item);
    }
  }
};
</script>

<style lang="scss" scoped>
.modal.show {
  background-color: rgba(255, 255, 255, 0.7) !important;
  align-items: center !important;
  justify-content: center !important;
  .modal-dialog{
    z-index: 1070 !important;
    pointer-events:  unset !important;
    .list-group{
          min-width: 200px;
          width: 80vw;
          max-width: 400px;
    }
  }
}
</style>
 
 


 

