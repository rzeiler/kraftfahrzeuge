<template>
  <div class="d-flex justify-content-between p-2">
    <div class="dropdown mt-2">
      <button
        class="btn btn-flat"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
      >
        <i class="fas fa-bars"></i>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <router-link class="dropdown-item" to="/">Liste</router-link>
        </li>
        <li>
          <router-link class="dropdown-item" to="/settings"
            >Einstellungen</router-link
          >
        </li>
        <li>
          <a class="dropdown-item" @click="logout()" href="#">Abmelden</a>
        </li>
      </ul>
    </div>
    <h1 class="display-1 pe-2"></h1>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>
