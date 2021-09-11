<template>

    <form @submit.prevent="handleSubmit" >
        <h3>Sign Up</h3>

           
        <div class="form-group">

            <label>Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email">
        </div>

        <div class="form-group">

            <label>Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Password">
        </div>

        <div class="form-group">

            <label>Cornfirm Password</label>
            <input type="password" class="form-control" v-model="password_cornfirm" placeholder="Cornfrim Password">
        </div>

        <button class="btn btn-primary btn-block">
            Sign Up
        </button>

    </form>

</template>

<script>

   import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
   


export default {
    name: 'Register',
    methods:{

        data() {
            return {
               
                email:'',
                password:'',
                password_cornfirm:''
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
                    // ...
                    console.log("You have signed up");
                    console.log(user.email);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    alert(errorCode+"\t"+errorMessage);
                    console.log(errorMessage);
                });
           }
          
        }
    }
}
</script>