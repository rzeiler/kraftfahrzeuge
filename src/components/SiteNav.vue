<template>
  <div>
    <svg viewBox="0 0 100 80" width="40" v-on:click="menu()" height="40">
      <rect y="30" width="80" height="10" rx="8"></rect>
      <rect y="60" width="100" height="10" rx="8"></rect>
    </svg>
    <div v-if="showMenu" class="menu">
      <router-link class="dropdown-item" to="/">Fahrzeuge</router-link>

      <router-link class="dropdown-item" to="/settings">Einstellungen</router-link>

      <a class="dropdown-item" v-on:click="logout()" href="#">Abmelden</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    menu() {
      this.showMenu = !this.showMenu;
      document.body.style.overflow = (this.showMenu ? "hidden":"unset");
    },
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>
