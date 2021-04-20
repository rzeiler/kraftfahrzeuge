<template>
  <div v-if="vehicle">
    <form v-if="!showModal">
      <label for="title" class="form-label">Marke</label>
      <input
        type="title"
        class="form-control"
        id="title"
        placeholder="Skoda..."
        v-model.trim="vehicle.title"
      />

      <label for="mileage" class="form-label">Kilometerstand</label>
      <input
        type="number"
        class="form-control"
        id="mileage"
        placeholder="10312..."
        v-model.trim="vehicle.mileage"
      />

      <label for="nextcheck" class="form-label">HU / AU Termin</label>
      <input
        type="Date"
        class="form-control"
        id="nextcheck"
        defaultValue="01.01.2020"
        placeholder="12.2.2022..."
        v-model.trim="vehicle.nextcheck"
      />

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
import { vehiclesCollection } from "@/firebase";
import { mapState, mapGetters } from "vuex";

import moment from "moment";
import Router from "vue-router";

const defaultDate = {
  title: null,
  mileage: null,
  nextcheck: null,
  uid: null,
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
            oil: []
          };
        } else {
          return defaultDate;
        }
      } else {
        return defaultDate;
      }
    }
  },
  methods: {
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

<style lang="sass">
.bg
  background-color: unset !important
  color: unset !important
</style>

<style lang="scss" scoped>
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
