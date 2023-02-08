import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

new Vuex.Store({
    state: { // = data
        products: []
    },

    getters: { // = computed prperties
        productsCount() {

        }
    },

    actions: { // = methods
        fetchProducts() {

        }
    },

    mutations: {
        setProducts() {
            // update products
        }
    }
})