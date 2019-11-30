<template>
  <div>
    <div class="navbar-item">
      <div class="field is-grouped">
        <p class="control">
          <a v-if="!isUserLoggedIn" @click="showSignupModal" class="button">
            <span class="icon">
              <i class="fa fa-user-plus"></i>
            </span>
            <span>{{ signupLabel }}</span>
          </a>
        </p>
        <p class="control">
          <a v-if="!isUserLoggedIn" @click="showLoginModal" class="button">
            <span class="icon">
              <i class="fa fa-user"></i>
            </span>
            <span>{{ loginLabel }}</span>
          </a>
        </p>
      </div>
    </div>
    <div v-if="isUserLoggedIn" class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link">Welcome {{ getUserName }}</a>
      <div class="navbar-dropdown is-boxed">
        <router-link :to="{ name: 'user-wishlist' }" class="navbar-item">
          {{
          wishlistLabel
          }}
        </router-link>
        <hr class="navbar-divider" />
        <a @click="logout" class="navbar-item">{{ logoutLabel }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VmMenu",
  data() {
    return {
      wishlistLabel: "Wishlist",
      logoutLabel: "Log out",
      loginLabel: "Log in",
      signupLabel: "Sign up"
    };
  },

  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
    getUserName() {
      const name = this.$store.getters.getUserName;

      if (name === "") {
        return "user";
      } else {
        return name;
      }
    }
  },

  methods: {
    logout() {
      this.$store.commit("isUserLoggedIn", false);
      this.$store.commit("isUserSignedUp", false);
      this.$store.commit("removeProductsFromFavourite");

      // redirect to homepage
      this.$router.push({ name: "index" });
    },
    showLoginModal() {
      this.$store.commit("showLoginModal", true);
    },
    showSignupModal() {
      this.$store.commit("showSignupModal", true);
    }
  }
};
</script>
