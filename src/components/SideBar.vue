<template>
  <div>
    <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-1" 
    title="Profile" 
    shadow>
      <div class="px-3 py-2">

          <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail rounded="circle"></b-img>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        
      </div>
    </b-sidebar>
  </div>
</template>
<script>
export default {
    name:'sideBar'
}
</script>