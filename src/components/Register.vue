<template>
  <form @submit.prevent="registerUser">
    <div class="form-group">
      <label for="first_name">First name :</label>
      <input
        class="form-control"
        style="width:50%;margin:auto;"
        type="text"
        id="first_name"
        name="first_name"
        v-model="user.first_name"
        pattern=".{1,255}"
        required
        title="Max 255 characters"
      />
    </div>
    <div class="form-group">
      <label for="last_name">Last name :</label>
      <input
        class="form-control"
        style="width:50%;margin:auto;"
        type="text"
        id="last_name"
        name="last_name"
        v-model="user.last_name"
        pattern=".{1,255}"
        required
        title="Max 255 characters"
      />
    </div>
    <div class="form-group">
      <label>Email :</label>
      <input
        class="form-control"
        style="width:50%;margin:auto;"
        type="email"
        id="email"
        name="email"
        v-model="user.email"
        pattern=".{1,255}"
        required
        title="Max 255 characters"
      />
    </div>
    <div class="form-group">
      <label for="password">Password :</label>
      <input
        class="form-control"
        style="width:50%;margin:auto;"
        type="password"
        id="password"
        name="password"
        v-model="user.password"
        pattern="(?=.*\d).{8,}" 
        required
        title="Min 8 characters, at least 1 digit"
      />
    </div>
    <div class="form-group">
      <label for="password_confirmation">Confirm Password :</label>
      <input
        class="form-control"
        style="width:50%;margin:auto;"
        type="password"
        id="password_confirmation"
        name="password_confirmation"
        v-model="user.password_confirmation"
      />
    </div>
    <div class="form-group">
      <label for="terms">I accept the terms</label>
      <br />
      <input type="checkbox" id="terms" name="terms" value="Accept" required />
    </div>
    <div class="form-group">
      <button class="btn btn-primary">Submit</button>
    </div>
  </form>
</template>

<script>
import { authService } from "../services/AuthService";
export default {
  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  methods: {
    registerUser() {
      authService.register(this.user);
      this.$router.push("/login");
    }
  }
};
</script>

<style>
</style>