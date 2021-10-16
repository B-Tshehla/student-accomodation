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
        </div>

        <button @click="upload">upload</button>
  </div>
</template>
<script>
import { getStorage, ref, uploadBytes } from "firebase/storage";

export default {
  name:'Upload',
  props:['user'],
  data() {
    return {
      dproofReg:[],
      dnfAppLet:null,
      dproofAdd:null,
      didCopy:null,
      files:[]
    }
  },
  methods:{
      proofReg(){
         this.files = this.$refs.proofReg.files[0];
         console.log(this.files);
         console.log("Proof of Registration");
            const storage = getStorage();
            const storageRef = ref(storage, '/proof/proof');

        // 'file' comes from the Blob or File API
        uploadBytes(storageRef, this.files).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        });
      },
      nfAppLet(){
        this.dnfAppLet=this.$refs.nfAppLet.files;
        console.log(this.dnfAppLet);
      },
      proofAdd(){
        this.dproofAdd=this.$refs.proofAdd.files;
        console.log(this.dproofAdd);
      },
      idCopy(){
        this.didCopy=this.$refs.idCopy.files
        console.log(this.didCopy);
      },
      upload(){
        

    
      }



  }
     

}
</script>