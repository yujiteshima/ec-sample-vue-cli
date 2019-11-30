<template>
  <div class="section">
    <h3 class="title">{{ pageTitle }}</h3>
    <div class="columns is-centered is-multiline">
      <div
        v-for="product in productsInWishlist"
        :key="product.id"
        class="card column is-one-quarter"
      >
        <ProductsList :product="product"></ProductsList>
      </div>
      <div v-if="productsInWishlist.length === 0" class="section">
        <p>{{ noProductLabel }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsList from '@/components/products_list/Products'
import { getByTitle } from '@/assets/filters'

export default {
  name: 'UserWishlist',

  components: { ProductsList },

  data() {
    return {
      pageTitle: 'Your Wishlist',
      noProductLabel: 'Your wishlist is empty'
    }
  },

  computed: {
    productsInWishlist() {
      if (this.$store.state.userInfo.hasSearched) {
        return this.getProductByTitle()
      } else {
        return this.$store.getters.productsAddedToFavourite
      }
    }
  },

  methods: {
    getProductByTitle() {
      const listOfProducts = this.$store.getters.productsAddedToFavourite
      const titleSearched = this.$store.state.userInfo.productTitleSearched

      return (this.productsFiltered = getByTitle(listOfProducts, titleSearched))
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin: 10px;
}
</style>
