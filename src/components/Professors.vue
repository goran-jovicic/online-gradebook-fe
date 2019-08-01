<template>
  <div>
    <br />
    <label for="term">Search through professors :</label>
    <input type="text" placeholder="Search.." v-model="term" id="term" />
    <div>
      <ul class="list-group">
        <li
          class="list-group-item list-group-item-action"
          v-for="(professor, index) in filteredProfessors"
          :key="index"
        >
          <router-link :to="routeToSingleProfessor(professor)">
            <h2>{{`${professor.user.first_name} ${professor.user.last_name} `}}</h2>
          </router-link>
          <h3 v-if="professor && professor.gradebook">{{ `${professor.gradebook.name}` }}</h3>
          <h3 v-else>Trenutno nije razredni</h3>
          <img :src="professor.image_url" style="width:200px;height:auto;" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { professorService } from "../services/ProfessorService";

export default {
  data() {
    return {
      professors: [],
      term: ""
    };
  },

  methods: {
    routeToSingleProfessor(professor) {
      return `/teachers/${professor.id}`;
    }
  },

  computed: {
    filteredProfessors() {
      return this.professors.filter(professor => {
        return professor.user.first_name
          .toLowerCase()
          .includes(this.term.toLowerCase());
      });
    }
  },

  beforeRouteEnter(to, from, next) {
    professorService.getProfessors().then(response => {
      next(vm => {
        vm.professors = response.data;
        console.log(response.data);
      });
    });
  }
};
</script>

<style>
</style>
