
<template>
    <form>
    <h3>Next Of Kin</h3>

    <div class="form-group">
            <label>First Name:</label>
            <input type="text" class="form-control" v-model="fName" placeholder="First Name">
        </div>

    <div class="form-group">
            <label class="form-label">Last Name:</label>
            <input type="text" class="form-control" v-model="lName" placeholder="Last Name">
        </div>

    <div class="form-group">
            <label class="form-lable">Contact Number:</label>
            <input type="text" class="form-control" v-model="conNum" placeholder="Contact details">
        </div>
    
     <div class="form-group">
            <label class="form-label">Relationship:</label>
            <input type="text" class="form-control" v-model="relation" placeholder="Relationship">
        </div> 
   
   
    
    <button class="btn btn-primary btn-block" >
            Next
      </button>
  
  </form>
</template>

<script>
export default {
    name:'NxtKin'
}
</script>