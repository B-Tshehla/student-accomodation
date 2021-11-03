import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";





// Import Bootstrap an BootstrapVue CSS files (order is important)
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAecUgcC2uJt384wXhwWDPGg7oFzFZSvgQ",

  authDomain: "accomodationapp-fec16.firebaseapp.com",

  projectId: "accomodationapp-fec16",
 

  storageBucket: "gs://accomodationapp-fec16.appspot.com",

  messagingSenderId: "504433362980",

  appId: "1:504433362980:web:256e5cee9b95a36d9070b1"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(app);


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
 
new Vue({
  app,
  db,
  router,
  storage,
  render: h => h(App),
}).$mount('#app')
