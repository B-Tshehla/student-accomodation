<template>
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
            <input type="text" class="form-control" v-model="pCodde" placeholder="postal code">
        </div>
    
     <div class="form-group">
            <label>province:</label>
            <input type="text" class="form-control" v-model="province" placeholder="province">
        </div>  
    <br>
    <button class="btn btn-primary btn-block">
            Next
      </button>
   <a href="/NxtKin" class="nav-link"> next </a>
  </form>
</template>

<script>
export default {
    name: 'Address'
}
</script>