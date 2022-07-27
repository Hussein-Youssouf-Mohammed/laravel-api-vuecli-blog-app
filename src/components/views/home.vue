<template>

<div>
<div class="d-flex justify-content-between mt-5">
           <button @click="getPrve" :disabled="products.prev_page_url === null" class="btn btn-primary">Prev</button>
           <button @click="getNext" :disabled="products.next_page_url === null" class="btn btn-primary">Next</button>
        </div>
        <div class="row my-5" v-if="!leading">
        <div class="col-md-8 offset-md-2"  v-for="product in products.data" :key="product.id">
        <Products :product="product"/>
        </div>
        </div>
        <div class="leader text-center" v-else>
          <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        
</div>  
        
</template>
    <script>
    import Products from '@/components/Products.vue'
    import config  from '@/config'
    import axios from 'axios'
export default {

    components: {Products},
    data() {
        return {
            products: [],
            leading: true
        }
    },
    mounted() {
        this.getProducts()
    },
    methods: {
        getProducts(url = `${config.apiUrl}/products` ) {
            this.leading  = true
          axios.get(url)
          .then(response => {
              this.leading  = false
                 this.products  = response.data.data
          })
        },
        getPrve() {
            this.getProducts(this.products.prev_page_url)
        },
        getNext() {
            this.getProducts(this.products.next_page_url)
        },
    },
}
</script>