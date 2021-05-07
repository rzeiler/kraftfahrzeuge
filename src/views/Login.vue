<template>
  <div
    class="is-flex is-flex-direction-column is-align-items-center is-justify-content-center"
  >
    <form @submit.prevent class="card">
      <div class="card-content">
        <div class="content">
          <div id="head">
            <h1 class="display-1">Willkommen</h1>
            <p class="lead">Kraftfahrzeuge</p>
          </div>

          <b-field label="Email">
            <b-input
              placeholder="you@email.com"
              v-model.trim="loginForm.email"
            ></b-input>
          </b-field>

          <b-field label="Kennwort">
            <b-input
              type="password"
              placeholder="*********"
              v-model.trim="loginForm.password"
            ></b-input>
          </b-field>

          <router-link to="/PasswordReset">Kennwort vergessen?</router-link>
        </div>
      </div>
      <footer class="card-footer">
        <router-link class="card-footer-item" to="/Register"
          >Konto erstellen</router-link
        >
        <a href="#" @click="login" class="card-footer-item">Anmelden</a>
      </footer>
    </form>

 

  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.loginForm.email,
        password: this.loginForm.password
      });
    }    
  }
};
</script>

<style lang="scss" scoped>
.is-flex.is-flex-direction-column {
  height: 100vh;
  width: 100vw;
}
.card {
  width: 100%;
  max-width: 600px;
}

form {
  input[type="button"] {
    background-color: #f20a1c;
    border-color: #e01223;
  }
}
</style>