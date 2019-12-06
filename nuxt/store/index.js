import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import axios from 'axios'

Vue.use(Vuex)

function isEmptyObject(obj) {
  for (var key in obj) {
    return false
  }
  return true
}

export const state = () => ({
  blogActive: true,
  blogPosts: {},
  products: {
    // dropastory: {
    //   title: 'Drop A Story'
    // },
    // localfoodapp: {
    //   title: 'Local Food App'
    // },
    // hotlify: {
    //   title: 'Hotlify'
    // },
    // micke: {
    //   title: 'Micke Gunnarsson & Vänner'
    // },
    // arioe: {
    //   title: 'AR-IOE'
    // },
    // brollop: {
    //   title: 'Dream Weddings with Great Weddings',
    //   body: 'Lite body',
    //   headerImage: ''
    // }
    // micke: {
    //   title: "micke",
    //   body: "mickebody",
    // },
  }
})

export const mutations = {
  setBlogPosts(state, payload) {
    state.blogPosts = payload
  },
  setProducts(state, payload) {
    state.products = payload
  },
  setBlogPost(state, payload) {
    state.blogPosts[payload.key] = payload.data
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getBlogPosts')
    await dispatch('getProducts')
  },
  async getBlogPosts({ state, commit }) {
    if (state.blogPosts.length <= 0) {
      const { data } = await this.$axios.post(
        process.env.POSTS_URL,
        JSON.stringify({
          filter: { published: true },
          sort: { _created: -1 },
          populate: 1
        }),
        {
          headers: { 'Content-Type': 'application/json' }
        }
      )
      // console.log(data)
      commit('setBlogPosts', data.entries)
    }
  },
  updateBlogPost({ commit }, payload) {
    commit('setBlogPost', payload)
    var updates = {}
    updates['blog-posts/' + payload.key] = payload.data
    return firebase
      .database()
      .ref()
      .update(updates)
  },
  async getProducts({ state, commit }) {
    const { data } = await this.$axios.post(
      process.env.PRODUCTS_URL,
      JSON.stringify({}),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
    commit('setProducts', data.entries)
  }
}
