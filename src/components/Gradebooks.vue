<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="(gradebook, index) in gradebooks" :key="index">
        <router-link :to="singleGradebook(gradebook)">{{ `Razred : ${gradebook.name}` }}</router-link>
        <router-link
          :to="singleProfessor(gradebook)"
        >{{ ` Profesor : ${gradebook.professor_name ? gradebook.professor_name + ' ' + gradebook.professor_last : 'nepoznat'}` }}</router-link>
        {{ `Kreiran : ${gradebook.created_at}` }}
      </li>
    </ul>
    <p v-if="gradebooks === 0">Nema dnevnika</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gradebooks: [
        {
          id: 1,
          name: "VIII-2",
          professor_name: "Marko",
          professor_last: "Markovic",
          created_at: "2019-06-12",
          professor_id: 1
        }
      ]
    };
  },
  methods: {
    singleGradebook(gradebook) {
      return `/gradebooks/${gradebook.id}`;
    },

    singleProfessor(gradebook) {
      return `/professor/${gradebook.professor_id}`;
    }
  }
};
</script>

<style>
</style>
