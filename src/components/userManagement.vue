<template>
    <div>
        <h3>UserMangement</h3>
        <b-button @click="ManageUser">send</b-button>
    </div>
</template>

<script>
import { getAuth, sendEmailVerification } from "firebase/auth";

export default {
    name:'ManageUser',
    props:['user'],
     methods:{
         ManageUser(){
            const auth = getAuth();
            sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
                // ...
                console.log("Email sent");
            }); 
         }
     }
}
</script>