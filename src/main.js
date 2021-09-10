import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAecUgcC2uJt384wXhwWDPGg7oFzFZSvgQ",

  authDomain: "accomodationapp-fec16.firebaseapp.com",

  projectId: "accomodationapp-fec16",

  storageBucket: "accomodationapp-fec16.appspot.com",

  messagingSenderId: "504433362980",

  appId: "1:504433362980:web:256e5cee9b95a36d9070b1"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

Vue.config.productionTip = false

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

var email="boitumelotshehla@gmail.com";
var password="Boitumelo@21"

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log("You have signed up");
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorCode+"\t"+errorMessage);
    console.log(errorMessage);
  });
 console.log(app);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
