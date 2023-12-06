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

    <div  class="card" style="width: 18rem;" >
  <img :src='"http://127.0.0.1:8000/storage/"+ project.image' class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ project.title }}</h5>
    <p class="card-text">{{ project.description }}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Data di inizio progetto: <strong>{{ project.start_date}}</strong> </li>
    <li class="list-group-item">Data di fine progetto: <strong>{{project.end_date}}</strong> </li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body d-flex flex-column ">
    <a href="#" class="card-link">{{ project.url }}</a>
  </div>
</div>

</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>