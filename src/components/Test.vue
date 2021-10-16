<template>
<div>
    <h3>test</h3>
 
    <button @click="Download">Download</button>

</div>
</template>

<script>
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default {
    name:'Test',
    props:['user'],
    methods:{
        Download(){

            const storage = getStorage();
            
            getDownloadURL(ref(storage, 'images/NB2k10xmsRcfR7LM5JXCz9CYPQC2'))
            .then((url) => {
                // `url` is the download URL for 'images/stars.jpg'

                // This can be downloaded directly:
                const xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                const blob = xhr.response.name;
                console.log(blob);
                };
                xhr.open('GET', url);
                xhr.send();

                // Or inserted into an <img> element
                const img = document.getElementById('myimg');
                img.setAttribute('src', url);
            })
            .catch((error) => {
                // Handle any errors
            });


            console.log('ready!!');
        }
    }
  
  
}
</script>