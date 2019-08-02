<template>
  <div class="container">
    <h1>Add Professor</h1>
    <form @submit.prevent="addProfessor">
      <div class="form-group">
        <label for="first_name">First name :</label>
        <input
          type="text"
          class="form-control"
          style="width:50%; margin:auto;"
          id="first_name"
          v-model="newProfessor.first_name"
          pattern=".{1,255}"
          required
          title="Max 255 characters"
        />
      </div>
      <div class="form-group">
        <label for="last_name">Last name :</label>
        <input
          type="text"
          class="form-control"
          style="width:50%; margin:auto;"
          id="last_name"
          v-model="newProfessor.last_name"
          pattern=".{1,255}"
          required
          title="Max 255 characters"
        />
      </div>
      <div class="form-group">
        <label for="first_Name">Gradebook :</label>
        <select
          class="form-control"
          style="width:50%; margin:auto;"
          id="gradebook_name"
          v-model="newProfessor.gradebook.id"
        >
          <option></option>
          <option
            v-for="(gradebook,index) in filteredGradebooks"
            :key="index"
            :value="newProfessor.gradebook.id"
          >{{ `${gradebook.name}` }}</option>
        </select>
      </div>
      <!-- <select class="form-control" style="width:50%; margin:auto;" id="professorName" name="professorName" v-model="newGradebook.professor_id" >
          <option v-for="(professor, index) in availableProfessors" :key="index" :value="professor.id">
            {{ `${professor.user.first_name} ${professor.user.last_name}` }}
          </option>
          {{ availableProfessors }}
      </select>-->

      <div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
    <div class="form-group">
      <button @click="newProfessor.showImageInput = true" class="btn btn-secondary">Add Image</button>
      <input
        v-if="newProfessor.showImageInput"
        type="url"
        class="form-control"
        style="width:50%; margin:auto;"
        v-model="newProfessor.image_url"
      />
    </div>
  </div>
</template>

<script>
import { professorService } from "../services/ProfessorService";
import { gradebookService } from "../services/GradebookService";
export default {
  data() {
    return {
      newProfessor: {
        first_name: "",
        last_name: "",
        showImageInput: false,
        image_url: "",
        gradebook: "",
        id: JSON.parse(localStorage.getItem("user")).id
      },

      gradebooks: []
    };
  },

  methods: {
    getDefaults() {
      return {
        firstName: "",
        lastName: "",
        showImageInput: false,
        gradebook: ""
      };
    },

    addProfessor() {
      professorService.add(this.newProfessor).then(response => {
        this.newProfessor = this.getDefaults();
      });
    }
  },

  computed: {
    filteredGradebooks() {
      return this.gradebooks.filter(gradebook => {
        return gradebook.professor === null;
      });
    }
  },

  created() {
    gradebookService.getGradebooks().then(response => {
      this.gradebooks = response.data;
      console.log(response.data);
    });
  }
};
</script>

<style>
</style>


First Name -> required, max 255
Last Name -> required, max 255
Input za dodavanje slike profesora -> required
Select box koji prikazuje sve dnevnike koji nemaju dodeljenog razrednog 
starešinu (ovo polje moze da bude nullable, i nije potrebno dodati dnevnik da bi se kreirao profesor)
