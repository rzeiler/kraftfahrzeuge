<template>
  <div id="backDrop" v-on:click="onClose" :class="{ open: itmes.length }">
    <m-icon name="close" v-on:click.native="onClose" />
    <h2>Fahrzeug wählen</h2>
    <p>bei dem der service gemacht wird</p>
    <div id="menu">
      <div v-on:click="onClick(item.params)" v-for="item in itmes" :key="item.id">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itmes: null
  },
  methods: {
    onClick(item) {
      this.$emit("selected", item);
    },
    onClose() {
      this.$emit("close");
    }
  }
};
</script>
 
 <style lang="scss" scoped>
#backDrop {
  .close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;
  }
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.25s ease-in-out;

  &.open {
    height: 100vh;
    width: 100vw;
    overflow: auto;
    opacity: 1;
  }

  $bordercolor: #bbb;

  #menu {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border: 1px solid $bordercolor;
    border-radius: 5px;
    min-width: 300px;
    * {
      padding: 20px;
      //border-top: 1px solid $bordercolor;
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
    *:first-child {
      border-top-style: none;
    }
  }
}
</style>
