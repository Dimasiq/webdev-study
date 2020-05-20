<template>
  <div class="home col-sm-12 col-md-12">
    <h1>Регистрация</h1>
    <form @submit="onRegister">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control"
          id="username"
          v-model="username"
          placeholder="Enter username">
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control"
          id="email"
          v-model="email"
          placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password"
          class="form-control"
          v-model="password"
          id="password"
          placeholder="Enter password">
      </div>
      <div class="form-group">
        <label for="repeat_password">Repeat password</label>
        <input type="password"
          class="form-control"
          v-model="repeatPassword"
          id="repeat_password"
          placeholder="Repeat password">
      </div>
      <button class="btn btn-primary">Submit</button>
    </form>
    <div v-if="error.display" class="alert alert-danger mt-3" role="alert">
      <h4 class="alert-heading">Registration error!</h4>
      <p>{{ error.message }}</p>
      <hr>
      <p class="mb-0">Please, try again later.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Registration',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
      error: {
        display: false,
        message: '',
      },
    };
  },
  methods: {
    async onRegister(e) {
      e.preventDefault();
      if (this.password !== this.repeatPassword) {
        this.error.display = true;
        this.error.message = 'Passwords doesn\'t match!';
        return;
      }
      const { username, email, password } = this;
      const regRes = await this.$store.dispatch('registration', { username, email, password });
      console.log(regRes);
      if (!regRes.success) {
        this.error.display = true;
        this.error.message = regRes.error;
        return;
      }
      this.username = '';
      this.email = '';
      this.password = '';
      this.repeatPassword = '';
      this.$router.push('/login');
    },
  },
};
</script>
