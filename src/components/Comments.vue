<template>
  <div>
    <h3>
      <i class="fa fa-times text-danger cursor" aria-hidden="true" @click="deleteComment"></i>
      {{commentData.creator.name}}: {{commentData.body}}
      <button
        data-toggle="modal"
        data-target="#edit-comment"
        class="btn btn-warning"
      >
        <i class="fa fa-pencil"></i>
      </button>
      <Modal id="edit-comment">
        <div slot="header">Edit Comment</div>
        <form slot="body" @submit="editComment(id)">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter Body Here..." v-model="body" />
            <button class="btn btn-success">Save Edits</button>
          </div>
        </form>
      </Modal>
    </h3>
  </div>
</template>


<script>
import Modal from "../components/Modal";
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
    editComment() {
      debugger;
      this.$store.dispatch("editComment", {
        id: this.commentData.id,
        body: this.body,
        blogId: this.activeBlog.id,
      });
      $("#edit-blog").modal("hide");
    },
  },
  components: {
    Modal,
  },
};
</script>


<style scoped>
</style>