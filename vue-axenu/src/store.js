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
    blogPosts: {},
  },
  mutations: {
    setBlogPosts(state, payload) {
      state.blogPosts = payload;
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
  },
});
