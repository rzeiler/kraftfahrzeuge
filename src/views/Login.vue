<template>
  <div class="login">
    <!--justify-content-center align-items-center-->

    <form v-if="!showPasswordReset" @submit.prevent>
      <div id="head">
        <h1 class="display-1">Willkommen</h1>
        <p class="lead">Kraftfahrzeuge</p>
      </div>
      <label for="email1" class="form-label">Email</label>
      <input
        v-model.trim="loginForm.email"
        type="text"
        placeholder="you@email.com"
        id="email1"
      />

      <label for="password1" class="form-label">Password</label>
      <input
        v-model.trim="loginForm.password"
        type="password"
        placeholder="******"
        id="password1"
      />
      <div class="text-end">
        <a class="form-text" @click="togglePasswordReset()"
          >Kennwort vergessen?</a
        >
      </div>
      <div class="spacer"></div>
      <div id="footer">
        <input type="button" value="Anmelden" @click="login()" />
        <router-link class="flat" to="/Register">Konto erstellen</router-link>
      </div>
    </form>
    <PasswordReset v-else
      @close="togglePasswordReset()"
    ></PasswordReset>
  </div>
</template>

<script>
import PasswordReset from "@/components/PasswordReset";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    PasswordReset
  },
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      },
      showPasswordReset: false
    };
  },
  computed: {
    ...mapState(["error"])
  },
  methods: {
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset;
    },
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
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 30px;
}

form {
  width: 100%;
  height: 100%;

  input {
    background-color: #f0f0f0;
  }

  input[type="button"] {
    color: #fff;
    background-color: #F20A1C;
    border-color: #e01223;
  }
}


</style>