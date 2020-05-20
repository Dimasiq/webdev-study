<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">Navbar</router-link>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link
            class="nav-link"
            active-class="active"
            exact
            to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            active-class="active"
            exact
            to="/about">About</router-link>
        </li>
        <li v-if="user.username" class="nav-item">
          <router-link
            class="nav-link"
            active-class="active"
            exact
            to="/dashboard">{{ user.username }}</router-link>
        </li>
        <li v-else class="nav-item">
          <router-link
            class="nav-link"
            active-class="active"
            exact
            to="/login">Login</router-link>
        </li>
        <li v-if="user.username" class="nav-item">
          <a
            class="nav-link"
            style="cursor: pointer"
            @click="onLogout">Logout</a>
        </li>
        <li v-else class="nav-item">
          <router-link
            class="nav-link"
            active-class="active"
            exact
            to="/registration">Registration</router-link>
        </li>

      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    user() {
      return this.$store.getters.getUser || {};
    },
  },
  watch: {
    user() {
      console.log('user data changed');
    },
  },
  methods: {
    async onLogout() {
      this.$store.dispatch('logoutAuth');
      if (this.$router.currentRoute.path !== '/') {
        this.$router.push('/');
      }
    },
  },
};
</script>

<style scoped lang="scss">
</style>
