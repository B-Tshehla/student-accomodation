<template>

<div>
    <h3>Finish Up</h3>
    <div >
        <label  class="form-label">Medical History</label>
        <textarea class="form-control" v-model="relation"  rows="3"></textarea>
    </div> 

    <div>
        <label  class="form-label">Profile Picture</label>
            <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupFile01">Upload</label>
                <input type="file" class="form-control" id="inputGroupFile01" accept="image/*">
            </div>
    </div>
</div>

</template>

<script>
export default {
    name:'ProfilePic'
}
</script>