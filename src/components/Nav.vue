<template>
   

<div>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand >
       <router-link to="/" class="navbar-brand">Home</router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <!--for user-->

    <b-collapse id="nav-collapse" is-nav v-if="user">
     
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item >
             <router-link to="/profile" class="nav-link"> Profile </router-link>
          </b-dropdown-item>
          <b-dropdown-item >
            <a href="javascript:void(0)" @click="handleClick" class="nav-link">  Sign Out </a>
            </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item>
            <b-avatar></b-avatar>
          </b-nav-item>
        </b-navbar-nav>
    </b-collapse>

      <!--Not user-->

      <b-collapse id="nav-collapse" is-nav v-if="!user">
      <b-navbar-nav>
        <b-nav-item >
           <router-link to="/Login" class="nav-link">Login </router-link>
        </b-nav-item>
        <b-nav-item>
           <router-link to="/register" class="nav-link"> Sign up </router-link>
        </b-nav-item>
      </b-navbar-nav>

     
      
    </b-collapse>


  </b-navbar>
</div>
</template>

<script>
export default {
    name: 'Nav',
    props:['user'],
    methoods:{
      handleClick(){
        user=null;
      }
    }

}
</script>