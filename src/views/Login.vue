<template>
  <div class="d-flex vh-100 overflow-hidden">
    <!--justify-content-center align-items-center-->

    <div :class="{ 'signup-form': !showLoginForm }" class="vh-100 w-100 p-3">
      <form
        v-if="showLoginForm"
        @submit.prevent
        class="d-flex flex-column h-100 animate__animated animate__backInDown"
      >
        <div
          class="flex-fill text-center d-flex flex-column justify-content-center align-items-center"
        >
          <h1 class="display-1">Willkommen</h1>
          <p class="lead">Kraftfahrzeuge</p>
        </div>
        <div>
          <div>
            <label for="email1" class="form-label">Email</label>
            <input
              v-model.trim="loginForm.email"
              type="text"
              :class="formControl"
              placeholder="you@email.com"
              id="email1"
            />
          </div>
          <div>
            <label for="password1" class="form-label">Password</label>
            <input
              v-model.trim="loginForm.password"
              type="password"
              :class="formControl"
              placeholder="******"
              id="password1"
            />
            <div class="text-end">
              <a class="form-text" @click="togglePasswordReset()"
                >Kennwort vergessen?</a
              >
            </div>
          </div>
        </div>
        <div class="flex-fill d-flex align-items-center">
          <button @click="login()" class="mt-2 mb-2 p-3 btn btn-success w-100">
            Anmelden
          </button>
        </div>
        <div class="p-3 text-center">
          <a @click="toggleForm()" class="btn btn-flat"
            >Konto erstellen</a
          >
        </div>
      </form>
      <form
        v-else
        @submit.prevent
        class="d-flex flex-column h-100 animate__animated animate__backInUp"
      >
        <div class="flex-fill">
          <button
            type="button"
            @click="toggleForm()"
            title="Zurück zum Login"
            class="btn-close"
            aria-label="Close"
          ></button>
        </div>

        <h1>Konto</h1>
        <div>
          <label for="name" class="form-label">Name</label>
          <input
            v-model.trim="signupForm.name"
            type="text"
            :class="formControl"
            placeholder="Woodhead Apps"
            id="name"
          />
        </div>
        <div>
          <label for="title" class="form-label">Titel</label>
          <input
            v-model.trim="signupForm.title"
            type="text"
            :class="formControl"
            placeholder="R.Z."
            id="title"
          />
        </div>
        <div>
          <label for="email2" class="form-label">Email</label>
          <input
            v-model.trim="signupForm.email"
            type="text"
            :class="formControl"
            placeholder="you@email.com"
            id="email2"
            value="hello@hello.com"
          />
        </div>
        <div>
          <label for="password2" class="form-label">Kennwort</label>
          <input
            v-model.trim="signupForm.password"
            type="password"
            :class="formControl"
            placeholder="min 6 characters"
            id="password2"
          />
        </div>
        <div class="flex-fill d-flex align-items-center">
          <button @click="signup()" class="mt-2 mb-2 p-3 btn btn-success w-100">
            Registrieren
          </button>
        </div>
        <div v-if="error" class="alert alert-danger alert-dismissible animate__animated animate__bounceIn " role="alert">
          {{error}}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </form>
    </div>

    <PasswordReset
      v-if="showPasswordReset"
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
      formControl:
        "form-control form-control-lg",
      loginForm: {
        email: "",
        password: ""
      },
      signupForm: {
        name: "",
        title: "",
        email: "",
        password: ""
      },
      showLoginForm: true,
      showPasswordReset: true
    };
  },
  computed: {
    ...mapState(["error"]),
  },
  methods: {
    toggleForm() {
      this.showLoginForm = !this.showLoginForm;
    },
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset;
    },
    login() {
      this.$store.dispatch("login", {
        email: this.loginForm.email,
        password: this.loginForm.password
      });
    },
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

<style lang="sass">
::host
  background-color: #1B202C !important;
  color: #C8C9CC !important;
</style>

<style lang="sass" scoped>

#app
  background-color: #1B202C !important;
  color: #C8C9CC !important;

div.d-flex.vh-100
  transition: 0.15s

::placeholder
  color: #515358
  opacity: 1
</style>