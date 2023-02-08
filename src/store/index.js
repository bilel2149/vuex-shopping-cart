import { createStore } from 'vuex';

export default createStore({
    state: { // = data
        products: []
    },

    getters: { // = computed prperties
        productsCount() {

        }
    },

    actions: { // = methods
        fetchProducts() {
            // run setProducts mutation
        }
    },

    mutations: {
        setProducts(state, products) {
            // update products
            state.products = products;
        }
    }
})