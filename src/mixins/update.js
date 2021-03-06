export default {
  data() {
    return {
      // refresh variables
      refreshing: false,
      registration: null,
      updateExists: false,
    };
  },

  created() {
    // setTimeout(() => {
    //   this.updateAvailable({ detail: null });
    // }, 2000);

    // Listen for our custom event from the SW registration
    document.addEventListener("swUpdated", this.updateAvailable, {
      once: true,
    });

    // Prevent multiple refreshes
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      console.log("created addEventListener on controllerchange");
      if (this.refreshing) return;
      this.refreshing = true;
      // Here the actual reload of the page occurs
      window.location.reload();
    });
  },

  methods: {
    // Store the SW registration so we can send it a message
    // We use `updateExists` to control whatever alert, toast, dialog, etc we want to use
    // To alert the user there is an update they need to refresh for
    updateAvailable(event) {
      this.registration = event.detail;
      this.updateExists = true;
      const self = this;
      this.$buefy.snackbar.open({
        message: "Es gibt Neuigkeiten!",
        type: "is-danger",
        duration: 10000,
        actionText: "Anwendung neu laden.",
        position: "is-bottom",
        indefinite: true,
        onAction: () => {
          self.refreshApp();
          this.$buefy.toast.open({
            message: "Anwendung wird neu geladen...",
            queue: false,
          });
        },
      });
    },

    // Called when the user accepts the update
    refreshApp() {
      console.log("methods refreshApp");
      this.updateExists = false;
      // Make sure we only send a 'skip waiting' message if the SW is waiting
      if (!this.registration || !this.registration.waiting) return;
      // send message to SW to skip the waiting and activate the new SW
      this.registration.waiting.postMessage({ type: "SKIP_WAITING" });
    },
  },
};
