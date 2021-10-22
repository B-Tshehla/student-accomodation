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
    <a class="pass" @click="resetPass">forgort password</a>
    </div>
    <br>
    <div>
            <b-button block variant="primary" @click="handleSubmit">Submit</b-button>
    </div>
            
   </b-form>

 

</div>
    
</template>

<script>

import { getAuth, signInWithEmailAndPassword,sendPasswordResetEmail } from "firebase/auth";


export default {
    name:'Login',

    methods:{

        data() {
            return {
                email:null,
                password:null,
                
            }
        },

        handleSubmit(){


            const data ={
                email:this.email,
                password:this.password,
                

            }

            var email=data.email;
            var password=data.password;
                
              

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
        resetPass(){
           
            

            const auth = getAuth();
            const email = "boitumelotshehla@gmail.com";
            sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
                 console.log("password")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorMessage)
                // ..
  });
        },
      


    }

}
</script>

<style>
    label{
        padding-bottom: 5px;
        padding-top: 5px;
        size: 2em   
    }
    .pass{
        cursor: pointer;
        text-decoration: none;
        color: #7f7d7d;
        text-align: right;
    }

  

</style>