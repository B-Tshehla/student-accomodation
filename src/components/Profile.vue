<template>

 <div class="auth-wrapper-app">    
        <div class="auth-inner-app">
          <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </symbol>
            <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
            </symbol>
            <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </symbol>
          </svg>
          <!-- Tabs with card integration -->
          <b-card no-body>
            <b-tabs v-model="tabIndex" small card>
              <b-tab title="Personal Info" :title-link-class="linkClass(0)" active>
                  <form >
                      <h3>Personal information </h3>

                      <div class="form-group">
                              <label>First Name:</label>
                              <input type="text" class="form-control"   v-model="fName" placeholder="First Name">
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
              <b-tab title="Address Info" :title-link-class="linkClass(1)">
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
              <b-tab title="Next Of Kin 1" :title-link-class="linkClass(2)">
                  <form>
                          <h3>Primary Next Of Kin</h3>

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
                                  <label class="form-lable">Work Contact:</label>
                                  <input type="text" class="form-control" v-model="kconNum" placeholder="Contact details">
                              </div>
                          
                          <div class="form-group">
                                  <label class="form-label">Relationship:</label>
                                  <input type="text" class="form-control" v-model="krealation" placeholder="Relationship">
                              </div> 
                      
                      
                      </form>

              </b-tab>
              <b-tab title="Next Of Kin" :title-link-class="linkClass(3)">
                  <form>
                          <h3>Secondary Next Of Kin</h3>

                          <div class="form-group">
                                  <label>First Name:</label>
                                  <input type="text" class="form-control" v-model="seckfName" placeholder="First Name">
                              </div>

                          <div class="form-group">
                                  <label class="form-label">Last Name:</label>
                                  <input type="text" class="form-control" v-model="secklName" placeholder="Last Name">
                              </div>

                          <div class="form-group">
                                  <label class="form-lable">Contact Number:</label>
                                  <input type="text" class="form-control" v-model="seckconNum" placeholder="Contact details">
                              </div>
                              <div class="form-group">
                                  <label class="form-lable">Work Contact:</label>
                                  <input type="text" class="form-control" v-model="seckconNum" placeholder="Contact details">
                              </div>
                          
                          <div class="form-group">
                                  <label class="form-label">Relationship:</label>
                                  <input type="text" class="form-control" v-model="seckrealation" placeholder="Relationship">
                              </div> 
                      
                      
                      </form>

              </b-tab>
              <b-tab title="Medical History" :title-link-class="linkClass(4)">
                  <form  @submit.prevent="handleSubmit">
                      <h3>Finish Up</h3>
                      <div >
                          <label  class="form-label">Medical History</label>
                          <textarea class="form-control" v-model="medHistory"  rows="3"></textarea>
                      </div> 

                      <div>
                          <label  class="form-label">Profile Picture</label>
                              <div class="input-group mb-3">
                                  <input type="file" 
                                  class="form-control" 
                                  @change="previewFiles"
                                  ref="myFiles"
                                  id="inputGroupFile01" 
                                  accept="image/*">
                              </div>
                              <div class="prgProfile" v-if="!prgProfile==0">{{prgProfile+"%"}}</div>
                            <b-progress :value="prgProfile" v-if="prgProfile" class="w-75 mb-2" height="4px"></b-progress> 
                            <div class="alert alert-success d-flex align-items-center" v-if="prgProfile==100" role="alert">
                            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                            <div>
                              document successfully uploaded
                            </div>
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
 </div>

</template>

<script>


