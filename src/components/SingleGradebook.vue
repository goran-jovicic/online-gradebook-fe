<template>
  <div>
    <h1> {{gradebook.name}} </h1>
    <p> {{ `Razredni: ${gradebook.professor.user.first_name} ${gradebook.professor.user.last_name}` }} </p>
    <ul class="list-group">
      <li class="list-group-item" v-for="(data, index) in gradebook" :key="index">
        {{data}}
      </li>
    </ul>
  </div>
</template>

<script>
import { gradebookService } from '../services/GradebookService'

export default {
  data() {
    return {
      gradebook : {}
    }
  },

  created () {
    let id = this.$route.params.id
    gradebookService.getSingleGradebook(id)
    .then(response => {
      this.gradebook = response.data
      console.log(response.data)
    })
    .catch(e => {
      console.log(e)
    })
  }
}
</script>

<style>

</style>
