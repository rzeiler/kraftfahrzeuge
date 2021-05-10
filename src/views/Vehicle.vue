<template>
  <div v-if="vehicle" class="container">
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

    <b-field label="Marke">
      <b-input placeholder="Skoda" v-model="vehicle.title"></b-input>
    </b-field>

    <b-field label="Kilometerstand">
      <b-numberinput
        :step="100"
        placeholder="10312"
        v-model="vehicle.mileage"
      ></b-numberinput>
    </b-field>

    <b-field label="Nächster HU / AU Termin">
      <b-datepicker
        :first-day-of-week="1"
        icon="calendar-today"
        locale="de-DE"
        v-model="vehicle.nextcheck"
        editable
      >
      </b-datepicker>
    </b-field>

    <b-field class="file">
      <b-upload accept="image/*" v-model="file" name="image" expanded>
        <a class="button is-primary is-fullwidth">
          <b-icon icon="upload"></b-icon>
          <span>{{ file.name || "Bild zum Fahrzeug" }}</span>
        </a>
      </b-upload>
    </b-field>
  </div>
</template>

<script>
import { vehicleImages, auth } from "@/firebase";
import { mapState } from "vuex";
import moment from "moment";

const defaultDate = {
  title: null,
  mileage: null,
  nextcheck: new Date(),
  uid: null,
  image: null,
  base64: null,
  oil: [],
};

export default {
  components: {},
  data() {
    return {
      file: {},
      event: null,
      pageTitle: "Fahrzeug anlegen",
    };
  },
  watch: {
    file: function (o) {
      var reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        this.vehicle.base64 = data.substring(data.indexOf(",") + 1);
      };
      reader.readAsDataURL(o);
    },
  },
  computed: {
    ...mapState(["userProfile", "vehicles"]),
    vehicle() {
      const id = this.$route.params.id;
      if (id != "new") {
        this.$nextTick(() => {
          this.pageTitle = "Fahrzeug bearbeiten";
        });
        const data = this.$store.state.vehicles.find(
          (v) => v.id === this.$route.params.id
        );
        if (data) {
          return {
            title: data.title,
            mileage: parseInt(data.mileage),
            nextcheck: data.nextcheck,
            uid: data.uid,
            image: data.image,
            base64: null,
            oil: [],
          };
        } else {
          return defaultDate;
        }
      } else {
        return defaultDate;
      }
    },
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
        onConfirm: () => this.$buefy.toast.open("Account deleted!"),
      });
    },

    remove() {
      const self = this;
      this.$store
        .dispatch("removeVehicle", {
          key: this.$route.params.id,
        })
        .then(function () {
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
          nextcheck: moment(this.vehicle.nextcheck).toDate(),
          category: "",
        })
        .then(function () {
          console.log(this.vehicle.base64);
          if (this.vehicle.base64) {
            this.$store
              .dispatch("saveImage", {
                key: this.$route.params.id,
                base64: this.vehicle.base64,
              })
              .then(() => {
                self.$router.push({ path: "/" });
              });
          } else {
            self.$router.push({ path: "/" });
          }
        });
    },
    update() {
      const self = this;
      this.$store
        .dispatch("updateVehicle", {
          key: this.$route.params.id,
          title: this.vehicle.title,
          mileage: this.vehicle.mileage,
          nextcheck: moment(this.vehicle.nextcheck).toDate(),
        })
        .then(() => {
          console.log(this.vehicle.base64);
          if (this.vehicle.base64) {
            this.$store
              .dispatch("saveImage", {
                key: this.$route.params.id,
                base64: this.vehicle.base64,
              })
              .then(() => {
                self.$router.push({ path: "/" });
              });
          } else {
            self.$router.push({ path: "/" });
          }
        });
    },
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
    },
  },
};
</script>

 

<style lang="scss" scoped>
</style>
