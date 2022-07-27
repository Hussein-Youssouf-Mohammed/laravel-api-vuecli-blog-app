<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
                    <a class="navbar-brand">
                    <img alt="Vue logo" src="../assets/logo.png" width="30">
                    </a>
         <button class="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
         <div id="my-nav" class="collapse navbar-collapse">
           <ul class="navbar-nav ml-auto">
             <li class="nav-item" v-if="!auth">
              <router-link to="/login" class="nav-link">Login</router-link>
             </li>

             <li class="nav-item" v-if="!auth">
              <router-link to="/signup" class="nav-link">Signup</router-link>
             </li>
             <li class="nav-item" v-if="auth">
               <a href="/" class="nav-link " tabindex="-1" aria-disabled="true">Home</a>
             </li>
             <li class="nav-item" v-if="auth">
               <a class="nav-link " href="/proudct/create" tabindex="-1" aria-disabled="true">Create Product</a>
             </li>
              <li class="nav-item" v-if="auth">
               <a class="nav-link disabled" tabindex="-1" aria-disabled="true">Hey {{ auth}}</a>
             </li>
             
             <li class="nav-item" v-if="auth">
               <a class="nav-link" href="#" @click="logout()" tabindex="-1" aria-disabled="true">logout</a>
             </li>
           </ul>
         </div>
        </div>
       </nav>
</template>
<script>
export default {
  computed: {
    auth() {
      return this.$root.auth.name
    }
  },
  methods :{
    logout() {
       localStorage.removeItem('auth')
       this.$root.auth  = {}
       this.$router.push('/login')
    }
  }
}
</script>