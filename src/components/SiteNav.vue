<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Kraftfahrzeuge</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/settings">Settings</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="logout()">Abmelden</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    methods: {
      logout() {
        this.$store.dispatch("logout");
      },
    },
  };
</script>
