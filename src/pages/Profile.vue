<template>
  <div class="profile text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt />
    <p>{{ profile.email }}</p>
    <blog v-for="blog in blogs" :blogData="blog" :profile="profile" :key="blog.id" />
  </div>
</template>

<script>
import Blog from "../components/Blog";
export default {
  name: "Profile",
  mounted() {
    this.getProfile();
    this.$store.dispatch("getMyBlogs");
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    blogs() {
      return this.$store.state.myBlogs;
    },
  },
  methods: {
    getProfile() {
      this.$store.dispatch("getProfile");
    },
  },
  components: {
    Blog,
  },
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
