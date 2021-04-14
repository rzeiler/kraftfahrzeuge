<template>
  <form>
    {{ $route.params.id }}

    <div class="mb-3">
      <label for="title" class="form-label">Marke</label>
      <input
        type="title"
        class="form-control"
        id="title"
        placeholder="Skoda..."
      />
    </div>
    <div class="mb-3">
      <label for="mileage" class="form-label">Kilometerstand</label>
      <input
        type="number"
        class="form-control"
        id="mileage"
        placeholder="10312..."
      />
    </div>
    <div class="mb-3">
      <label for="nextcheck" class="form-label">HU / AU Termin</label>
      <input
        type="Date"
        class="form-control"
        id="nextcheck"
        placeholder="12.2.2022..."
      />
    </div>
    <button type="button" @click="createPost()" class="btn btn-primary">
      Speichern
    </button>
  </form>
</template>

<script>
import { commentsCollection } from "@/firebase";
import { mapState, mapGetters } from "vuex";
import moment from "moment";
import Router from 'vue-router';

export default {
  components: {},
  data() {
    return {
      post: {
        content: ""
      },
      showCommentModal: false,
      selectedPost: {},
      showPostModal: false,
      fullPost: {},
      postComments: []
    };
  },
  computed: {
    ...mapGetters(["getVehicleById"])
  },
  methods: {},
  filters: {},
  mounted() {
    console.log(this.getVehicleById(this.$route.params.id));  
  }
};
</script>

<style lang="scss" scoped>
</style>
