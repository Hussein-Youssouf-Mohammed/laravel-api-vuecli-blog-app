<template>
<div class="row my-5">
<div class="col-md-6 offset-md-3">
    <div class="card">
        <div class="card-body">
        <h2 class="text-center my-4 text-success">Signup</h2>
        <form @submit.prevent="signup">
        <div class="form-group">
          <input type="text" v-bind:class="{ 'is-invalid' : errors.name,'is-valid' : !errors.name && this.submitted}" v-model="form.name" placeholder="Enter your name" class="form-control">
          <div class="errors" v-if="errors.name">
           <small class="text-danger" v-for="error in errors.name" :key="error">{{error}}</small>
          </div>
        </div>
        <div class="form-group">
          <input type="text" v-bind:class="{ 'is-invalid' : errors.email,'is-valid' : !errors.email && this.submitted}" v-model="form.email" placeholder="Enter Your Email" class="form-control">
          <div class="errors" v-if="errors.email">
           <small class="text-danger" v-for="error in errors.email" :key="error">{{error}}</small>
          </div>
        </div>
        <div class="form-group">
            <input type="password" v-bind:class="{'is-invalid' : errors.password,'is-valid' : !errors.password  && this.submitted}" v-model="form.password" placeholder="Enter Your Password" class="form-control">
            <div class="errors" v-if="errors.password">
              <small class="text-danger" v-for="error in errors.password" :key="error"> {{ error }} </small>
            </div>
          </div>
          <div class="form-group">
              <button class="btn btn-success form-control" @click="signup" :disabled='loading'>
                 <i class="fa fa-spinner fa-spin" v-if="loading"></i>
                 {{ loading ? '' : 'Signup' }}
              </button>
          </div>
        </form>
        </div>
       </div>
</div>
</div>
</template>
<script>
import axios  from 'axios'
export default {
  beforeRouteEnter(to, from, next) {
    if(localStorage.getItem('auth')) {
      return next({path: '/'})
    }
    next()
  },
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
            },
                 submitted: false,
                errors: {},
                loading: false
        }
    },
    methods: {
      signup() {
          this.loading  = true
           axios.post('http://localhost:8000/api/auth/signup',
           this.form).then((response) => {
               this.submitted = true
               this.loading = false
               const  {data} = response.data
               localStorage.setItem('auth', JSON.stringify(response.data))
               this.$root.auth  = data
               this.$router.push('/')
               this.$noty.success('Successfully registred.')
           }).catch(({response}) => {
            //    console.log(error)
            this.$noty.error('Opps ! something went wrong')
            this.loading = false
            this.submitted = true
            this.errors  = response.data.errors
           })          
      }  
    },
}
</script>