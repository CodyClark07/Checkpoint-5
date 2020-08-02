<template>
  <div class="row">
    <!-- Modal -->
    <div
      class="modal fade"
      id="id"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Create Blog</h5>
            <slot name="header">Title</slot>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <form @submit.prevent="createBlog">
                <div class="form-group row">
                  <label for="title" class="col-sm-1-12 col-form-label">Title</label>
                  <div class="col-sm-1-12">
                    <input
                      type="text"
                      class="form-control"
                      name="title"
                      id="inputName"
                      placeholder="Enter Title Here...."
                      v-model="newBlog.title"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="body" class="col-sm-1-12 col-form-label">Body</label>
                  <div class="col-sm-1-12">
                    <input
                      type="text"
                      class="form-control"
                      name="body"
                      id="inputName"
                      placeholder="Enter Body Here...."
                      v-model="newBlog.body"
                      required
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="offset-sm-2 col-sm-10">
                    <button type="submit" class="btn btn-primary">Make Blog</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal End -->
</template>

<script>
// @ is an alias to /src

export default {
  name: "BlogModal",
  data() {
    return {
      newBlog: {},
    };
  },
  mounted() {},
  computed: {},
  methods: {
    createBlog() {
      this.$store.dispatch("createBlog", this.newBlog);
      this.newBlog = {};
      $("#create-blog-modal").modal("hide");
    },
  },
  components: {},
};
</script>