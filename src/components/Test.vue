<template>
<div>
    <h3>test</h3>
   <input type="file" id="file" ref="myFiles" class="custom-file-input" 
  @change="previewFiles" multiple>
    <button @click="upload">Upload</button>
</div>
</template>

<script>
import { getStorage, ref, uploadBytes } from "firebase/storage";

export default {
    name:'Test',
    props:['user'],
    data() {
        return {
            files: [],
        }
    },
    methods:{
        upload(){
            const storage = getStorage();
            const storageRef = ref(storage, '/images/'+this.user.uid);
     
            
            // 'file' comes from the Blob or File API
            uploadBytes(storageRef,this.files[0]).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            });
        },
          previewFiles() {
            this.files = this.$refs.myFiles.files;
            console.log(this.files[0]);
            
        }
    }
}
</script>