import { createStore } from 'vuex';

export default createStore({
    state: { // = data
        products: []
    },

    getters: { // = computed prperties
        availableProducts(state) {
            return state.products.filter(product => product.inventory > 0)
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