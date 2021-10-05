<template>
    <div>
  <b-form @submit.prevent>
      <h3>Sign in</h3>
      <div>
            <label for="email">Email:</label>
                <b-form-input  
                    type="email" 
                    id="email" 
                    placeholder="Email"
                    required
                    v-model="email">
                </b-form-input>
                
      </div>
      
   
    <div>
        <label for="text-password">Password</label>
        <b-form-input 
        type="password" 
        id="text-password" 
        placeholder="Password"
        v-model="password">
        </b-form-input>
     
       
    </div>

    <div>
            <b-button block variant="primary" @click="handleSubmit">Submit</b-button>
    </div>
            
   </b-form>

    <b-modal ref="my-modal" hide-footer title="error message">
      <div class="d-block  text-center">
        <h3>{{"hey"}}</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
      
    </b-modal>

</div>
    
</template>

<script>

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
    name:'Login',

    methods:{

        data() {
            return {
                email:'',
                password:'',
                errorCode:'hey'
            }
        },

        handleSubmit(){


            const data ={
                email:this.email,
                password:this.password,
                

            }

            var email=data.email;
            var password=data.password;
                
                this.$refs['my-modal'].show()

            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                  
                    this.$router.push('/');
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                   // const errorMessage = error.message;
                    this.errorCode=errorCode;

                  //  alert(errorCode+"\t\t"+errorMessage);
                });

                

        },
        hideModal() {
        this.$refs['my-modal'].hide();
        }


    }

}
</script>

<style>
    label{
        padding-bottom: 5px;
        padding-top: 5px;
        size: 2em   
    }

  

</style>