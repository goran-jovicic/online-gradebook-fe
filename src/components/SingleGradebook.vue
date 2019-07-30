<template>
  <div>
    <h1> {{gradebook.name}} </h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="(student, index) in gradebook.students" :key="index">
        {{student}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gradebook : {
        id: 1, name : 'Marko Markovic', students : ['Marko MArkovic', 'Markonin']
      }
    }
  }
}
</script>

<style>

</style>
