<template>
  <div id="app">
    <div class="container">
      <router-link to="/">Gradebooks</router-link>|
      <router-link v-if="!checker" to="/login">Login |</router-link>
      <a>
        <span @click="logoutUser" v-if="checker">Logout </span>
      </a>
      <router-link v-if="!checker" to="/register">Register</router-link>|
      <router-link to="/teachers">All teachers </router-link>|
      <router-link to="/my-gradebook">My Gradebook </router-link>|
      <router-link to="/gradebooks/create">Add gradebook</router-link>|
      <router-link to="/teachers/create">Add professor</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { authService } from "./services/AuthService";

export default {
  data() {
    return {
      isAuthenticated: authService.isAuthenticated(),
      user: window.localStorage.getItem("user")
    };
  },

  methods: {
    logoutUser() {
      authService.logout();
      this.$router.push("/");
    }
  },

  created() {
    this.$bus.$on("logged", () => {
      this.isAuthenticated = authService.isAuthenticated();
    });
  },

  computed: {
    checker() {
      return authService.isAuthenticated();
    }
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

span {
  color: #007bff;
}
</style>