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
      <h3>Upload Documents</h3>
        <div>
            <label  class="form-label">Proof Of Registration</label>
              <div class="input-group mb-3">
                <input type="file" 
                  class="form-control" 
                  @change="proofReg"
                  ref="proofReg"
                  id="inputGroupFile01" 
                  accept="application/PDF">
              </div>
              <b-progress :value=" prgProofReg" v-if="prgProofReg" class="w-75 mb-2" height="4px"></b-progress>
                <div class="prgProofReg" v-if="!prgProofReg==0">{{prgProofReg+"%"}}</div>
                 <div class="alert alert-success d-flex align-items-center" v-if="prgProofReg==100" role="alert">
                  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                  <div>
                    document successfully uploaded
                  </div>
                </div>
                       
          </div>
                <div>
            <label  class="form-label">NFSAS Approval Letter</label>
              <div class="input-group mb-3">
                <input type="file" 
                  class="form-control" 
                  @change="nfAppLet"
                  ref="nfAppLet"
                  id="inputGroupFile01" 
                  accept="application/PDF">
              </div>
              <b-progress :value="prgNfAppLet" v-if="prgNfAppLet" class="w-75 mb-2" height="4px"></b-progress>
             
              <div class="prgNfAppLet" v-if="!prgNfAppLet==0">{{prgNfAppLet+"%"}}</div>
               
               <div class="alert alert-success d-flex align-items-center" v-if="prgNfAppLet==100" role="alert">
                  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                  <div>
                    document successfully uploaded
                  </div>
                </div>
          </div>
                <div>

            <label  class="form-label">Proof Of Physical Address</label>
              <div class="input-group mb-3">
                <input type="file" 
                  class="form-control" 
                  @change="proofAdd"
                  ref="proofAdd"
                  id="inputGroupFile01" 
                  accept="application/PDF">
              </div>
              <b-progress :value="prgProofAdd" v-if="prgProofAdd" class="w-75 mb-2" height="4px"></b-progress>
              <div class="prgProofAdd" v-if="!prgProofAdd==0">{{prgProofAdd+"%"}}</div>
                <div class="alert alert-success d-flex align-items-center" v-if="prgProofAdd==100" role="alert">
                  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                  <div>
                    document successfully uploaded
                  </div>
                </div>  
          </div>
                <div>
            <label  class="form-label"> ID Copy</label>
              <div class="input-group mb-3">
                <input type="file" 
                  class="form-control" 
                  @change="idCopy"
                  ref="idCopy"
                  id="inputGroupFile01" 
                  accept="application/PDF">
              </div>
              <b-progress :value="prgIdCopy" v-if="prgIdCopy" class="w-75 mb-2" height="4px"></b-progress>
          </div>
           <div class="prgIdCopy" v-if="!prgIdCopy==0">{{prgIdCopy+"%"}}</div>
             <div class="alert alert-success d-flex align-items-center" v-if="prgIdCopy==100" role="alert">
                  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                  <div>
                    document successfully uploaded
                  </div>
                </div>
             
                <b-button variant="primary" @click="upload">Upload</b-button>
    </div>
 </div>
</template>
<script>
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc,getFirestore } from "firebase/firestore"; 


export default {
  name:'Upload',
  props:['user'],
  data() {
    return {
      dproofReg:null,
      dnfAppLet:null,
      dproofAdd:null,
      didCopy:null,
      linkReg:null,
      linkAppLet:null,
      linkProofAdd:null,
      linkIdCopy:null,
      prgProofReg:0,
      prgNfAppLet:null,
      prgProofAdd:null,
      prgIdCopy:null,
      
      
    }
  },
  methods:{
      proofReg(){
         this.dproofReg = this.$refs.proofReg.files[0];
        

      },
      nfAppLet(){
        this.dnfAppLet=this.$refs.nfAppLet.files[0];
        
      },
      proofAdd(){
        this.dproofAdd=this.$refs.proofAdd.files[0];
        
      },
      idCopy(){
        this.didCopy=this.$refs.idCopy.files[0]
        
      },
      upload(){
        
      this.uploadProofReg();
      this.uploadNfProof();
      this.uploadProofAdd();
      this.uploadIdCopy();
      
     
      
      },
      uploadProofReg(){
          console.log(this.dproofReg);
         
        
        const storage = getStorage();
        const storageRef = ref(storage, 'ProofRegistration/'+this.user.uid);

        const uploadTask = uploadBytesResumable(storageRef,this.dproofReg);

      
        uploadTask.on('state_changed', 
          (snapshot) => {
          
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.prgProofReg=Math.floor(progress);
            
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
            alert(error);
          }, 
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
              this.linkReg=downloadURL;
              this.linkDataSupp();
            });
          }
        );
      },
      uploadNfProof(){
        console.log(this.dnfAppLet);
        
        const storage = getStorage();
        const storageRef = ref(storage, 'NfsasApproval/'+this.user.uid);

        const uploadTask = uploadBytesResumable(storageRef,this.dnfAppLet);

      
        uploadTask.on('state_changed', 
          (snapshot) => {
        
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.prgNfAppLet=Math.floor(progress);
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

            alert(error);
          }, 
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
              this.linkAppLet= downloadURL;
              this.linkDataSupp();
            });
          }
        );
      },
      uploadProofAdd(){
        console.log(this.dproofAdd);

        const storage = getStorage();
        const storageRef = ref(storage, 'ProofAddress/'+this.user.uid);

        const uploadTask = uploadBytesResumable(storageRef,this.dproofAdd);

        uploadTask.on('state_changed', 
          (snapshot) => {

            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.prgProofAdd=Math.floor(progress);
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
            alert(error);
          }, 
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
              this.linkProofAdd=downloadURL;
              this.linkDataSupp();
            });
          }
        );
      },
      uploadIdCopy(){
        console.log(this.didCopy);
        const storage = getStorage();
        const storageRef = ref(storage, 'IdCopy/'+this.user.uid);

        const uploadTask = uploadBytesResumable(storageRef,this.didCopy);


        uploadTask.on('state_changed', 
          (snapshot) => {
         
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.prgIdCopy=Math.floor(progress);
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
            alert(error);
          }, 
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
              this.linkIdCopy=downloadURL;
              this.linkDataSupp();
            });
          }
        );
      },
      async linkDataSupp(){

          const db = getFirestore();

        if(this.linkReg&&this.linkProofAdd&&this.linkAppLet&&this.linkIdCopy){
          await setDoc(doc(db, "suporting", this.user.uid), {
            proofOfReg:this.linkReg,
            proofOfAddress:this.linkProofAdd,
            nfsasApproval:this.linkAppLet,
            idCopy:this.linkIdCopy,
          });
        }

      },

  }

}
</script>
<style>
.prgProofReg .prgNfAppLet .prgProofAdd .prgProofAdd{
  font-size: 12px;
  padding-bottom: 10px;
}
</style>
