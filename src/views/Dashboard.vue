<template>
  <div id="dashboard">
    <div class="container">
      <SiteNav v-on:add="onAdd"></SiteNav>
      <h1>Fahrzeuge</h1>
      <m-tabs
        :selectable="true"
        v-on:selected="onSelected"
        :items="itmes"
      ></m-tabs>
    </div>
    <m-list
      v-if="vehicles.length"
      @clicked="onClicked"
      :data="getVehicles"
    ></m-list>

    <p v-else class="no-results">There are currently no posts</p>
    <div class="container">
      <m-tabs
        v-if="events.length"
        v-on:selected="onActionSelected"
        :items="events"
        class="small"
      ></m-tabs>
    </div>

    <Select :show="vehicleList.length > 0" :items="vehicleList" title="Fahrzeug wählen" @close="vehicleList = []" @select="onMenuItemSelected" >
    
    </Select>
  </div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
import Select from "@/components/Select";
import SiteNav from "@/components/SiteNav";

export default {
  components: {
    SiteNav,
    Select
  },
  data() {
    return {
      itmes: [
        { value: "Pkw", title: "Pkw", selected: false },
        { value: "Krad", title: "Krad", selected: false },
        { value: "", title: "Alle", selected: true }
      ],
      vehicleList: [],
      selectedType: "Alle"
    };
  },
  computed: {
    ...mapState(["userProfile", "events", "vehicles"]),
    showNav() {
      return Object.keys(this.userProfile).length > 1;
    },
    getVehicles() {
      if (this.selectedType != "Alle") {
        return this.vehicles.filter(item => {
          return (
            item.category
              .toLowerCase()
              .indexOf(this.selectedType.toLowerCase()) > -1
          );
        });
      } else {
        return this.vehicles;
      }
    }
  },
  methods: {
    onClicked(kex) {
      this.$router.push(`/vehicle/${kex}`);
    },
    onAdd() {
      this.$router.push("/vehicle/new");
    },
    onMenuItemSelected(params) {
      this.vehicleList = [];
      this.$router.push(`/event/${params.id}/${params.event}`);
    },
    onSelected(item) {
      this.selectedType = item.value;
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
    },
    edit(vehicle, event) {
      const rect = event.target.getBoundingClientRect();
      console.log(rect.top);
      this.styleVehicle = {
        position: "absolute",
        top: `${rect.top}px`,
        left: `${rect.left}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        margin: 0
      };
      this.vehicle = vehicle;
      this.styleVehicle = {
        position: "absolute",
        margin: 0,
        marginTop: `${-rect.top}px`,
        marginLeft: `${-rect.left}px`,
        width: `100vw`,
        height: `100vh`
      };
    },
    createVehicle() {
      this.modal.display = "block";
    },

    last(arr) {
      return arr[arr.length - 1];
    },

    toggleCommentModal(post) {
      this.showCommentModal = !this.showCommentModal;

      // if opening modal set selectedPost, else clear
      if (this.showCommentModal) {
        this.selectedPost = post;
      } else {
        this.selectedPost = {};
      }
    },
    async viewPost(post) {
      this.fullPost = post;
      this.showPostModal = true;
    },
    closePostModal() {
      this.postComments = [];
      this.showPostModal = false;
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

<style lang="scss" >
#dashboard {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  box-sizing: content-box;
}
.tab-group.small {
  justify-content: space-between;
  .tab-item {
    width: 50px;
    height: 50px;
    background-color: #e0e0e0;
    margin: 10px;
    flex-grow: unset;
    border-radius: 10px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
  }
}
</style>
