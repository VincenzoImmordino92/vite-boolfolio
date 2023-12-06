<script>
import projectCard from './components/projectCard.vue';
import Loader from './components//partials/Loader.vue';
import Navigator from './components//partials/Navigator.vue';
import axios from 'axios';
import { store } from './data/store';

export default{
  name:'App',
  data(){
    return{
      titolo: 'Vite-Boolfolio',
      isLoaded:false,
      projects:[]
    }
  },
  components:{
    projectCard,
    Loader,
    Navigator
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl)
      .then(res =>{
        this.isLoaded = true; 
        console.log(res.data);
        console.log(res.data.data);
        this.projects = res.data.data;

      })
    }
  },
  mounted(){
    this.getApi();
  },
}

</script>


<template>
  <div class="container">

  <h1 class="text-center my-2">{{ titolo }}</h1>
  <div class="d-flex flex-wrap">
    <Loader v-if="!isLoaded" class="d-flex align-items-center "/>
    <projectCard v-else  class="m-2" v-for="project in projects" :key="project.id" :project="project"/>
    <Navigator/>
  </div>

  </div>
</template>

<style lang="scss">

</style>
