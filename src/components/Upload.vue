<template>
  <div>
    <h3>Upload Documents</h3>
       <div>
          <label  class="form-label">Proof Of Registration</label>
            <div class="input-group mb-3">
              <input type="file" 
                class="form-control" 
                @change="previewFiles"
                ref="myFiles"
                id="inputGroupFile01" 
                accept="image/*">
            </div>
        </div>
               <div>
          <label  class="form-label">Nfsas Approval Letter</label>
            <div class="input-group mb-3">
              <input type="file" 
                class="form-control" 
                @change="previewFiles"
                ref="myFiles"
                id="inputGroupFile01" 
                accept="image/*">
            </div>
        </div>
               <div>
          <label  class="form-label">Proof Of Physical Address</label>
            <div class="input-group mb-3">
              <input type="file" 
                class="form-control" 
                @change="previewFiles"
                ref="myFiles"
                id="inputGroupFile01" 
                accept="image/*">
            </div>
        </div>
               <div>
          <label  class="form-label"> <b>ID Copy</b></label>
            <div class="input-group mb-3">
              <input type="file" 
                class="form-control" 
                @change="previewFiles"
                ref="myFiles"
                id="inputGroupFile01" 
                accept="pdf/*">
            </div>
        </div>
  </div>
</template>
<script>
export default {
  name:'Upload',

}
</script>