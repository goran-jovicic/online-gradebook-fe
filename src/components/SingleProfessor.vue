<template>
  <div class="container">
    <h1
      v-if="professor && professor.user"
    >{{ `${professor.user.first_name} ${professor.user.last_name}` }}</h1>
    <h2 v-if="professor && professor.gradebook">
      <router-link :to="singleGradebook(professor.gradebook)">{{ professor.gradebook.name }}</router-link>
    </h2>
    <h2 v-if="professor && professor.gradebook">Student count : {{ studentCount }}</h2>
  </div>
</template>

<script>
import { professorService } from "../services/ProfessorService";

export default {
  data() {
    return {
      professor: {}
    };
  },

  computed: {
    studentCount() {
      return this.professor.gradebook.students.length;
    }
  },

  methods: {
    singleGradebook(gradebook) {
      return `/gradebooks/${gradebook.id}`;
    }
  },

  created() {
    let id = this.$route.params.id;
    professorService
      .getSingleProfessor(id)
      .then(response => {
        this.professor = response.data;
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

<style>
</style>
