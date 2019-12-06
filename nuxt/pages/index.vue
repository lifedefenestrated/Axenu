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
          <p class="image-text">Simon Nilsson, CEO and founder of Axenu</p>
        </div>
      </div>
    </div>

    <div class="card card-action">
      <h3 v-on:click="gotoDreamwedding">Drömbröllop med Great Weddings</h3>
      <div class="card-body">
        <div class="card-row center">
          <div class="img-container ios-screenshot">
            <img
              class="screenshot"
              src="../assets/images/dreamwedding/screenshot1.jpg"
              alt="Image of product"
            />
          </div>
          <div class="img-container ios-screenshot">
            <img
              class="screenshot"
              src="../assets/images/dreamwedding/screenshot2.jpg"
              alt="Image of product"
            />
          </div>
          <div class="img-container ios-screenshot">
            <img
              class="screenshot"
              src="../assets/images/dreamwedding/screenshot3.jpg"
              alt="Image of product"
            />
          </div>
          <div class="img-container ios-screenshot">
            <!-- </div>
          <div class="card-column"> -->
            <div class="rating">
              <Rating rating="4"></Rating>
              <p class="rating-content">
                "Ett underbart verktyg i vår bröllopsplanering! Så himla smidigt
                och älskar länkarna mellan de olika sidorna i appen"
              </p>
              <p class="rating-author">-ErikSofia, App Store</p>
            </div>
            <!-- <p>get on app store</p> -->
            <!-- <img
              src="../assets/images/apple/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
            />-->
            <!-- <img src="../assets/images/google/google-play-badge.png" class="googleBadge" /> -->

            <DownloadApp type="google"></DownloadApp>
            <DownloadApp type="apple"></DownloadApp>
            <b-link to="products/brollop" class="button"
              >More about the app</b-link
            >
          </div>
          <!-- <div class="card-column column-small">
          <div class="arrow"></div>
        </div>

        <div class="card-column column-small">
          <div class="arrow"></div>
          </div>-->
        </div>
      </div>
    </div>

    <LatestBlogPosts :posts="posts"></LatestBlogPosts>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue' // @ is an alias to /src
import LatestBlogPosts from '@/components/cards/LatestBlogPosts.vue' // @ is an alias to /src
import Divider from '@/components/Divider.vue' // @ is an alias to /src
import Rating from '@/components/Rating.vue' // @ is an alias to /src
import DownloadApp from '@/components/DownloadApp.vue' // @ is an alias to /src

export default {
  name: 'home',
  components: {
    NavBar,
    LatestBlogPosts,
    Divider,
    DownloadApp,
    Rating
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      posts: []
    }
  },
  methods: {
    gotoDreamwedding: function() {
      this.$router.push({ path: 'products/brollop' })
    }
  },
  async asyncData({ app }) {
    console.log(process.env.POSTS_URL, 'url')
    const { data } = await app.$axios.post(
      process.env.POSTS_URL,
      JSON.stringify({
        filter: { published: true },
        // sort: { _created: -1 },
        populate: 1
      }),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )

    // let posts = await Promise.all(
    //   await data.entries.map(async p => {
    //     //     let result = await app.$axios.get(
    //     //       process.env.IMAGE_URL +
    //     //         '&w=300&h=300&src=storage/uploads' +
    //     //         p.image.path
    //     //     )

    //     //     p.ThumbUrl = result.data
    //     // TODO: load image url

    //     return p
    //   })
    // )
    // let posts = data.entries
    return { posts: data.entries }
    // return { posts: [] }
  }
}
</script>

<style lang="sass" scoped></style>
