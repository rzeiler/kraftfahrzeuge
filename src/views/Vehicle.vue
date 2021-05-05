<template>
  <div v-if="vehicle" id="vehicle" class="d-flex flex-column vh-100">
    <m-page-head :title="pageHeadTitle" @close="onCloseClick">
      <m-icon name="delete" v-if="vehicle.uid" v-on:click.native="confirmDelete" />
      <m-icon name="done" :disable="hasChange" v-if="vehicle.uid" v-on:click.native="update" />
      <m-icon name="done" :disable="hasChange" v-else v-on:click.native="create" />
    </m-page-head>

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

    <!-- Modal -->
    <Modal :show="showModal">
      <template v-slot:title>
        <h5 class="modal-title">Achtung</h5>
        <m-icon
          name="close"
          class="btn-close"
          v-on:click.native="showModal = false"
        />
      </template>
      Soll das Fahrzeug wirklich gelöscht werden?
      <template v-slot:footer>
        <button type="button" class="btn btn-danger" @click="remove()">
          Löschen
        </button>
      </template>
    </Modal>
  </div>
</template>

<script>
import { vehicleImages, auth } from "@/firebase";
import Modal from "@/components/Modal";
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
  components: { Modal },
  data() {
    return {
      event: null,
      pageHeadTitle: "Fahrzeug anlegen",
      showModal: false,
      hasChange:true
    };
  },
  computed: {
    vehicle() {
      const id = this.$route.params.id;
      if (id != "new") {
        this.$nextTick(() => {
          this.pageHeadTitle = "Fahrzeug bearbeiten";
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
    confirmDelete() {
      this.showModal = true;
      console.log("this.showModal", this.showModal);
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
