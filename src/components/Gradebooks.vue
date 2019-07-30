<template>
  <div>
    <input type="text" placeholder="Search.." v-model="term">
    <ul class="list-group">
      <li class="list-group-item" v-for="(gradebook, index) in filteredGradebooks" :key="index">
        <router-link :to="singleGradebook(gradebook)">{{ `Razred : ${gradebook.name}` }}</router-link>
        <router-link :to="singleProfessor(gradebook)">
          {{ ` Profesor : ${gradebook.professor.user.first_name + ' ' + gradebook.professor.user.last_name}`
          ? ` Profesor : ${gradebook.professor.user.first_name + ' ' + gradebook.professor.user.last_name}`
          : 'Nema odredjenog staresinu' }}
        </router-link>
        {{ `Kreiran : ${gradebook.created_at}` }}
      </li>
    </ul>
    <p v-if="gradebooks.count === 0">Nema dnevnika</p>
  </div>
</template>

<script>
import { gradebookService } from "../services/GradebookService";

export default {
  data() {
    return {
      gradebooks: [],
      term : ''
    };
  },
  methods: {
    singleGradebook(gradebook) {
      return `/gradebooks/${gradebook.id}`;
    },

    singleProfessor(gradebook) {
      return `/professor/${gradebook.professor_id}`;
    }
  },

  computed: {
    filteredGradebooks() {
      return this.gradebooks.filter(gradebook => {
          return gradebook.name.toLowerCase().includes(this.term.toLowerCase())
      });
    },
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
