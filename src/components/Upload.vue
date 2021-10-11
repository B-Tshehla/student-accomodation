<template>
  <div>
    <b-form class="position-relative p-3" @submit.prevent="onSubmit">
        
        <h3>Upload Documents</h3>

      <b-form-group label="Image" label-for="form-image" label-cols-lg="4">
        <b-input-group>
          <b-input-group-prepend is-text>
            <b-icon icon="image-fill"></b-icon>
          </b-input-group-prepend>
          <b-form-file id="form-image" :disabled="busy" accept="image/*"></b-form-file>
        </b-input-group>
      </b-form-group>
      
      <div class="d-flex justify-content-center">
         <b-button ref="submit" type="submit" :disabled="busy">Submit</b-button>
         <b-button @click="upload" >Upload</b-button>
      </div>

      <b-overlay :show="busy" no-wrap @shown="onShown" @hidden="onHidden">
        <template #overlay>
          <div v-if="processing" class="text-center p-4 bg-primary text-light rounded">
            <b-icon icon="cloud-upload" font-scale="4"></b-icon>
            <div class="mb-3">Processing...</div>
            <b-progress
              min="1"
              max="20"
              :value="counter"
              variant="success"
              height="3px"
              class="mx-n4 rounded-0"
            ></b-progress>
          </div>
          <div
            v-else
            ref="dialog"
            tabindex="-1"
            role="dialog"
            aria-modal="false"
            aria-labelledby="form-confirm-label"
            class="text-center p-3"
          >
            <p><strong id="form-confirm-label">Are you sure?</strong></p>
            <div class="d-flex">
              <b-button variant="outline-danger" class="mr-3" @click="onCancel">
                Cancel
              </b-button>
              <b-button variant="outline-success" @click="onOK">OK</b-button>
            </div>
          </div>
        </template>
      </b-overlay>
    </b-form>
  </div>
</template>

<script>

   import { getStorage, ref } from "firebase/storage";     
      

  export default {
      name:'Upload',
    data() {
      return {
        busy: false,
        processing: false,
        counter: 1,
        interval: null
      }
    },
    beforeDestroy() {
      this.clearInterval()
    },
    methods: {
      clearInterval() {
        if (this.interval) {
          clearInterval(this.interval)
          this.interval = null
        }
      },
      onShown() {
        // Focus the dialog prompt
        this.$refs.dialog.focus()
      },
      onHidden() {
        // In this case, we return focus to the submit button
        // You may need to alter this based on your application requirements
        this.$refs.submit.focus()
      },
      onSubmit() {
        this.processing = false
        this.busy = true
      },
      onCancel() {
        this.busy = false
      },
      onOK() {
        this.counter = 1;
        this.processing = true;
        this.upload();
  
        // Simulate an async request
        this.clearInterval()
        this.interval = setInterval(() => {
          if (this.counter < 20) {
            this.counter = this.counter + 1
          } else {
            this.clearInterval()
            this.$nextTick(() => {
              this.busy = this.processing = false;
            })
          }
        }, 350)

     
      },
      upload(){
     

        // Create a root reference
          const storage = getStorage();

        // Create a storage reference from our storage service
        const storageRef = ref(storage);


      }
    }
  }
</script>