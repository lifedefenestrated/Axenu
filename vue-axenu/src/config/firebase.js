import Firebase from "firebase";

export const config = {
  apiKey: "AIzaSyDyrOrBQcUTjzp2RP5GXCT9t2AWzSYOU7E",
  authDomain: "axenu-site.firebaseapp.com",
  databaseURL: "https://axenu-site.firebaseio.com",
  projectId: "axenu-site",
  storageBucket: "axenu-site.appspot.com",
  messagingSenderId: "925235050810",
  appId: "1:925235050810:web:b6ec6e591dac0723",
};

export const db = Firebase.initializeApp(config).database();
