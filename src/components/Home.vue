<template>
    <div >
        
        <div v-if="user">
            
            
            <div class="card justify-content-center"  style="width: 20rem;">
             <!--   <img class="img-thumbnail" :src="require('../../images/profile_icon.png')" alt="Thumbnail image"> -->
              <!--  <img :src="require('../../images/profile_icon.png')" class="card-img-top" alt="Profile Picture"> -->
                    <div class="card-body">
                        <h5 class="card-title">Personal Details</h5>
                            
                            <p class="card-text">
                                Name:{{this.firstName}}
                            </p>
                            <p class="card-text">
                                Surname:{{this.lastName}}
                            </p>
                             <p class="card-text">
                                Identity Number:{{this.idNum}}
                            </p>
                             <p class="card-text">
                                Contact Number:{{conNum}}
                            </p>

                            <h5 class="card-title">Address Information</h5>
                              <p class="card-text">
                                Street:{{street}}
                            </p>
                             <p class="card-text">
                                Suburb:{{suburb}}
                            </p>
                             <p class="card-text">
                                Postal Code:{{pCode}}
                            </p>
                             <p class="card-text">
                                Province:{{province}}
                            </p>

                            <h5 class="card-title">Next Of Kin Information</h5>
                            <p class="card-text">
                                Name:{{kfName}}
                            </p>
                            <p class="card-text">
                                Surname:{{klName}}
                            </p>
                            <p class="card-text">
                                Contact Number:{{kconNum}}
                            </p>
                            <p class="card-text">
                                Realationship:{{realation}}
                            </p>
                            <p class="card-text">
                                Medical History:{{medHistory}}
                            </p>


                           
                                <a href="#" @click="handleUser" class="btn btn-primary">Get Data</a>
                    </div>

                    

            </div>   
            


        </div>
        <div v-if="!user">
            <h3>You are not logged in</h3> 

        </div>
    </div>
</template>

<script>

import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export default {
    
    name:'Home',
    props:['user'],
    data() {
        return {
            firstName:'',
            lastName:'',
            idNum:'',
            conNum:'',
            street:'',
            suburb:'',
            pCode:'',
            province:'',
            kfName:'',
            klName:'',
            kconNum:'',
            realation:'',
            medHistory:''
        }
    },
    methods:{
      async  handleUser(){
            const db = getFirestore();
            const userId=this.user.uid;
            const docRef = doc(db, "users", userId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            this.firstName=docSnap.data().firstName;
            this.lastName=docSnap.data().lastName;
            this.idNum=docSnap.data().idNum;
            this.conNum=docSnap.data().conNum;
            this.street=docSnap.data().street;
            this.suburb=docSnap.data().suburb;
            this.pCode=docSnap.data().pCode;
            this.province=docSnap.data().province;
            this.kfName=docSnap.data().kfName;
            this.klName=docSnap.data().klName;
            this.kconNum=docSnap.data().kconNum;
            this.realation=docSnap.data().realation;
            this.medHistory=docSnap.data().medHistory;
            
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            }
           

                    

        }
    }

     

       
}
</script>

