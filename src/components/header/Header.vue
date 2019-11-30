<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">Top</a>

      <a
        @click="isMenuOpen = !isMenuOpen"
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu is-active">
      <div class="navbar-start">
        <div class="navbar-item field">
          <Search></Search>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item social">
          <a :title="facebookTooltip" href="#" class="icon">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a :title="twitterTooltip" href="#" class="icon">
            <i class="fab fa-twitter"></i>
          </a>
          <a :title="instagramTooltip" href="#" class="icon">
            <i class="fab fa-instagram"></i>
          </a>
          <a :title="linkedinTooltip" href="#" class="icon">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div @click="showCheckoutModal" class="navbar-item shopping-cart">
          <span class="icon">
            <i class="fa fa-shopping-cart"></i>
          </span>
          <span :class="[numProductsAdded > 0 ? 'tag is-info' : '']">
            {{
            numProductsAdded
            }}
          </span>
        </div>
      </div>
    </div>
    <!-- For mobile and tablet -->
    <div v-show="isMenuOpen" class="navbar-end">
      <Menu></Menu>
    </div>

    <!-- For desktop -->
    <div class="navbar-end is-hidden-mobile">
      <Menu></Menu>
    </div>
  </nav>
</template>

<script>
import Search from "../search/Search";
import Menu from "../menu/Menu";
export default {
  name: "Header",
  components: {
    Search,
    Menu
  },
  data() {
    return {
      linkedinTooltip: "Follow us on Linkedin",
      facebookTooltip: "Follow us on Facebook",
      twitterTooltip: "Follow us on Twitter",
      instagramTooltip: "Follow us on Instagram",
      isCheckoutActive: false,
      isMenuOpen: false
    };
  },
  computed: {
    numProductsAdded() {
      return this.$store.getters.productsAdded.length;
    }
  },

  methods: {
    showCheckoutModal() {
      this.$store.commit("showCheckoutModal", true);
    }
  }
};
</script>

<style lang="scss">
.navbar-brand {
  font-size: 24px;
  color: antiquewhite;
}
.navbar {
  background: #24c6dc; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #514a9d,
    #24c6dc
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #514a9d,
    #24c6dc
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: cornsilk;
  //height: 60vh;
}
</style>
