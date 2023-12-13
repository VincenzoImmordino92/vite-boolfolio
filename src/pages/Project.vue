<script>
import projectCard from '../components/projectCard.vue';
import Loader from '../components/partials/Loader.vue';
import Header from '../components/partials/Header.vue';
import Navigator from '../components/partials/Navigator.vue';
import axios from 'axios';
import { store } from '../data/store';

export default{
  name:'Project',
  data(){
    return{
      titolo: 'Vite-Boolfolio',
      isLoaded:false,
      paginator:{
        links:[],
        firstPageUrl: '',
        lastPageUrl: '',
        currentPage:'',
        lastPage:'',
      },
      projects:[],
    }
  },
  components:{
    projectCard,
    Loader,
    Header,
    Navigator,
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
        this.paginator.currentPage = res.data.current_page;
        this.paginator.lastPage = res.data.last_page;


      })
    }
  },
  mounted(){
    this.getApi(store.apiUrl + 'projects');
  },
}

</script>


<template>
  
  <h1 class="text-center my-5">{{ titolo }}</h1>
  <div class="box-custom">
  <div class="d-flex flex-wrap  justify-content-center ">
    <Loader v-if="!isLoaded" class="d-flex align-items-center "/>
    <projectCard v-else class="m-2" v-for="project in projects" :key="project.id" :project="project"/>
  </div>
    <Navigator :paginator="paginator" @callApi="getApi"/>
  </div>

  
</template>

<style lang="scss">
.box-custom{
  height: 70%;
  border: 2px solid white;

}
</style>
