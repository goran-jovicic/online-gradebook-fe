<template>
  <div class="container">
    <form @submit.prevent="handleForm">
      <br>
      <div class="form-group">
        <label class="form-control" style="width:50%; margin:auto;" for="name">Name of gradebook : </label>
        <input type="text" class="form-control" style="width:50%; margin:auto;" id="name" name="name" v-model="newGradebook.name"/>
      </div>
      <div>
        <label class="form-control" style="width:50%; margin:auto;" for="professorName" >Choose professor :</label>
        <select class="form-control" style="width:50%; margin:auto;" id="professorName" name="professorName" v-model="newGradebook.professor_id" >
          <option v-for="(professor, index) in availableProfessors" :key="index" :value="professor.id">
            {{ `${professor.user.first_name} ${professor.user.last_name}` }}
          </option>
          {{ availableProfessors }}
        </select>
      </div>
      <div>
        <br>
        <button class="btn btn-primary" type="submit">Submit</button>
        <button class="btn btn-danger">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import { gradebookService } from '../services/GradebookService'
import { professorService } from '../services/ProfessorService'

export default {
  data () {
    return {
      newGradebook: {
        name : '',
        professor_id : ''
      },

      professors: []
    }
  },

  methods : {
    handleForm() {
      console.log(this.newGradebook)
      gradebookService.createGradebook(this.newGradebook)
    }
  },

  created () {
    professorService.getProfessors()
    .then(r => {
      this.professors = r.data
      console.log(r.data)
    })
  },

  computed : {
    availableProfessors() {
      return this.professors.filter(professor => {
        return professor.gradebook === null;
      })
    }
  },
};
</script>

<style>
label {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: bold;
}

</style>
