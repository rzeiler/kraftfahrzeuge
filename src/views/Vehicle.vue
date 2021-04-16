<template>
  <form>
    {{ $route.params.id }}

    {{ vehicles.length }}
    <div v-if="vehicles.length">
      <div class="mb-3">
        <label for="title" class="form-label">Marke</label>
        <input
          type="title"
          class="form-control"
          id="title"
          placeholder="Skoda..."
          v-model.trim="vehicle.title"
        />
      </div>
      <div class="mb-3">
        <label for="mileage" class="form-label">Kilometerstand</label>
        <input
          type="number"
          class="form-control"
          id="mileage"
          placeholder="10312..."
          v-model.trim="vehicle.mileage"
        />
      </div>
      <div class="mb-3">
        <label for="nextcheck" class="form-label">HU / AU Termin</label>
        <input
          type="Date"
          class="form-control"
          id="nextcheck"
          defaultValue="01.01.2020"
          placeholder="12.2.2022..."
          v-model.trim="vehicle.nextcheck"
        />
      </div>
      <button type="button" @click="create()" class="btn btn-success">
        Speichern
      </button>

      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Löschen
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Achtung</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Soll das Fahrzeug wirklich gelöscht werden?  
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" @click="remove()">
                Löschen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { vehiclesCollection } from "@/firebase";
import { mapState, mapGetters } from "vuex";
import moment from "moment";
import Router from "vue-router";

export default {
  components: {},
  data() {
    return {
      vehicle: {
        title: null,
        mileage: null,
        nextcheck: null
      },
      showCommentModal: false,
      selectedPost: {},
      showPostModal: false,
      fullPost: {},
      postComments: []
    };
  },
  computed: {
    ...mapState(["vehicles"]),
    ...mapGetters(["getVehicleById"])
  },
  methods: {
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
          self.vehicle.title = null;
          self.vehicle.mileage = null;
          self.vehicle.nextcheck = null;
          self.$router.push({ path: "/" });
        });
    },
    update() {
      const self = this;
      this.$store
        .dispatch("updateVehicle", {
          title: this.vehicle.title,
          mileage: this.vehicle.mileage,
          nextcheck: moment(this.vehicle.nextcheck).toDate()
        })
        .then(
          function() {
            //self.$router.go("/");
            self.$router.push({ path: "dashboard" });
          },
          function(err) {
            console.log(err);
          }
        );
    },
    get: async function() {
      const vehicle = this.getVehicleById(this.$route.params.id);

      console.log(vehiclesCollection);

      if (vehicle) {
        const newObj = { ...vehicle };
        const nextcheck = { ...newObj.nextcheck };
        const date = new Date(nextcheck.seconds * 1000);

        this.vehicle.title = newObj.title;
        this.vehicle.mileage = newObj.mileage;
        this.vehicle.nextcheck = moment(date).format("YYYY-MM-DD");
      } else {
        //this.$refs.nextcheck.value = moment(new Date).format("YYYY-MM-DD");
      }
    }
  },
  filters: {},
  mounted() {
    this.get();
  }
};
</script>

<style lang="sass">
.bg
  background-color: unset !important
  color: unset !important
</style>

<style lang="scss" scoped>
</style>
