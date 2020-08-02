<template>
  <div class="blogs row card-columns">
    <button
      type="button"
      class="col-12 mb-3 btn btn-primary btn-lg"
      data-toggle="modal"
      data-target="#create-blog-modal"
      v-if="this.$auth.isAuthenticated"
    >Post Blog</button>
    <QuickModal></QuickModal>
    <blog v-for="blog in blogs" :blogData="blog" :key="blog.id" />
  </div>
</template>


<script>
import Blog from "../components/Blog";
import QuickModal from "../components/QuickModal";

export default {
  name: "blogs",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getAllBlogs");
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
  },
  methods: {},
  components: {
    Blog,
    QuickModal,
  },
};
</script>


<style scoped>
</style>