import { doc, setDoc,getDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import { getStorage, ref,uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default {

    name:'Profile',
     props:['user'],
    data() {
      return {
        tabIndex: 1,
        fName:'',
        lName:'',
        idNum:'',
        conNum:'',
        street:'',
        suburb:'',
        pCode:'',
        province:'',
        kfName:'',
        klName:'',
        kconNum:'',
        kWorkCon:'',
        krealation:'',
        seckfName:'',
        secklName:'',
        seckconNum:'',
        seckWorkCon:'',
        seckrealation:'',
        medHistory:'',
        profile:null,
        files: [],
        prgProfile:0,
      }
    },
      created: function () {
    // `this` points to the vm instance
      console.log("Created");
    this.handleUpdate();
    
  },

    methods: {

      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-primary', 'text-light']
        } else {
          return ['bg-light', 'text-info']
        }
      },

      handleSubmit(){

         if(this.files[0]!=null){
           this.postProfile();
         }else
         {
           this.handleUpload();
         }
             
      },
          previewFiles() {
            this.files = this.$refs.myFiles.files;
            console.log(this.files[0]);
        },

      async  handleUpdate(){
            const db = getFirestore();
            const userId=this.user.uid;
            const docRef = doc(db, "users", userId);
            const docSnap = await getDoc(docRef);
           

            if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
                  this.fName=docSnap.data().firstName;
                  this.lName=docSnap.data().lastName;
                  this.idNum=docSnap.data().idNum;
                  this.conNum=docSnap.data().conNum;
                  this.street=docSnap.data().street;
                  this.suburb=docSnap.data().suburb;
                  this.pCode=docSnap.data().pCode;
                  this.province=docSnap.data().province;
                  this.kfName=docSnap.data().kfName;
                  this.klName=docSnap.data().klName;
                  this.kconNum=docSnap.data().kconNum;
                  this.krealation=docSnap.data().realation;
                  this.seckfName=docSnap.data().seckfName;
                  this.secklName=docSnap.data().secklName;
                  this.seckconNum=docSnap.data().seckconNum;
                  this.seckrealation=docSnap.data().secrealation;
                  this.medHistory=docSnap.data().medHistory;
                  this.profile=docSnap.data().profile;
                 
                  this.dataHandling();

                  
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            }
           
      },postProfile(){
         
            const userId=this.user.uid;
            const storage = getStorage();
            const storageRef = ref(storage, 'images/'+userId);

            const uploadTask = uploadBytesResumable(storageRef, this.files[0]);

            
            uploadTask.on('state_changed', 
              (snapshot) => {

                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                this.prgProfile=Math.floor(progress);
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                  case 'paused':
                    console.log('Upload is paused');
                    break;
                  case 'running':
                    console.log('Upload is running');
                    break;
                }
              }, 
              (error) => {
                // Handle unsuccessful uploads
                alert(error)
              }, 
              () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  this.profile=downloadURL;
                  console.log('File available at', downloadURL);
                  this.handleUpload();
                });
              }
            );

      },
     async handleUpload(){
            const db = getFirestore();
            const userId=this.user.uid;
         // Add a new document in collection "users"
        await setDoc(doc(db, "users", userId), {

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
                realation:this.krealation,
                seckfName:this.seckfName,
                secklName:this.secklName, 
                seckconNum:this.seckconNum,
                secrealation:this.seckrealation,
                medHistory:this.medHistory,
                profile:this.profile
                
        });
         console.log("Submitted");
         this.$router.push('/upload');
      },
      dataHandling(){
      
      this.initCap(this.fName);
        
        
      },
      initCap(param){
        
        var first ='';
        var rest ='';

        first=param.substr(0,1);
        rest= param.substr(1,param.length);
        
        first.toLowerCase();
        rest.toUpperCase();

        
        console.log(first+rest);

      },


    }
}
</script>
<style>
  .auth-wrapper-app{
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    padding-top: 50px;
    }
    .auth-inner-app{
    width: 1200px;
    max-width:100%;
    margin: auto;
    background-color: #ffffff;
    box-shadow: 0px 14px 80px rgba( 34 ,35,58,0.2); 
    padding: 40px 55px 45px 55px;
    border-radius: 5px;
    transition: all .3s;
    }

    .auth-wrapper-app .form-control:focus{
    border-color: #167bff;
    box-shadow: none;
    }
    .profile-pic{
        width: 200px;
        height: 240px;
    }
    .prgProfile{
      font-size: 12px;
    }
</style>

