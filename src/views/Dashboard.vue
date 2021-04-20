<template>
  <div id="dashboard">
    <transition name="fade">
      <CommentModal
        v-if="showCommentModal"
        :post="selectedPost"
        @close="toggleCommentModal()"
      ></CommentModal>
    </transition>
    <div>
      <h1>Fahrzeuge</h1>

      <div class="types">
        <div
          v-for="type in types"
          @click="filter(type)"
          :key="type"
          class="type"
          :class="{ active: selectedType === type }"
        >
          {{ type }}
        </div>
      </div>

      <div>
        <div v-if="vehicles.length" class="scroll horizontal">
          <div class="card dummy"></div>

          <router-link
            v-for="vehicle in getVehicles"
            :key="vehicle.id"
            :to="{ name: 'vehicle', params: { id: vehicle.id } }"
          >
            <Card
              :to="{ name: 'vehicle', params: { id: 'new' } }"
              :title="vehicle.title"
              :mileage="vehicle.mileage"
              :nextcheck="vehicle.nextcheck"
            />
          </router-link>

          <div class="card dummy"></div>
        </div>
        <div v-else>
          <p class="no-results">There are currently no posts</p>
        </div>

        <router-link
          class="plus"
          :to="{ name: 'vehicle', params: { id: 'new' } }"
        >
          <svg
            width="50px"
            height="50px"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <line
              x1="5"
              x2="45"
              y1="25"
              y2="25"
             
              :stroke-width="plus.width"
              stroke-linecap="round"
            />
            <line
              x1="26"
              x2="26"
              y1="5"
              y2="45"
               
              :stroke-width="plus.width"
              stroke-linecap="round"
            />
          </svg>
        </router-link>
      </div>

      <div
        class="modal fade show"
        :style="modal"
        id="staticBackdrop"
        data-bs-backdrop="static"
        tabindex="-1"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
import Card from "@/components/Card";

export default {
  components: {
    Card
  },
  data() {
    return {
      plus: {
        color: "#000000",
        width: 2
      },
      types: ["Pkw", "Krad", "Alle"],
      selectedType: "Alle",
      styleVehicle: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "0px",
        height: "0px"
      },
      vehicle: null,
      modal: {
        display: "none"
      },
      post: {
        title: "",
        milage: 0,
        nextcheck: null,
        oil: {
          change: null,
          type: ""
        }
      },
      swipeActions: 0,
      showCommentModal: false,
      selectedPost: {},
      showPostModal: false,
      fullPost: {},
      postComments: []
    };
  },
  computed: {
    ...mapState(["userProfile", "vehicles"]),
    getVehicles() {
      if (this.selectedType != "Alle") {
        return this.vehicles.filter(item => {
          return (
            item.type.toLowerCase().indexOf(this.selectedType.toLowerCase()) >
            -1
          );
        });
      } else {
        return this.vehicles;
      }
    }
  },
  methods: {
    filter(type) {
      this.selectedType = type;
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
    createPost() {
      // this.$store.dispatch("createPost", { content: this.post.content });
      this.post.content = "";
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
      // const docs = await commentsCollection
      //   .where("postId", "==", post.id)
      //   .get();

      // docs.forEach(doc => {
      //   let comment = doc.data();
      //   comment.id = doc.id;
      //   this.postComments.push(comment);
      // });

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

<style lang="scss" scoped>
.types {
  display: flex;
  justify-content: space-between;

  .type {
    &.active {
      font-weight: 600;
      border-bottom: 2px solid red;
    }
  }
}
.plus {
  display: flex;
  justify-content: center;
  >svg{
    background-color: #fff;
    line{
      stroke:#7c7c7c;
    }
  }
}
</style>
