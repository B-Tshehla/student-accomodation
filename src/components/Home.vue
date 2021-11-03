<template>
    
    <div class="auth-wrapper-home">    
        <div class="auth-inner-home">
        
            <div v-if="user">
                
                
             <div >

                 <h3>
                     Profile
                 </h3>

          <b-img class="profile-pic" v-bind:src="this.profile" ></b-img>
          
          
        
        <h5 >Personal Details</h5>
                            
                            <p >
                               <b> Name </b>:
                               {{this.firstName}}
                            </p>
                            <p >
                               <b> Surname</b>:
                                 {{this.lastName}}
                            </p>
                             <p>
                                <b>Identity Number</b>:
                                {{this.idNum}}
                            </p>
                             <p>
                                <b>Contact Number</b>:
                                {{conNum}}
                            </p>
                              
                            <h5>Address Information</h5>
                              
                              <p>
                               <b> Street</b>:
                                {{street}}
                            </p>
                             <p>
                                <b>Suburb</b>:
                                {{suburb}}
                            </p>
                             <p>
                               <b> Postal Code</b>:
                               {{pCode}}
                            </p>
                             <p>
                               <b> Province</b>:{{province}}
                            </p>

                            <h5>Primary Next Of Kin Information</h5>
                           
                            <p>
 
                               <b> Name</b>:{{kfName}}
                            </p>
                            <p>
                               <b> Surname</b>:{{klName}}
                            </p>
                            <p>
                               <b> Contact Number</b>:{{kconNum}}
                            </p>
                            <p>
                               <b> Realationship</b>:{{realation}}
                            </p>

                              <h5>Secondary Next Of Kin Information</h5>
                           
                            <p>
 
                               <b> Name</b>:{{seckfName}}
                            </p>
                            <p>
                               <b> Surname</b>:{{secklName}}
                            </p>
                            <p>
                               <b> Contact Number</b>:{{seckconNum}}
                            </p>
                            <p>
                               <b> Realationship</b>:{{secrealation}}
                            </p>


                            <p>
                               <b> Medical History</b>:{{medHistory}}
                            </p>

      </div>

            </div>
            <div v-if="!user">
                <h3>You are not logged in</h3> 

            </div>
        </div>
    </div>
</template>

<script>

import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export default {
    
    name:'Home',
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

<style>
  .auth-wrapper-home{
    display: flex;
    justify-content: center;
    flex-direction: column;
   
    padding-top: 50px;
    }
    .auth-inner-home{
    width: 600px;
    max-width:100%;
    margin: auto;
    background-color: #ffffff;
    box-shadow: 0px 14px 80px rgba( 34 ,35,58,0.2); 
    padding: 40px 55px 45px 55px;
    border-radius: 5px;
    transition: all .3s;
    }

    .auth-wrapper-home .form-control:focus{
    border-color: #167bff;
    box-shadow: none;
    }
    .profile-pic{
        width: 200px;
        height: 240px;
        text-align: center;
        border-radius: 50%;
      
    }
    p{
        text-align: left;
    }
</style>

