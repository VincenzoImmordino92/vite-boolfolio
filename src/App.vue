  <script>
  import Header from './components/partials/Header.vue';
  export default {
  name:'App',
  data(){
    return{}
  },
  components:{
    Header,
  },
  methods:{},
  mounted(){},
  computed:{}
  }
  </script>


<template>
  <Header/>
    <div class="container">
      <div class="main-wrapper">
        <RouterView/>
      </div>
    
      
    </div>
  
</template>


<style lang="scss"  scoped>

</style>