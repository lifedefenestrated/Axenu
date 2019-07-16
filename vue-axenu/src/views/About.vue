<template>
  <div class="about">
    <NavBar title="About Axenu"></NavBar>

    <div class="card">
      <h3 class="center">Axenu does this</h3>
      <div class="card-body">
        <div class="card-row">
          <div class="card-column">
            <div class="card-row left-text">
              <div class="flex-column flex-8">
                <h4>Service</h4>
                <p>We envision and build the services of the future. By identifying needs in your everyday life we can solve them with cutting edge technology. The road to a finished product is however not always straight. Thats why we adapt our tools for every project.</p>
              </div>
              <div class="flex-4 img-container no-min square">
                <img
                  class="round"
                  src="../assets/images/about/stephen-dawson-qwtCeJ5cLYs-unsplash Cropped.jpg"
                />
              </div>
            </div>
          </div>
          <div class="card-column">
            <div class="card-row right-text">
              <div class="flex-4 img-container no-min">
                <img
                  class="round flex-4"
                  src="../assets/images/about/patrick-perkins-ETRPjvb0KM0-unsplash Cropped.jpg"
                />
              </div>
              <div class="flex-column flex-8">
                <h4>Apps</h4>
                <p>One step in providing the service we eant to build is making it accessible to all our users. By developing native mobile apps we can take advantage of the power of the hardware to enhance the experience.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-row">
          <div class="card-column">
            <div class="card-row left-text">
              <div class="flex-column flex-8">
                <h4>Consulting</h4>
                <p>To help us grow and develop our services we do some consulting work for others who need our expertice. Our specialities are based in mobile development and backend servers, with optmimizations in focus.</p>
              </div>
              <div class="flex-4 img-container no-min">
                <img
                  class="round flex-4"
                  src="../assets/images/about/daniel-fazio-DzqeB43HfnE-unsplash Cropped.jpg"
                />
              </div>
            </div>
          </div>
          <div class="card-column">
            <div class="card-row right-text">
              <div class="flex-4 img-container no-min">
                <img
                  class="round flex-4"
                  src="../assets/images/about/william-iven-gcsNOsPEXfs-unsplash Cropped.jpg"
                />
              </div>
              <div class="flex-column flex-8">
                <h4>Sharing</h4>
                <p>Odds are that we are not the first to encounter a specific problem and certainly not the last. That's why it is important to share the knowledge we gather to help others make better choises or avoid our misstakes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <div class="card-column flex-8">
          <div class="flex-4 img-container">
            <img
              src="../assets/images/about/mr-marco-QP1dUyQ8WsI-unsplash.jpg"
              alt="Image of founer"
            />
          </div>
        </div>
        <div class="card-column flex-2">
          <h3>Background</h3>
          <p>Axenu was started back when I was still in high school to allow me to express my creativity. I had developed an interest for computers and software development from early age and I was in love with the abillity to create anything with just a computer. I always hade the need to create something more and I completed multiple projects at the side of my school work. Today I have graduated as a "Master of Science in software engineering".</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"; // @ is an alias to /src

export default {
  name: "About",
  components: {
    NavBar
  }
};
</script>

<style lang="sass" scoped>


</style>