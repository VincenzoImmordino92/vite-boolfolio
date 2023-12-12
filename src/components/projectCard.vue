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
      computed: {
        technologyList(){
        return this.project.technologies?.map(technology => technology.name).join(',') || 'Nessuna Tecnologia';
      },
      fomattedStartDate(){
        const date = new Date(this.project.start_date)
        console.log(date);
        const options={
          weekday:'long',
          year:'numeric',
          month:'long',
          day:'numeric'
        }
        console.log(new Intl.DateTimeFormat(navigator.language,options).format(date));
        return new Intl.DateTimeFormat(navigator.language,options).format(date);
      },
      fomattedEndDate(){
        const date = new Date(this.project.end_date)
        console.log(date);
        const options={
          weekday:'long',
          year:'numeric',
          month:'long',
          day:'numeric'
        }
        return new Intl.DateTimeFormat(navigator.language,options).format(date);
      },
      },
      mounted() {}
    }
  </script>


<template>

<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src='project.image' class="img-fluid rounded-start h-100 object-fit-cover" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <!-- <h5 class="card-title">{{ project.title }}</h5> -->
        <router-link :to="{name:'projectDeteil', params:{slug: project.slug}}" class="title">{{ project.title }}</router-link>
        <p class="card-text">{{ project.description }}</p>
        <p class="card-text">Data di inizio progetto: <strong>{{ fomattedStartDate }}</strong></p>
        <p class="card-text">Data di fine progetto: <strong>{{fomattedEndDate|| 'Da definire'}}</strong> </p>
        <p class="card-text">Tipo di Progetto: <strong>{{project.type?.name ?? '-'}}</strong> </p>
        <p class="card-text">Tecnologie usate in questo progetto:<strong>{{technologyList}}</strong></p>
      </div>
    </div>
  </div>
</div>

</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>