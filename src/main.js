import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
//import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)



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

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
 
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
