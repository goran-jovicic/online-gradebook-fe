<template>
  <div class="container">
    <div v-if="professor.gradebook">
      <button class="btn btn-primary" @click="handleAddStudent">Add new Students</button>
      <button class="btn btn-secondary" @click="handleEdit">Edit</button>
      <button class="btn btn-danger" @click="handleDelete">Delete</button>
      <h1 v-if="user">{{ `${user.first_name} ${user.last_name}` }}</h1>
      <h2 v-if="professor.gradebook">{{`${professor.gradebook.name}`}}</h2>
      <ul class="list-group">
        <div v-if="students">
          <li
            v-for="(student, index) in students"
            :key="index"
            class="list-group item list-group-item-primary"
            style="width: 50%; margin:auto"
          >{{ `${student.first_name}` }}</li>
        </div>
      </ul>
    </div>
    <div v-else>
      <h1>Niste trenutno razredni staresina</h1>
    </div>
  </div>
</template>

<script>
import { professorService } from "../../services/ProfessorService";
import { gradebookService } from "../../services/GradebookService";

export default {
  data() {
    return {
      professor: "",
      user: JSON.parse(localStorage.getItem("user"))
    };
  },

  created() {
    professorService.getSingleProfessor(this.user.id).then(response => {
      this.professor = response.data;
    });
  },

  methods: {
    handleEdit() {
      let id = this.professor.gradebook.id;
      this.$router.push(`/gradebooks/${id}/edit`);
    },

    handleDelete() {
      let id = this.professor.gradebook.id;
      if (window.confirm("Are you sure you want to delete this gradebook?")) {
        gradebookService.deleteGradebook(id);
        return this.$router.push("/");
      }
      return;
    },

    handleAddStudent() {
      let id = this.professor.gradebook.id;
      this.$router.push(`/gradebooks/${id}/students/create`);
    }
  },

  computed: {
    students() {
      return this.professor.gradebook.students;
    }
  }
};
</script>

<style>
</style>


Kada kao korisnik pristupim ovoj stranici, vidim svoj dnevnik 
(na kome sam dodeljen kao razredni starešina). Vidim naziv razrednog staresine (u ovom slucaju moje ime), 
kao i liste učenika. Ukoliko nemam dodeljenog ni jednog učenika prikazujemo odgovarajucu poruku. 
U gornjem levom uglu se nalazi dugme “Add New Students”. Klikom na njega otvara se nova stranica za dodavanje učenika 
(‘/gradebooks/:id/students/create’). 
Ukoliko nisam dodeljen kao razredni starešina ni na jedan dnevnik prikazuje mi se samo odgovarajuća poruka.