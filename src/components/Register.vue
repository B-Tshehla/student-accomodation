<template>

    <form @submit.prevent="handleSubmit" >
        <h3>Sign Up</h3>

            <div class="form-group">

            <label>Student Number</label>
            <input type="text" class="form-control" v-model="student_No" placeholder="Student Number">
        </div>

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
import axios from 'axios'
export default {
    name: 'Register',
    methods:{

        data() {
            return {
                student_No:'',
                email:'',
                password:'',
                password_cornfirm:''
            }
        },
        
        handleSubmit(){
        
            const data = {

                student_No:this.student_No,
                email:this.email,
                password:this.password,
                password_cornfirm:this.password_cornfirm
            }
            
            console.log(data)

         axios.post('http://localhost:8000/register',data)

         .then(
             res =>{
                 console.log(res);
             }
         ).catch(
             err=>{
                 console.log(err);
             }
         )
        }
    }
}
</script>