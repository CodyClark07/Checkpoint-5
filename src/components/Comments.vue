<template>
  <div>
    <h3>
      <i
        class="fa fa-times text-danger cursor"
        aria-hidden="true"
        :v-if="this.$auth.isAuthenticated"
        @click="deleteComment"
      ></i>
      {{commentData.creator.name}}: {{commentData.body}}
    </h3>
  </div>
</template>


<script>
export default {
  name: "comments",
  props: ["commentData"],
  data() {
    return {};
  },
  computed: {
    activeBlog() {
      return this.$store.state.activeBlog;
    },
  },
  methods: {
    deleteComment() {
      this.$store.dispatch("deleteComment", {
        id: this.commentData.id,
        blogId: this.activeBlog.id,
      });
    },
  },
  components: {},
};
</script>


<style scoped>
</style>