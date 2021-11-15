<template>
 <div class="auth-wrapper">    
    <div class="auth-inner">
            <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </symbol>
                <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                </symbol>
                <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </symbol>
            </svg>
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
                errorAlert:null,  
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
                    console.log(userCredential);
                  
                    this.$router.push('/');
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                        
                    this.errorAlert=errorCode.substr(errorCode.indexOf("/")+1,errorCode.length);
                    
                   alert(this.errorAlert);
                });

                

        },
        resetPass(){
           
            

            const auth = getAuth();
            const email = this.email;
            sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
                 alert("An email was sent to"+email);
            })
            .catch((error) => {
                const errorCode = error.code;

                this.errorAlert=errorCode.substr(errorCode.indexOf("/")+1,errorCode.length);

                
                alert(this.errorAlert);

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