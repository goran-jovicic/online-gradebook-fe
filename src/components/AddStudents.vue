<template>
  <div>
    <h1>Ime razreda : {{ gradebook.name }}</h1>
    <h1>Ime razrednog : {{ `${gradebook.professor.user.first_name} ${gradebook.professor.user.last_name}` }}</h1>
    <form>
      <div v-for="(input, index) in inputs" :key="index">
        <div class="form-group">
          <label for="first_name">Ime studenta</label>
          <input
            class="form-control"
            style="width:50%; margin:auto;"
            type="text"
            id="first_name"
            name="first_name"
          />
        </div>
        <div class="form-group">
          <label for="first_name">Prezime studenta studenta</label>
          <input
            class="form-control"
            style="width:50%; margin:auto;"
            type="text"
            id="last_name"
            name="last_name"
          />
        </div>
        <div class="form-group">
          <label for="image_url">Dodajte sliku</label>
          <input
            class="form-control"
            style="width:50%;margin:auto;"
            type="text"
            id="image_url"
            name="image_url"
          />
          <hr>
        </div>
      </div>
      <button class="btn btn-primary" type="submit">Submit</button>
    </form>
    <button class="btn btn-primary" @click="duplicateForm">Add new student</button>
  </div>
</template>

<script>
import { gradebookService } from "../services/GradebookService";

export default {
  data() {
    return {
      first_name: '',
      last_name: '',
      gradebook: {},
      image_url : '',
      inputs:[1],
      counter: ''
    };
  },

  methods : {
    duplicateForm() {
      this.inputs.push(this.counter++)
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
        console.log(e);
      });
  }
};
</script>

<style>
</style>
