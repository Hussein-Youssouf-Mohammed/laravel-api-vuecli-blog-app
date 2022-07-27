<template>
  <div class="row my-5">
  <div class="col-md-10 offset-md-1">
      <div class="card">
          <div class="card-body">
              <h3 class="card-title text-center mb-3">Create Product</h3>
              <form @submit.prevent="uploadPro" enctype="multipart/form-data">
                  <div class="form-group">
                      <label for="name">Enter Your Name</label>
                      <input type="text" v-model="name" class="form-control">
                  </div>

                  <div class="form-group">
                    <label for="name">Enter Your Nubmer</label>
                    <input type="number" v-model="price" class="form-control">
                </div>
                <div class="form-group">
                    <label for="name">Enter Your Description</label>
                   <textarea v-model="description" class="form-control" rows="10"></textarea>
                </div>
                  <div class="form-group">
                    <label for="name">Choose Your Image</label>
                      <input type="file" @change="uploadImage" class="form-control">
                  </div>
                   <div class="form-group mt-3">
                       <button type="submit" class="btn btn-primary form-control">Create Product</button>
                   </div>
              </form>

          </div>
      </div>
  </div>
  </div>
</template>

<script>
    // import config  from '@/config'
    import axios from 'axios'
export default {
    data() {
        return {
            name: '',
            description: '',
            price: '',
            image: '',
        }
    },
    methods: {
        uploadImage(e) {
            this.image  = e.target.files[0]
        },
        uploadPro() {
            const formData  = new FormData() 
            formData.append('image', this.image)
            formData.append('name', this.name)
            formData.append('description', this.description)
            formData.append('price', this.price)
            axios.post('http://localhost:8000/api/products', formData, {
                headers: {
                    Authorization :   `Bearer  ${this.$root.auth.access_token}`
                }
            }).then(() => {
                this.$router.push('/')
            }).catch(() => {
                this.$noty.error('Oops ! something went wrong')
            })
        }
    },
}
</script>

<style>
.form-group  {
    margin-bottom: 10px;
}
</style>