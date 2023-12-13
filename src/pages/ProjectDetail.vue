  <script>
  import axios from 'axios';
  import { store } from '../data/store';
  import Loader from '../components/partials/Loader.vue';

  export default {
  name:'ProjectDetail',
  data(){
    return{
      project:{},
      isLoaded:false,
    }
  },
  components:{
    Loader
  },
  methods:{
    getProject(slug){
      console.log(store.apiUrl + 'projects/get-project/' + slug) /* controllo URL se non ci sono doppi slash */
      axios.get(store.apiUrl + 'projects/get-project/'+ slug)
      .then(res =>{
        if(!res.data.success){
          //se l'API restituisce il fallimento della chiamata restituisce la pagina 404
          this.$router.push({ name : 'error-404' })
        }
        this.isLoaded=true;
        this.success = res.data.success;

        console.log(res.data);
        console.log(this.success);
        this.project = res.data.project;
      })
    }
  },
  mounted(){
    this.getProject(this.$route.params.slug)
  },
  computed:{
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
      }
  }
  }
  </script>


<template>
  <Loader v-if="!isLoaded" />
<div v-else class="box">
  <h1>Nome del progetto: {{ project.title }}</h1>
  <em>Data di inizio progetto: <strong> {{ fomattedStartDate }}</strong> | Data di fine progetto: <strong>{{ project.fomattedEndDate }}</strong> </em>
  <p><em>Tecnologia:</em>  <strong>{{ technologyList }}</strong>  | <em>Tipo:</em> <strong>{{ project.type?.name ?? ' - ' }}</strong> </p>
  <img :src="project?.image " :alt="project?.title">
  <p>{{project?.image_original_name}}</p>
  <p v-html="project.description"></p>
</div>

</template>


<style lang="scss"  scoped>
.box{
  img{
    width: 100%;
    height: 50%;
  }

}
</style>