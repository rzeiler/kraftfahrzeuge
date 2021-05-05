<template>
  <b-navbar>
    <template #start>
      <b-navbar-item tag="div">
        <b-icon icon="menu" />
      </b-navbar-item>
      <b-navbar-item tag="div">
        <b-icon icon="plus" />
      </b-navbar-item>
    </template>
    <template #end>
      <slot name="end"></slot>

      <b-navbar-item tag="div">
        <b-icon icon="logout" />
      </b-navbar-item>
    </template>
  </b-navbar>

  <!-- <div>
    <div class="nav">
      <m-icon name="menu" v-on:click.native="menu" />
      <m-icon name="add" v-on:click.native="add" />
      <span style="flex-grow: 1"></span>
      <m-icon name="search" />
      <m-icon name="exit_to_app" v-on:click="logout()" />
    </div>
    <div class="side-nav" :class="{ open: showMenu }">
      <m-icon name="close" v-on:click.native="menu" />

      <router-link class="dropdown-item" to="/">
        <m-icon name="directions_car" />
        <span>Fahrzeuge</span>
      </router-link>

      <router-link class="dropdown-item" to="/settings">
        <m-icon name="settings" />
        <span>Einstellungen</span>
      </router-link>

      <span class="dropdown-item" v-on:click="logout()">
        <m-icon name="exit_to_app" />
        <span>Abmelden</span>
      </span>
    </div>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    add() {
      this.$emit("add");
    },
    menu() {
      this.showMenu = !this.showMenu;
      document.body.style.overflow = this.showMenu ? "hidden" : "unset";
    },
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>
 <style lang="scss" scoped>
.menu {
  cursor: pointer;
  transition: all 1s ease-in-out;
}

.nav {
  display: flex;
  * {
    padding: 10px;
  }
}
.side-nav {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 0px;
  opacity: 0.5;
  overflow: hidden;
  transition: all 0.25s ease-in-out;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  * {
    display: inline-flex;
    flex-direction: row;
    padding: 10px;
    color: #343434;
  }
  &.open {
    width: 100%;
    opacity: 1;
  }
}
</style>
