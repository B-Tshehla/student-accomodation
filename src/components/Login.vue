<template>
 <div class="auth-wrapper">    
    <div class="auth-inner">
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
              
                  
                    this.$router.push('/');
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                   
                    this.errorCode=errorCode;

                   alert(errorCode);
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
                

                alert(errorCode);
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
    .auth-wrapper{
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    }
    .auth-inner{
    width: 450px;
    max-width:100%;
    margin: auto;
    background-color: #ffffff;
    box-shadow: 0px 14px 80px rgba( 34 ,35,58,0.2); 
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
    }

    .auth-wrapper .form-control:focus{
    border-color: #167bff;
    box-shadow: none;
    }

    .auth-wrapper h3{
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
    }
    

  

</style>