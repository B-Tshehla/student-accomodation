<template>
   <div id="app">
     <Nav :user="user"/>
      
          
    <router-view :user="user"/>
         
        

  </div>
</template>

<script> 
    import Nav  from './components/Nav.vue';
    import { getAuth, onAuthStateChanged } from "firebase/auth";
  
export default {
  name: 'App',
  components:{
    Nav
  },
    data() {   
        return {
            user:null,
        }
        
    },

   async  created() {

           const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            
            // ...

            this.user=user;

           
        } else {
            // User is signed out
            // ...

            console.log("You have not signed in. please click login");
        }
        });
            
        },
  
}

</script>

<style>
 
 
 /*@import url('https:fonts.googleapis.com/css?family=fira+Sans:400,500,600,700,800');*/

    *{
      box-sizing: border-box;
    }
  /*html { 
  background: url("assets//background.jpg") no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}*/
   body{
    background-image: url("assets//background.jpg")  !important;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  body{
    min-height: 100vh;
    display: flex;
    font-weight: 400;
    font-family: 'Fira Sans',sans-serif;
  }

  h1,h2,h3,h4,h5,h6, label,span{
    font-weight: 500;
    font-family: 'Fira Sans',sans-serif;
  }

  body,html,#app,#root,.auth-wrapper{
    width: 100%;
    height: 100%;
  }

#app{
  text-align: center;
}

.navbar-light{
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba( 34 ,35,58,0.2);
}



.custom-control-label{
  font-weight: 400;
}

.forgot-password ,.forgot-password a{
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7f7d7d;
  margin: 0;
}

.forgot-password a {
  color: #167bff; 
}
</style>