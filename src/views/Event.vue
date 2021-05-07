<template>
  <div>
    {{ event }}
  </div>
</template>

<script>
import { auth } from "@/firebase";
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
      showModal: false,
      event: null
    };
  },
  computed: {},
  methods: {
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
  mounted() {
    //this.$route.params.id
    //this.$route.params.event
  },
  destroyed() {},
  filters: {
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
  form {
    flex-grow: 1;
    padding: 20px;
    color: #303030;
    input {
      background-color: #f0f0f0;
      border: 1px solid #a0a0a0;
    }

    .image {
      display: flex;
      min-height: 30%;
      //background-image: url("../assets/bmw.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      color: #fff;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
      border-radius: 0.5rem;
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

.close {
  padding: 20px;
  color: black;
}
</style>
