<template>
  <div :class="[openModal ? 'is-active' : '', 'modal']">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ modalTitle }}</p>
        <button
          @click="closeModal(false)"
          class="delete"
          aria-label="close"
        ></button>
      </header>
      <section class="modal-card-body">
        <div v-if="!isCheckoutSection">
          <div v-for="product in products" :key="product.id" class="box">
            <button
              @click="removeFromCart(product.id)"
              class="is-pulled-right button is-info is-inverted"
            >
              {{ removeLabel }}
            </button>
            <p>
              {{ product.title }}
              {{ product.quantity > 0 ? ` - 個数: ${product.quantity}` : '' }}
            </p>
            <p>&yen; {{ product.price }}</p>
          </div>
          <div v-if="products.length === 0">
            <p>{{ cartEmptyLabel }}</p>
          </div>
        </div>
        <div v-if="isCheckoutSection">
          <p>You bought it :-)</p>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button
          v-show="products.length > 0 && !isCheckoutSection"
          @click="onNextBtn"
          class="button is-success"
        >
          {{ buyLabel }}
        </button>
        <button
          v-if="isCheckoutSection"
          @click="closeModal(true)"
          class="button is-success"
        >
          {{ closeLabel }}
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkout',

  data() {
    return {
      modalTitle: 'カートのページ',
      removeLabel: 'カートをからにする',
      cartEmptyLabel: 'カートはからです',
      closeLabel: '閉じる',
      isCheckoutSection: false
    }
  },

  computed: {
    products() {
      return this.$store.getters.productsAdded
    },
    openModal() {
      if (this.$store.getters.isCheckoutModalOpen) {
        return true
      } else {
        return false
      }
    },
    buyLabel() {
      const totalProducts = this.products.length
      const productsAdded = this.$store.getters.productsAdded
      const pricesArray = []
      let productLabel = ''
      let finalPrice = ''
      let quantity = 1

      productsAdded.forEach((product) => {
        if (product.quantity >= 1) {
          quantity = product.quantity
        }

        pricesArray.push(product.price * quantity) // get the price of every product added and multiply quantity
      })

      finalPrice = pricesArray.reduce((a, b) => a + b, 0) // sum the prices

      if (totalProducts > 1) {
        // set plural or singular
        productLabel = 'products'
      } else {
        productLabel = 'product'
      }
      return `${productLabel}を${totalProducts}個お買い上げで  ${finalPrice}円です。`
    },
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn
    }
  },

  methods: {
    closeModal(reloadPage) {
      this.$store.commit('showCheckoutModal', false)

      if (reloadPage) {
        window.location.reload()
      }
    },
    removeFromCart(id) {
      const data = {
        id,
        status: false
      }
      this.$store.commit('removeFromCart', id)
      this.$store.commit('setAddedBtn', data)
    },
    onNextBtn() {
      if (this.isUserLoggedIn) {
        this.isCheckoutSection = true
      } else {
        this.$store.commit('showCheckoutModal', false)
        this.$store.commit('showLoginModal', true)
      }
    },
    onPrevBtn() {
      this.isCheckoutSection = false
    }
  }
}
</script>
