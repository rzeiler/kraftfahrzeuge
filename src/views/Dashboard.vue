<template>
  <div id="dashboard">
    <div class="container is-max-desktop">
      <SiteNav>
        <template v-slot:start>
          <b-navbar-item tag="div">
            <b-icon icon="menu" />
          </b-navbar-item>
          <b-navbar-item tag="router-link" to="/vehicle/new">
            <b-icon icon="plus" />
          </b-navbar-item>
        </template>
        <template v-slot:end>
          <b-field>
            <b-input
              placeholder="Search..."
              type="search"
              icon="magnify"
              icon-clickable
              @icon-click="searchIconClick"
            >
            </b-input>
          </b-field>
          <b-navbar-item tag="a">
            <b-icon icon="magnify" />
          </b-navbar-item>
          <b-navbar-item tag="a" @click="logout">
            <b-icon icon="logout" />
          </b-navbar-item>
        </template>
      </SiteNav>
      <h1 class="title is-2">Fahrzeuge</h1>

      <div v-if="vehicles.length">
        <b-tabs expanded v-model="tabs">
          <b-tab-item
            v-for="item in itmes"
            :key="item.value"
            :label="item.title"
          >
          </b-tab-item>
        </b-tabs>

        <b-carousel-list
          class="mb-6"
          :data="carouselData"
          :autoplay="false"
          :items-to-show="2"
        >
          <template #item="item">
            <div
              class="card m-2"
              :style="cardBackground(item.image)"
              @click="onClicked(item.id)"
            >
              <div class="card-content">
                <div
                  class="content is-flex is-flex-direction-column is-justify-content-flex-end"
                >
                  <p>{{ item.title }}</p>
                  <p>{{ item.mileage }}</p>
                  <b-progress
                    type="is-danger"
                    :value="progressValue(item.nextcheck)"
                  />
                </div>
              </div>
            </div>
          </template>
        </b-carousel-list>
      </div>

      <p v-else class="no-results">Keine Fahrzeuge</p>

      <div class="is-flex is-justify-content-space-evenly">
        <b-dropdown aria-role="list" v-for="e in events" :key="e.id">
          <template #trigger="{}">
            <b-button
              class="is-flex-direction-column is-align-content-center p-1"
              :label="e.title"
              type="is-light"
              :icon-left="e.icon"
            />
          </template>
          <b-dropdown-item custom class="has-background-dark has-text-primary-light">Fahrzeug wählen</b-dropdown-item>
          <b-dropdown-item
            aria-role="listitem"
            v-for="v in vehicles"
            :key="v.id"
            :value="v.id"
            @click="onMenuItemSelected(e, v)"
            >{{ v.title }}</b-dropdown-item
          >
        </b-dropdown>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.button {
  height: unset !important;
  .icon {
    margin: 0px !important;
  }
  width: 100px !important;

  overflow: hidden;
}
.carousel-list {
  &.has-shadow {
    box-shadow: unset !important;
  }
}
.b-tabs .tab-content {
  height: 0px !important;
  overflow: hidden !important;
  padding: 0px !important;
}
.card {
  background-size: cover;
  background-repeat: no-repeat;

  .card-content {
    padding: 1rem;
    .content {
      height: 200px;
    }

    color: #fff;
  }
}
</style>

<script>
import { mapState } from "vuex";
import moment from "moment";

export default {
  components: {},
  data() {
    return {
      itmes: [
        { value: "Pkw", title: "Pkw", selected: false },
        { value: "Krad", title: "Krad", selected: false },
        { value: "", title: "Alle", selected: true }
      ],
      vehicleList: [],
      tabs: 2
    };
  },
  computed: {
    ...mapState(["userProfile", "events", "vehicles"]),
    showNav() {
      return Object.keys(this.userProfile).length > 1;
    },
    carouselData() {
      return this.filterVehicles(this.itmes[this.tabs].value);
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    filterVehicles(val) {
      return this.vehicles.filter(
        item => item.category.toLowerCase().indexOf(val.toLowerCase()) != -1
      );
    },
    cardBackground(src) {
      const bi = { "background-image": `url('${src}')` };
      return bi;
    },
    progressValue(chack) {
      let date = moment(chack);
      let curdate = moment(undefined);
      let diff = date.diff(curdate, "days");
      return 100 - (diff / 730) * 100 - 1;
    },
    searchIconClick() {
      alert("You wanna make a search?");
    },
    onClicked(id) {
      this.$router.push(`/vehicle/${id}`);
    },
    onAdd() {
      this.$router.push("/vehicle/new");
    },
    onMenuItemSelected(e, v) {
      this.$router.push(`/event/${v.id}/${e.id}`);
    },
    onMenuClosed() {
      this.vehicleList = [];
    },
    onActionSelected(item) {
      this.getVehicles.forEach((value, index) => {
        this.vehicleList.push({
          id: value.id,
          title: value.title,
          params: { id: value.id, event: item.id }
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


