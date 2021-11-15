<template>

<div class="auth-wrapper">    
    <div class="auth-inner">
        <b-form @submit.prevent>
            <h3>Sign up</h3>
            <div>
                    <label for="email">Email:</label>
                        <b-form-input  
                            type="email" 
                            id="email" 
                            placeholder="Email"
                            required
                            v-model="email">
                        </b-form-input>
                            <b-form-text id="password-help-block">
                                We'll never share your email with anyone else.
                            </b-form-text>
            </div>
            
        
            <div>
                <label for="text-password">Password</label>
                <b-form-input 
                type="password" 
                id="text-password" 
                placeholder="Password"
                v-model="password">
                </b-form-input>
                <b-form-text id="password-help-block">
                Your password must be 8-20 characters long, contain letters and numbers, and must not
                contain spaces, special characters, or emoji.
                </b-form-text>
                    <div>
                <label for="text-password">Cornfirm Password</label>
                <b-form-input 
                type="password" 
                id="text-password" 
                placeholder="Cornfirm Password"
                v-model=" password_cornfirm">
                </b-form-input>
            
            </div>
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

   import { getAuth, createUserWithEmailAndPassword,sendEmailVerification,signOut } from "firebase/auth";
   


export default {
    name: 'Register',
    methods:{

        data() {
            return {
               
                email:null,
                password:null,
                password_cornfirm:null,
                errorAlert:null
            }
        },
        
        handleSubmit(){
        
            const data = {

                email:this.email,
                password:this.password,
                password_cornfirm:this.password_cornfirm
            }
            
            console.log(data)

                if(data.password!==data.password_cornfirm)
            {
                alert("Password and Password cornfirm are not the same, Please resubmit");
            }else
            {
                    const auth = getAuth();
                    var email=data.email;
                    var password=data.password;

                    

                createUserWithEmailAndPassword(auth, email,password)
                .then((userCredential) => {
                    // Signed in 
                  const  user = userCredential.user;
                  console.log(user);
                    // ...
                        const auth = getAuth();
                        sendEmailVerification(auth.currentUser)
                        .then(() => {
                            // Email verification sent!
                            // ...
                             alert("An email has been sent to "+email+". Please verify your email address");
                              this.$router.push('/login');
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    this.errorAlert=errorCode.substr(errorCode.indexOf("/")+1,errorCode.length);
                    // ..
                    alert(this.errorAlert);
                    
                });
           }
        },
        signOut(){
        const auth = getAuth();
          signOut(auth).then(() => {
            // Sign-out successful.
            location.reload(); 
          }).catch((error) => {
           const errorCode = error.code;
                    this.errorAlert=errorCode.substr(errorCode.indexOf("/")+1,errorCode.length);
                    // ..
                    alert(this.errorAlert);
          });
        }
     
    }
}
</script>