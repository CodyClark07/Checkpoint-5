<template>
  <div class="card blog mb-3 mx-auto mt-1 text-center" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">
        <u>{{blogData.title}}</u>
      </h5>
      <!-- <p class="card-text">{{blogData.body}}</p> -->
      <button class="btn btn-primary" @click="moveToBlogPage">Go to Blog</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "blog",
  props: ["blogData"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    moveToBlogPage() {
      this.$router.push({ name: "Blog", params: { id: this.blogData._id } });
    },
  },
  components: {},
};
</script>


<style scoped>
</style>