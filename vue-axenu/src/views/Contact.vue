<template>
  <div class="contect">
    <NavBar :title="$options.name"></NavBar>
    <div class="card">
      <div class="card-body">
        <div class="card-column flex-1" id="info-column">
          <h4>Get in Touch</h4>
          <p>Simon@axenu.com</p>
          <p>070-675 89 42</p>
          <br />
          <p>Office:</p>
          <p>Västra prinsgatan 20B</p>
          <p>37135 Karlskrona</p>
          <h4>Social Media</h4>
          <Social type="facebook" :hasText="true"></Social>
          <Social type="linkedin" :hasText="true"></Social>
          <Social type="twitter" :hasText="true"></Social>
        </div>
        <div class="card-column flex-5">
          <h4>Location, World</h4>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="100%"
                height="100%"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=v%C3%A4stra%20prinsgatan%2020b&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <div class="card-column">
          <h3>Send a Message</h3>
          <p class="errorMessage" v-if="errorMessage">{{ errorMessage }}</p>
          <p v-if="sentMessage">{{ sentMessage }}</p>
          <input type="text" placeholder="Your email" v-model="email" />
          <!-- <Input type="text" placeholder="Name" v-model="name"/> -->
          <textarea placeholder="Your message" v-model="message" />
          <button
            class="button"
            v-on:click="submitForm"
            type="button"
            name="button"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"; // @ is an alias to /src
// const functions = require('firebase-functions');
// import firebase from "firebase";
import firebase from "firebase/app";
import Social from "@/components/Social.vue";

export default {
  name: "Contact",
  components: {
    NavBar,
    Social
  },
  data() {
    return {
      email: "",
      name: "",
      message: "",
      errorMessage: "",
      sentMessage: ""
    };
  },
  methods: {
    submitForm: function() {
      console.log(this.email, this.message);

      if (this.sentMessage !== "") {
        this.errorMessage = "You can only send one message at a time";
      }

      if (this.email == "" || this.message == "") {
        this.errorMessage = "You need to fill out both fields";
        return;
      }
      this.errorMessage = "";
      console.log("send");

      var sendEmail = firebase.functions().httpsCallable("sendMail");
      sendEmail({ sender: this.email, content: this.message }).then(() => {
        console.log("sent");
        this.sentMessage = "Sent!";
        this.email = "";
        this.message = "";
      });
      this.sentMessage = "Sending...";
    },
    hasErrorMessage: function() {
      return this.errorMessage === "";
    },
    hasSentMessage: function() {
      return this.sentMessage === "";
    },
    linkedin: function() {
      location.href = "https://www.linkedin.com/company/axenu/";
    },
    facebook: function() {
      location.href = "https://www.facebook.com/Axenu-AB-494206151325798/";
    }
  }
};
</script>

<style lang="sass" scoped>

#info-column
  min-width: 200px

.mapouter
  // width: 500px
  height: 350px

  .gmap_canvas
    // overflow: hidden
    // width: 500px
    height: 350px
    // aspect-ratio: 1
</style>
