<template>
  <div id="dashboard">
    <transition name="fade">
      <CommentModal
        v-if="showCommentModal"
        :post="selectedPost"
        @close="toggleCommentModal()"
      ></CommentModal>
    </transition>
    <section>
      <div class="col2">
        <div v-if="vehicles.length">
          <div v-for="vehicle in vehicles" :key="vehicle.id" class="card m-3">
            <div class="card-body">
              <p class="card-text">Marke: {{ vehicle.title }}</p>
              <p class="card-text">Kilometerstand: {{ vehicle.mileage }}</p>
              <p class="card-text">
                HU / AU: {{ vehicle.nextcheck | formatDate }}
              </p>
<div v-if="vehicle.oil.length">
              Letzter Ölwechsel am {{ last(vehicle.oil).change | formatDate }}.
              ({{ last(vehicle.oil).type }})
            </div>
             </div>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-primary">
                <i class="fas fa-wrench"></i>
              </button>
              <button type="button" class="btn btn-primary">
                <i class="fab fa-empire"></i>
              </button>
              <button type="button" class="btn btn-primary">
                <i class="fas fa-oil-can"></i>
              </button>
              <router-link
                class="btn btn-primary"
                :to="{ name: 'vehicle', params: { id: vehicle.id } }"
              >
                <i class="fas fa-ellipsis-v"></i>
              </router-link>
            </div>
          </div>
        </div>
        <div v-else>
          <p class="no-results">There are currently no posts</p>
        </div>
       

        <router-link
          class="btn btn-primary btn-lg rounded-pill  w-100 "
          :to="{ name: 'vehicle', params: { id:'new' } }"
        >
          Neues Fahrzeug
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

       
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";

export default {
  components: {},
  data() {
    return {
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
    ...mapState(["userProfile", "vehicles"])
  },
  methods: {
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
</style>
