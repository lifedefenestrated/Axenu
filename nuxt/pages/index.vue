<template>
  <div class="home">
    <NavBar title="Axenu start" home="true"></NavBar>
    <div class="card">
      <div class="card-body">
        <div class="card-column flex-6">
          <h3>About Axenu</h3>
          <!-- <div class="divider"></div> -->
          <Divider></Divider>
          <!-- <div class="sb sb-4"> -->
          <!--       <small>section break 4</small> -->
          <!-- <hr class="section-break-4">
          </div>-->
          <!-- <div class="img-container"> -->
          <!-- <img src="../assets/images/frame-2.png" alt="Icon divider" class="divider"> -->

          <!-- </div> -->
          <p>
            We aim to build services that can improve your daily life. From a
            simple tool that saves a few seconds every day, to complex services
            that allow you to do thing you previously thought impossible
          </p>
          <!-- <div class="img-container">
            <img src="../assets/images/frame-2.png" alt="Icon divider" class="divider">
          </div>-->
          <!-- <div class="divider"></div> -->
          <Divider></Divider>
          <p>
            We believe that it is important to make simple software that is fun
            to use. Software should never become an obstacle and used
            efficiently it can make everything simplier. We also believe that
            the user is the most important part of every project, and therefore
            we listen to every suggestion you have.
          </p>
          <!-- <button type="button" name="button">Read our story</button> -->
          <b-link to="about" class="button">Read our story</b-link>
        </div>
        <div class="card-column flex-4">
          <div class="flex-4 img-container">
            <img
              src="../assets/images/simon/profile_simon_2.jpg"
              alt="Image of founer"
              class="round vertical-center"
            />
          </div>
          <p class="image-text center">Simon Nilsson, CEO and founder of Axenu</p>
        </div>
      </div>
    </div>
    <ComponentFlow v-if="components" :components="components"></ComponentFlow>

    <LatestBlogPosts :posts="posts"></LatestBlogPosts>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue' // @ is an alias to /src
import LatestBlogPosts from '@/components/cards/LatestBlogPosts.vue' // @ is an alias to /src
import Divider from '@/components/Divider.vue' // @ is an alias to /src
import Rating from '@/components/Rating.vue' // @ is an alias to /src
import DownloadApp from '@/components/DownloadApp.vue' // @ is an alias to /src
import ComponentFlow from '@/components/ComponentFlow.vue' // @ is an alias to /src
import MyPart from '@/components/cards/MyPart.vue'

export default {
  name: 'home',
  components: {
    NavBar,
    LatestBlogPosts,
    Divider,
    DownloadApp,
    Rating,
    ComponentFlow,
    MyPart
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      posts: []
    }
  },
  methods: {
  },
  async asyncData({ app, params }) {
    // var components = payload
    // console.log(payload);

    // if (!payload) {
    let { data: homeData } = await app.$axios.get(
      'https://cockpit.axenu.com/api/singletons/get/home?token=ad5bf77cc0fb358931a4247452fcea',
      JSON.stringify({}),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )

    let components = homeData.components

    const { data } = await app.$axios.post(
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
    return { posts: data.entries, components }
    // return { posts: [] }
  }
}
</script>

<style lang="sass" scoped></style>
