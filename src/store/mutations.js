export default {
    setProducts(state, products) {
        // update products
        state.products = products;
    },

    pushProductToCart(state, productId) {
        state.cart.push({
            id: productId,
            quantity: 1
        })
    },

    incrementItemQuentity(state, cartItem) {
        cartItem.quantity++
    },

    decrementproductInventory(state, product) {
        product.inventory--
    },

    setCheckoutStatus(state, status) {
        state.checkoutStatus = status
    },

    emptyCart(state){
        state.cart = []
    }
}