<template>
  <div v-if="vehicle" id="vehicle" class="d-flex flex-column vh-100">
    <SiteNav>
      <template v-slot:start>
        <b-navbar-item tag="router-link" to="/">
          <b-icon icon="chevron-left" />
        </b-navbar-item>
        <b-navbar-item tag="div">
          {{ pageTitle }}
        </b-navbar-item>
      </template>

      <template v-slot:end>
        <b-navbar-item tag="a" @click="update" v-if="vehicle.uid">
          <b-icon icon="check" />
        </b-navbar-item>
        <b-navbar-item tag="a" @click="create" v-else>
          <b-icon icon="check" />
        </b-navbar-item>
        <b-navbar-item tag="a" @click="confirmDelete">
          <b-icon icon="delete" />
        </b-navbar-item>
      </template>
    </SiteNav>
    
    <m-icon name="close" v-on:click.native="close" />

    <form class="d-flex flex-column p-2 h-100">
      <div class="image" v-on:click="changeImage" v-bind:style="background">
        <input
          type="file"
          ref="image"
          accept="image/*"
          v-on:change="previewFile"
        />
      </div>

      <label for="title" class="form-label">Marke</label>
      <input
        class="form-control"
        type="text"
        id="title"
        placeholder="Skoda..."
        v-model="vehicle.title"
        @input="updateValue(vehicle)"
        @keyup="updateValue(this)"
      />

      <label for="mileage" class="form-label">Kilometerstand</label>
      <input
        class="form-control"
        type="number"
        id="mileage"
        placeholder="10312..."
        v-model.trim="vehicle.mileage"
        @input="updateValue(vehicle)"
      />

      <label for="nextcheck" class="form-label">HU / AU Termin</label>
      <input
        class="form-control"
        type="Date"
        id="nextcheck"
        defaultValue="01.01.2020"
        placeholder="12.2.2022..."
        v-model.trim="vehicle.nextcheck"
        @input="updateValue(vehicle)"
      />
      <div class="flex-fill"></div>
    </form>
  </div>
</template>

<script>
import { vehicleImages, auth } from "@/firebase";

import moment from "moment";

const defaultDate = {
  title: null,
  mileage: null,
  nextcheck: null,
  uid: null,
  image: null,
  oil: []
};

export default {
  components: {},
  data() {
    return {
      event: null,
      pageTitle: "Fahrzeug anlegen",
      showModal: false,
      hasChange: true
    };
  },
  computed: {
    vehicle() {
      const id = this.$route.params.id;
      if (id != "new") {
        this.$nextTick(() => {
          this.pageTitle = "Fahrzeug bearbeiten";
        });
        const data = this.$store.state.vehicles.find(
          v => v.id === this.$route.params.id
        );
        if (data) {
          const date = new Date(data.nextcheck.seconds * 1000);

          return {
            title: data.title,
            mileage: data.mileage,
            nextcheck: moment(date).format("YYYY-MM-DD"),
            uid: data.uid,
            image: data.image,
            oil: []
          };
        } else {
          return defaultDate;
        }
      } else {
        return defaultDate;
      }
    },
    background() {
      const bi = { "background-image": `url('${this.vehicle.image}')` };
      return bi;
    }
  },

  methods: {
    confirmDelete() {
      this.$buefy.dialog.confirm({
        title: "Achtung",
        message: "Soll das Fahrzeug wirklich gelöscht werden?",
        confirmText: "Ja",
        cancelText: "Abbrechen",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => this.$buefy.toast.open("Account deleted!")
      });
    },

    updateValue(e) {
      this.hasChange = false;
      console.log("updateValue", e);
    },
    onCloseClick() {
      this.$router.push({ path: "/" });
    },
    changeImage() {
      this.$refs.image.click();
    },
    remove() {
      const self = this;
      this.$store
        .dispatch("removeVehicle", {
          key: this.$route.params.id
        })
        .then(function() {
          self.modal.hide();
          self.$router.push({ path: "/" });
        });
    },
    create() {
      const self = this;
      this.$store
        .dispatch("createVehicle", {
          title: this.vehicle.title,
          mileage: this.vehicle.mileage,
          nextcheck: moment(this.vehicle.nextcheck).toDate()
        })
        .then(function() {
          self.$router.push({ path: "/" });
        });
    },
    update() {
      const self = this;
      this.$store
        .dispatch("updateVehicle", {
          key: this.$route.params.id,
          title: this.vehicle.title,
          mileage: this.vehicle.mileage,
          nextcheck: moment(this.vehicle.nextcheck).toDate()
        })
        .then(
          function() {
            self.$router.push({ path: "/" });
          },
          function(err) {
            console.log(err);
          }
        );
    },
    previewFile(ev) {
      const file = ev.target.files[0];

      const storageRef = vehicleImages
        .ref(`vehicleImages/${auth.currentUser.uid}/${this.$route.params.id}`)
        .put(file);
      storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          console.log(error.message);
        },
        () => {
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            console.log("url", url);
          });
        }
      );
    },
    createImage(e) {
      console.log(e);
    },
    fileReaderLoaded(arg) {
      const src_image = new Image();
      src_image.onload = function() {};
      src_image.src = this.result;
    }
  },
  mounted() {
    if (this.$route.params.event) {
      this.event = this.$route.params.event;
    }
  },
  destroyed() {
    const body = document.body;
    body.style.backgroundImage = "unset";
    body.style.backdropFilter = "unset";
  },
  filters: {
    json(val) {
      return JSON.stringify(val);
    },
    formatDate(val) {
      if (!val) {
        return "-";
      }
      moment.locale("de");
      let date = val.toDate();
      return moment(date).format("MM.YYYY");
    }
  }
};
</script>

 

<style lang="scss" scoped>
.nav {
  div {
    border-right: 1px solid red;
  }
}
</style>
