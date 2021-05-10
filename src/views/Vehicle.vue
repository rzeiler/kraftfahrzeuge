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
      file: {},
      event: null,
      pageTitle: "Fahrzeug anlegen",
      showModal: false,
      hasChange: true
    };
  },
  watch: {
    file: function(o) {
      var reader = new FileReader();
      reader.onload = e => {
        //data:image/jpeg;base64,
        const data = e.target.result;
        this.vehicle.base64 = data.substring(data.indexOf(",") + 1);
      };
      reader.readAsDataURL(o);
    }
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
            mileage: parseInt(data.mileage),
            nextcheck: moment(date).toDate(),
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
        .dispatch("createVehicle", 
          {
            title: this.vehicle.title,
            mileage: this.vehicle.mileage,
            nextcheck: moment(this.vehicle.nextcheck).toDate(),
            category: ""
          })
        .then(function() {

          
          this.$store
            .dispatch("saveImage", {
              key: this.$route.params.id,
              base64: this.vehicle.base64
            })
            .then(() => {
              self.$router.push({ path: "/" });
            });
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
        .then(() => {
          this.$store
            .dispatch("saveImage", {
              key: this.$route.params.id,
              base64: this.vehicle.base64
            })
            .then(() => {
              self.$router.push({ path: "/" });
            });
        });
    }
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
</style>
