  <script>
  export default {
  name:'Header',
  data(){
    return{}
  },
  components:{},
  methods:{},
  mounted(){},
  computed:{}
  }
  </script>


<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link :to="{name: 'home'}">home</router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}">Chi Siamo</router-link>
        </li>
        <li>
          <router-link :to="{name: 'contacts'}">Contatti</router-link>
        </li>
        <li>
          <router-link :to="{name: 'project'}">Progetti</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>


<style lang="scss"  scoped>
header{
  width: 100%;
  text-align: center;
  padding:20px 0px;
  border: 1px solid white;
  border-radius: 20px;
  ul{
    list-style: none;
  }
  li{
    padding: 0px 10px;
    display:inline-block;
  }
    a{
      font-size: 1.5rem;
      color: white;
      text-decoration: none;
      text-transform:uppercase;
      &.active{
        font-weight: 700;
        color: greenyellow;
      }
      &:hover{
        text-decoration: underline;
      }
    }
}


</style>