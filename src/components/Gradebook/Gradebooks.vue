<template>
  <div class="container">
    <br />
    <input
      class="form-control"
      style="width:30%; margin:auto;"
      type="text"
      placeholder="Search.."
      v-model="term"
    />
    <br />
    <p v-if="gradebooksCounter < 1">Nema dnevnika</p>
    <ul class="list-group">
      <li class="list-group-item" v-for="(gradebook, index) in filteredGradebooks" :key="index">
        <div>
          <h3>
            <router-link :to="singleGradebook(gradebook)">{{ `Razred : ${gradebook.name}` }}</router-link>
          </h3>
          <h4>
            <router-link
              :to="singleProfessor(gradebook)"
              v-if="gradebook.professor !== null"
            >
              {{ ` Profesor : ${gradebook.professor.user.first_name + ' ' + gradebook.professor.user.last_name}`
              ? ` Profesor : ${gradebook.professor.user.first_name + ' ' + gradebook.professor.user.last_name}`
              : 'Nema odredjenog staresinu' }}
            </router-link>
          </h4>
          <h5>{{ `Kreiran : ${gradebook.created_at}` }}</h5>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { gradebookService } from '../../services/GradebookService'

export default {
  data() {
    return {
      gradebooks: [],
      term: ""
    };
  },
  methods: {
    singleGradebook(gradebook) {
      return `/gradebooks/${gradebook.id}`;
    },

    singleProfessor(gradebook) {
      return `/teachers/${gradebook.professor_id}`;
    }
  },

  computed: {
    filteredGradebooks() {
      return this.gradebooks.filter(gradebook => {
        return gradebook.name.toLowerCase().includes(this.term.toLowerCase());
      });
    },

    gradebooksCounter() {
      return this.gradebooks.length;
    }
  },

  beforeRouteEnter(to, from, next) {
    gradebookService.getGradebooks().then(response => {
      next(vm => {
        vm.gradebooks = response.data;
        console.log(response.data);
      });
    });
  }
};
</script>

<style>
</style>
