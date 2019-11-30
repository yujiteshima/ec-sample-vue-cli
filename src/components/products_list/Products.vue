<template>
  <div>
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ product.title }}</p>
        </div>
        <div>
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
        </div>
      </div>
      <div class="content is-clearfix">
        <p>{{ product.description }}</p>
        <div class="is-pulled-left">
          <i v-if="product.ratings === 1" class="fa fa-star"></i>
          <i v-if="product.ratings === 2" class="fa fa-star"></i>
          <i v-if="product.ratings === 2" class="fa fa-star"></i>
          <i v-if="product.ratings === 3" class="fa fa-star"></i>
          <i v-if="product.ratings === 3" class="fa fa-star"></i>
          <i v-if="product.ratings === 3" class="fa fa-star"></i>
          <i v-if="product.ratings === 4" class="fa fa-star"></i>
          <i v-if="product.ratings === 4" class="fa fa-star"></i>
          <i v-if="product.ratings === 4" class="fa fa-star"></i>
          <i v-if="product.ratings === 4" class="fa fa-star"></i>
          <i v-if="product.ratings === 5" class="fa fa-star"></i>
          <i v-if="product.ratings === 5" class="fa fa-star"></i>
          <i v-if="product.ratings === 5" class="fa fa-star"></i>
          <i v-if="product.ratings === 5" class="fa fa-star"></i>
          <i v-if="product.ratings === 5" class="fa fa-star"></i>
          <p>
            {{
            product.reviews > 0
            ? `${product.reviews} レビュー`
            : 'まだレビューはありません'
            }}
          </p>
        </div>
        <p class="is-pulled-right">
          <span class="title is-4">
            <strong>&yen; {{ product.price }}</strong>
          </span>
        </p>
      </div>
      <div class="card-footer btn-actions">
        <div class="card-footer-item field is-grouped">
          <div class="buttons">
            <button
              v-if="!product.isAddedToCart"
              @click="addToCart(product.id)"
              class="button is-primary"
            >{{ addToCartLabel }}</button>
            <button
              v-if="product.isAddedToCart"
              @click="removeFromCart(product.id, false)"
              class="button is-text"
            >{{ removeFromCartLabel }}</button>
          </div>
          <div class="select is-rounded is-small">
            <select @change="onSelectQuantity(product.id)" v-model="selected">
              <option
                v-for="quantity in quantityArray"
                :key="quantity.id"
                :value="quantity"
              >{{ quantity }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <router-link
      :to="{
        name: 'product_detail-id',
        params: {
          id: product.id,
          title: product.title,
          price: product.price,
          rating: product.ratings,
          reviews: product.reviews,
          isAddedBtn: product.isAddedBtn
        }
      }"
      class="details"
    ></router-link>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: ["product"],

  data() {
    return {
      addToCartLabel: "カートに入れる",
      viewDetailsLabel: "Details",
      removeFromCartLabel: "カートから削除",
      addToFavouriteLabel: "Add to favourite",
      removeFromFavouriteLabel: "Remove from favourite",
      selected: 1,
      quantityArray: []
    };
  },

  computed: {
    isUserLogged() {
      return this.$store.getters.isUserLoggedIn;
    }
  },

  mounted() {
    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }

    if (this.$props.product.quantity > 1) {
      this.selected = this.$props.product.quantity;
    }
  },

  methods: {
    addToCart(id) {
      const data = {
        id,
        status: true
      };
      this.$store.commit("addToCart", id);
      this.$store.commit("setAddedBtn", data);
    },
    removeFromCart(id) {
      const data = {
        id,
        status: false
      };
      this.$store.commit("removeFromCart", id);
      this.$store.commit("setAddedBtn", data);
    },
    saveToFavorite(id) {
      const isUserLogged = this.$store.state.userInfo.isLoggedIn;

      if (isUserLogged) {
        this.$store.commit("addToFavourite", id);
      } else {
        this.$store.commit("showLoginModal", true);
      }
    },
    removeFromFavourite(id) {
      this.$store.commit("removeFromFavourite", id);
    },
    onSelectQuantity(id) {
      const data = {
        id,
        quantity: this.selected
      };
      this.$store.commit("quantity", data);
    }
  }
};
</script>

<style lang="scss" scoped>
.details {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  //   &:hover {
  //     border: 1px solid #51bafc;
  //   }
}
.button,
.select {
  z-index: 2;
}
.select {
  position: absolute;
  right: 15px;
  bottom: 35px;
}
.card-content {
  padding: 0;
}
.buttons {
  margin: 0;
}
</style>
