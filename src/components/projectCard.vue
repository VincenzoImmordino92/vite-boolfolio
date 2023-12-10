  <script>
  import {store} from '../data/store';
    export default {
      name: 'projectCard',
      data() {
        return {
          store
          
        }
      },
      props:{
        project: Object

      },
      methods: {
  
      },
      computed: {},
      mounted() {}
    }
  </script>


<template>

<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src='"http://127.0.0.1:8000/storage/"+ project.image' class="img-fluid rounded-start h-100 object-fit-cover" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">{{ project.description }}</p>
        <p class="card-text">Data di inizio progetto: <strong>{{ project.start_date}}</strong></p>
        <p class="card-text">Data di fine progetto: <strong>{{project.end_date}}</strong> </p>
        <p class="card-text">Tipo di Progetto: <strong>{{project.type?.name}}</strong> </p>
        <p class="card-text">Tecnologie usate in questo progetto:<strong v-for="technology in project.technologies" :key="technology.id">{{technology?.name}}</strong></p>
      </div>
    </div>
  </div>
</div>

</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>