<template>
  <div v-if="vehicle" id="vehicle">
    <form v-if="!showModal">
      <div class="image" v-on:click="changeImage" v-bind:style="background">
        <svg x="0px" y="0px" viewBox="0 0 117.74 122.88">
          <g>
            <path
              d="M94.62,2c-1.46-1.36-3.14-2.09-5.02-1.99c-1.88,0-3.56,0.73-4.92,2.2L73.59,13.72l31.07,30.03l11.19-11.72 c1.36-1.36,1.88-3.14,1.88-5.02s-0.73-3.66-2.09-4.92L94.62,2L94.62,2L94.62,2z M41.44,109.58c-4.08,1.36-8.26,2.62-12.35,3.98 c-4.08,1.36-8.16,2.72-12.35,4.08c-9.73,3.14-15.07,4.92-16.22,5.23c-1.15,0.31-0.42-4.18,1.99-13.6l7.74-29.61l0.64-0.66 l30.56,30.56L41.44,109.58L41.44,109.58L41.44,109.58z M22.2,67.25l42.99-44.82l31.07,29.92L52.75,97.8L22.2,67.25L22.2,67.25z"
            />
          </g>
        </svg>
        <input
          type="file"
          ref="image"
          accept="image/*"
          v-on:change="previewFile"
        />
      </div>

      <label for="title" class="form-label">Marke</label>
      <input
        type="text"
        id="title"
        placeholder="Skoda..."
        v-model.trim="vehicle.title"
      />

      <label for="mileage" class="form-label">Kilometerstand</label>
      <input
        type="number"
        id="mileage"
        placeholder="10312..."
        v-model.trim="vehicle.mileage"
      />

      <label for="nextcheck" class="form-label">HU / AU Termin</label>
      <input
        type="Date"
        id="nextcheck"
        defaultValue="01.01.2020"
        placeholder="12.2.2022..."
        v-model.trim="vehicle.nextcheck"
      />
      <div class="spacer"></div>

      <button
        v-if="vehicle.uid"
        type="button"
        @click="update()"
        class="btn btn-success"
      >
        Ändern
      </button>
      <button v-else type="button" @click="create()" class="btn btn-success">
        Hinzufügen
      </button>

      <button
        v-if="vehicle.uid"
        v-on:click="confirmDelete"
        type="button"
        class="btn btn-primary"
      >
        Löschen
      </button>
    </form>

    <div
      v-if="showModal"
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <h1>Achtung</h1>
      <h2>Soll das Fahrzeug wirklich gelöscht werden?</h2>

      <button
        type="button"
        class="btn btn-secondary"
        v-on:click="confirmDelete"
      >
        Abbrechen
      </button>
      <button type="button" class="btn btn-primary" @click="remove()">
        Löschen
      </button>
    </div>
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
      showModal: false
    };
  },
  computed: {
    vehicle() {
      const id = this.$route.params.id;
      if (id != "new") {
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
      const bi = { 'background-image': `url('${this.vehicle.image}')` };
      return bi;
    },
  },
  methods: {
    changeImage() {
      this.$refs.image.click();
    },
    confirmDelete() {
      this.showModal = !this.showModal;
    },
    remove() {
      const self = this;
      this.$store
        .dispatch("removeVehicle", {
          key: this.$route.params.id
        })
        .then(function() {
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

      const storageRef = vehicleImages.ref(`vehicleImages/${auth.currentUser.uid}/${this.$route.params.id}`).put(file);
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
            console.log( "url",url);
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
  mounted() {},
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
#vehicle {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  box-sizing: content-box;

  form {
    flex-grow: 1;
    padding: 20px;
    .image {
      display: flex;
      min-height: 30%;
      background-image: url("../assets/bmw.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      color: #fff;
      justify-content: center;
      align-items: center;
      svg {
        height: 50px;
        path {
          fill: #fff;
        }
      }
      input {
        display: none;
      }
    }
    .spacer {
      flex-grow: 1;
    }
  }
}

button {
  color: #fff;
  background-color: #0d6efd;
  border: 1px solid #0d6efd;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;

  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;

  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
}
</style>
