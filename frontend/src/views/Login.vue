<template>
  <div class="home col-sm-12 col-md-12">
    <h1>Вход</h1>
    <form @submit="onLogin">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="text" class="form-control"
          id="username"
          v-model="username"
          aria-describedby="usernameHelp"
          placeholder="Enter username">
        <small id="usernameHelp" class="form-text text-muted">
          We'll never share your username with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password"
          class="form-control"
          v-model="password"
          id="password"
          placeholder="Password">
      </div>
      <button class="btn btn-primary">Submit</button>
    </form>
    <div v-if="error.display" class="alert alert-danger mt-3" role="alert">
      <h4 class="alert-heading">Authentication error!</h4>
      <p>{{ error.message }}</p>
      <hr>
      <p class="mb-0">Please, checkyour credentials, or try again later.</p>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      error: {
        display: false,
        message: '',
      },
    };
  },
  methods: {
    async onLogin(e) {
      e.preventDefault();
      const authRes = await this.$store.dispatch('fetchAuth', { username: this.username, password: this.password });
      if (!authRes.success) {
        this.error.display = true;
        this.error.message = authRes.error;
        return;
      }

      this.username = '';
      this.password = '';
      this.$router.push('/dashboard');
    },
  },
};
</script>
