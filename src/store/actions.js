import shop from '@/api/shop';
export default { // = methods
    fetchProducts({commit}) {
        return new Promise((resolve) => {
            // run setProducts mutation
            shop.getProducts(products => {
                commit('setProducts', products)
                resolve()
            })
        })
        
    },

    addProductToCart({state, getters, commit}, product) {
        if(getters.productIsInStock(product)){
            const cartItem = state.cart.find(item => item.id === product.id)
            if(!cartItem){
                commit('pushProductToCart', product.id)
            }else{
                commit('incrementItemQuentity', cartItem)
            }
            commit('decrementproductInventory', product)
        }
    },

    checkout({state, commit}) {
        shop.buyProducts(
            state.cart,
            () => {
                commit('emptyCart')
                commit('setCheckoutStatus', 'success')
            },
            () => {
                commit('setCheckoutStatus', 'fail')
            }
        )
    }
}