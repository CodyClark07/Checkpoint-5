<template>
  <div>
    <h3>
      <i
        class="fa fa-times text-danger cursor"
        aria-hidden="true"
        v-if="profile.email == commentData.creator.email"
        @click="deleteComment"
      ></i>
      {{commentData.creator.name}}: {{commentData.body}}
      <button
        data-toggle="modal"
        :data-target="'#modal'+ commentData.id"
        class="btn btn-warning"
      >
        <i class="fa fa-pencil"></i>
      </button>
      <Modal :id="'modal'+ commentData.id">
        <div slot="header">Edit Comment</div>
        <form slot="body" @submit="editComment()">
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
    return {
      body: "",
    };
  },
  computed: {
    activeBlog() {
      return this.$store.state.activeBlog;
    },
    profile() {
      return this.$auth.userInfo;
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
      (this.body = ""), $("#" + commentData.id).modal("hide");
    },
  },
  components: {
    Modal,
  },
};
</script>


<style scoped>
</style>