<template>
  <div class="projects">
    <NavBar title="Micke Gunnarsson & Vänner"></NavBar>

    <div class="card">
      <div class="card-body">
        <div class="card-column flex-1">
          <div class="img-container ios-screenshot">
            <img
              class="screenshot"
              src="../../assets/images/micke/screenshot1.jpg"
              alt="Image of product"
            />
          </div>
        </div>
        <div class="card-column flex-2">
          <h3>Follow Micke Gunnarsson</h3>
          <p>
            Micke has a background with youths via preschool, school,
            cultureschool, supportfamily, young entrepreneurship and in the role
            as a father of three. On the other hand he has his own
            entrepreneurship, leadership, internet, digitalization and health.
            This is done togheter with his wife Jenny.
          </p>
          <div class="card-row">
            <div class="card-column column-small no-margin margin-right">
              <h5>Audiobook</h5>
              <p>
                Listen to Mickes new book "Tio saker jag vill säga till mina
                barn innan jag dör." exclusively in the app. No matter if you
                are at home comfortably on your couch or out on the move, the
                audiobook will always be with you.
              </p>
            </div>
            <div class="card-column column-small no-margin margin-right">
              <h5>Exclusive videos</h5>
              <p>
                In the movie section of the app you can watch exclusive videos
                created by Micke specifically for this app. You can also watch
                videos previously created by Micke, all collected in a single
                place
              </p>
            </div>
            <div class="card-column column-small no-margin margin-right">
              <h5>Podcasts</h5>
              <p>
                Listen to podcasts which Micke has guested in the past or listen
                to the brand new podcast ".Barnatro", exclusively in the app.
              </p>
            </div>
          </div>
          <div class="card-row">
            <div class="card-column column-small no-margin margin-right">
              <h5>Daily Image</h5>
              <p>
                Micke has prepared some thoughts for every day of the year. Take
                a pause in your day and read and think.
              </p>
            </div>
            <div class="card-column column-small no-margin margin-right">
              <h5>Push Notifications</h5>
              <p>
                Don't miss anything Micke does via push notifications in the
                app. Micke has some secrets planned that only the people using
                the app will access
              </p>
            </div>
            <div class="card-column column-small no-margin margin-right">
              <h5>Personal Contact</h5>
              <p>
                In the app you can ask Micke questions directly and get Mickes
                thoughts on life problems or just what color of a shirt you
                should wear.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card orange">
      <div class="card-body">
        <div class="card-row">
          <div class="card-column flex-3">
            <h4>Developed with:</h4>
            <h3>Micke Gunnarsson</h3>
          </div>
          <div class="card-column">
            <div class="flex-1 img-container">
              <img
                src="../../assets/images/micke/ikon.jpg"
                alt="Image of founer"
                class="round vertical-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <div class="card-column">
          <h3>Micke Gunnarsson & Vänner</h3>
          <div class="card-row center">
            <div class="img-container ios-screenshot">
              <img
                class="screenshot"
                src="../../assets/images/micke/screenshot2.jpg"
                alt="Image of product"
              />
            </div>
            <div class="img-container ios-screenshot">
              <img
                class="screenshot"
                src="../../assets/images/micke/screenshot3.jpg"
                alt="Image of product"
              />
            </div>
            <div class="img-container ios-screenshot">
              <img
                class="screenshot"
                src="../../assets/images/micke/screenshot4.jpg"
                alt="Image of product"
              />
            </div>
            <div class="img-container ios-screenshot">
              <img
                class="screenshot"
                src="../../assets/images/micke/screenshot5.jpg"
                alt="Image of product"
              />
            </div>
          </div>
          <!-- <div class="card-row flex-end"> -->
          <!-- <img
              src="../assets/images/apple/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
          />-->
          <div style="display: flex; flex-direction: row;">
            <DownloadApp
              type="apple"
              link="https://apps.apple.com/us/app/dreamwedding-great-weddings/id1475448571"
            ></DownloadApp>
            <DownloadApp
              type="google"
              link="https://play.google.com/store/apps/details?id=com.micke"
            ></DownloadApp>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Firebase from "firebase";
// import { db } from "../config/firebase";
import NavBar from '../../components/NavBar.vue' // @ is an alias to /src
import DownloadApp from '../../components/DownloadApp.vue'
// import Markdown from "@/components/Markdown.vue"; // @ is an alias to /src

export default {
  name: 'Brollop',
  components: {
    NavBar,
    DownloadApp
    // Markdown
  },
  data() {
    return {}
  },
  computed: {
    product() {
      return this.$store.state.products[this.$route.params.key]
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="sass" scoped>
.arrow
  display: block
  width: 50px
  height: 50px
  background-color: red

.googleBadge
  max-width: 150px
  max-height: 100px
  align-self: center

li
  text-align: left
</style>
