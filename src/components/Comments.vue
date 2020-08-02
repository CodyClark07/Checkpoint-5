<template>
  <div>
    <h3>{{commentData.creator.name}}: {{commentData.body}}</h3>
  </div>
</template>


<script>
export default {
  name: "comments",
  props: ["commentData"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>