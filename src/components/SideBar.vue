<template>
  <div>

      <div >
        
        <div v-if="user">
            
            
               <h3>Welcome, please wait for admin to allocate a room for you </h3>

        </div>
        <div v-if="!user">
            <h3>You are not logged in</h3> 

        </div>
    </div>
 
    <b-sidebar id="sidebar-1" 
    title="Profile" 
    shadow>
      <div class="px-3 py-2">

          <b-img v-bind:src="this.profile" fluid thumbnail rounded="circle"></b-img>
          
          
        
        <h5 class="card-title">Personal Details</h5>
                            
                            <p class="card-text">
                               <b> Name </b>:
                               {{this.firstName}}
                            </p>
                            <p class="card-text">
                               <b> Surname</b>:
                                 {{this.lastName}}
                            </p>
                             <p class="card-text">
                                <b>Identity Number</b>:
                                {{this.idNum}}
                            </p>
                             <p class="card-text">
                                <b>Contact Number</b>:
                                {{conNum}}
                            </p>
                              
                            <h5 class="card-title">Address Information</h5>
                              
                              <p class="card-text">
                               <b> Street</b>:
                                {{street}}
                            </p>
                             <p class="card-text">
                                <b>Suburb</b>:
                                {{suburb}}
                            </p>
                             <p class="card-text">
                               <b> Postal Code</b>:
                               {{pCode}}
                            </p>
                             <p class="card-text">
                               <b> Province</b>:{{province}}
                            </p>

                            <h5 class="card-title">Primary Next Of Kin Information</h5>
                           
                            <p class="card-text">
 
                               <b> Name</b>:{{kfName}}
                            </p>
                            <p class="card-text">
                               <b> Surname</b>:{{klName}}
                            </p>
                            <p class="card-text">
                               <b> Contact Number</b>:{{kconNum}}
                            </p>
                            <p class="card-text">
                               <b> Realationship</b>:{{realation}}
                            </p>

                              <h5 class="card-title">Secondary Next Of Kin Information</h5>
                           
                            <p class="card-text">
 
                               <b> Name</b>:{{seckfName}}
                            </p>
                            <p class="card-text">
                               <b> Surname</b>:{{secklName}}
                            </p>
                            <p class="card-text">
                               <b> Contact Number</b>:{{seckconNum}}
                            </p>
                            <p class="card-text">
                               <b> Realationship</b>:{{secrealation}}
                            </p>


                            <p class="card-text">
                               <b> Medical History</b>:{{medHistory}}
                            </p>

      </div>
    </b-sidebar>
  </div>
</template>
<script>

import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";


export default {

    name:'sideBar',
      props:['user'],
        created: function () {
    // `this` points to the vm instance
      console.log("Created");
    this.handleUser();
  },
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
            seckfName:'',
            secklName:'',
            seckconNum:'',
            secrealation:'',
            medHistory:'',
            profile:null,
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
            this.seckfName=docSnap.data().seckfName;
            this.secklName=docSnap.data().secklName;
            this.seckconNum=docSnap.data().seckconNum;
            this.secrealation=docSnap.data().secrealation;
            this.medHistory=docSnap.data().medHistory;
            this.profile=docSnap.data().profile;

            
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            }
           

                    

        }
    },

}
</script>