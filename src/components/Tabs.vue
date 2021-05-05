<template>
  <div class="tab-group">
    <div
      class="tab-item"
      v-for="item in items"
      :key="item.value"
      v-on:click="select(item)"
      :class="{ active: item.selected }"
    >
      <m-icon :name="item.icon" v-if="item.icon" />
      <div v-if="item.title">
        {{ item.title }}
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: null,
    selectable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    select(selected) {
      this.items.forEach((item, index) => {
        if (selected.value == item.value) {
          if (this.selectable) {
            item.selected = this.selectable;
          }
        } else {
          item.selected = false;
        }
      });
      this.$emit("selected", selected);
    }
  }
};
</script>



<style lang="scss" scoped>
.tab-group {
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  margin-bottom: 10px;
  .tab-item {
    cursor: pointer;
    padding: 10px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    text-align: center;
    align-items: center;

    .line {
      margin-top: 10px;
      background-color: #fff;
      min-height: 3px;
      transition: all 0.25s ease-in-out;
      border-radius: 10px;
      width: 0;
    }

    &.active {
      font-weight: 600;

      .line {
        background-color: #f00;
        width: 50%;
      }
    }
  }
}
</style>

 

