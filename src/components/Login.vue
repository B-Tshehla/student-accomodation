<template>
    <form @submit.prevent="handleSubmit" >

        <h3>Login</h3>
   
 
    <div class="form-group">

        <label>
            <b-icon icon="person-fill" scale="1.5" ></b-icon>
            Email
        </label>
        <input type="email"  v-model="email" class="form-control" placeholder="Emai"/>

    </div>
    <div class="form-group">

        <label >
            <b-icon icon="shield-lock-fill" scale="1.25"  ></b-icon>
            Password
        </label>
        <input type="password" v-model="password" class="form-control" placeholder="Password"/>

    </div>

 

    <button class="btn btn-primary btn-block">Login</button>

    </form>
        
    
</template>

<script>

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
    name:'Login',

    methods:{

        data() {
            return {
                email:'',
                password:''
            }
        },

        handleSubmit(){


            const data ={
                email:this.email,
                password:this.password
            }

            var email=data.email;
            var password=data.password;

            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    alert("Welcom back ",user.email);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    alert(errorCode+"\t\t"+errorMessage);
                });

        }


    }

}
</script>

<style>
    label{
        padding-bottom: 5px;
        padding-top: 5px;
        size: 2em;
        
    }

  

</style>