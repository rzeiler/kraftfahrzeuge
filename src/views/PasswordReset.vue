<template>
  <div id="reset" class="container">
    <SiteNav>
      <template v-slot:end>
        <b-navbar-item tag="router-link" to="/">
          <b-icon icon="close" />
        </b-navbar-item>
      </template>
    </SiteNav>

    <p>
      <b-field label="Kennwort ">
        <b-input
          type="email"
          placeholder="you@email.com"
          v-model.trim="email"
        ></b-input>
      </b-field>
      <b-notification
        type="is-danger"
        v-model="error.active"
        aria-close-label="Schließen"
      >
        {{ error.msg }}
      </b-notification>

      <b-notification :closable="false">
        Geben Sie Ihre E-Mail-Adresse ein, um Ihr Kennwort zurückzusetzen
      </b-notification>

      <b-button type="is-dark" @click="resetPassword()">
        Zurückzusetzen
      </b-button>
    </p>
  </div>
</template>

<script>
import { auth } from "@/firebase";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["error"])
  },
  data() {
    return {
      email: "jo@ddd.sasasdse"
    };
  },
  methods: {
    async resetPassword() {
      try {
        await auth.sendPasswordResetEmail(this.email);
        this.$buefy.snackbar.open({
          message: "Ihnen wurde ein Kennwort zugesendet.",
          type: "is-success",
          duration: 10000,
          actionText: "Verstanden",
          position: "is-bottom"
        });
      } catch (err) {
        this.$store.commit("setError", err.message);
      }
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
#reset {
  padding: 20px;
}
</style>