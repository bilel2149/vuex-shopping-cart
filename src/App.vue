<template>
  <ProductList/>
  <hr>
  <Shoppingcart/>
</template>

<script>
import ProductList from './components/ProductList.vue'
import Shoppingcart from './components/ShoppingCart.vue'

export default {
  name: 'App',
  components: {
    ProductList,
    Shoppingcart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
