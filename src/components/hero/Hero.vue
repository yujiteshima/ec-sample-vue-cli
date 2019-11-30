<template>
  <section class="hero is-medium is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">EC-SITE-MockUP</h1>
        <h2 class="subtitle">Made with Vue.js!!!</h2>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  background: #24c6dc; /* fallback for old browsers */
  background: linear-gradient(to right, #514a9d 0%, #24c6dc 100%);
  opacity: 0.5;
  animation: huerotator 20s infinite alternate;
  color: cornsilk;
}
@keyframes huerotator {
  0% {
    -webkit-filter: hue-rotate(0deg);
    filter: hue-rotate(0deg);
  }
  100% {
    -webkit-filter: hue-rotate(360deg);
    filter: hue-rotate(360deg);
  }
}

.title,
.subtitle {
  animation-name: fadein;
  animation-duration: 2s;
  animation-iteration-count: 1;

  @keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
