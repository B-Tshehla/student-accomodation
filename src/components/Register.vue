<template>

    <form >
        <h3>Sign Up</h3>

            <div class="form-group">

            <label>Student Number</label>
            <input type="text" class="form-control" placeholder="Last Name">
        </div>

        <div class="form-group">

            <label>Email</label>
            <input type="email" class="form-control" placeholder="Last Name">
        </div>

        <div class="form-group">

            <label>Password</label>
            <input type="password" class="form-control" placeholder="password">
        </div>

        <div class="form-group">

            <label>Cornfirm Password</label>
            <input type="text" class="form-control" placeholder="Cornfrim Password">
        </div>

        <button class="btn btn-primary btn-block">
            Sign Up
        </button>

    </form>

</template>

<script>
export default {
    name: 'Register'
}
</script>