<template>
  <div>
    <label for="mileage" class="form-label">{{ label }}</label>
    <input
      class="form-control"
      :type="type"
      id="mileage"
      :placeholder="placeholder"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      default: "label",
      type: String,
      required: true
    },
    type: {
      default: "text",
      type: String,
      required: true
    },
    placeholder: {
      default: "",
      type: String,
      required: false
    },
    value: {
      default: null,
      type: String,
      required: false
    }
  },
  data() {
    return {
      content: this.value
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", this.content);
    }
  }
};
</script>

 

