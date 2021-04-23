<template>
  <form @submit.prevent>
    <router-link class="close" to="/Login">&#x2715;</router-link>
    <div id="head">
      <h1>Konto</h1>
    </div>

    <label for="name" class="form-label">Name</label>
    <input
      v-model.trim="signupForm.name"
      type="text"
      placeholder="Woodhead Apps"
      id="name"
    />

    <label for="title" class="form-label">Titel</label>
    <input
      v-model.trim="signupForm.title"
      type="text"
      placeholder="R.Z."
      id="title"
    />

    <label for="email2" class="form-label">Email</label>
    <input
      v-model.trim="signupForm.email"
      type="text"
      placeholder="you@email.com"
      id="email2"
      value="hello@hello.com"
    />

    <label for="password2" class="form-label">Kennwort</label>
    <input
      v-model.trim="signupForm.password"
      type="password"
      placeholder="min 6 characters"
      id="password2"
    />
    <div class="spacer"></div>
    <div id="footer">
      <input type="button" value="Registrieren" @click="signup()" />
    </div>
    <div
      v-if="error"
      class="alert alert-danger alert-dismissible animate__animated animate__bounceIn"
      role="alert"
    >
      {{ error }}
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {},
  data() {
    return {
      signupForm: {
        name: "",
        title: "",
        email: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapState(["error"])
  },
  methods: {
    signup() {
      this.$store.dispatch("signup", {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        title: this.signupForm.title
      });
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  height: 100%;

  input[type="button"] {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
}
</style>