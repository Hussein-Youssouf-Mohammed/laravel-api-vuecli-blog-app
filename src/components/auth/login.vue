<template>
<div class="row my-5">
<div class="col-md-6 offset-md-3">
    <div class="card">
        <div class="card-body">
        <h2 class="text-center my-4 text-primary">Login</h2>
        <form @submit.prevent='login'>
        <div class="form-group">
          <input type="text" v-bind:class="{'is-invalid' : errors.email, 'is-valid' : !errors.email && this.submitted}" v-model="form.email" placeholder="Enter Your Email" class="form-control">
           <div class="errors" v-if="errors.email">
             <small class="text-danger" v-for="error in errors.email" :key="error"> {{ error }} </small>
           </div>
        </div>
        <div class="form-group">
            <input type="password" v-bind:class="{'is-invalid' : errors.password, 'is-valid' : !errors.password && this.submitted }" v-model="form.password" placeholder="Enter Your Password" class="form-control">
            <div class="errors" v-if="errors.password">
             <small class="text-danger" v-for='error in errors.password' :key="error"> {{ error }} </small>
            </div>
          </div>
          <div class="form-group">
              <button class="btn btn-primary form-control" :disabled='leading'>
               <i class="fa fa-spinner fa-spin" v-if="leading"></i>
               {{ leading ? '' : 'Login' }}
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
  beforeRouteEnter (to, from, next) {
      if(localStorage.getItem('auth')) {
         return next({path: '/'})
      }
      next()
  },
    data() {
      return {
        form: {
          email: '', password: ''
        },
        leading: false,
        errors: {},
        submitted: false
      }
    },
    methods: {
      login() {
        this.leading = true
        axios.post('http://localhost:8000/api/auth/login', this.form)
        .then(response => {
          this.leading  = false
          this.submitted = true
            this.$root.auth  = response.data
            localStorage.setItem('auth', JSON.stringify(response.data))
            this.$router.push('/')
            this.$noty.success('Successfully Logedding in ')
        }).catch(({response}) => {
          this.submitted  = true
             this.$noty.error('Opps ! semthing went wrong.')
          this.leading  = false
            if(response.status === 401) {
              this.errors  = {
                email: ['These credenials  do not mauch our records.']
              }
            } else {
               this.errors  = response.data.errors
            }
        })
      }
    }
}
</script>