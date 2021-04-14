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
      <div class="col1">
        <div class="profile">
          <h5>{{ userProfile.name }}</h5>
          <p>{{ userProfile.title }}</p>
          <div class="create-post">
            <p>create a post</p>
            <form @submit.prevent>
              <textarea v-model.trim="post.content"></textarea>
              <button
                @click="createPost()"
                :disabled="post.content === ''"
                class="button"
              >
                post
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="col2">
        <div v-if="vehicles.length">
          <div v-for="vehicle in vehicles" :key="vehicle.id" class="card m-3">
            <div class="card-body">
              <p class="card-text">Marke: {{ vehicle.title }}</p>
              <p class="card-text">Kilometerstand: {{ vehicle.mileage }}</p>
              <p class="card-text">
                HU / AU: {{ vehicle.nextcheck | formatDate }}
              </p>

               Letzter Ölwechsel am {{last(vehicle.oil).change | formatDate}}. ({{last(vehicle.oil).type}})
 
            </div>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-light">
                <i class="fas fa-wrench"></i>
              </button>
              <button type="button" class="btn btn-light">
                <i class="fab fa-empire"></i>
              </button>
              <button type="button" class="btn btn-light">
                <i class="fas fa-oil-can"></i>
              </button>
              <router-link
                class="btn btn-light"
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
      </div>
    </section>
  </div>
</template>

<script>
import { commentsCollection } from "@/firebase";
import { mapState } from "vuex";
import moment from "moment";
import CommentModal from "@/components/CommentModal";

export default {
  components: {
    CommentModal
  },
  data() {
    return {
      post: {
        title: "",
        milage: 0,
        nextcheck: null,
        oil: {
          change: null,
          type: ""
        }
      },
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
      const docs = await commentsCollection
        .where("postId", "==", post.id)
        .get();

      docs.forEach(doc => {
        let comment = doc.data();
        comment.id = doc.id;
        this.postComments.push(comment);
      });

      this.fullPost = post;
      this.showPostModal = true;
    },
    closePostModal() {
      this.postComments = [];
      this.showPostModal = false;
    }
  },
  filters: {
    formatDate(val) {
      if (!val) {
        return "-";
      }
      moment.locale("de");
      let date = val.toDate();
      return moment(date).format("MM.YYYY");
    }
    // trimLength(val) {
    //   if (val.length < 200) {
    //     return val;
    //   }
    //   return `${val.substring(0, 200)}...`;
    // }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
</style>
