<template>
  <div class="row justify-content-center bg-secondary">
    <div class="blog-deetz col-6 text-white p-3">
      <h5>Creator: {{activeBlog.creator.name}}</h5>
      <img :src="activeBlog.creator.picture" alt />
      <h3>Title: {{activeBlog.title}}</h3>
      <h3>Description: {{activeBlog.body}}</h3>
      <button
        class="btn btn-danger"
        :v-if="this.$auth.isAuthenticated"
        :disabled="!this.$auth.isAuthenticated"
        @click="deleteBlog"
      >Delete Blog?</button>
      <!-- <form @submit="">
        <div class="form-grou text-center">
          <div class="input-group-prepend">
            <input
              type="text"
              class="form-control"
              placeholder="Add a Comment..."
              name="postComment"
            />
            <button type="submit" class="input-group-text" id="inputGroup-sizing-sm">+</button>
          </div>
        </div>
      </form>-->
      <h2>
        <u>Comments</u>
      </h2>
      <div
        class="comments border bg-light rounded text-dark pl-2 mt-0"
        style="max-height:80rem; overflow:auto"
      >
        <comments
          v-for="comment in activeComments"
          :key="comment.id"
          :commentData="comment"
          style="display:block; border-bottom:solid 1px black"
        />
      </div>
    </div>
  </div>
</template>


<script>
import Comments from "../components/Comments";
export default {
  name: "blog-deetz",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getBlog", this.$route.params.id);
  },
  computed: {
    activeBlog() {
      return this.$store.state.activeBlog;
    },
    activeComments() {
      return this.$store.state.activeComments;
    },
  },
  methods: {
    deleteBlog() {
      this.$store.dispatch("deleteBlog", this.$route.params.id);
    },
  },
  components: {
    Comments,
  },
};
</script>