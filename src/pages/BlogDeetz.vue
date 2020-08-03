<template>
  <div class="row justify-content-center bg-secondary" v-if="activeBlog &&activeBlog.creator">
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
      <button data-toggle="modal" data-target="#edit-blog" class="btn btn-warning">Edit Blog</button>
      <Modal id="edit-blog">
        <div slot="header">Edit Blog</div>
        <form slot="body" @submit="editBlog">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Title Here..."
              v-model="title"
            />
            <input type="text" class="form-control" placeholder="Enter Body Here..." v-model="body" />
            <button class="btn btn-success">Save Edits</button>
          </div>
        </form>
      </Modal>
      <button
        type="button"
        class="btn btn-success ml-2"
        data-toggle="modal"
        data-target="#create-comment-modal"
        v-if="this.$auth.isAuthenticated"
      >Add Comment</button>
      <Modal id="create-comment-modal">
        <div slot="header">Add Comment</div>
        <form @submit="addComment" slot="body">
          <div class="form-group">
            <input
              v-model="comment"
              type="text"
              class="form-control"
              placeholder="Enter Comment Here..."
            />
            <button type="submit" class="btn btn-success">Add Comment</button>
          </div>
        </form>
      </Modal>
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
import Modal from "../components/Modal";
export default {
  name: "blog-deetz",
  data() {
    return {
      title: "",
      body: "",
      comment: "",
    };
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
    addComment() {
      this.$store.dispatch("addComment", {
        body: this.comment,
        blogId: this.activeBlog.id,
        creatorEmail: this.activeBlog.email,
      });
      this.body = "";
      $("#" + commentData.id).modal("hide");
    },
    editBlog() {
      this.$store.dispatch("editBlog", {
        title: this.title,
        body: this.body,
        blogId: this.activeBlog._id,
      });
      (this.title = ""), (this.body = "");
      $("#edit-blog").modal("hide");
    },
  },
  components: {
    Comments,
    Modal,
  },
};
</script>