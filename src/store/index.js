import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";
import Swal from 'sweetalert2'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeBlog: {},
    activeComments: {},
    myBlogs: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs(state, blogs) {
      state.blogs = blogs
    },
    setActiveBlog(state, blog) {
      state.activeBlog = blog
    },
    setMyBlog(state, blogData) {
      state.myBlogs = blogData
    },
    setActiveComments(state, comments) {
      state.activeComments = comments
    },
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getAllBlogs({ commit }) {
      try {
        let res = await api.get("blogs");
        console.log(res.data)
        commit("setBlogs", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async getBlog({ commit, dispatch }, blogId) {
      try {
        let res = await api.get("blogs/" + blogId)
        commit("setActiveBlog", res.data.blog)
        commit("setActiveComments", res.data.comments)
      } catch (error) {
        console.error(error);
      }
    },
    async getMyBlogs({ commit, dispatch }) {
      try {
        let res = await api.get("profile/blogs")
        commit("setMyBlogs", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async createBlog({ commit, dispatch }, blogData) {
      try {
        let res = await api.post("blogs", blogData)
        dispatch("getAllBlogs")
      } catch (error) {

      }
    },
    async deleteBlog({ commit, dispatch }, blogId) {
      // Swal.fire({
      //   title: 'Are you sure?',
      //   text: "You won't be able to revert this!",
      //   icon: 'warning',
      //   showCancelButton: true,
      //   confirmButtonColor: '#3085d6',
      //   cancelButtonColor: '#d33',
      //   confirmButtonText: 'Yes, delete it!'
      // }).then((result) => {
      //   if (result.value) {
      //     // @ts-ignore
      //     Swal.fire(
      //       'Deleted!',
      //       'Your file has been deleted.',
      //       'success'
      //     )
      try {
        await api.delete("blogs/" + blogId)
        router.push({ name: "Blogs" })
        commit("setActiveBlog", {})
      } catch (error) {
        console.error(error);
      }
    },
    async editBlog({ commit, dispatch }, editedBlog) {

      try {
        let res = await api.put("blogs/" + editedBlog.blogId, {
          body: editedBlog.body,
          title: editedBlog.title
        })
        console.log(editedBlog)
        commit("setActiveBlog", editedBlog)
        dispatch("getBlog", editedBlog.blogId)
      } catch (error) {
        console.error(error);
      }
    },
    async addComment({ commit, dispatch }, commentData) {
      try {
        let res = await api.post("comments/", commentData)
        commit("setActiveComments", res.data)
        console.log(res)

        dispatch("getBlog", commentData.blogId)
      } catch (error) {
        console.error(error);
      }
    },
    async deleteComment({ commit, dispatch }, commentData) {
      // Swal.fire({
      //   title: 'Are you sure?',
      //   text: "You won't be able to revert this!",
      //   icon: 'warning',
      //   showCancelButton: true,
      //   confirmButtonColor: '#3085d6',
      //   cancelButtonColor: '#d33',
      //   confirmButtonText: 'Yes, delete it!'
      // }).then((result) => {
      //   if (result.value) {
      //     // @ts-ignore
      //     Swal.fire(
      //       'Deleted!',
      //       'Your file has been deleted.',
      //       'success'
      //     )
      try {
        await api.delete("comments/" + commentData.id)
        commit("setActiveComments", {})
        dispatch("getBlog", commentData.blogId)
      } catch (error) {
        console.error(error);
      }
    },
    async editComment({ commit, dispatch }, editedComment) {

      try {

        let res = await api.put("comments/" + editedComment.id, {
          body: editedComment.body,
          blogId: editedComment.blogId
        })
        console.log(editedComment)
        commit("setActiveComment", editedComment)
        dispatch("getBlog", editedComment.blogId)
      } catch (error) {
        console.error(error);
      }
    },
  }
})