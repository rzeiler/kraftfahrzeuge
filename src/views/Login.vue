<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <PasswordReset
      v-if="showPasswordReset"
      @close="togglePasswordReset()"
    ></PasswordReset>

    <div :class="{ 'signup-form': !showLoginForm }" class="col-lg">
      <form v-if="showLoginForm" @submit.prevent>
        <h1>Welcome Back</h1>
        <div>
          <label for="email1" class="form-label">Email</label>
          <input
            v-model.trim="loginForm.email"
            type="text"
            class="form-control"
            placeholder="you@email.com"
            id="email1"
          />
        </div>
        <div>
          <label for="password1" class="form-label">Password</label>
          <input
            v-model.trim="loginForm.password"
            type="password"
            class="form-control"
            placeholder="******"
            id="password1"
          />
        </div>
        <button @click="login()" class="mt-2 mb-2 btn btn-primary w-100">Anmelden</button>
        <div class="extras">
          <a @click="togglePasswordReset()">Forgot Password</a>
          <a @click="toggleForm()">Create an Account</a>
        </div>
      </form>
      <form v-else @submit.prevent>
        <h1>Get Started</h1>
        <div>
          <label for="name" class="form-label">Name</label>
          <input
            v-model.trim="signupForm.name"
            type="text"
            class="form-control"
            placeholder="Savvy Apps"
            id="name"
          />
        </div>
        <div>
          <label for="title" class="form-label">Title</label>
          <input
            v-model.trim="signupForm.title"
            type="text"
            class="form-control"
            placeholder="Company"
            id="title"
          />
        </div>
        <div>
          <label for="email2" class="form-label">Email</label>
          <input
            v-model.trim="signupForm.email"
            type="text"
            class="form-control"
            placeholder="you@email.com"
            id="email2"
          />
        </div>
        <div>
          <label for="password2" class="form-label">Password</label>
          <input
            v-model.trim="signupForm.password"
            type="password"
            class="form-control"
            placeholder="min 6 characters"
            id="password2"
          />
        </div>
        <button @click="signup()" class="btn" >Sign Up</button>
        <div class="extras">
          <a @click="toggleForm()">Back to Log In</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import PasswordReset from "@/components/PasswordReset";

  export default {
    components: {
      PasswordReset,
    },
    data() {
      return {
        loginForm: {
          email: "",
          password: "",
        },
        signupForm: {
          name: "",
          title: "",
          email: "",
          password: "",
        },
        showLoginForm: true,
        showPasswordReset: false,
      };
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
          password: this.loginForm.password,
        });
      },
      signup() {
        this.$store.dispatch("signup", {
          email: this.signupForm.email,
          password: this.signupForm.password,
          name: this.signupForm.name,
          title: this.signupForm.title,
        });
      },
    },
  };
</script>
