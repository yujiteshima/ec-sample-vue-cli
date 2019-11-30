<template>
  <div class="columns is-centered is-multiline product-container">
    <div
      v-for="product in products"
      :key="product.id"
      class="card column is-one-quarter zoom"
    >
      <Products :product="product"></Products>
    </div>
    <div v-if="products.length === 0" class="section">
      <p>{{ noProductLabel }}</p>
    </div>
  </div>
</template>

<script>
import Products from './Products'
import { getByTitle } from '@/assets/filters'
export default {
  name: 'ProductsList',
  components: { Products },

  data() {
    return {
      id: '',
      noProductLabel: '該当の商品はありませんでした。',
      productsFiltered: []
    }
  },
  computed: {
    products() {
      if (this.$store.state.userInfo.hasSearched) {
        return this.getProductByTitle()
      } else {
        return this.$store.state.products
      }
    }
  },

  methods: {
    getProductByTitle() {
      const listOfProducts = this.$store.state.products
      const titleSearched = this.$store.state.userInfo.productTitleSearched

      return (this.productsFiltered = getByTitle(listOfProducts, titleSearched))
    }
  }
}
</script>

<style lang="scss" scoped>
.product-container {
  margin-top: 10px;
  margin-bottom: 10px;
}
.card {
  margin: 10px;
}

.zoom {
  transform: scale(1);
  transition: 0.3s ease-in-out;
}

.zoom:hover {
  transform: scale(1.01);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
}
</style>
