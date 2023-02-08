import { createStore } from 'vuex';
import shop from '@/api/shop';

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
        fetchProducts({commit}) {
            return new Promise((resolve) => {
                // run setProducts mutation
                shop.getProducts(products => {
                    commit('setProducts', products)
                    resolve()
                })
            })
            
        },

        /*addToCart(context, product) {
            if(product.inventory > 0 ){
                context.commit('pushProductToCart', product)
            }else{
                // show out of stock message
            }
        }*/
    },

    mutations: {
        setProducts(state, products) {
            // update products
            state.products = products;
        }
    }
})