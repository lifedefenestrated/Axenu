import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

function isEmptyObject(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

export default new Vuex.Store({
  state: {
    blogActive: false,
    blogPosts: {},
    products: {
      brollop: {
        title: "Dream Weddings with Great Weddings",
        body: "Lite body",
        headerImage: "",
      },
      // micke: {
      //   title: "micke",
      //   body: "mickebody",
      // },
    },
  },
  mutations: {
    setBlogPosts(state, payload) {
      state.blogPosts = payload;
    },
    setBlogPost(state, payload) {
      state.blogPosts[payload.key] = payload.data;
    },
  },
  actions: {
    getBlogPosts({ state, commit }) {
      if (isEmptyObject(state.blogPosts)) {
        return firebase
          .database()
          .ref("blog-posts")
          .once("value")
          .then(snapshot => {
            commit("setBlogPosts", snapshot.val());
          });
      }
    },
    updateBlogPost({ state, commit }, payload) {
      commit("setBlogPost", payload);
      var updates = {};
      updates["blog-posts/" + payload.key] = payload.data;
      return firebase.database().ref().update(updates);
    },
  },
});
