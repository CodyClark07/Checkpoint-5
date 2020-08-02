<template>
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
            <slot name="header">Title</slot>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <slot name="body"/>
          <div class="modal-footer">
            <slot name="footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            </slot>
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
name: "QuickModal",
  data() {
    return {
    };
  },
  mounted() {},
  computed: {},
  methods: {
  },
  components: {},
};
</script>