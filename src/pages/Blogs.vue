<template>
  <div class="blogs row card-columns">
    <button
      type="button"
      class="col-12 mb-3 btn btn-primary btn-lg"
      data-toggle="modal"
      data-target="#create-blog-modal"
      v-if="this.$auth.isAuthenticated"
    >Post Blog</button>
    <Modal id="create-blog-modal">
      <div slot="header">Create Blog</div>
      <form @submit="createBlog" slot="body">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Title Here..."
            v-model="title"
            required
          />
          <input
            type="text"
            class="form-control"
            placeholder="Enter Body Here..."
            v-model="body"
            required
          />
          <input
            type="text"
            class="form-control"
            placeholder="Enter Image URL Here..."
            v-model="imgUrl"
          />
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-success">Post Blog</button>
        </div>
      </form>
      <div slot="footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
    </Modal>
    <blog v-for="blog in blogs" :blogData="blog" :key="blog.id" />
  </div>
</template>


<script>
import Blog from "../components/Blog";
import Modal from "../components/Modal";

export default {
  name: "blogs",
  data() {
    return {
      title: "",
      body: "",
      img: "",
    };
  },
  mounted() {
    this.$store.dispatch("getAllBlogs");
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
  },
  methods: {
    createBlog() {
      this.$store.dispatch("createBlog", {
        title: this.title,
        body: this.body,
        img: this.imgUrl,
      });
      this.title = "";
      this.body = "";
      this.img = "";
      $("#create-blog-modal").modal("hide");
    },
  },
  components: {
    Blog,
    Modal,
  },
};
</script>


<style scoped>
</style>