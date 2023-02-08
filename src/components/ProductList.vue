<template>
    <div>
        <h1>Product List</h1>
        <div v-if="loading">
            <img src="https://i.pinimg.com/originals/76/77/ed/7677edd5a44b10130b8824ca020ba60b.gif" width="150">
        </div>
        <ul v-else>
            <li v-for="product in products" :key="product.id">{{product.title}} - {{product.price}}</li>
        </ul>
    </div>
</template>

<script>
import store from '@/store/index';
export default{
    data() {
        return {
            loading: true,
        }
    },
    computed: {
        products() {
            return store.getters.availableProducts
        }
    },

    created() {
        this.loading = true;
        store.dispatch('fetchProducts')
        .then(() => this.loading = false)
    }
}
</script>

<style scoped>

</style>
