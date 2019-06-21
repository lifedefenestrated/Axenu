<template>
  <div class="home">
    <NavBar title="Axenu start" home="true"></NavBar>
    <div class="card">
      <div class="card-body">
        <div class="card-column flex-6">
          <h3>About Axenu</h3>
          <div class="img-container">
            <img src="../assets/images/frame-2.png" alt="Icon divider" class="divider">
          </div>
          <p>vawe Duis egestas luctus tellus non sollicitudin. Morbi rutrum, risus a varius luctus, ipsum orci porta quam, ac eleifend felis orci blandit elit. Nunc blandit cursus dui, quis placerat risus elementum id. Donec ullamcorper placerat</p>
          <div class="img-container">
            <img src="../assets/images/frame-2.png" alt="Icon divider" class="divider">
          </div>
          <p>vawe Duis egestas luctus tellus non sollicitudin. Morbi rutrum, risus a varius luctus, ipsum orci porta quam, ac eleifend felis orci blandit elit. Nunc blandit cursus dui, quis placerat risus elementum id. Donec ullamcorper placerat</p>
          <button type="button" name="button">Read our story</button>
        </div>
        <div class="card-column flex-4">
          <div class="flex-4 img-container">
            <img
              src="../assets/images/frame-2.png"
              alt="Image of founer"
              class="round vertical-center"
            >
          </div>
          <p class="image-text">Simon Nilsson, CEO and founder of Axenu</p>
        </div>
      </div>
    </div>

    <LatestBlogPosts></LatestBlogPosts>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"; // @ is an alias to /src
import LatestBlogPosts from "@/cards/LatestBlogPosts.vue"; // @ is an alias to /src

export default {
  name: "home",
  components: {
    NavBar,
    LatestBlogPosts
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  }
};
</script>

<style lang="sass" scoped>
// @import "../assets/styles/card.sass"

</style>
