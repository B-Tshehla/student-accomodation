<template>
    <div >
        
        <div v-if="user">
            
            
               <h3>Welcome, please wait for admin to allocate a room for you </h3>

        </div>
        <div v-if="!user">
            <h3>You are not logged in</h3> 

        </div>
    </div>
</template>

<script>



export default {
    
    name:'Home',
    props:['user']      
}
</script>

