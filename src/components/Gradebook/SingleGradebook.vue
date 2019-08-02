<template>
  <div>
    <button class="btn btn-primary" @click="handleAddStudent">Add new Students</button>
    <button class="btn btn-secondary" @click="handleEdit">Edit</button>
    <button class="btn btn-danger" @click="handleDelete">Delete</button>
    <h1>{{ gradebook.name }}</h1>
    <h2
      v-if="gradebook && gradebook.professor"
    >{{ `Razredni: ${gradebook.professor.user.first_name} ${gradebook.professor.user.last_name}` }}</h2>
    <h2 v-else>Nema razrednog staresinu</h2>
    <h2 v-if="studentCount == 0 && !gradebook.students">Nema trenutno studenata</h2>
    <ul v-if="studentCount > 0 && gradebook.students" class="list-group">
      Studenti:
      <li
        class="list-group-item list-group-item-primary"
        style="width: 50%; margin:auto;"
        v-for="(student, index) in gradebook.students"
        :key="index"
      >{{ `${student.first_name} ${student.last_name}` }}</li>
    </ul>
  </div>
</template>

<script>
import { gradebookService } from "../../services/GradebookService";

export default {
  data() {
    return {
      gradebook: {}
    };
  },

  methods: {
    handleAddStudent() {
      let id = this.$route.params.id;
      this.$router.push(`/gradebooks/${id}/students/create`);
    },

    handleEdit() {
      let id = this.$route.params.id;
      this.$router.push(`/gradebooks/${id}/edit`);
    },

    handleDelete() {
      if (window.confirm("Are you sure you want to delete this gradebook?")) {
        let id = this.$route.params.id;
        gradebookService.deleteGradebook(id);
        return this.$router.push("/");
      }
      return;
    }
  },

  computed: {
    studentCount() {
      return this.gradebook.students.length;
    }
  },

  created() {
    let id = this.$route.params.id;
    gradebookService
      .getSingleGradebook(id)
      .then(response => {
        this.gradebook = response.data;
        console.log(response.data);
      })
      .catch(e => {
        console.log(e); /* eslint-disable */
      });
  }
};
</script>

<style>
</style>
