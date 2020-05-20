<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <div class="row">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  mounted() {
    if (localStorage.userData) {
      this.$store.dispatch('fetchAuth');
    }
  },
};
</script>
<style lang="scss">
@import 'bootstrap/scss/bootstrap.scss';
.row {
  padding-top: 20px;
}
</style>
