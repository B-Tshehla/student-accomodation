<template>
  <div>
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
              <b-button variant="primary" @click="upload">Upload</b-button>
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
      prgProofReg:null,
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
            this.prgProofReg=progress;
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
            this.prgNfAppLet=progress;
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
            this.prgProofAdd=progress;
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
            this.prgIdCopy=progress;
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

      }



  }
     

}
</script>