  <script>
  import axios from 'axios';
  import { store } from '../data/store';
  import Loader from '../components/partials/Loader.vue';

  export default {
  name:'ProjectDetail',
  data(){
    return{
      project:{},
    }
  },
  components:{
    Loader
  },
  methods:{
    getProject(slug){
      console.log(store.apiUrl + '/get-project/' + slug) /* controllo URL se non ci sono doppi slash */
      axios.get(store.apiUrl + '/get-project/'+ slug)
      .then(res =>{
        this.project = res.data;
        console.log(res.data);
      })
    }
  },
  mounted(){
    this.getProject(this.$route.params.slug)
  },
  computed:{}
  }
  </script>


<template>
  <h1>Nome del progetto: {{ project.title }}</h1>
  <em>Data di inizio progetto: {{ project.start_date }} | Data di fine progetto: {{ project.end_date }} </em>
  <p>Tecnologia:{{ project.technologies?.name ?? '-' }} | Tipo:{{ project.type?.name ?? '-' }}</p>
  <img :src="project?.image " :alt="project?.title">
  <p>{{project?.image_original_name}}</p>
  <p v-html="project.description"></p>
</template>


<style lang="scss"  scoped>

img{
  width: 100%;
  height: 50%;
}
</style>