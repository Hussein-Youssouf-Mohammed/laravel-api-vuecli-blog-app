<template>
<div class="row">
<div class="col-md-10 offset-md-1">
    <div class="card my-5 text-center" v-if='!leading'>
        <div class="card-body">
             <img :src="product.image" height="40" class="img-fluid mb-4" alt="">
             <p class="description"> {{ product.description }} </p>
             <p class="display-4">$ {{ product.price }}</p>
             <div class="">
                 <button class="btn btn-primary"><i class="fa fa-cart-plus fa-3x"></i></button>
             </div>
        </div>
  </div>
  <div class="leading text-center my-5" v-else>
      <i class="fa fa-spinner fa-spin fa-5x my-5"></i>
  </div>
</div>
</div>
</template>

<script>
import axios  from 'axios'
import  config  from '@/config'
export default {
    mounted() {
        this.getProduct()
    },
    data() {
        return{
            product: {},
            leading: true
        }
    },
    methods: {
        getProduct() {
             axios.get(`${config.apiUrl}/products/${this.$route.params.id}`)
             .then(response => {
                 this.product  = response.data
                 this.leading  = false
             })
        }
    }
}
</script>

<style>

</style>template