<template>
  <div class="modal fade" ref="modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="title"></slot>
        </div>
        <div class="modal-body" :style="{ padding: `${bodyPadding}rem` }" >
          <slot></slot>
        </div>
        <div v-if="hasFooterSlot" class="modal-footer">
          <slot name="footer" ></slot>
        </div>
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
    bodyPadding: {
      default: 1,
      type: Number,
      required: false
    }
  },
  data() {
    return {
      modal: null
    };
  },
  computed:{
    hasFooterSlot () {
      return !!this.$slots['footer']
    }
  },
  watch: {
    show: function(newVal, oldVal) {
      if (newVal) {
        this.modal.show();
      } else {
        this.modal.hide();
      }
    }
  },
  mounted() {
    //this.modal = new Modal(this.$refs.modal,{backdrop: 'static', keyboard: false});
  },
  destroyed() {
    this.modal.dispose();
  }
};
</script>
 
 


 

