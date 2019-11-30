<template>
  <div class="section">
    <div class="card is-clearfix columns">
      <figure class="card-image is-480x480 column is-one-thirds">
        <img src="https://bulma.io/images/placeholders/480x480.png" />
      </figure>
      <div class="card-content column is-two-thirds">
        <div class="card-content__title">
          <h2 class="title is-4">
            {{ product.title }}
            <button
              :title="removeFromFavouriteLabel"
              v-show="product.isFavourite"
              @click="removeFromFavourite(product.id)"
              class="button is-small"
            >
              <span class="icon is-small">
                <i class="fa fa-heart"></i>
              </span>
            </button>
            <button
              :title="addToFavouriteLabel"
              v-show="!product.isFavourite"
              @click="saveToFavorite(product.id)"
              class="button is-small"
            >
              <span class="icon is-small">
                <i class="far fa-heart"></i>
              </span>
            </button>
          </h2>
        </div>
        <div class="card-content__text">
          <p>
            サンプルです。モックです。商品の紹介文をいれます！！！一覧画面の商品紹介よりも詳しい説明データを作ってここに差し込みます。
          </p>
        </div>
        <div v-if="product.rating === 1" class="card-content__ratings">
          <i class="fa fa-star"></i>
        </div>
        <div v-else-if="product.rating === 2" class="card-content__ratings">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <div v-else-if="product.rating === 3" class="card-content__ratings">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <div v-else-if="product.rating === 4" class="card-content__ratings">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <div v-else-if="product.rating === 5" class="card-content__ratings">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <div class="card-content__reviews">
          <div class="is-pulled-left">
            <p>
              <strong>
                {{
                  product.reviews > 0
                    ? `${product.reviews} Reviews`
                    : 'No reviews'
                }}
              </strong>
            </p>
          </div>
          <div class="select is-rounded is-small is-pulled-right">
            <select @change="onSelectQuantity(product.id)" v-model="selected">
              <option
                v-for="quantity in quantityArray"
                :key="quantity.id"
                :value="quantity"
                >{{ quantity }}</option
              >
            </select>
          </div>
        </div>
        <div class="card-content__price is-pulled-left">
          <span class="title is-3">
            <strong>&yen;{{ product.price }}</strong>
          </span>
        </div>
        <div class="card-content__btn is-pulled-right">
          <button
            v-if="!isAddedBtn"
            @click="addToCart(product.id)"
            class="button is-primary"
          >
            {{ addToCartLabel }}
          </button>
          <button
            v-if="isAddedBtn"
            @click="removeFromCart(product.id)"
            class="button is-text"
          >
            {{ removeFromCartLabel }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetailId',

  validate({ params }) {
    return /^\d+$/.test(params.id)
  },

  data() {
    return {
      addToCartLabel: 'カートに入れる',
      removeFromCartLabel: 'カートから取り出す',
      addToFavouriteLabel: 'お気に入りに登録',
      removeFromFavouriteLabel: 'お気に入りから外す',
      product: {},
      selected: 1,
      quantityArray: []
    }
  },

  computed: {
    isAddedBtn() {
      return this.product.isAddedBtn
    }
  },

  mounted() {
    this.product = this.$store.getters.getProductById(this.$route.params.id)
    this.selected = this.product.quantity

    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i)
    }
  },

  methods: {
    addToCart(id) {
      const data = {
        id,
        status: true
      }
      this.$store.commit('addToCart', id)
      this.$store.commit('setAddedBtn', data)
    },
    removeFromCart(id) {
      const data = {
        id,
        status: false
      }
      this.$store.commit('removeFromCart', id)
      this.$store.commit('setAddedBtn', data)
    },
    onSelectQuantity(id) {
      const data = {
        id,
        quantity: this.selected
      }
      this.$store.commit('quantity', data)
    },
    saveToFavorite(id) {
      const isUserLogged = this.$store.state.userInfo.isLoggedIn

      if (isUserLogged) {
        this.$store.commit('addToFavourite', id)
      } else {
        this.$store.commit('showLoginModal', true)
      }
    },
    removeFromFavourite(id) {
      this.$store.commit('removeFromFavourite', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.card-content {
  padding: 15px 10px 15px 0;

  &__text {
    margin: 15px 0;
  }
  &__reviews {
    display: inline-block;
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
