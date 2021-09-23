<template>
    <div >
        
        <div v-if="user">
            
            
            <div class="card justify-content-center"  style="width: 20rem;">
                <img class="img-thumbnail" :src="require('../../images/profile_icon.png')" alt="Thumbnail image">
              <!--  <img :src="require('../../images/profile_icon.png')" class="card-img-top" alt="Profile Picture"> -->
                    <div class="card-body">
                        <h5 class="card-title">{{user.email}}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                            
                                <a href="#" @click="handleUser" class="btn btn-primary">Go somewhere</a>
                    </div>

                    

            </div>   
            


        </div>
        <div v-if="!user">
            <h3>You are not logged in</h3> 

        </div>
    </div>
</template>

<script>
 
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

export default {
    
    name:'Home',
    props:['user'],
    methods:{
      async  handleUser(){
            const db = getFirestore();
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.get()}`);
            });
        }
    }

     

       
}
</script>

