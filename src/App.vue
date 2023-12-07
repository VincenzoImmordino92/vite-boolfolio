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
      paginator:{
        links:[],
        firstPageUrl: String,
        lastPageUrl: String,
      },
      projects:[],
    }
  },
  components:{
    projectCard,
    Loader,
    Navigator
  },
  methods:{
    getApi(endpoint){
      this.isLoaded = false;
      axios.get(endpoint)
      .then(res =>{
        this.isLoaded = true; 
        this.projects = res.data.data;
        console.log(res.data);
        console.log(res.data.data);

        this.paginator.links = res.data.links;
        this.paginator.firstPageUrl = res.data.first_page_url;
        this.paginator.lastPageUrl = res.data.last_page_url;


      })
    }
  },
  mounted(){
    this.getApi(store.apiUrl);
  },
}

</script>


<template>
  <div class="container">

  <h1 class="text-center my-2">{{ titolo }}</h1>
  <div class="box-custom">
  <div class="d-flex flex-wrap  justify-content-center ">
    <Loader v-if="!isLoaded" class="d-flex align-items-center "/>
    <projectCard v-else class="m-2" v-for="project in projects" :key="project.id" :project="project"/>
  </div>
    <Navigator :paginator="paginator" @callApi="getApi"/>
  </div>

  </div>
</template>

<style lang="scss">
.box-custom{
  height: 70%;
  border: 2px solid white;

}
</style>
