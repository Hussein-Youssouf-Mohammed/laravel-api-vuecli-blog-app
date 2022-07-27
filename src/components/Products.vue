<template>
    <div class="card my-5">
        <div class="card-header">{{product.name}}</div>
        <div class="card-body">
            <p>
            {{ product.description.substring(0, 500) }}
            </p>
            <router-link :to="`/product/${product.id}`" class="btn btn-primary">Read more</router-link>
        </div>
    </div>
</template>
<script>
export default {
    props: ['product']
}
</script>