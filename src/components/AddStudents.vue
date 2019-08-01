<template>
  <div>
    <h1>Ime razreda : {{ gradebook.name }}</h1>
    <h1>Ime razrednog : {{ `${gradebook.professor.user.first_name} ${gradebook.professor.user.last_name}` }}</h1>
    <form>
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
      </div>
      <button class="btn btn-primary">Add new student</button>
      <br />
      <br />
      <button class="btn btn-primary" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { gradebookService } from "../services/GradebookService";

export default {
  data() {
    return {
      gradebook: {}
    };
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
