<template>
  <form @submit.prevent="handleSubmit">
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

      

    <br>
    <button class="btn btn-primary btn-block" onclick="/Address" >
            Next
      </button>
      <a href="/Address" class="nav-link"> next </a>
  </form>
</template>

<script>
export default {
    name:'Profile'
}
</script>
