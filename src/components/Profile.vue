<template>

 <div>
    <!-- Tabs with card integration -->
    <b-card no-body>
      <b-tabs v-model="tabIndex" small card>
        <b-tab title="First" :title-link-class="linkClass(0)" active>
            <form >
                <h3>Personal information </h3>

                <div class="form-group">
                        <label>First Name:</label>
                        <input type="text" class="form-control" v-model="fName" placeholder="First Name">
                    </div>

                <div class="form-group">
                        <label>Last Name:</label>
                        <input type="Last Name" class="form-control" v-model="lName" placeholder="Last Name">
                    </div>

                <div class="form-group">
                        <label>Identity Number:</label>
                        <input type="text" class="form-control" v-model="idNum" placeholder="Identity Number">
                    </div> 
                <div class="form-group">
                        <label>Contact Number:</label>
                        <input type="text" class="form-control" v-model="conNum" placeholder="Contact Number">
                    </div> 

                

               
            </form>


        </b-tab>
        <b-tab title="Second" :title-link-class="linkClass(1)">
            <form>
                <h3>Home Address</h3>

                <div class="form-group">
                        <label>Street:</label>
                        <input type="text" class="form-control" v-model="street" placeholder="Street">
                    </div>

                <div class="form-group">
                        <label>Town/suburb:</label>
                        <input type="Last Name" class="form-control" v-model="suburb" placeholder="Town/suburb">
                    </div>

                <div class="form-group">
                        <label>postal code:</label>
                        <input type="text" class="form-control" v-model="pCode" placeholder="postal code">
                    </div>
                
                <div class="form-group">
                        <label>province:</label>
                        <input type="text" class="form-control" v-model="province" placeholder="province">
                    </div>  
                
               
            </form>
        </b-tab>
        <b-tab title="third" :title-link-class="linkClass(2)">
             <form>
                    <h3>Next Of Kin</h3>

                    <div class="form-group">
                            <label>First Name:</label>
                            <input type="text" class="form-control" v-model="kfName" placeholder="First Name">
                        </div>

                    <div class="form-group">
                            <label class="form-label">Last Name:</label>
                            <input type="text" class="form-control" v-model="klName" placeholder="Last Name">
                        </div>

                    <div class="form-group">
                            <label class="form-lable">Contact Number:</label>
                            <input type="text" class="form-control" v-model="kconNum" placeholder="Contact details">
                        </div>
                    
                    <div class="form-group">
                            <label class="form-label">Relationship:</label>
                            <input type="text" class="form-control" v-model="realation" placeholder="Relationship">
                        </div> 
                
                
                </form>

        </b-tab>
        <b-tab title="last" :title-link-class="linkClass(3)">
             <form  @submit.prevent="handleSubmit">
                <h3>Finish Up</h3>
                <div >
                    <label  class="form-label">Medical History</label>
                    <textarea class="form-control" v-model="medHistory"  rows="3"></textarea>
                </div> 

                <div>
                    <label  class="form-label">Profile Picture</label>
                        <div class="input-group mb-3">
                            <label class="input-group-text" for="inputGroupFile01">Upload</label>
                            <input type="file" class="form-control" id="inputGroupFile01" accept="image/*">
                        </div>
                </div>
            </form>
           <b-button variant="primary" @click="handleSubmit">Submit</b-button>
        </b-tab>
      </b-tabs>
    </b-card>

    <!-- Control buttons-->
    <div class="text-center">
      <b-button-group class="mt-2">
        <b-button @click="tabIndex--">Previous</b-button>
        <b-button @click="tabIndex++">Next</b-button>
      </b-button-group>

      <div class="text-muted">Current Tab: {{ tabIndex+1 }}</div>
    </div>
  </div>

</template>

<script>

import { collection, addDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";

export default {

    name:'Profile',

    data() {
      return {
        tabIndex: 1,
        firstName:'',
        lastName:'',
        idNum:'',
        conNum:'',
        street:'',
        suburb:'',
        pCode:'',
        province:'',
        kfName:'',
        kflName:'',
        kconNum:'',
        realation:'',
        medHistory:''
      }
    },

    methods: {

      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-primary', 'text-light']
        } else {
          return ['bg-light', 'text-info']
        }
      },

     async handleSubmit(){
        
     
          
       // console.log(data);
        const db = getFirestore();
        try {
                const docRef = await addDoc(collection(db, "users"), {
                firstName:this.fName,
                lastName:this.lName,
                idNum:this.idNum,
                conNum:this.conNum,
                street:this.street,
                suburb:this.suburb,
                pCode:this.pCode,
                province:this.province,
                kfName:this.kfName,
                klName:this.klName, 
                kconNum:this.kconNum,
                realation:this.realation,
                medHistory:this.medHistory
                });
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
            }


 
      },


    }
}
</script>
