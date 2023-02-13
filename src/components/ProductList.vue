<template>
    <div>
        <h1>Product List</h1>
        <div v-if="loading">
            <img src="https://i.pinimg.com/originals/76/77/ed/7677edd5a44b10130b8824ca020ba60b.gif" width="150">
        </div>
        <ul v-else>
            <li v-for="product in products" :key="product.id">{{product.title}} - {{product.price}} - {{product.inventory}}
                <button 
                :disabled="!productIsInStock(product)"
                @click="addProductToCart(product)">
                Add to cart</button>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default{
    data() {
        return {
            loading: true,
        }
    },
    computed: {
        ...mapState({
            products: state => state.products
        }),
        ...mapGetters({
            productIsInStock: 'productIsInStock'
        })
    },

    created() {
        this.loading = true;
        this.fetchProducts()
        .then(() => this.loading = false)
    },

    methods: {
        ...mapActions({
            fetchProducts: 'fetchProducts',
            addProductToCart: 'addProductToCart'
        })
    }
}
</script>

<style scoped>

</style>
